# -*- coding: utf-8 -*-
import cups
import time
import cups
import string
from datetime import datetime
from dateutil import tz
from django.conf import settings
from rest_framework import viewsets, status, filters
from MainApp.serializers import ImpresoraSerializer, FichasSerializer
from rest_framework.decorators import list_route
from rest_framework.response import Response
from django.db.models import F, DecimalField, ExpressionWrapper
from MainApp.models import Movimiento
from django.contrib.auth.models import User


class ImpresoraViewSet(viewsets.ModelViewSet):

    def get_serializer_class(self):
        return ImpresoraSerializer

    def get_queryset(self):
        conn = cups.Connection()
        printers = conn.getPrinters()
        jobs = conn.getJobs()
        impresoras = []
        for printer in printers:
            atributos = conn.getPrinterAttributes(name=printer)
            printer_state = atributos['printer-state']
            rojo = "#FF000B"  # ROJO
            color = rojo
            tareas_pendientes = 0
            for key in jobs:
                tarea = conn.getJobAttributes(key)
                if tarea["printer-uri"] == printers[printer]["printer-uri-supported"]:
                    tareas_pendientes += 1
            if atributos['printer-state-message'] == "La impresora no responde.":
                color = rojo
            impresoras.append({"printer": printer,
                               "device_uri": printers[printer]["device-uri"],
                               "printer_uri": printers[printer]["printer-uri-supported"],
                               "estado": printer_state,
                               "mensaje": atributos['printer-state-message'],
                               "color": color,
                               "tareas_pendientes": tareas_pendientes})
        return impresoras

    @list_route(methods=['post'])
    def stop_printer(self, request):
        """Detiene el proceso de impresión de la impresora recibida por el post"""
        printer = request.GET.get('name')
        conn = cups.Connection()
        conn.disablePrinter(name=printer)
        return Response(status=status.HTTP_200_OK)

    @list_route(methods=['post'])
    def restart_printer(self, request):
        """Reanuda el proceso de impresion de la impresora especificada por el post"""
        printer = request.GET.get('name')
        conn = cups.Connection()
        conn.enablePrinter(printer)
        return Response(status=status.HTTP_200_OK)

    # @list_route(methods=['post'])
    # def test_print(self, request):
    #     """TEST DE PRINTING FILE"""
    #     printer = request.GET.get('name')
    #     filename = os.path.join(settings.MEDIA_ROOT, '{}'.format("aprueba.txt"))
    #     conn = cups.Connection()
    #     conn.printFile(printer, filename, "MYJOB", {})
    #     return Response(status=status.HTTP_200_OK)

    @list_route(methods=['post'])
    def borrar_trabajos(self, request):
        printer = request.GET.get('printer_uri')
        conn = cups.Connection()
        conn.cancelAllJobs(uri=printer, purge_jobs=False)
        return Response(status=status.HTTP_200_OK)

    @list_route(methods=['get'])
    def imprimir_ficha(self, request, *args, **kwargs):
        movimiento_id = request.GET.get('id', None)
        # Si no viene el id del movimiento se retorna 400
        if movimiento_id is None:
            return Response({"detalle": "Se necesita el id del movimiento"}, status=status.HTTP_400_BAD_REQUEST)
        usuario = User.objects.get(pk=request.user.id)
        persona = usuario.perfilusuario.persona
        # Si la persona no tiene impresora designada, se retorna 400
        if persona.impresora is None or persona.impresora == "":
            return Response({"detalle": "El usuario no cuenta con una impresora asignada"},
                            status=status.HTTP_400_BAD_REQUEST)
        movimiento = Movimiento.objects.get(pk=movimiento_id)
        # Para cada detalle del movimiento se obtienen los datos que van a sus fichas
        detalles = movimiento.detalle.exclude(persona=None).prefetch_related('persona', 'producto').annotate(
            precio_total=ExpressionWrapper(F('cantidad_ficha')*F('precio_ficha'), output_field=DecimalField()))
        fichas = []
        for detalle in detalles:
            esta = False
            for ficha in fichas:
                if ficha[u'chica'] == detalle.persona.nombre:
                    descripcion = ""
                    if detalle.producto.nombre.lower() == "servicio":
                        descripcion = " " + detalle.producto_presentacion.presentacion.nombre
                    ficha[u'detalle'].append(
                        {u'item': detalle.producto.nombre + descripcion,
                         u'fichas': detalle.cantidad_ficha,
                         u'valor': detalle.precio_ficha,
                         u'total': detalle.precio_total}
                    )
                    ficha[u'total'] += detalle.precio_total
                    esta = True
            if not esta:
                descripcion = ""
                if detalle.producto.nombre.lower() == "servicio":
                    descripcion = " " + detalle.producto_presentacion.presentacion.nombre
                fichas.append(
                    {u'fecha': detalle.creado,
                     u'mesero': movimiento.transacciones.first().usuario.username,
                     u'chica': detalle.persona.nombre,
                     u'detalle': [
                         {u'item': detalle.producto.nombre + descripcion,
                          u'fichas': detalle.cantidad_ficha,
                          u'valor': detalle.precio_ficha,
                          u'total': detalle.precio_total}
                     ],
                     u'total': detalle.precio_total}
                )
        # Procedimiento para imprimir
        for ficha in fichas:
            file_comanda = str(settings.MEDIA_ROOT) + "/fichas.txt"
            hr = ficha[u'fecha']
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
            # Crea la FICHA y coloca las variables en los lugares correspondientes en el txt
            fc = open(file_comanda, 'w')
            fc.write('************* PRESTIGE - FICHA *************\n')
            encabezado = 'DETALLE'
            limite = 44 - len('ORDEN # ' + str(movimiento_id))
            while len(encabezado) < limite:
                encabezado += " "
            encabezado += 'ORDEN # ' + str(movimiento_id) + "\n\n"
            fc.write(encabezado)
            fc.write('FECHA:           ' + str(fea) + '\n')
            fc.write('HORA:            ' + str(gmt)+'\n')
            fc.write('MESERO:          ' + str(ficha[u'mesero']) + '\n')
            fc.write('CHICA:           ' + str(ficha[u'chica']) + '\n')
            fc.write('TOTAL FICHA:     ' + str(ficha[u'total']) + '\n\n')
            fc.write('============================================\n')
            fc.write('ITEM            FICHAS   VALOR         TOTAL\n')
            fc.write('============================================\n')
            for detalle in ficha[u'detalle']:
                item = str(detalle[u'item'])
                cadena = ""
                while len(item) > 14:
                    cadena += item[0:14] + '\n'
                    item = item[14:]
                while len(item) < 16:
                    item += " "
                ultima_linea = item
                ultima_linea += str(detalle[u'fichas'])
                while len(ultima_linea) < 25:
                    ultima_linea += " "
                ultima_linea += "Q" + str(detalle[u'valor'])
                total = "Q" + str(detalle[u'total'])
                limite = 44 - len(total)
                while len(ultima_linea) < limite:
                    ultima_linea += " "
                ultima_linea += total
                cadena += ultima_linea
                fc.write(cadena + '\n')
            fc.write('--------------------------------------------\n\n')
            fc.write('============================================\n\n')
            fc.write('CAJERO:          ' + str(persona.nombre) + '\n')
            fecha_impresion = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
            fc.write('FECHA IMPRESION: ' + str(fecha_impresion) + '\n')
            fc.write('\n    \n    \n  =  \n    \n    \n    \n')

            fc.write(chr(0x19))  # Linea de corte para HP
            ESC = chr(27)
            fc.write(ESC + 'i')  # Linea de corte para Epson
            fc.close()
            conn = cups.Connection()
            conn.printFile(persona.impresora, file_comanda, "Ficha " + ficha[u'chica'], {})

        # Serializador de la data de las fichas
        serializer = FichasSerializer(data=fichas, many=True)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            Response({"detalle": "Data invalida"}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def tiene_impresora(self, request, *args, **kwargs):
        usuario = User.objects.get(pk=request.user.id)
        return Response({"tiene_impresora": not(usuario.perfilusuario.persona.impresora is None or
                                                usuario.perfilusuario.persona.impresora == "")},
                        status=status.HTTP_200_OK)



