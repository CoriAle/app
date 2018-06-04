import datetime
from decimal import *
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.response import Response
from MainApp.models import Persona
from MainApp.models.perfil_usuario import PerfilUsuario
from MainApp.models.movimiento import Movimiento
from MainApp.models.baile_persona import BailePersona
from MainApp.models.detalle_movimiento import DetalleMovimiento
from MainApp.models.cuenta import Cuenta
from MainApp.models.deposito_retiro import DepositoRetiro
from MainApp.models.historial_empleado import HistorialEmpleado
from MainApp.models.tipo_persona import TipoPersona
from MainApp.serializers import PersonaSerializer, PersonaWriteSerializer
from MainApp.serializers.historial_empleado import HistorialEmpleadoSerializer, HistorialEmpleadoWriteSerializer
from MainApp.serializers.persona import PaginatedPersonaSerializer
from MainApp.serializers.cuenta import CuentaPersonaSerializer
from MainApp.serializers.persona import PaginatedPersonaEmpleadosSerializer
from MainApp.serializers.deposito_retiro import PaginatedDepositoRetiroFinanzasSerializer, DepositoRetiroFinanzasSerializer
from MainApp.serializers.detalle_movimiento import PaginatedDetalleMovimientoSerializer
from MainApp.views import SwappableSerializerMixin
from rest_framework.decorators import list_route
from django.db.models import Q, Count, Prefetch, Sum, Value, F, FloatField
from django.http import JsonResponse
from .cuenta import CuentaViewSet
from MainApp.permisos import *


class PersonaViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = Persona.objects.all().filter(activo=True)
    serializer_class = PersonaSerializer
    permission_classes = [MeseroPermission]
    serializer_classes = {
        'GET': PersonaSerializer,
        'POST': PersonaWriteSerializer,
        'PUT': PersonaWriteSerializer,
        'DELETE': PersonaWriteSerializer,
        'PATCH': PersonaWriteSerializer
        }
    def create(self, request, *args, **kwargs):
        try:
            serializer = PersonaWriteSerializer(data=request.data)

            if serializer.is_valid():
                model = serializer.save()
                cuenta = CuentaViewSet()
                cuenta.save_cuenta(model,None)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @transaction.atomic
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        historial = request.data.pop('historial_contratacion')
        for item in instance.historial_contratacion.all():
            encontrado = False
            for data in historial:
                if item.id==data["id"]:
                    encontrado = True
                    break
            if not encontrado:
                item.delete()
        # Iteramos el Historial
        for item in historial:
            if item["id"] == None:
                item["persona"]=instance.id
                historial_serializador = HistorialEmpleadoWriteSerializer(data=item)
                historial_serializador.is_valid(raise_exception=True)
                self.perform_create(historial_serializador)
            else:
                histo = HistorialEmpleado.objects.get(id=item["id"])
                serializer_historial = HistorialEmpleadoSerializer(histo, data=item, partial=partial)
                serializer_historial.is_valid(raise_exception=True)
                self.perform_update(serializer_historial)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        # Actualizando la fecha pago si es contratado o recontratado
        ultimo_historial = historial[len(historial)-1]
        if ultimo_historial["tipo"] == 1 or ultimo_historial["tipo"] == 2:
            if ultimo_historial["id"] is None:
                fecha = str(ultimo_historial["fecha"] + " 15:00:00")
                fecha = datetime.datetime.strptime(fecha, '%Y-%m-%d %H:%M:%S')
                persona = Persona.objects.get(pk=request.data["id"])
                persona.fecha_pago = fecha
                persona.save()

        return Response(serializer.data)

    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'], permission_classes=[BodegaPermission])
    def proveedores(self, request):
        try:
            proveedor = TipoPersona.objects.get(nombre='Proveedor')
            personas = Persona.objects.filter(
                Q(activo=True), Q(tipo_persona=proveedor.id), Q(nombre__icontains=request.GET.get('query')) |
                                                              Q(direccion__icontains=request.GET.get('query')) | Q(telefono__icontains=request.GET.get('query')) |
                                                              Q(nit__icontains=request.GET.get('query')) | Q(tipo_persona__nombre__icontains=request.GET.get('query'))
            ).order_by('nombre')

            serializer = PersonaSerializer(personas, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def clientes(self, request):
        try:
            cliente = TipoPersona.objects.get(nombre='Cliente')
            personas = Persona.objects.filter(
                Q(activo=True), Q(tipo_persona=cliente.id), Q(nombre__icontains=request.GET.get('query')) |
                                                            Q(direccion__icontains=request.GET.get('query')) | Q(telefono__icontains=request.GET.get('query')) |
                                                            Q(nit__icontains=request.GET.get('query')) | Q(tipo_persona__nombre__icontains=request.GET.get('query'))
            ).order_by('nombre')

            serializer = PersonaSerializer(personas, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def empleados(self, request):
        try:
            empleado = TipoPersona.objects.get(nombre='Empleado')
            personas = Persona.objects.filter(
                Q(activo=True), Q(tipo_persona=empleado.id)
            ).order_by('nombre')

            serializer = PersonaSerializer(personas, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def busca_cliente_nit(self, request):
        try:
            cliente = Persona.objects.get(
                activo=True, nit=request.GET.get('nit'), tipo_persona__nombre__icontains='Cliente')

            serializer = PersonaSerializer(cliente)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro(self, request):
        try:

            persona = Persona.objects.filter(
                Q(activo=True), Q(nombre__icontains=request.GET.get('query')) |
                                Q(direccion__icontains=request.GET.get('query')) | Q(telefono__icontains=request.GET.get('query')) |
                                Q(nit__icontains=request.GET.get('query')) | Q(tipo_persona__nombre__icontains=request.GET.get('query'))
            ).order_by('nombre')

            serializer = PaginatedPersonaSerializer(persona, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_tipo_persona(self, request):
        tipo = request.GET.get('tipo')
        persona = Persona.objects.all().filter(
            activo=True,
            tipo_persona__id=tipo
            # Q(nombre__icontains=request.GET.get('query')) | Q(direccion__icontains=request.GET.get('query')) |
            # Q(telefono__icontains=request.GET.get('query')) | Q(nit__icontains=request.GET.get('query'))
        )
        serializer = PaginatedPersonaSerializer(persona, request, 10)
        return Response(serializer.data)


    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:

            persona = Persona.objects.filter(
                Q(activo=True), Q(nombre__icontains=request.GET.get('query')) |
                                Q(direccion__icontains=request.GET.get('query')) | Q(telefono__icontains=request.GET.get('query')) |
                                Q(nit__icontains=request.GET.get('query')) | Q(tipo_persona__nombre__icontains=request.GET.get('query'))
            ).order_by('nombre')

            serializer = PersonaSerializer(persona, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def busca_chica(self, request):
        try:
            hash = request.GET.get('codigo',"").lower()
            persona = Persona.objects.get(hash_codigo_barra=hash, activo=True, codigo_barra=True)
            serializer = PersonaSerializer(persona)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    # Datos para Informacion del Empleado - Detalle Movimiento COMISION VENTAS
    @list_route(methods=['get'])
    def empleado_comisionventas(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')

        ant = request.GET.get('ant')
        sig = request.GET.get('sig')

        # Arreglos vacios para uso
        filtro_mixtos = []
        arr_costos = []

        # Distinct para encontrar los diferentes 'precio_ficha'
        detallemovimiento = DetalleMovimiento.objects.filter(
            ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
            persona__id=per,
            movimiento__finalizado=True,
            movimiento__anulado=False,
            movimiento__cuenta_separada=True,
            creado__range=(fecha_inicio, fecha_fin),
            precio_ficha__gt=0
        ).values('precio_ficha').distinct()

        # Encuentra todos los items que tengan la persona de la consulta
        items_persona = DetalleMovimiento.objects.filter(
            ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
            persona__id=per,
            movimiento__finalizado=True,
            movimiento__anulado=False,
            movimiento__cuenta_separada=True,
            creado__range=(fecha_inicio, fecha_fin)
        )
        # Encuentra todos los detallemovimiento en el rango de fecha de la consulta
        todos_persona = DetalleMovimiento.objects.filter(
            ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
            movimiento__finalizado=True,
            movimiento__anulado=False,
            movimiento__cuenta_separada=True,
            creado__range=(fecha_inicio, fecha_fin)
        )
        # Crea un arreglo unicamente con los combos mixtos de la persona de la consulta
        for ip in items_persona:
            if ip.precio_costo == 0:
                if ip.producto_presentacion_id > 0:
                    filtro_mixtos.append(ip)

        # Crea un arreglo unicamente con los detalles de combos mixtos e inserta los precio_costo de cada
        # uno y su respectivo precio_ficha
        for uno in todos_persona:
            for mixto in filtro_mixtos:
                if uno.movimiento_id == mixto.movimiento_id:
                    if uno.de_combo_mixto == mixto.producto_presentacion_id:
                        arr_costos.append({'precio_costo':uno.precio_costo,'precio_ficha':mixto.precio_ficha})

        # Se introducen detalles adicionales para calcular la ganancia cm, cc, pv, pc
        detallemovimiento = detallemovimiento.annotate(conteo=Sum('producto_presentacion__cantidad_fichas'),
            cm=Sum('producto_presentacion__comision_mesero'),cc=Sum('producto_presentacion__precio_fichas'),
            pv=Sum('producto_presentacion__precio_venta'),pc=Sum('precio_costo'))

        # Se recorre el detallemovimiento y se verifica si el precio_ficha es igual a la del arr_costos y
        # se suma al pc que se tiene ya en detallemovimiento de arr_costos
        for dm in detallemovimiento:
            for ac in arr_costos:
                if dm['precio_ficha'] == ac['precio_ficha']:
                    dm['pc'] = dm['pc'] + ac['precio_costo']

        detalle = detallemovimiento[:]
        filas = len(detalle)
        datos = detallemovimiento[int(ant):int(sig)]
        total = Decimal(0.0)
        for detail in detallemovimiento:
            total += detail["pv"]
            total -= detail["cc"]
            total -= detail["cm"]
            total -= detail["pc"]

        return Response({'filas': filas, 'datos': datos, 'total': detalle, "total_ventas": total})

    # Datos para Informacion del Empleado - Detalle Movimiento COMISION SERVICIOS
    @list_route(methods=['get'])
    def empleado_comisionservicios(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')

        ant = request.GET.get('ant')
        sig = request.GET.get('sig')

        detallemovimiento = DetalleMovimiento.objects.filter(
            persona__id=per,
            movimiento__finalizado=True,
            movimiento__anulado=False,
            movimiento__cuenta_separada=True,
            creado__range=(fecha_inicio, fecha_fin),
            producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"
        ).values('precio_ficha').distinct()

        detallemovimiento = detallemovimiento.annotate(conteo=Sum('cantidad_ficha'),costo=F('precio_costo'),
            cm=Sum('producto_presentacion__comision_mesero'),cc=Sum('precio_ficha'),
            pv=Sum('precio_venta'),pc=Sum('precio_costo'))

        detalle = detallemovimiento[:]
        filas = detalle.count()
        datos = detallemovimiento[int(ant):int(sig)]
        total = Decimal(0.0)
        for detail in detallemovimiento:
            total += detail["pv"]
            total -= detail["cc"]
            total -= detail["cm"]
            total -= detail["pc"]

        return Response({'filas': filas, 'datos': datos, 'total': detalle, "total_servicios": total})

    # Datos para Informacion del Empleado - Deposito Retiro ADELANTO DE SUELDOS
    @list_route(methods=['get'])
    def empleado_adelantosueldos(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')

        depositoretiro = DepositoRetiro.objects.filter(
            ~Q(caja_id=None),
            anulado=False,
            creado__range=(fecha_inicio, fecha_fin),
            cuenta_entrada__persona__tipo_persona_id = 1,
            cuenta_entrada__persona_id = per,

        ).order_by('-creado')
        monto = depositoretiro.aggregate(suma=Sum('monto'))

        serializer = PaginatedDepositoRetiroFinanzasSerializer(depositoretiro, request, 5)
        serializerTodos = PaginatedDepositoRetiroFinanzasSerializer(depositoretiro, request, 100)
        return Response({'datos':serializer.data,'total':monto, 'todos':serializerTodos.data})

    # Datos para Informacion del Empleado - Deposito Retiro GASTOS CON EL PERSONAL
    @list_route(methods=['get'])
    def empleado_gastospersonal(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')

        depositoretiro = DepositoRetiro.objects.filter(
            caja_id=None,
            anulado=False,
            creado__range=(fecha_inicio, fecha_fin),
            cuenta_entrada__persona__tipo_persona_id = 1,
            cuenta_entrada__persona_id = per

        ).order_by('-creado')
        monto = depositoretiro.aggregate(suma=Sum('monto'))

        serializer = PaginatedDepositoRetiroFinanzasSerializer(depositoretiro, request, 5)
        serializerTodos = PaginatedDepositoRetiroFinanzasSerializer(depositoretiro, request, 100)
        return Response({'datos':serializer.data,'total':monto, 'todos':serializerTodos.data})

    # Datos para Informacion del Empleado - Baile Persona BAILES
    @list_route(methods=['get'])
    def empleado_bailes(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')

        ant = request.GET.get('ant')
        sig = request.GET.get('sig')
        bailes = BailePersona.objects.filter(
            persona__id=per,
            creado__gte=fecha_inicio,
            creado__lte=fecha_fin,
            anulado=False
        ).values('baile__nombre_baile').distinct()

        detallemovimiento = DetalleMovimiento.objects.filter(
            ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
            persona__id=per,
            movimiento__finalizado=True,
            movimiento__anulado=False,
            movimiento__cuenta_separada=True,
            creado__range=(fecha_inicio, fecha_fin)
        ).values('precio_ficha').distinct()

        detalle = detallemovimiento.annotate(conteo=Sum('cantidad_ficha'))[:]
        conteo = 0
        for det in detalle:
            conteo += det["conteo"]

        detalle = bailes.annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))[:]
        detalle_sin_cambio = bailes.annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))[:]
        for det in detalle:
            if det['baile__nombre_baile'] == "Normal":
                if conteo < 11:
                    det['precio'] = Decimal(50)/Decimal(3)
                elif conteo < 25:
                    det['precio'] = Decimal(100)/Decimal(3)
                elif conteo < 31:
                    det['precio'] = Decimal(125)/Decimal(3)
                elif conteo < 40:
                    det['precio'] = Decimal(150)/Decimal(3)
                else:
                    det['precio'] = Decimal(200)/Decimal(3)
                det['precio'] = det['precio'].quantize(Decimal('1.00'))
                # print "el detalle es {}, el nombre es {}".format(det, det['baile__nombre_baile'])
        filas = detalle.count()
        datos = bailes.annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))[ant:sig]
        datos_sin_cambio = bailes.annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))[ant:sig]
        #print datos_sin_cambio == datos
        for det in datos:
            if det['baile__nombre_baile'] == "Normal":
                if conteo < 11:
                    det['precio'] = Decimal(50) / Decimal(3)
                elif conteo < 25:
                    det['precio'] = Decimal(100) / Decimal(3)
                elif conteo < 31:
                    det['precio'] = Decimal(125) / Decimal(3)
                elif conteo < 40:
                    det['precio'] = Decimal(150) / Decimal(3)
                else:
                    det['precio'] = Decimal(200) / Decimal(3)
                det['precio'] = det['precio'].quantize(Decimal('1.00'))
                # print "el detalle es {}, el nombre es {}".format(det, det['baile__nombre_baile'])
        #print datos_sin_cambio == datos

        return Response({'filas':filas,'datos':datos,'total':detalle,
                         'total_sin_cambio':detalle_sin_cambio, 'datos_sin_cambio':datos_sin_cambio})

    # Datos para Personal - Movimiento - DetalleMovimiento COMISION VENTAS POR DIA
    @list_route(methods=['get'])
    def personal_comisionventas(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        per = request.GET.get('per')
        ant = int(request.GET.get('ant'))
        sig = int(request.GET.get('sig'))

        from_tz = '+00:00'
        to_tz = '-06:00'
        # Se busca el id usuario de esa persona para verificar los movimientos
        # Tambien se verifica si esta persona posee un usuario sino asigna un 0
        try:
            usuario = PerfilUsuario.objects.get(persona_id=per)
            ui = usuario.usuario_id
        except:
            ui = 0

        movimientos = Movimiento.objects.filter(
            finalizado=True,
            anulado=False,
            cuenta_separada=True,
            modificado__range=(fecha_inicio, fecha_fin),
            transacciones__usuario_id=ui
        ).prefetch_related("detalle")
        temps = []
        if movimientos.count() > 0:
            referencia = movimientos[0].modificado - datetime.timedelta(hours=21)
            temp = {"fecha": referencia.date(), "comision": 0}
            for movimiento in movimientos:
                tiempo = movimiento.modificado - datetime.timedelta(hours=21)
                if tiempo.day == referencia.day:
                    for detalle in movimiento.detalle.filter(de_combo_mixto=None):
                        temp["comision"] += detalle.comision_mesero
                else:
                    temps.append(temp)
                    referencia = tiempo
                    temp = {"fecha": referencia.date(), "comision": 0}
                    for detalle in movimiento.detalle.filter(de_combo_mixto=None):
                        temp["comision"] += detalle.comision_mesero
            if temp["comision"] != 0:
                temps.append(temp)
        # movimientos = movimientos.extra({'fecha':"date(CONVERT_TZ(MainApp_movimiento.modificado, '{from_tz}', '{to_tz}'))".format(from_tz=from_tz,to_tz=to_tz)}).values('fecha').annotate(comision=Sum('detalle__comision_mesero'))

        detalle = temps[:]
        filas = len(temps)
        datos = temps[ant:sig]

        return Response({'filas':filas,'datos':datos,'total':detalle})

    # Lista de Empleados dentro de la empresa
    @list_route(methods=['get'])
    def filtro_pagos_empleados(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        ant = request.GET.get('ant')
        sig = request.GET.get('sig')

        tipo = request.GET.get('tipo')

        # Se filtran las personas que cumplan las siguientes condiciones: activo, tipo_persona y fecha_pago
        request.GET.get('sinpago')
        if request.GET.get('sinpago') is not None:
            personas = Persona.objects.filter(
                activo=True,
                tipo_persona=1
            ).order_by('-fecha_pago').prefetch_related("historial_contratacion")
        else:
            personas = Persona.objects.filter(
                activo=True,
                tipo_persona=1,
                fecha_pago__gte=fecha_inicio,
                fecha_pago__lt=fecha_fin,
            ).order_by('-fecha_pago')
            # Excluyendo a las personas que tienen como ultimo registro en el historial despido o renuncia
            temp = []
            for persona in personas:
                tipo_historial = persona.historial_contratacion.last()
                if tipo_historial is not None:
                    if tipo_historial.tipo == 3 or tipo_historial.tipo == 4:
                        temp.append(persona)
            for persona in temp:
                personas = personas.exclude(pk=persona.id)
        # Filtrando por nombre si es que se recibio
        nombre = request.GET.get('nombre')
        if nombre != "":
            personas = personas.filter(nombre__icontains=nombre)

        # Datos seteados en blanco antes de enviar
        empleados = []
        ventas = []
        servicios = []
        adelantos = []
        gastos = []
        baile = []
        ventasper = []

        # Todos
        if tipo =='1':

            # Todas las personas que cumplen el primer filtro de persona
            personas = personas

            for persona in personas:
                # Se almacena cada id, nombre, fecha_pago, sueldo_cuenta y codigo_barra de cada persona para que dentro de cada
                # diccionario de datos el id corresponda al filtro que ese hace y en el frontend se pueda calcular cada total de forma correcta
                idp = persona.id
                nom = persona.nombre
                if request.GET.get('sinpago') is not None:
                    fec = fecha_inicio
                else:
                    fec = persona.fecha_pago
                sue = persona.sueldo_cuenta
                cod = persona.codigo_barra

                # Ventas de Empleados (Chicas)
                detallemovimientoventas = DetalleMovimiento.objects.filter(
                    ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
                    persona_id=persona.id,
                    movimiento__finalizado=True,
                    movimiento__anulado=False,
                    movimiento__cuenta_separada=True,
                    creado__range=(fec, fecha_fin)
                ).values('precio_ficha').distinct().annotate(conteo=Sum('cantidad_ficha'))
                if len(detallemovimientoventas) == 0:
                    detallemovimientoventas = [{'precio_ficha': 0,'conteo': 0}]
                ventas.append([detallemovimientoventas,idp])

                # Servicios
                detallemovimientoservicios = DetalleMovimiento.objects.filter(
                    persona__id=persona.id,
                    movimiento__finalizado=True,
                    movimiento__anulado=False,
                    movimiento__cuenta_separada=True,
                    creado__range=(fec, fecha_fin),
                    producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"
                ).values('precio_ficha').distinct().annotate(conteo=Sum('cantidad_ficha'),costo=F('precio_costo'))
                if len(detallemovimientoservicios) == 0:
                    detallemovimientoservicios = [{'precio_ficha': 0,'conteo': 0,'costo':0}]
                servicios.append([detallemovimientoservicios,idp])

                # Adelantos
                depositoretiroadelanto = DepositoRetiro.objects.filter(
                    ~Q(caja_id=None),
                    anulado=False,
                    creado__range=(fec, fecha_fin),
                    cuenta_entrada__persona__tipo_persona_id = 1,
                    cuenta_entrada__persona_id = persona.id
                ).order_by('-creado').aggregate(suma=Sum('monto'))
                adelantos.append([depositoretiroadelanto,{'id':idp,'nombre':nom,'fecha':fec,'sueldo':sue,'codigo_barra':cod}])

                # Gastos
                depositoretirogastos = DepositoRetiro.objects.filter(
                    caja_id=None,
                    anulado=False,
                    creado__range=(fec, fecha_fin),
                    cuenta_entrada__persona__tipo_persona_id = 1,
                    cuenta_entrada__persona_id = persona.id
                ).order_by('-creado').aggregate(suma=Sum('monto'))
                gastos.append([depositoretirogastos,idp])

                # Bailes
                bailes = BailePersona.objects.filter(
                    persona__id=persona.id,
                    creado__range=(fec, fecha_fin),
                    anulado=False
                ).values('baile__nombre_baile').distinct().annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))
                if len(bailes) == 0:
                    bailes=[{'baile__nombre_baile':'Ninguno','cantidad':0,'precio':0}]
                baile.append([bailes,idp])

                # Ventas de Personal (NO chicas)
                from_tz = '+00:00'
                to_tz = '-06:00'

                # Se busca el id usuario de esa persona para verificar los movimientos
                # Tambien se verifica si esta persona posee un usuario sino asigna un 0
                try:
                    usuario = PerfilUsuario.objects.get(persona_id=persona.id)
                    ui = usuario.usuario_id
                except:
                    ui = 0

                movimientos = Movimiento.objects.filter(
                    finalizado=True,
                    anulado=False,
                    cuenta_separada=True,
                    modificado__range=(fec, fecha_fin),
                    transacciones__usuario_id=ui
                ).prefetch_related("detalle")
                temps = []
                if movimientos.count() > 0:
                    referencia = movimientos[0].modificado - datetime.timedelta(hours=21)
                    temp = {"fecha": referencia.date(), "comision": 0}
                    for movimiento in movimientos:
                        tiempo = movimiento.modificado - datetime.timedelta(hours=21)
                        if tiempo.day == referencia.day:
                            for detalle in movimiento.detalle.filter(de_combo_mixto=None):
                                temp["comision"] += detalle.comision_mesero
                        else:
                            temps.append(temp)
                            referencia = tiempo
                            temp = {"fecha": referencia.date(), "comision": 0}
                            for detalle in movimiento.detalle.filter(de_combo_mixto=None):
                                temp["comision"] += detalle.comision_mesero
                    if temp["comision"] != 0:
                        temps.append(temp)
                movimientos = temps
                ventasper.append([movimientos,idp])

        # Solo Chicas
        elif tipo =='2':
            personas = personas.filter(codigo_barra=True)
            for persona in personas:
                # Se almacena cada id, nombre, fecha_pago, sueldo_cuenta y codigo_barra de cada persona para que dentro de cada
                # diccionario de datos el id corresponda al filtro que ese hace y en el frontend se pueda calcular cada total de forma correcta
                idp = persona.id
                nom = persona.nombre
                if request.GET.get('sinpago') is not None:
                    fec = fecha_inicio
                else:
                    fec = persona.fecha_pago
                sue = persona.sueldo_cuenta
                cod = persona.codigo_barra

                # Ventas de Empleados (Chicas)
                detallemovimientoventas = DetalleMovimiento.objects.filter(
                    ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
                    persona_id=persona.id,
                    movimiento__finalizado=True,
                    movimiento__anulado=False,
                    movimiento__cuenta_separada=True,
                    creado__range=(fec, fecha_fin)
                ).values('precio_ficha').distinct().annotate(conteo=Sum('cantidad_ficha'))
                if len(detallemovimientoventas) == 0:
                    detallemovimientoventas = [{'precio_ficha': 0,'conteo': 0}]
                ventas.append([detallemovimientoventas,idp])

                # Servicios
                detallemovimientoservicios = DetalleMovimiento.objects.filter(
                    persona__id=persona.id,
                    movimiento__finalizado=True,
                    movimiento__anulado=False,
                    movimiento__cuenta_separada=True,
                    creado__range=(fec, fecha_fin),
                    producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"
                ).values('precio_ficha').distinct().annotate(conteo=Sum('cantidad_ficha'),costo=F('precio_costo'))
                if len(detallemovimientoservicios) == 0:
                    detallemovimientoservicios = [{'precio_ficha': 0,'conteo': 0,'costo':0}]
                servicios.append([detallemovimientoservicios,idp])

                # Adelantos
                depositoretiroadelanto = DepositoRetiro.objects.filter(
                    ~Q(caja_id=None),
                    anulado=False,
                    creado__range=(fec, fecha_fin),
                    cuenta_entrada__persona__tipo_persona_id = 1,
                    cuenta_entrada__persona_id = persona.id
                ).order_by('-creado').aggregate(suma=Sum('monto'))
                adelantos.append([depositoretiroadelanto,{'id':idp,'nombre':nom,'fecha':fec,'sueldo':sue,'codigo_barra':cod}])

                # Gastos
                depositoretirogastos = DepositoRetiro.objects.filter(
                    caja_id=None,
                    anulado=False,
                    creado__range=(fec, fecha_fin),
                    cuenta_entrada__persona__tipo_persona_id = 1,
                    cuenta_entrada__persona_id = persona.id
                ).order_by('-creado').aggregate(suma=Sum('monto'))
                gastos.append([depositoretirogastos,idp])

                # Bailes
                bailes = BailePersona.objects.filter(
                    persona__id=persona.id,
                    creado__range=(fec, fecha_fin),
                    anulado=False
                ).values('baile__nombre_baile').distinct().annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))
                if len(bailes) == 0:
                    bailes=[{'baile__nombre_baile':'Ninguno','cantidad':0,'precio':0}]
                baile.append([bailes,idp])

                # Ventas de Personal (NO chicas)
                from_tz = '+00:00'
                to_tz = '-06:00'

                # Se busca el id usuario de esa persona para verificar los movimientos
                # Tambien se verifica si esta persona posee un usuario sino asigna un 0
                try:
                    usuario = PerfilUsuario.objects.get(persona_id=persona.id)
                    ui = usuario.usuario_id
                except:
                    ui = 0

                movimientos = Movimiento.objects.filter(
                    finalizado=True,
                    anulado=False,
                    cuenta_separada=True,
                    modificado__range=(fec,fecha_fin),
                    transacciones__usuario_id=ui
                ).extra({'fecha':"date(CONVERT_TZ(MainApp_movimiento.modificado, '{from_tz}', '{to_tz}'))".format(from_tz=from_tz,to_tz=to_tz)}).values('fecha').annotate(comision=Sum('detalle__comision_mesero'))
                if len(movimientos) == 0:
                    movimientos=[{'fecha':'Ninguno','comision':0}]
                ventasper.append([movimientos,idp])
        # Solo Empleados
        elif tipo =='3':
            personas = personas.filter(codigo_barra=False)
            for persona in personas:
                # Se almacena cada id, nombre, fecha_pago, sueldo_cuenta y codigo_barra de cada persona para que dentro de cada
                # diccionario de datos el id corresponda al filtro que ese hace y en el frontend se pueda calcular cada total de forma correcta
                idp = persona.id
                nom = persona.nombre
                if request.GET.get('sinpago') is not None:
                    fec = fecha_inicio
                else:
                    fec = persona.fecha_pago
                sue = persona.sueldo_cuenta
                cod = persona.codigo_barra

                # Ventas de Empleados (Chicas)
                detallemovimientoventas = DetalleMovimiento.objects.filter(
                    ~Q(producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"),
                    persona_id=persona.id,
                    movimiento__finalizado=True,
                    movimiento__anulado=False,
                    movimiento__cuenta_separada=True,
                    creado__range=(fec, fecha_fin)
                ).values('precio_ficha').distinct().annotate(conteo=Sum('cantidad_ficha'))
                if len(detallemovimientoventas) == 0:
                    detallemovimientoventas = [{'precio_ficha': 0,'conteo': 0}]
                ventas.append([detallemovimientoventas,idp])

                # Servicios
                detallemovimientoservicios = DetalleMovimiento.objects.filter(
                    persona__id=persona.id,
                    movimiento__finalizado=True,
                    movimiento__anulado=False,
                    movimiento__cuenta_separada=True,
                    creado__range=(fec, fecha_fin),
                    producto_presentacion__producto__tipo_producto__nombre__icontains="BOTELLAS"
                ).values('precio_ficha').distinct().annotate(conteo=Sum('cantidad_ficha'),costo=F('precio_costo'))
                if len(detallemovimientoservicios) == 0:
                    detallemovimientoservicios = [{'precio_ficha': 0,'conteo': 0,'costo':0}]
                servicios.append([detallemovimientoservicios,idp])

                # Adelantos
                depositoretiroadelanto = DepositoRetiro.objects.filter(
                    ~Q(caja_id=None),
                    anulado=False,
                    creado__range=(fec, fecha_fin),
                    cuenta_entrada__persona__tipo_persona_id = 1,
                    cuenta_entrada__persona_id = persona.id
                ).order_by('-creado').aggregate(suma=Sum('monto'))
                adelantos.append([depositoretiroadelanto,{'id':idp,'nombre':nom,'fecha':fec,'sueldo':sue,'codigo_barra':cod}])

                # Gastos
                depositoretirogastos = DepositoRetiro.objects.filter(
                    caja_id=None,
                    anulado=False,
                    creado__range=(fec, fecha_fin),
                    cuenta_entrada__persona__tipo_persona_id = 1,
                    cuenta_entrada__persona_id = persona.id
                ).order_by('-creado').aggregate(suma=Sum('monto'))
                gastos.append([depositoretirogastos,idp])

                # Bailes
                bailes = BailePersona.objects.filter(
                    persona__id=persona.id,
                    creado__range=(fec, fecha_fin),
                    anulado=False
                ).values('baile__nombre_baile').distinct().annotate(cantidad=Count('baile__nombre_baile'),precio=F('costo'))
                if len(bailes) == 0:
                    bailes=[{'baile__nombre_baile':'Ninguno','cantidad':0,'precio':0}]
                baile.append([bailes,idp])

                # Ventas de Personal (NO chicas)
                from_tz = '+00:00'
                to_tz = '-06:00'

                # Se busca el id usuario de esa persona para verificar los movimientos
                # Tambien se verifica si esta persona posee un usuario sino asigna un 0
                try:
                    usuario = PerfilUsuario.objects.get(persona_id=persona.id)
                    ui = usuario.usuario_id
                except:
                    ui = 0

                # movimientos = Movimiento.objects.filter(
                #     finalizado=True,
                #     anulado=False,
                #     cuenta_separada=True,
                #     modificado__range=(fec,fecha_fin),
                #     transacciones__usuario_id=ui
                # ).extra({'fecha':"date(CONVERT_TZ(MainApp_movimiento.modificado, '{from_tz}', '{to_tz}'))".format(from_tz=from_tz,to_tz=to_tz)}).values('fecha').annotate(comision=Sum('detalle__comision_mesero'))
                # if len(movimientos) == 0:
                #     movimientos=[{'fecha':'Ninguno','comision':0}]
                movimientos = Movimiento.objects.filter(
                    finalizado=True,
                    anulado=False,
                    cuenta_separada=True,
                    modificado__range=(fec, fecha_fin),
                    transacciones__usuario_id=ui
                ).prefetch_related("detalle")
                temps = []
                if movimientos.count() > 0:
                    referencia = movimientos[0].modificado - datetime.timedelta(hours=21)
                    temp = {"fecha": referencia.date(), "comision": 0}
                    for movimiento in movimientos:
                        tiempo = movimiento.modificado - datetime.timedelta(hours=21)
                        if tiempo.day == referencia.day:
                            for detalle in movimiento.detalle.filter(de_combo_mixto=None):
                                temp["comision"] += detalle.comision_mesero
                        else:
                            temps.append(temp)
                            referencia = tiempo
                            temp = {"fecha": referencia.date(), "comision": 0}
                            for detalle in movimiento.detalle.filter(de_combo_mixto=None):
                                temp["comision"] += detalle.comision_mesero
                    if temp["comision"] != 0:
                        temps.append(temp)
                movimientos = temps
                ventasper.append([movimientos,idp])

        # Debido a que hay varios datos no pasa por serializer y se pagina de forma manual
        # Para cada uno de los filtros creados anteriormente

        # Se obtiene el numero de filas dentro de todos los datos
        filas = len(adelantos)
        # Obteniendo el total de todos los pagos que se van a realizar
        super_total = Decimal(0.0)
        total_empleados = Decimal(0.0)
        total_chicas = Decimal(0.0)
        if request.GET.get('sinpago') is None:
            for i in range(len(adelantos)):
                if adelantos[i][1]["codigo_barra"]:
                    total_chicas += adelantos[i][1]["sueldo"]
                    total_chicas = total_chicas - adelantos[i][0]["suma"] if adelantos[i][0][
                                                                               "suma"] is not None else total_chicas
                    conteo = 0
                    # Sumando todas las ventas
                    for venta in ventas[i][0]:
                        total_chicas += (venta["precio_ficha"] * Decimal(venta["conteo"]))
                        conteo += venta["conteo"]
                    # Sumando todos los servicios
                    for servicio in servicios[i][0]:
                        total_chicas += (servicio["precio_ficha"] * Decimal(servicio["conteo"]))
                    total_chicas = total_chicas - gastos[i][0]["suma"] if gastos[i][0]["suma"] is not None else total_chicas
                    # Sumando las comisiones
                    for comision in ventasper[i][0]:
                        total_chicas += (comision["comision"])
                    # Sumando los bailes, por cada uno se debe calcular el precio correcto
                    for dance in baile[i][0]:
                        # Si el baile es tipo normal, se calcula el precio segun las fichas vendidas
                        if dance["baile__nombre_baile"] == "Normal":
                            if conteo < 11:
                                fraccion = Decimal(50) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            elif conteo < 25:
                                fraccion = Decimal(100) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            elif conteo < 31:
                                fraccion = Decimal(125) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            elif conteo < 40:
                                fraccion = Decimal(150) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            else:
                                fraccion = Decimal(200) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            costo = costo.quantize(Decimal('1.00'))
                            total_chicas += costo
                        # De lo contrario se suma el precio como viene
                        else:
                            total_chicas = total_chicas + dance["precio"] if dance["baile__nombre_baile"] \
                                                                           != "Ninguno" else total_chicas
                else:
                    total_empleados += adelantos[i][1]["sueldo"]
                    total_empleados = total_empleados - adelantos[i][0]["suma"] if adelantos[i][0][
                                                                               "suma"] is not None else total_empleados
                    conteo = 0
                    # Sumando todas las ventas
                    for venta in ventas[i][0]:
                        total_empleados += (venta["precio_ficha"] * Decimal(venta["conteo"]))
                        conteo += venta["conteo"]
                    # Sumando todos los servicios
                    for servicio in servicios[i][0]:
                        total_empleados += (servicio["precio_ficha"] * Decimal(servicio["conteo"]))
                    total_empleados = total_empleados - gastos[i][0]["suma"] if gastos[i][0]["suma"] is not None else total_empleados
                    # Sumando las comisiones
                    for comision in ventasper[i][0]:
                        total_empleados += (comision["comision"])
                    # Sumando los bailes, por cada uno se debe calcular el precio correcto
                    for dance in baile[i][0]:
                        # Si el baile es tipo normal, se calcula el precio segun las fichas vendidas
                        if dance["baile__nombre_baile"] == "Normal":
                            if conteo < 11:
                                fraccion = Decimal(50) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            elif conteo < 25:
                                fraccion = Decimal(100) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            elif conteo < 31:
                                fraccion = Decimal(125) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            elif conteo < 40:
                                fraccion = Decimal(150) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            else:
                                fraccion = Decimal(200) / Decimal(3)
                                fraccion = fraccion.quantize(Decimal('1.00'))
                                costo = (fraccion * Decimal(dance["cantidad"]))
                            costo = costo.quantize(Decimal('1.00'))
                            total_empleados += costo
                        # De lo contrario se suma el precio como viene
                        else:
                            total_empleados = total_empleados + dance["precio"] if dance["baile__nombre_baile"] \
                                                                           != "Ninguno" else total_empleados
                super_total += adelantos[i][1]["sueldo"]
                super_total = super_total - adelantos[i][0]["suma"] if adelantos[i][0]["suma"] is not None else super_total
                conteo = 0
                # Sumando todas las ventas
                for venta in ventas[i][0]:
                    super_total += (venta["precio_ficha"] * Decimal(venta["conteo"]))
                    conteo+=venta["conteo"]
                # Sumando todos los servicios
                for servicio in servicios[i][0]:
                    super_total += (servicio["precio_ficha"] * Decimal(servicio["conteo"]))
                super_total = super_total - gastos[i][0]["suma"] if gastos[i][0]["suma"] is not None else super_total
                # Sumando las comisiones
                for comision in ventasper[i][0]:
                    super_total += (comision["comision"])
                # Sumando los bailes, por cada uno se debe calcular el precio correcto
                for dance in baile[i][0]:
                    # Si el baile es tipo normal, se calcula el precio segun las fichas vendidas
                    if dance["baile__nombre_baile"] == "Normal":
                        if conteo < 11:
                            fraccion = Decimal(50) / Decimal(3)
                            fraccion = fraccion.quantize(Decimal('1.00'))
                            costo = (fraccion * Decimal(dance["cantidad"]))
                        elif conteo < 25:
                            fraccion = Decimal(100) / Decimal(3)
                            fraccion = fraccion.quantize(Decimal('1.00'))
                            costo = (fraccion * Decimal(dance["cantidad"]))
                        elif conteo < 31:
                            fraccion = Decimal(125) / Decimal(3)
                            fraccion = fraccion.quantize(Decimal('1.00'))
                            costo = (fraccion * Decimal(dance["cantidad"]))
                        elif conteo < 40:
                            fraccion = Decimal(150) / Decimal(3)
                            fraccion = fraccion.quantize(Decimal('1.00'))
                            costo = (fraccion * Decimal(dance["cantidad"]))
                        else:
                            fraccion = Decimal(200) / Decimal(3)
                            fraccion = fraccion.quantize(Decimal('1.00'))
                            costo = (fraccion * Decimal(dance["cantidad"]))
                        costo = costo.quantize(Decimal('1.00'))
                        super_total += costo
                    # De lo contrario se suma el precio como viene
                    else:
                        super_total = super_total + dance["precio"] if dance["baile__nombre_baile"]\
                                                                       != "Ninguno" else super_total
                # print adelantos[i]
        datosad = adelantos[int(ant):int(sig)]
        datosve = ventas[int(ant):int(sig)]
        datosse = servicios[int(ant):int(sig)]
        datosga = gastos[int(ant):int(sig)]
        datosba = baile[int(ant):int(sig)]
        datosvp = ventasper[int(ant):int(sig)]

        return Response({'filas': filas, 'datosad': datosad, 'datosve': datosve, 'datosse': datosse,
                         'datosga': datosga, 'datosba': datosba, 'datosvp': datosvp, 'super_total': super_total,
                         'total_empleados': total_empleados, 'total_chicas': total_chicas})

    # Cuenta de una persona en especifico
    @list_route(methods=['get'])
    def cuenta_persona(self, request):

        per = request.GET.get('id')

        cuenta = Cuenta.objects.get(
            persona = per
        )

        serializer = CuentaPersonaSerializer(cuenta)
        return Response(serializer.data)
