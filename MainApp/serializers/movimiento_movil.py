import time

from MainApp.models import Movimiento, DetalleMovimiento, FormaPago, TransaccionVenta, Combo, Producto, Persona, ProductoPresentacion
from MainApp.serializers import DetalleMovimientoSerializer, DetalleMovimientoMovilWriteSerializer, FormaPagoSerializer, \
    FormaPagoWriteSerializer, TransaccionVentaSerializer, TransaccionVentaWriteSerializer, PersonaSerializer
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from rest_framework import serializers
from django.db import transaction
from MainApp.serializers.mesa import MesaSerializer


class MovimientoMovilWriteSerializer(serializers.ModelSerializer):
    detalle = DetalleMovimientoMovilWriteSerializer(many=True)
    formas_pago = FormaPagoWriteSerializer(required=False, many=True)
    transacciones = TransaccionVentaWriteSerializer(required=False, many=True)

    class Meta:
        model = Movimiento
        fields = (
            'id', 'persona', 'tipo', 'total', 'total_costo', 'tipo_compra', 'tipo_baja', 'documento', 'motivo',
            'no_documento', 'descuento', 'porcentaje_descuento', 'monto_descuento', 'anulado', 'detalle',
            'formas_pago', 'transacciones', 'mesa', 'nombre_cuenta', 'cuenta_separada', 'finalizado', 'creado'
        )

    @transaction.atomic
    def create(self, validated_data):
        # extraemos detalles del movimiento
        contexto = {}
        insertar = True
        transacciones_data = []
        transaccion_data = {}
        formas_data = []
        detalle_data = validated_data.pop('detalle')

        if validated_data['tipo'] == 2:
            hora_inicio = time.strftime("%Y-%m-%d 00:00:00")
            hora_fin = time.strftime("%Y-%m-%d 23:59:59")

            numero_transacciones = Movimiento.objects.filter(
                finalizado=False, anulado=False, tipo=2,
                mesa__id=validated_data['mesa'].id,
                creado__range=(hora_inicio, hora_fin)
            )

            if len(numero_transacciones) == 0 or validated_data['cuenta_separada'] == True:
                insertar = True
            else:
                insertar = False

        # ******************************************************************
        # VALIDAR MESA *****************************************************
        # if insertar:
        # extraemos la forma de pago, evitamos el error si no existe
        try:
            formas_data = validated_data.pop('formas_pago')
        except:
            pass

        # extraemos las transacciones de la venta, evitamos el error si no existe
        try:
            transacciones_data = validated_data.pop('transacciones')
        except:
            pass

        # Determinamos cual es la ultima transaccion de la lista
        if len(transacciones_data) > 0:
            transaccion_data = max(transacciones_data)

        # creamos el movimiento
        movimiento = Movimiento.objects.create(**validated_data)

        # creamos los detalles del movimiento
        for detalle_data in detalle_data:
            detalle = DetalleMovimiento.objects.create(movimiento=movimiento, **detalle_data)
            producto = Producto.objects.get(id=detalle.producto.id)
            detalle.producto = producto

            # verificamos si el producto es combo
            if detalle.producto.es_combo and not detalle.producto.combo_mixto:
                ## '---> SI ES COMBO <---'
                if movimiento.tipo != 2:
                    raise ValueError('No se pueden ingresar o dar de baja combos, ingrese los productos individualmente')
                if transaccion_data["tipo_transaccion"] == 1:
                    #print 'COMBO PEDIDO'
                    # actualizamos los productos solo si es venta y un pedido
                    combos = Combo.objects.filter(producto_padre__id=detalle.producto.id)
                    existencia = combos.first().producto_combo.existencia

                    for item in combos:
                        #print 'ITEM EN COMBOS'
                        # evaluamos si hay existencias
                        if item.producto_combo.existencia < (detalle.cantidad*item.cantidad):
                            #print 'EVALUAR SI HAY EXISTENCIA'
                            raise ValueError('El producto {} no tiene suficientes existencias'
                                             .format(item.producto_combo.nombre))
                        item.producto_combo.existencia -= (detalle.cantidad*item.cantidad)
                        item.producto_combo.save()
                        # determinamos la cantidad de combos que podemos servir
                        cantidad = item.producto_combo.existencia / item.cantidad
                        # determinamos si es la menor cantidad y actualizamos la existencia
                        if existencia > cantidad:
                            existencia = cantidad
                    detalle.producto.existencia = existencia
                if transaccion_data["tipo_transaccion"] == 2:
                    # actualizamos los productos solo si es venta y un pedido
                    combos = Combo.objects.filter(producto_padre__id=detalle.producto.id)
                    existencia = combos.first().producto_combo.existencia

                    for item in combos:
                        item.producto_combo.existencia += (detalle.cantidad*item.cantidad)
                        item.producto_combo.save()
                        # determinamos la cantidad de combos que podemos servir
                        cantidad = item.producto_combo.existencia / item.cantidad
                        # determinamos si es la menor cantidad y actualizamos la existencia
                        if existencia > cantidad:
                            existencia = cantidad
                if transaccion_data["tipo_transaccion"] == 4:
                    #print 'COMBO PEDIDO'
                    # actualizamos los productos solo si es venta y un pedido
                    combos = Combo.objects.filter(producto_padre__id=detalle.producto.id)
                    existencia = combos.first().producto_combo.existencia

                    for item in combos:
                        #print 'ITEM EN COMBOS'
                        # evaluamos si hay existencias
                        if item.producto_combo.existencia < (detalle.cantidad*item.cantidad):
                            #print 'EVALUAR SI HAY EXISTENCIA'
                            raise ValueError('El producto {} no tiene suficientes existencias'
                                             .format(item.producto_combo.nombre))
                        item.producto_combo.existencia -= (detalle.cantidad*item.cantidad)
                        item.producto_combo.save()
                    #     # determinamos la cantidad de combos que podemos servir
                    #     cantidad = item.producto_combo.existencia / item.cantidad
                    #     # determinamos si es la menor cantidad y actualizamos la existencia
                    #     if existencia > cantidad:
                    #         existencia = cantidad
                    # detalle.producto.existencia = existencia

                detalle.producto.save()
            else:
                # para productos individuales
                if movimiento.tipo == 1:
                    detalle.producto.existencia += detalle.cantidad
                elif movimiento.tipo == 2:
                    if transaccion_data["tipo_transaccion"] == 1 or transaccion_data["tipo_transaccion"] == 4:
                        # evaluamos si hay existencias
                        if not detalle.producto.combo_mixto:
                            # SI EL SERVICIO es un PRODUCTO
                            # Calculo para el precio_ficha de forma correcta dentro de DetalleMovimiento
                            servicio = Producto.objects.get(nombre__icontains='BOTELLAS')
                            # Se busca la presentacion especifica
                            presentacion = ProductoPresentacion.objects.get(id=detalle.producto_presentacion_id)
                            if detalle.persona_id is None:
                                pass
                            else:
                                chica = Persona.objects.get(id=detalle.persona_id)
                            # Compara si el que se creo y el Producto "Servicio" coinciden en ids y calcula con respecto a la chica
                            # El precio de la ficha con respecto al precio de venta
                            if detalle.producto.tipo_producto_id == servicio.tipo_producto_id:
                                # Si el porcentaje es igual al precio de venta y no el de la chica
                                if presentacion.porcentaje_completo is True:
                                    detalle.precio_ficha = detalle.precio_venta
                                    detalle.save()
                                    #print 'PORCENTAJE COMPLETO'
                                # Si el porcentaje es el de la chica
                                else:
                                    detalle.precio_ficha = chica.porcentaje_chica * detalle.precio_venta
                                    detalle.save()
                                    # 'PORCENTAJE ASIGNADO'
                            else:
                                if not detalle.producto.se_descuenta:
                                    # Si NO se descuenta el producto
                                    # detalle.producto.existencia += detalle.cantidad
                                    pass
                                else:
                                    # Si se descuenta el producto
                                    if detalle.producto.existencia < detalle.cantidad:
                                        raise ValueError('El producto {} no tiene suficientes existencias'
                                                         .format(detalle.producto.nombre))
                                    detalle.producto.existencia -= detalle.cantidad

                    if transaccion_data["tipo_transaccion"] == 2:
                        # Devolvemos los productos ingresados a el cliente
                        detalle.producto.existencia += detalle.cantidad
                else:
                    # evaluamos si hay existencias
                    if detalle.producto.existencia < detalle.cantidad:
                        raise ValueError('El producto {} no tiene suficientes existencias'
                                         .format(detalle.producto.nombre))
                    detalle.producto.existencia -= detalle.cantidad
                detalle.producto.save()

        # creamos la ultima transacion de la lista.
        if len(transacciones_data) > 0:
            TransaccionVenta.objects.create(movimiento=movimiento, **transaccion_data)

        # creamos la forma de pago
        for forma_pago in formas_data:
            FormaPago.objects.create(movimiento=movimiento, **forma_pago)
        return movimiento
        # ******************************************************************
        # VALIDAR MESA *****************************************************
        # else:
        #     raise ValueError('La mesa seleccionada esta ocupada')

class MovimientoMovilSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()
    detalle = DetalleMovimientoSerializer(many=True)
    formas_pago = FormaPagoSerializer(many=True)
    transacciones = TransaccionVentaSerializer(many=True)
    mesa = MesaSerializer()


    class Meta:
        model = Movimiento
        fields = (
            'id', 'persona', 'tipo', 'total', 'total_costo', 'tipo_compra', 'tipo_baja', 'documento', 'motivo',
            'no_documento', 'descuento', 'porcentaje_descuento', 'monto_descuento', 'anulado', 'creado', 'modificado',
            'detalle', 'formas_pago', 'transacciones', 'mesa', 'nombre_cuenta', 'cuenta_separada', 'finalizado',
        )

class MovimientoReporteSerializer(serializers.ModelSerializer):
    total = serializers.IntegerField()
    modificado = serializers.DateField()
    no_ventas = serializers.IntegerField()

    class Meta:
        model = Movimiento
        fields = (
            'total', 'modificado', 'no_ventas',
        )

class MovimientoMovilUpdateSerializer(serializers.ModelSerializer):
    detalle = DetalleMovimientoMovilWriteSerializer(many=True)
    formas_pago = FormaPagoWriteSerializer(required=False, many=True)
    transacciones = TransaccionVentaWriteSerializer(required=False, many=True)

    class Meta:
        model = Movimiento
        fields = (
            'id', 'persona', 'tipo', 'total', 'total_costo', 'tipo_compra', 'tipo_baja', 'documento', 'motivo',
            'no_documento', 'descuento', 'porcentaje_descuento', 'monto_descuento', 'anulado', 'detalle',
            'formas_pago', 'transacciones', 'mesa', 'nombre_cuenta', 'cuenta_separada', 'finalizado'
        )


class PaginatedMovimientoSerializer():
    def __init__(self, movimientos, request, num):
        paginator = Paginator(movimientos, num)
        page = request.query_params.get('page')
        try:
            movimientos = paginator.page(page)
        except PageNotAnInteger:
            movimientos = paginator.page(1)
        except EmptyPage:
            movimientos = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not movimientos.has_previous() else movimientos.previous_page_number()
        next = None if not movimientos.has_next() else movimientos.next_page_number()
        serializer = MovimientoMovilSerializer(movimientos, many=True, context={'request': request})
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}
