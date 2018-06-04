import datetime
from decimal import *
from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import PagoPersonal, Persona, Cuenta, DepositoRetiro, BailePersona
from MainApp.serializers import PagoPersonalSerializer
from MainApp.views import SwappableSerializerMixin
from MainApp.permisos import *
from django.db import transaction


class PagoPersonalViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = PagoPersonal.objects.all()
    permission_classes = [AdminPermission]
    serializer_classes = {
        'GET': PagoPersonalSerializer,
        'POST': PagoPersonalSerializer,
        'PUT': PagoPersonalSerializer,
        'DELETE': PagoPersonalSerializer,
        'PATCH': PagoPersonalSerializer
    }

    # funcion que realiza el pago a las chicas
    @transaction.atomic
    @list_route(methods=['post'])
    def new_payment(self, request):
        # try:
        # las fechas nos sirven para volver a conseguir los bailes que hizo para cambiarles los costos
        # la fecha fin ademas nos pone la fecha de pago

        persona = Persona.objects.get(pk=request.data['persona'])
        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')
        user = User.objects.get(pk=request.GET.get('user'))
        try:
            # Area solo para las chicas, tira excepcion para los empleados
            fecha_inicio = str(request.GET.get('ini'))
            fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')
            # Conseguimos todos los bailes de la chica y se recalcula el costo
            bailes = BailePersona.objects.filter(
                persona=persona,
                creado__gte=fecha_inicio,
                creado__lte=fecha_fin,
                anulado=False
            ).prefetch_related("baile")
            cantidad_bailes = 0
            normales = []
            for baile in bailes:
                if baile.baile.nombre_baile == "Normal":
                    cantidad_bailes += 1
                    normales.append(baile)
            costo = Decimal(request.data['bailes'])/Decimal(cantidad_bailes)
            costo = costo.quantize(Decimal('1.00'))
            # se cambia el costo de los bailes y se guarda
            for baile in normales:
                baile.costo = costo
                baile.save()
        except:
            pass
        # se guarda el pago con todos los datos recibidos
        #print request.data
        pago = PagoPersonal(
            comision_venta=request.data.get('comision_venta',0),
            comision_servicio=request.data.get('comision_servicio',0),
            bailes=request.data.get('bailes',0),
            adelanto=request.data.get('adelanto',0),
            gastos_personal=request.data.get('gastos_personal',0),
            a_pagar=request.data.get('a_pagar',0),
            saldo_anterior=request.data.get('saldo_anterior',0),
            saldo_actual=request.data.get('saldo_actual',0),
            persona=persona,
            fecha_inicio=persona.fecha_pago,
            fecha_fin=fecha_fin
        )
        pago.save()
        serializer = PagoPersonalSerializer(pago)
        try:
            # se consigue la cuenta de la persona y se actualiza su saldo
            cuenta = Cuenta.objects.get(persona=persona)
            cuenta.saldo = pago.saldo_actual
            cuenta.save()
            empresa = Cuenta.objects.get(empresa_id=1)
            persona.fecha_pago = fecha_fin
            persona.save()
            # se hace un retiro para el registro

            # deposito = DepositoRetiro(descripcion="Pago a personal", monto=request.GET.get('total'),
            # cuenta_salida=empresa, cuenta_entrada=cuenta, usuario=user)
            # deposito.save()
            retiro = DepositoRetiro(monto=pago.a_pagar, cuenta_salida=cuenta, usuario=user)
            retiro.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # except:
        #     return Response({"Error": "Request data invalid"}, status=status.HTTP_400_BAD_REQUEST)

    # Funcion que lista todos los pagos en un rango de fechas
    @list_route(methods=['get'])
    def payments(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        nombre = request.GET.get('nombre')
        tipo = int(request.GET.get('tipo'))
        data = PagoPersonal.objects.filter(
            creado__range=(fecha_inicio, fecha_fin),
        ).order_by("-creado")
        # Se filtra por nombre de persona, chica o empleado si es que fue enviado el parametro
        if nombre != "":
            data = data.filter(persona__nombre__icontains=nombre)
        if tipo == 2:
            data = data.filter(persona__codigo_barra=True)
        elif tipo == 3:
            data = data.filter(persona__codigo_barra=False)
        serializer = PagoPersonalSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
