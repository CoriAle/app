import time

from MainApp.models import Movimiento, DetalleMovimiento, FormaPago, TransaccionVenta, Combo, Producto
from MainApp.serializers import DetalleMovimientoSerializer, FormaPagoSerializer, \
    FormaPagoWriteSerializer, TransaccionVentaSerializer, TransaccionVentaWriteSerializer, PersonaSerializer
from MainApp.serializers.detalle_movimiento import DetalleMovimientoWriteSerializer
from MainApp.serializers.deposito_retiro import DepositoMovimientoSerializer
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from rest_framework import serializers
from django.db import transaction
from MainApp.serializers.mesa import MesaSerializer
from MainApp.serializers.detalle_movimiento import DetalleMovimientoCreateSerializer
from MainApp.serializers.forma_pago import FormaPagoUpdateSerializer


class MovimientoWriteSerializer(serializers.ModelSerializer):
    detalle = DetalleMovimientoWriteSerializer(many=True)
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

        if insertar:
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
                    if movimiento.tipo != 2:
                        raise ValueError('No se pueden ingresar o dar de baja combos, ingrese los productos individualmente')
                    if transaccion_data["tipo_transaccion"] == 1:
                        # actualizamos los productos solo si es venta y un pedido
                        combos = Combo.objects.filter(producto_padre__id=detalle.producto.id)
                        existencia = combos.first().producto_combo.existencia

                        for item in combos:
                            # evaluamos si hay existencias
                            if item.producto_combo.existencia < (detalle.cantidad*item.cantidad):
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

                    detalle.producto.save()
                else:
                    # para productos individuales
                    if movimiento.tipo == 1:
                        detalle.producto.existencia += detalle.cantidad
                    elif movimiento.tipo == 2:
                        if transaccion_data["tipo_transaccion"] == 1 or transaccion_data["tipo_transaccion"] == 4:
                            # evaluamos si hay existencias
                            if not detalle.producto.combo_mixto:
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
        else:
            raise ValueError('La mesa seleccionada esta ocupada')

class MovimientoCreateSerializer(serializers.ModelSerializer):
    detalle = DetalleMovimientoCreateSerializer(many=True)
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

        if insertar:
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
                    if movimiento.tipo != 2:
                        raise ValueError('No se pueden ingresar o dar de baja combos, ingrese los productos individualmente')
                    if transaccion_data["tipo_transaccion"] == 1:
                        # actualizamos los productos solo si es venta y un pedido
                        combos = Combo.objects.filter(producto_padre__id=detalle.producto.id)
                        existencia = combos.first().producto_combo.existencia

                        for item in combos:
                            # evaluamos si hay existencias
                            if item.producto_combo.existencia < (detalle.cantidad*item.cantidad):
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

                    detalle.producto.save()
                else:
                    # para productos individuales
                    if movimiento.tipo == 1:
                        detalle.producto.existencia += detalle.cantidad
                    elif movimiento.tipo == 2:
                        if transaccion_data["tipo_transaccion"] == 1 or transaccion_data["tipo_transaccion"] == 4:
                            # evaluamos si hay existencias
                            if not detalle.producto.combo_mixto:
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
        else:
            raise ValueError('La mesa seleccionada esta ocupada')

class MovimientoSerializer(serializers.ModelSerializer):
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

class MovimientoUpdateSerializer(serializers.ModelSerializer):
    detalle = DetalleMovimientoWriteSerializer(many=True)
    formas_pago = FormaPagoUpdateSerializer(required=False, many=True)
    transacciones = TransaccionVentaWriteSerializer(required=False, many=True)
    movimientos = DepositoMovimientoSerializer(required=False)

    class Meta:
        model = Movimiento
        fields = (
            'id', 'persona', 'tipo', 'total', 'total_costo', 'tipo_compra', 'tipo_baja', 'documento', 'motivo',
            'no_documento', 'descuento', 'porcentaje_descuento', 'monto_descuento', 'anulado', 'detalle',
            'formas_pago', 'transacciones', 'mesa', 'nombre_cuenta', 'cuenta_separada', 'finalizado', 'movimientos'
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
        serializer = MovimientoSerializer(movimientos, many=True, context={'request': request})
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}
