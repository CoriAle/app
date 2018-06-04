import time
import os
import datetime
# import pytz
from datetime import timedelta
from django.contrib.auth.models import User
from django.db.models import Sum, Count
from django.db.models.query_utils import Q
from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import Movimiento, Producto, Combo, Persona, FormaPago, PerfilUsuario, CierreCaja
from MainApp.models.detalle_movimiento import DetalleMovimiento
from MainApp.models.mesa import Mesa
from MainApp.models.deposito_retiro import DepositoRetiro
from MainApp.models.transaccion_venta import TransaccionVenta
from MainApp.serializers import MovimientoSerializer, MovimientoWriteSerializer, MovimientoUpdateSerializer, \
    MovimientoReporteSerializer
from MainApp.serializers.movimiento import PaginatedMovimientoSerializer
from MainApp.serializers.movimiento import MovimientoCreateSerializer
from MainApp.views import SwappableSerializerMixin
from django.db import transaction
from wkhtmltopdf.views import PDFTemplateResponse
from django.conf import settings
from MainApp.serializers.deposito_retiro import DepositoRetiroSerializer
from MainApp.permisos import *


class MovimientoViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = Movimiento.objects.all()
    model = Movimiento
    permission_classes = [AnyPermission]
    serializer_class = MovimientoSerializer

    serializer_classes = {
        'GET': MovimientoSerializer,
        'POST': MovimientoCreateSerializer,
        'PUT': MovimientoUpdateSerializer,
        'DELETE': MovimientoWriteSerializer,
        'PATCH': MovimientoWriteSerializer
    }

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        try:
            listaProductos = []
            serializer = MovimientoCreateSerializer(data=request.data)
            if serializer.is_valid():
                modelo = serializer.save()
                movimiento = serializer.data

                for transaccion in movimiento['transacciones']:
                    mesero = PerfilUsuario.objects.get(usuario=transaccion['usuario'])

                for detalle in movimiento['detalle']:
                    chica = {}
                    if detalle['persona'] != None:
                        chica = Persona.objects.get(id=detalle['persona'])
                    producto = Producto.objects.get(id=detalle['producto'])
                    listaProductos.append(producto)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @transaction.atomic
    def update(self, request, pk=None):
        # try:
        with transaction.atomic():
            serializer = MovimientoUpdateSerializer(data=request.data)
            if serializer.is_valid():
                # Buscamos el movimiento para setearles los nuevos valores que se nos han sido enviados.
                movimiento = Movimiento.objects.get(id=request.data['id'])
                # SE USA 'cuenta_separada' para VALIDACION Cancelar la Orden en curso, Si es verdadera se hace un pago
                if request.data['cuenta_separada'] == True:
                    try:
                        check_trans_venta = TransaccionVenta.objects.get(movimiento_id=request.data['id'],
                                                                         tipo_transaccion__in=[2, 3])
                        if check_trans_venta.tipo_transaccion == 3:
                            return Response({"detalle": "Error. Esta venta ya fue cobrada."},
                                            status=status.HTTP_400_BAD_REQUEST)
                        else:
                            return Response({"detalle": "Error. Esta venta ya ha sido anulada."},
                                            status=status.HTTP_400_BAD_REQUEST)
                    except TransaccionVenta.DoesNotExist:

                        # Retiramos los detalles que estan agregados al movimiento y los sustituimos por nuevos
                        for detalle_data in movimiento.detalle.all():
                            # modificamos los detalles del movimiento
                            producto = Producto.objects.get(id=detalle_data.producto.id)
                            detalle_data = DetalleMovimiento.objects.get(id=detalle_data.id)
                            # Verificamos si el producto es un combo
                            if producto.es_combo and not producto.combo_mixto:
                                # Buscamos los combos que tiene el producto padre
                                combos = Combo.objects.filter(producto_padre__id=detalle_data.producto.id)
                                # existencia = combos.first().producto_combo.existencia
                                if movimiento.tipo == 1:
                                    for item in combos:
                                        # verificamos que la cantidad del producto sea mayor
                                        # a la cantidad de combos por la cantidad del movimiento
                                        if item.producto_combo.existencia < (detalle_data.cantidad*item.cantidad):
                                            raise ValueError('El producto {} no tiene suficientes existencias'
                                                             .format(item.producto_combo.nombre))
                                        # Restamos la cantidad de existencias del producto con
                                        # la cantidad del movimiento por la cantidad del combo
                                        item.producto_combo.existencia -= (detalle_data.cantidad*item.cantidad)
                                        item.producto_combo.save()
                                elif movimiento.tipo == 2:
                                    for transaccion_data in movimiento.transacciones.all():
                                        transaccion_data = TransaccionVenta.objects.get(id=transaccion_data.id)
                                        for item in combos:
                                            if transaccion_data.tipo_transaccion == 1:
                                                # Sumamos la cantidad de existencias del producto con
                                                # la cantidad del movimiento por la cantidad del combo
                                                item.producto_combo.existencia += (detalle_data.cantidad*item.cantidad)
                                                item.producto_combo.save()
                                            if transaccion_data.tipo_transaccion == 2:
                                                # verificamos que la cantidad del producto sea mayor
                                                # a la cantidad de combos por la cantidad del movimiento
                                                if item.producto_combo.existencia < (detalle_data.cantidad*item.cantidad):
                                                    raise ValueError('El producto {} no tiene suficientes existencias'
                                                                     .format(item.producto_combo.nombre))
                                                # Restamos la cantidad de existencias del producto con
                                                # la cantidad del movimiento por la cantidad del combo
                                                item.producto_combo.existencia -= (detalle_data.cantidad*item.cantidad)
                                                item.producto_combo.save()
                                else:
                                    # Sumamos la cantidad de existencias del producto con
                                    # la cantidad del movimiento por la cantidad del combo
                                    item.producto_combo.existencia += (detalle_data.cantidad*item.cantidad)
                                    item.producto_combo.save()
                            else:
                                if movimiento.tipo == 1:
                                    if producto.existencia < detalle_data.cantidad:
                                        raise ValueError('El producto {} no tiene suficientes existencias'
                                                         .format(producto.nombre))
                                        producto.existencia -= detalle_data.cantidad
                                if movimiento.tipo == 2:
                                    for transaccion_data in movimiento.transacciones.all():
                                        transaccion_data = TransaccionVenta.objects.get(id=transaccion_data.id)
                                        if transaccion_data.tipo_transaccion == 1:
                                            producto.existencia += detalle_data.cantidad
                                        if transaccion_data.tipo_transaccion == 2:
                                            if producto.existencia < detalle_data.cantidad:
                                                raise ValueError('El producto {} no tiene suficientes existencias'
                                                                 .format(producto.nombre))
                                            producto.existencia -= detalle_data.cantidad
                                else:
                                    producto.existencia += detalle_data.cantidad
                            producto.save()
                            # detalle_data.delete()

                        # Agregamos los nuevos detalles y movemos los productos que sean necesarios
                        # extraemos detalles del movimiento
                        transacciones_data = []
                        formas_data = []
                        movimientos_data = []
                        detalles_data = request.data.pop('detalle')

                        # extraemos la forma de pago, evitamos el error si no existe
                        try:
                            formas_data = request.data.pop('formas_pago')
                        except:
                            pass

                        # extraemos las transacciones de la venta, evitamos el error si no existe
                        try:
                            transacciones_data = request.data.pop('transacciones')
                        except:
                            pass

                        # extraemos el deposito, evitamos el error si no existe
                        try:
                            movimientos_data = request.data.pop('movimientos')
                        except:
                            pass

                        # actualizamos el movimiento

                        if request.data['persona'] is not None:
                            movimiento.persona = Persona.objects.get(id=request.data['persona'])

                        movimiento.mesa = Mesa.objects.get(id=request.data['mesa'])
                        movimiento.tipo = request.data.get('tipo', movimiento.tipo)
                        movimiento.total = request.data.get('total', movimiento.total)
                        movimiento.total_costo = request.data.get('total_costo', movimiento.total_costo)
                        movimiento.tipo_compra = request.data.get('tipo_compra', movimiento.tipo_compra)
                        movimiento.tipo_baja = request.data.get('tipo_baja', movimiento.tipo_baja)
                        movimiento.documento = request.data.get('documento', movimiento.documento)
                        if hasattr(request.data, 'motivo'):
                            movimiento.motivo = request.data.get('motivo', movimiento.motivo)
                        movimiento.no_documento = request.data.get('no_documento', movimiento.no_documento)
                        movimiento.descuento = request.data.get('descuento', movimiento.descuento)
                        movimiento.porcentaje_descuento = request.data.get('porcentaje_descuento', movimiento.porcentaje_descuento)
                        movimiento.monto_descuento = request.data.get('monto_descuento', movimiento.monto_descuento)
                        movimiento.finalizado = request.data.get('finalizado', movimiento.finalizado)

                        # creamos los detalles del movimiento
                        detalles = request.GET.get('detalles',[])
                        if len(detalles) > 0:
                            for detalle_data in detalles_data:
                                if detalle_data['persona'] is not None:
                                    detalle_data['persona'] = Persona.objects.get(id=detalle_data['persona'])
                                detalle_data['producto']['id'] = Producto.objects.get(id=detalle_data['producto']['id'])
                                detalle = DetalleMovimiento.objects.create(movimiento=movimiento,
                                id = detalle_data['id'],
                                cantidad = detalle_data['cantidad'],
                                cantidad_ficha = detalle_data['producto_presentacion']['cantidad_fichas'],
                                comision_mesero = detalle_data['producto_presentacion']['comision_mesero'],
                                cortesia =  detalle_data['cortesia'],
                                de_combo_mixto = detalle_data['de_combo_mixto'],
                                observacion = detalle_data['observacion'],
                                precio_costo = detalle_data['precio_costo'],
                                precio_ficha = detalle_data['producto_presentacion']['precio_fichas'],
                                precio_venta = detalle_data['producto_presentacion']['precio_venta'],
                                producto_id = detalle_data['producto_presentacion']['producto']['id'],
                                producto_presentacion_id = detalle_data['producto_presentacion']['id']
                                )

                                # verificamos si el producto es combo
                                if detalle.producto.es_combo and not detalle.producto.combo_mixto:
                                    if movimiento.tipo != 2:
                                        raise ValueError('No se pueden ingresar o dar de baja combos, ingrese los productos individualmente')
                                    for transaccion_data in transacciones_data:
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
                                        for transaccion_data in transacciones_data:
                                            if transaccion_data["tipo_transaccion"] == 1:
                                                # evaluamos si hay existencias
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
                                detalle_data['producto'] = detalle.producto.id

                        # creamos la ultima transacion de la lista.
                        for transaccion in transacciones_data:
                            if transaccion['id'] > 0:
                                transaccion_db = TransaccionVenta.objects.get(id=transaccion['id'])
                                transaccion_db.usuario = User.objects.get(id=transaccion['usuario'])
                                transaccion_db.tipo_transaccion = transaccion.get('tipo_transaccion', transaccion_db.tipo_transaccion)
                            else:
                                transaccion.pop('id')
                                usuario_db = User.objects.get(id=transaccion['usuario'])
                                transaccion['usuario'] = usuario_db
                                TransaccionVenta.objects.create(movimiento=movimiento, **transaccion)
                                transaccion['usuario'] = usuario_db.id
                                movimiento.finalizado = True

                        # creamos la forma de pago
                        for forma_pago in formas_data:
                            FormaPago.objects.create(movimiento=movimiento, **forma_pago)

                        # creamos el deposito a DepositoRetiro
                        DepositoRetiro.objects.create(
                            id = movimientos_data['id'],
                            monto = movimientos_data['monto'],
                            descripcion = movimientos_data['descripcion'],
                            numero_boleta = movimientos_data['numero_boleta'],
                            cuenta_salida_id = movimientos_data['cuenta_salida']['id'],
                            cuenta_entrada_id = movimientos_data['cuenta_entrada']['id'],
                            motivo_id = movimientos_data['motivo'],
                            caja_id = movimientos_data['caja']
                            # movimiento_id = movimiento['id']
                        )

                        movimiento.save()

                # SE USA 'cuenta_separada' para VALIDACION Cancelar la Orden en curso, Si es falsa se Cancela la Orden
                elif request.data['cuenta_separada'] == False:
                    try:
                        check_trans_venta = TransaccionVenta.objects.get(movimiento_id=request.data['id'],
                                                                         tipo_transaccion__in=[2, 3])
                        if check_trans_venta.tipo_transaccion == 3:
                            return Response({"detalle": "Error. Esta venta ya fue cobrada."},
                                            status=status.HTTP_400_BAD_REQUEST)
                        else:
                            return Response({"detalle": "Error. Esta venta ya ha sido anulada."},
                                            status=status.HTTP_400_BAD_REQUEST)
                    except TransaccionVenta.DoesNotExist:

                        # Se obtienen los detalles para poder devolver cada existencia a su respectivo producto
                        # Try y Except para validar detalle
                        detalles_data = []
                        try:
                            detalles_data = request.data.pop('detalle')
                        except:
                            pass
                        # Por cada elemento dentro de los detalles
                        for elemento in detalles_data:
                            # Se busca y obtiene el producto del detalle
                            producto = Producto.objects.get(id=elemento['producto']['id'])
                            # Verificamos si el producto es un combo
                            if producto.es_combo:
                                # Buscamos los combos que tiene el producto padre
                                combos = Combo.objects.filter(producto_padre__id=elemento['producto']['id'])
                                # existencia = combos.first().producto_combo.existencia
                                # INGRESO
                                if movimiento.tipo == 1:
                                    for item in combos:
                                        # verificamos que la cantidad del producto sea mayor
                                        # a la cantidad de combos por la cantidad del movimiento
                                        if item.producto_combo.existencia < (elemento['cantidad']*item.cantidad):
                                            raise ValueError('El producto {} no tiene suficientes existencias'
                                                             .format(item.producto_combo.nombre))
                                        # Restamos la cantidad de existencias del producto con
                                        # la cantidad del movimiento por la cantidad del combo
                                        item.producto_combo.existencia -= (elemento['cantidad']*item.cantidad)
                                        item.producto_combo.save()
                                # VENTA
                                elif movimiento.tipo == 2:

                                    if producto.combo_mixto==False:
                                        existencia = combos.first().producto_combo.existencia
                                        # Se busca dentro del movimiento el producto combo que viene en el detalle
                                        detalle = DetalleMovimiento.objects.get(movimiento_id=request.data['id'],producto_id=producto.id)

                                        for item in combos:
                                            # evaluamos si hay existencias
                                            item.producto_combo.existencia += (detalle.cantidad*item.cantidad)
                                            item.producto_combo.save()
                                    # Para cada combo
                                    # for item in combos:
                                    # Se descuenta
                                    if producto.se_descuenta == True:
                                        pedido = 0
                                        cancelado = 0
                                        for transaccion_data in movimiento.transacciones.all():
                                            transaccion_data = TransaccionVenta.objects.get(id=transaccion_data.id)
                                            # Pedido
                                            if transaccion_data.tipo_transaccion == 1:
                                                pedido = 1
                                            #Anulado
                                            if transaccion_data.tipo_transaccion == 2:
                                                cancelado = 1
                                            # Cobrado
                                            if transaccion_data.tipo_transaccion == 3:
                                                pass
                                            # Pendiente de Pago
                                            if transaccion_data.tipo_transaccion == 4:
                                                pedido = 1
                                                cancelado = 0
                                        if pedido == 1 and cancelado == 0:
                                            for deta in detalles_data:
                                                # if producto.se_descuenta == 'true':
                                                    # print 'NO ES COMBO Y SE DESCUENTA'
                                                if deta['producto'] == producto.id:
                                                    # Sumamos la cantidad de existencias del producto con
                                                    # la cantidad del movimiento por la cantidad del combo
                                                    producto.existencia = producto.existencia + elemento['cantidad']
                                                    producto.save()
                                                # if pedido == 0 and cancelado == 1:
                                                #     print 'PEDIDO 0 CANCELADO 1'
                                                #     # verificamos que la cantidad del producto sea mayor
                                                #     # a la cantidad de combos por la cantidad del movimiento
                                                #     if item.producto_padre.existencia < (elemento['cantidad']*item.cantidad):
                                                #         raise ValueError('El producto {} no tiene suficientes existencias'
                                                #                          .format(item.producto_combo.nombre))
                                                #     # Restamos la cantidad de existencias del producto con
                                                #     # la cantidad del movimiento por la cantidad del combo
                                                #     item.producto_padre.existencia -= (elemento['cantidad']*item.cantidad)
                                                #     item.producto_padre.save()
                                # BAJA
                                else:
                                    # Sumamos la cantidad de existencias del producto con
                                    # la cantidad del movimiento por la cantidad del combo
                                    item.producto_combo.existencia += (elemento.cantidad*item.cantidad)
                                    item.producto_combo.save()
                            else:
                                # Ingreso
                                if movimiento.tipo == 1:
                                    if producto.existencia < elemento['cantidad']:
                                        raise ValueError('El producto {} no tiene suficientes existencias'.format(producto.nombre))
                                        producto.existencia -= elemento['cantidad']
                                        producto.save()
                                # Venta
                                if movimiento.tipo == 2:
                                    #Se descuenta
                                    if producto.se_descuenta == True:
                                        pedido = 0
                                        cancelado = 0
                                        for transaccion_data in movimiento.transacciones.all():
                                            transaccion_data = TransaccionVenta.objects.get(id=transaccion_data.id)
                                            # Pedido
                                            if transaccion_data.tipo_transaccion == 1:
                                                pedido = 1
                                            # Anulado
                                            if transaccion_data.tipo_transaccion == 2:
                                                cancelado = 1
                                            # Cobrado
                                            if transaccion_data.tipo_transaccion == 3:
                                                pass
                                            # Pendiente de Pago
                                            if transaccion_data.tipo_transaccion == 4:
                                                pedido = 1
                                                cancelado = 0
                                        if pedido == 1 and cancelado == 0:
                                            producto.existencia = producto.existencia + elemento['cantidad']
                                            producto.save()
                                        if pedido == 0 and cancelado == 1:
                                            producto.existencia -= elemento['cantidad']
                                            producto.save()
                                    else:
                                        pass
                                # Baja
                                else:
                                    producto.existencia += elemento['cantidad']
                                    producto.save()
                            producto.save()
                        movimiento.anulado = True
                        # Si fue anulada la orden se guarda el motivo de quien y la hr que hizo esta transaccion dentro del motivo
                        movimiento.motivo = request.data['motivo']
                        movimiento.save()


                return Response({}, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                # except Exception as e:
                #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @transaction.atomic
    def destroy(self, request, pk=None):
        try:
            with transaction.atomic():
                model = self.get_object()
                model.anulado = True
                cuenta_separada = request.GET.get('cs')
                if not cuenta_separada:
                    # creamos los detalles del movimiento
                    for detalle_data in model.detalle.all():
                        producto = Producto.objects.get(id=detalle_data.producto.id)
                        # Verificamos si el producto es un combo
                        if producto.es_combo:
                            # Buscamos los combos que tiene el producto padre
                            combos = Combo.objects.filter(producto_padre__id=detalle_data.producto.id)
                            # existencia = combos.first().producto_combo.existencia
                            if model.tipo == 1:
                                for item in combos:
                                    # verificamos que la cantidad del producto sea mayor
                                    # a la cantidad de combos por la cantidad del movimiento
                                    if item.producto_combo.existencia < (detalle_data.cantidad*item.cantidad):
                                        raise ValueError('El producto {} no tiene suficientes existencias'
                                                         .format(item.producto_combo.nombre))
                                    # Restamos la cantidad de existencias del producto con
                                    # la cantidad del movimiento por la cantidad del combo
                                    item.producto_combo.existencia -= (detalle_data.cantidad*item.cantidad)
                                    item.producto_combo.save()
                            elif model.tipo == 2:
                                pedido = 0
                                cancelado = 0
                                for transaccion_data in model.transacciones.all():
                                    transaccion_data = TransaccionVenta.objects.get(id=transaccion_data.id)
                                    if transaccion_data.tipo_transaccion == 1:
                                        pedido = 1
                                    if transaccion_data.tipo_transaccion == 2:
                                        cancelado = 1
                                for item in combos:
                                    if pedido == 1 and cancelado == 0:
                                        # Sumamos la cantidad de existencias del producto con
                                        # la cantidad del movimiento por la cantidad del combo
                                        item.producto_combo.existencia += (detalle_data.cantidad*item.cantidad)
                                        item.producto_combo.save()
                                    if pedido == 0 and cancelado == 1:
                                        # verificamos que la cantidad del producto sea mayor
                                        # a la cantidad de combos por la cantidad del movimiento
                                        if item.producto_combo.existencia < (detalle_data.cantidad*item.cantidad):
                                            raise ValueError('El producto {} no tiene suficientes existencias'
                                                             .format(item.producto_combo.nombre))
                                        # Restamos la cantidad de existencias del producto con
                                        # la cantidad del movimiento por la cantidad del combo
                                        item.producto_combo.existencia -= (detalle_data.cantidad*item.cantidad)
                                        item.producto_combo.save()
                            else:
                                # Sumamos la cantidad de existencias del producto con
                                # la cantidad del movimiento por la cantidad del combo
                                item.producto_combo.existencia += (detalle_data.cantidad*item.cantidad)
                                item.producto_combo.save()
                        else:
                            if model.tipo == 1:
                                if producto.existencia < detalle_data.cantidad:
                                    raise ValueError('El producto {} no tiene suficientes existencias'.format(producto.nombre))
                                    producto.existencia -= detalle_data.cantidad
                            if model.tipo == 2:
                                pedido = 0
                                cancelado = 0
                                for transaccion_data in model.transacciones.all():
                                    transaccion_data = TransaccionVenta.objects.get(id=transaccion_data.id)
                                    if transaccion_data.tipo_transaccion == 1:
                                        pedido = 1
                                    if transaccion_data.tipo_transaccion == 2:
                                        cancelado = 1
                                if pedido == 1 and cancelado == 0:
                                    producto.existencia += detalle_data.cantidad
                                if pedido == 0 and cancelado == 1:
                                    producto.existencia -= detalle_data.cantidad
                            else:
                                producto.existencia += detalle_data.cantidad
                        producto.save()
                    model.save()
                else:
                    model.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def ingresos(self, request):
        try:
            movimientos = Movimiento.objects.filter(
                Q(anulado=False), Q(tipo=1), Q(persona__nombre__icontains=request.GET.get('query')) |
                                             Q(no_documento__icontains=request.GET.get('query')) | Q(total__icontains=request.GET.get('query'))
            ).order_by('-creado')

            serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def bajas(self, request):
        try:
            movimientos = Movimiento.objects.filter(
                Q(anulado=False), Q(tipo=3), Q(motivo__icontains=request.GET.get('query')) |
                                             Q(total__icontains=request.GET.get('query'))
            ).order_by('-creado')

            serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def pedidos(self, request):
        # try:
        movimientos = Movimiento.objects.filter(
            Q(transacciones__tipo_transaccion=1), Q(anulado=False), Q(tipo=2),
            Q(persona__nombre__icontains=request.GET.get('query')) |
            Q(mesa__nombre__icontains=request.GET.get('query'))
        ).exclude(
            transacciones__tipo_transaccion=2 and 4,
            anulado=False,
            tipo=2,
        ).order_by('-creado')

        serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(serializer.data)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def pedidos_pendientes_pago(self, request):
        # try:
        # Fechas definidas por el usuario en dado caso quisiera buscar
        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        # Fechas de Creacion de caja a un dia mas
        cierre = CierreCaja.objects.get(activo=True, cierre=0, usuario=request.GET.get('user'))
        siguiente_creado = cierre.creado + timedelta(days=1)

        movimientos = Movimiento.objects.filter(
            Q(modificado__range=(fecha_inicio,fecha_fin)) | Q(modificado__range=(cierre.creado, siguiente_creado)),
            Q(transacciones__tipo_transaccion=4), Q(anulado=False), Q(tipo=2),
            Q(persona__nombre__icontains=request.GET.get('query')) |
            Q(transacciones__usuario__username__icontains=request.GET.get('query')) |
            Q(mesa__nombre__icontains=request.GET.get('query')),
            cuenta_separada=True
        ).exclude(
            transacciones__tipo_transaccion=1 and 2 and 3,
            anulado=False,
            tipo=2,
        ).order_by('-creado')

        serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(serializer.data)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def ordenes_tablet(self, request):
        movimientos = Movimiento.objects.filter(
            anulado=False,
            cuenta_separada=False,
            finalizado=False,
            transacciones__tipo_transaccion=4
        )
        if movimientos.count() > 0:
            return Response({"disponible": False})
        else:
            return Response({"disponible": True})

    @list_route(methods=['get'])
    def ordenes_caja(self, request):
        movimientos = Movimiento.objects.filter(
            anulado=False,
            cuenta_separada=True,
            finalizado=False,
            transacciones__tipo_transaccion=4
        )
        if movimientos.count() > 0:
            return Response({"disponible": False})
        else:
            return Response({"disponible": True})

    @list_route(methods=['get'])
    def pedidos_pagados(self, request):
        # try:
        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        q = request.GET.get('query')

        movimientos = Movimiento.objects.filter(
            Q(transacciones__usuario__username__icontains=q) | Q(mesa__nombre__icontains=q) | Q(persona__nombre__icontains=q),
            modificado__range=(fecha_inicio, fecha_fin),
            transacciones__tipo_transaccion=3,
            anulado=False,
            tipo=2,
        ).order_by('-modificado')

        serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(serializer.data)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def pedidos_usuario(self, request):
        try:
            movimientos = [];
            #Verifica si se requieren cuentas activas o pendientes de pago
            tipo = request.GET.get('tipo')
            if tipo == '1':
                movimientos = Movimiento.objects.filter(
                    Q(transacciones__tipo_transaccion=1), Q(anulado=False), Q(tipo=2),
                    Q(transacciones__usuario=request.GET.get('id')),
                ).exclude(
                    transacciones__tipo_transaccion=2 and 4,
                    anulado=False,
                    tipo=2,
                ).order_by('-creado')
            else:
                if tipo == '0':
                    movimientos = Movimiento.objects.filter(
                        Q(transacciones__tipo_transaccion=4), Q(anulado=False), Q(tipo=2), Q(finalizado=0),
                        Q(transacciones__usuario=request.GET.get('id')),
                    ).exclude(
                        transacciones__tipo_transaccion=1 and 2 and 3,
                        anulado=False,
                        tipo=2,
                    ).order_by('-creado')

            serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
            return Response(serializer.data)

        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def ventas(self, request):
        try:
            movimientos = Movimiento.objects.filter(
                Q(transacciones__tipo_transaccion=3), Q(anulado=False), Q(tipo=2),
                Q(persona__nombre__icontains=request.GET.get('query'))
            ).order_by('-creado')

            serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    # Cierre Caja en Web para el detalle de totales
    @list_route(methods=['get'])
    def ventas_dia(self, request):

        # Se obtiene el cierre de caja de la caja aparturada y el usuario en uso de la misma
        cierre = CierreCaja.objects.get(
            activo=True,
            cierre=0,
            usuario=request.GET.get('user'),
            caja=request.GET.get('caja')
        )
        ahora = datetime.datetime.now()

        # Busqueda de Pagos desde caja por cada caja abierta con su usuario
        pagos = DepositoRetiro.objects.filter(
            caja=request.GET.get('caja'),
            usuario=request.GET.get('user'),
            creado__range=(cierre.creado, ahora),
            anulado=False
        ).aggregate(Sum('monto'))
        # Calculo de Ventas Efectivo y Ventas Tarjeta
        movimientos = Movimiento.objects.filter(
            transacciones__tipo_transaccion=3,
            transacciones__usuario__id=request.GET.get('user'),
            formas_pago__tipo=request.GET.get('tipo'),
            anulado=False,
            tipo=2,
            modificado__range=(cierre.creado, ahora)
        ).aggregate(Sum('formas_pago__monto'))
        # Calculo de Cortesias
        cortesias = Movimiento.objects.filter(
            transacciones__tipo_transaccion=3,
            transacciones__usuario__id=request.GET.get('user'),
            formas_pago__tipo=4,
            anulado=False,
            tipo=2,
            modificado__range=(cierre.creado, ahora)
        ).aggregate(Sum('formas_pago__monto'))

        # serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response({'movimientos':movimientos,'pagos':pagos, 'cortesias':cortesias})

    # Cierre Caja en Web para el detalle de totales segun cierre
    @list_route(methods=['get'])
    def ventas_cierre(self, request):

        # Se obtiene el cierre de caja de la caja aparturada y el usuario en uso de la misma
        #print "CIERRE {}".format(request.GET.get('cierre'))
        cierre = CierreCaja.objects.get(pk=request.GET.get('cierre'))

        # Busqueda de Pagos desde caja por cada caja abierta con su usuario
        pagos = DepositoRetiro.objects.filter(
            caja=cierre.caja,
            usuario=cierre.usuario,
            creado__range=(cierre.creado, cierre.modificado),
            anulado=False
        ).aggregate(Sum('monto'))
        # Calculo de Ventas Efectivo y Ventas Tarjeta
        movimientos = Movimiento.objects.filter(
            transacciones__tipo_transaccion=3,
            transacciones__usuario__id=cierre.usuario_id,
            formas_pago__tipo=request.GET.get('tipo'),
            anulado=False,
            tipo=2,
            modificado__range=(cierre.creado, cierre.modificado)
        ).aggregate(Sum('formas_pago__monto'))
        # Calculo de Cortesias
        cortesias = Movimiento.objects.filter(
            transacciones__tipo_transaccion=3,
            transacciones__usuario__id=cierre.usuario_id,
            formas_pago__tipo=4,
            anulado=False,
            tipo=2,
            modificado__range=(cierre.creado, cierre.modificado)
        ).aggregate(Sum('formas_pago__monto'))

        # serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response({'movimientos': movimientos, 'pagos': pagos, 'cortesias': cortesias,
                         'cierre': cierre.cierre, 'diferencia': cierre.diferencia, 'apertura': cierre.apertura})

    # Reporte de Ventas por Persona
    @list_route(methods=['get'])
    def reporte_ventas(self, request):

        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')
        movs = []

        movimientos = Movimiento.objects.filter(
            # anulado=False,
            cuenta_separada=True,
            # finalizado=True,
            tipo=2,
            modificado__range=(fecha_inicio, fecha_fin),
            detalle__persona_id=per
        ).order_by('-modificado')

        # Ciclo anidado para que no repita los movimientos
        for m1 in movimientos:
            bandera = False
            for m2 in movs:
                if m1.id == m2.id:
                    bandera = True
                    break
            if not bandera:
                movs.append(m1)

        serializer = PaginatedMovimientoSerializer(movs, request, 10)
        return Response(serializer.data)

    # Reporte de Ventar por Area
    @list_route(methods=['get'])
    def reporte_ventas_empleado(self, request):

        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        user = request.GET.get('per')

        movimientos = Movimiento.objects.filter(
            # anulado=False,
            cuenta_separada=True,
            tipo=2,
            modificado__range=(fecha_inicio, fecha_fin),
            transacciones__usuario_id=user

        ).order_by('-modificado')

        serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(serializer.data)


    @list_route(methods=['get'])
    def ventas_filtro(self, request):
        fecha_inicio = str(request.GET.get('fecha')) + ' 00:00:00'
        fecha_fin = str(request.GET.get('fecha')) + ' 23:59:59'

        movimientos = Movimiento.objects.filter(
            Q(transacciones__tipo_transaccion=3),
            Q(anulado=False),
            Q(tipo=2),
            Q(modificado__range=(fecha_inicio, fecha_fin))
        ).order_by('-modificado')
        #
        serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(serializer.data)
