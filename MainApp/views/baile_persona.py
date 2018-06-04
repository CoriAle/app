import datetime
from django.utils import timezone
from datetime import timedelta
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import BailePersona, Configuracion
from MainApp.serializers import BailePersonaSerializer, BailePersonaWriteSerializer
from MainApp.permisos import *


class BailePersonaViewSet(viewsets.ModelViewSet):
    queryset = BailePersona.objects.all()
    serializer_class = BailePersonaSerializer
    permission_classes = [MeseroPermission]
    serializer_classes = {
        'GET': BailePersonaSerializer,
        'POST': BailePersonaWriteSerializer,
        'PUT': BailePersonaWriteSerializer,
        'DELETE': BailePersonaSerializer,
        'PATCH': BailePersonaWriteSerializer
    }

    def create(self, request, *args, **kwargs):
        serializer = BailePersonaWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        query = request.GET.get('id')

        result = BailePersona.objects.all()

        page = self.paginate_queryset(result)
        if page is not None:
            serializer = BailePersonaSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(result, many=True)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def list_day(self, request, *args, **kwargs):
        # Obtenemos la configuracion dentro de la base de datos
        configuracion = Configuracion.objects.filter().first()
        hora_inicio = configuracion.inicio_jornada.strftime("%H:%M:%S")
        hora_fin = configuracion.finalizacion_jornada.strftime("%H:%M:%S")
        hoy = timezone.now()
        hora_actual = hoy.strftime("%H:%M:%S")

        # Comprobamos si la fecha ingresada esta dentro del rango establecido
        if hora_actual >= hora_inicio:
            fecha_inicio = hoy.replace(hour=configuracion.inicio_jornada.hour,
                                       minute=configuracion.inicio_jornada.minute, second=0)
            fecha_fin = hoy.replace(hour=configuracion.finalizacion_jornada.hour,
                                    minute=configuracion.finalizacion_jornada.minute, second=59) + timedelta(days=1)
        elif hora_actual <= hora_fin:
            fecha_inicio = hoy.replace(hour=configuracion.inicio_jornada.hour,
                                       minute=configuracion.inicio_jornada.minute, second=0) - timedelta(days=1)
            fecha_fin = hoy.replace(hour=configuracion.finalizacion_jornada.hour,
                                    minute=configuracion.finalizacion_jornada.minute, second=59)
        else:
            fecha_inicio = hoy.replace(hour=0, minute=0, second=0)
            fecha_fin = hoy.replace(hour=23, minute=59, second=59)

        # Efectuamos la busqueda segun los datos de la configuracion ingresadas
        result = BailePersona.objects.filter(creado__range=(fecha_inicio, fecha_fin)).order_by('creado')
        serializer = self.get_serializer(result, many=True)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = BailePersonaWriteSerializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def get_dances(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        nombre = request.GET.get('nombre')
        bailes = BailePersona.objects.filter(
            creado__range=(fecha_inicio, fecha_fin)
        )
        if nombre != "":
            bailes = bailes.filter(persona__nombre=nombre)
        serializer = BailePersonaSerializer(bailes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        # try:
        model = self.get_object()
        model.anulado = True
        model.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
        # except Exception as e:
        #     return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)
