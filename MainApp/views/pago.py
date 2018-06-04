import datetime
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import Pago
from MainApp.serializers import PagoSerializer
from MainApp.serializers.pago import PagoWriteSerializer, PaginatedPagoSerializer
from MainApp.views import SwappableSerializerMixin
from MainApp.permisos import *


class PagoViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = Pago.objects.filter(activo=True)
    permission_classes = [AdminPermission]
    serializer_classes = {
        'GET': PagoSerializer,
        'POST': PagoWriteSerializer,
        'PUT': PagoWriteSerializer,
        'DELETE': PagoSerializer,
        'PATCH': PagoWriteSerializer
    }

    @list_route(methods=['get'])
    def filtro_pagos(self, request):
        # try:

        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')
        # fecha_inicio = datetime.datetime.strftime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')
        # fecha_fin = datetime.datetime.strftime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        pagos = Pago.objects.filter(
            activo=True, creado__range=(fecha_inicio, fecha_fin)
        ).order_by('-creado')

        serializer = PaginatedPagoSerializer(pagos, request, 10)
        return Response(serializer.data)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)