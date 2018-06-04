import time
import os
import datetime
import json
#import cups
import string
from datetime import datetime
from pytz import timezone
from dateutil import tz
from django.contrib.auth.models import User
from django.db.models import Sum, Count
from django.db.models.query_utils import Q
from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import Movimiento, Producto, Combo, Persona, FormaPago, PerfilUsuario, ProductoPresentacion
from MainApp.models.detalle_movimiento import DetalleMovimiento
from MainApp.models.mesa import Mesa
from MainApp.models.transaccion_venta import TransaccionVenta
from MainApp.serializers import MovimientoMovilSerializer, MovimientoMovilWriteSerializer, MovimientoMovilUpdateSerializer, \
    MovimientoReporteSerializer
from MainApp.serializers.movimiento import PaginatedMovimientoSerializer
from MainApp.views import SwappableSerializerMixin
from django.db import transaction
from wkhtmltopdf.views import PDFTemplateResponse
from django.conf import settings
from MainApp.permisos import *


# Reformatea variable de fecha para impresion
def myconverter_date(o):
    if isinstance(o, datetime.date):
        return o.__str__()
        # return "{}-{}-{}".format(o.year, o.month, o.day)
# Reformatea variable de hora para impresion
def myconverter_hour(o):
    if isinstance(o, datetime.time):
        return "{}:{}:{}".format(o.hour, o.minute, o.second)
        # return o.__str__()

class MovimientoMovilViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = Movimiento.objects.all()
    model = Movimiento
    permission_classes = [MeseroPermission]
    serializer_class = MovimientoMovilSerializer

    serializer_classes = {
        'GET': MovimientoMovilSerializer,
        'POST': MovimientoMovilWriteSerializer,
        'PUT': MovimientoMovilUpdateSerializer,
        'DELETE': MovimientoMovilWriteSerializer,
        'PATCH': MovimientoMovilWriteSerializer
    }

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        try:
            listaProductos = []
            listaCocina = []
            serializer = MovimientoMovilWriteSerializer(data=request.data)
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
                    presentacion = ProductoPresentacion.objects.get(id=detalle['producto_presentacion'])
                    nombre = str(producto.nombre)[0:27]

                    if producto.comsetible == True and producto.se_descuenta == False:
                        listaCocina.append([str(nombre),' '])

                    if detalle['de_combo_mixto'] > 0:
                        nombre = ' ' + nombre

                    if detalle['de_combo_mixto'] > 0:
                        listaProductos.append(str(nombre))
                    elif detalle['persona'] > 0:
                        for x in range(35):
                            largo = len(nombre)
                            if largo < 15:
                                nombre = nombre + ' '
                        nombre_chica = str(chica.nombre)[0:13]
                        for y in range(35):
                            lg = len(nombre_chica)
                            if lg < 10:
                                nombre_chica = nombre_chica + ' '
                        listaProductos.append([str(nombre),str(nombre_chica),str('Q'+detalle['precio_venta'])])
                    else:
                        for x in range(35):
                            largo = len(nombre)
                            if largo < 27:
                                nombre = nombre + ' '
                        listaProductos.append([str(nombre),str('Q'+detalle['precio_venta'])])

                    if presentacion.cantidad_fichas > 0:
                        # Variables para Impresion
                        fe = modelo.creado.date()
                        pe = mesero.persona.nombre
                        no = modelo.id

                # Ruta del archivo creado de manera temporal para impresion
                file_comanda = str(settings.MEDIA_ROOT)+"/comanda.txt"

                # Variables para Impresion
                fe = modelo.creado.date()
                hr = modelo.creado
                pe = mesero.persona.nombre
                me = modelo.mesa.nombre
                no = modelo.id
                tt = modelo.total

                # Se definen las zonas horarias
                HERE = tz.tzlocal()
                UTC = tz.gettz('UTC')
                # Se hace la conversion de la zona horaria
                gmt = hr.replace(tzinfo=UTC)
                gmt = gmt.astimezone(HERE)
                # Se reformatea la variable a mostrar para la comanda
                gmt = gmt.strftime('%H:%M:%S')
                # Se toma la fecha en la que se creo debido a que esta en UTC por el servidor
                # cuando se quiere mostrar se pasa a la zona horaria local
                fea = hr.replace(tzinfo=UTC)
                fea = fea.astimezone(HERE)
                fea = fea.strftime('%d/%m/%Y')

                # Crea la comanda y coloca las variables en los lugares correspondientes en el txt
                fc = open( file_comanda, 'w' )
                fc.write('************ PRESTIGE - COMANDA ************\n' )
                fc.write('FECHA:  '+str(fea)+'            No. '+str(no)+'\n')
                fc.write('HORA:   '+str(gmt)+'              '+str(me)+'\n')
                fc.write('NOMBRE: '+str(pe)+'\n\n')
                fc.write('============================================\n' )
                fc.write('CANT  '+'DESCRIPCION                '+' VALOR\n')
                fc.write('============================================\n' )
                # Con el translate se quitan los caracteres indicados
                # Con maketrans se quita la coma y por medio de translate nuevamente se reformatea
                for producto in listaProductos:
                    pro = str(producto).translate(None, "]['")
                    tbl = string.maketrans(',', ' ')
                    pro = pro.translate(tbl)
                    fc.write(' 1   '+str(pro)+'\n')
                fc.write('--------------------------------------------\n' )
                fc.write('\n'+'TOTAL:                           Q'+str(tt)+'\n')
                fc.write('============================================\n    \n    \n    \n  =  \n    \n    \n    \n')
                fc.write(chr(0x19))  # Linea de corte para HP
                ESC = chr(27)
                fc.write(ESC + 'i')  # Linea de corte para Epson
                fc.close()

                # ******** LINEAS PARA IMPRESION EN CUPS ********
                #conn = cups.Connection()
                #printer_returns = conn.printFile('comandas', file_comanda, "Imprimiendo comanda...", {})

                # Ruta del archivo creado de manera temporal para impresion en la COCINA
                if len(listaCocina) > 0:
                    file_cocina = str(settings.MEDIA_ROOT)+"/cocina.txt"

                    # Crea la comanda y coloca las variables en los lugares correspondientes en el txt
                    fc = open( file_cocina, 'w' )
                    fc.write('************* PRESTIGE - COCINA ************\n' )
                    fc.write('FECHA:  '+str(fea)+'            No. '+str(no)+'\n')
                    fc.write('HORA:   '+str(gmt)+'              '+str(me)+'\n')
                    fc.write('NOMBRE: '+str(pe)+'\n\n')
                    fc.write('============================================\n' )
                    fc.write('CANT   '+'DESCRIPCION                        \n')
                    fc.write('============================================\n' )
                    # Con el translate se quitan los caracteres indicados
                    # Con maketrans se quita la coma y por medio de translate nuevamente se reformatea
                    for producto in listaCocina:
                        pro = str(producto).translate(None, "]['")
                        tbl = string.maketrans(',', ' ')
                        pro = pro.translate(tbl)
                        fc.write(' 1    '+str(pro)+'\n')
                    fc.write('============================================\n    \n    \n    \n  =  \n    \n    \n    \n')
                    fc.write(chr(0x19))  # Linea de corte para HP
                    ESC = chr(27)
                    fc.write(ESC + 'i')  # Linea de corte para Epson
                    fc.close()

                    # ******** LINEAS PARA IMPRESION EN CUPS ********
                    #conn = cups.Connection()
                    #printer_returns = conn.printFile('cocina', file_cocina, "Imprimiendo pedido de cocina...", {})


                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @transaction.atomic
    def update(self, request, pk=None):
        # try:
        with transaction.atomic():
            serializer = MovimientoMovilUpdateSerializer(data=request.data)
            if serializer.is_valid():
                # Se busca el movimiento para poder hacer los cambios
                movimiento = Movimiento.objects.get(id=request.data['id'])
                # SE USA 'cuenta_separada' para VALIDACION de envio de AppMovil a Caja
                if request.data['cuenta_separada'] == True:
                    movimiento.cuenta_separada = True
                    movimiento.anulado = False
                    movimiento.save()
                elif request.data['cuenta_separada'] == False:
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
                        producto = Producto.objects.get(id=elemento['producto'])
                        # Verificamos si el producto es un combo
                        if producto.es_combo:
                            # Buscamos los combos que tiene el producto padre
                            combos = Combo.objects.filter(producto_padre__id=elemento['producto'])
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
                    movimiento.save()
                # 0/0

                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

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
        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        movimientos = Movimiento.objects.filter(
            Q(transacciones__tipo_transaccion=4), Q(anulado=False), Q(tipo=2),
            Q(persona__nombre__icontains=request.GET.get('query')) |
            Q(mesa__nombre__icontains=request.GET.get('query')),
            creado__range=(fecha_inicio, fecha_fin)
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
    def pedidos_pagados(self, request):
        # try:
        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        movimientos = Movimiento.objects.filter(
            Q(transacciones__tipo_transaccion=3), Q(anulado=False), Q(tipo=2),
            Q(persona__nombre__icontains=request.GET.get('query')) |
            Q(mesa__nombre__icontains=request.GET.get('query')),
            creado__range=(fecha_inicio, fecha_fin)
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
                    Q(transacciones__usuario=request.GET.get('id')), cuenta_separada=False
                ).exclude(
                    transacciones__tipo_transaccion=2 and 4,
                    anulado=False,
                    tipo=2,
                ).order_by('-creado')
            else:
                if tipo == '0':
                    movimientos = Movimiento.objects.filter(
                        Q(transacciones__tipo_transaccion=4), Q(anulado=False), Q(tipo=2), Q(finalizado=0),
                        Q(transacciones__usuario=request.GET.get('id')), cuenta_separada=False
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

    @list_route(methods=['get'])
    def ventas_dia(self, request):
        # try:
        fecha_inicio = time.strftime("%Y-%m-%d 00:00:00")
        fecha_fin = time.strftime("%Y-%m-%d %H:%M:%S")

        movimientos = Movimiento.objects.filter(
            Q(transacciones__tipo_transaccion=3), Q(formas_pago__tipo=request.GET.get('tipo')), Q(anulado=False), Q(tipo=2),
            Q(modificado__range=(fecha_inicio, fecha_fin))
        ).aggregate(Sum('formas_pago__monto'))
        # .order_by('-modificado')
        #
        # serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(movimientos)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    # Reporte de Ventas por Persona
    @list_route(methods=['get'])
    def reporte_ventas(self, request):

        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per', False)

        movimientos = Movimiento.objects.filter(
            anulado=False,
            tipo=2,
            modificado__range=(fecha_inicio, fecha_fin),
            persona__id=per

        )#.extra({'fecha':"date(MainApp_movimiento.modificado)"}). \
            # values('fecha').annotate(total_venta=Sum('total')).order_by('-fecha')

        serializer = PaginatedMovimientoSerializer(movimientos, request, 10)
        return Response(serializer.data)

    # Reporte de Ventar por Area
    @list_route(methods=['get'])
    def reporte_ventas_area(self, request):

        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        # fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        # fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        are = request.GET.get('are', False)

        movimientos = Movimiento.objects.filter(
            anulado=False,
            tipo=2,
            modificado__range=(fecha_inicio, fecha_fin),
            persona__area=are

        )#.extra({'fecha':"date(MainApp_movimiento.modificado)"}). \
            # values('fecha').annotate(total_venta=Sum('total')).order_by('-fecha')

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
