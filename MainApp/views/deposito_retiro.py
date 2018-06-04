import datetime
from django.db.models import Q
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import DepositoRetiro
from MainApp.serializers import DepositoRetiroSerializer
from MainApp.serializers.deposito_retiro import PaginatedDepositoRetiroSerializer, DepositoRetiroCrearSerializer, PaginatedDepositoRetiroFinanzasSerializer
from MainApp.views import SwappableSerializerMixin
from MainApp.permisos import *


class DepositoRetiroViewSet(viewsets.ModelViewSet):
    serializer_class = DepositoRetiroSerializer
    queryset = DepositoRetiro.objects.filter(~Q(cuenta_entrada=None), anulado=False).prefetch_related("usuario", "cuenta_entrada__persona")
    permission_classes = [CajeroPermission]
    def create(self, request, *args, **kwargs):
        serializer = DepositoRetiroCrearSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def destroy(self, request, pk=None):
    #     try:
    #         model = self.get_object()
    #         model.anulado = False
    #         model.save()
    #         return Response(status=status.HTTP_204_NO_CONTENT)
    #     except Exception as e:
    #         return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_pagos(self, request):
        # try:

        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')
        # fecha_inicio = datetime.datetime.strftime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')
        # fecha_fin = datetime.datetime.strftime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        pagos = DepositoRetiro.objects.filter(
            anulado=False, creado__range=(fecha_inicio, fecha_fin), cuenta_entrada__persona__tipo_persona_id = 1
        ).order_by('-creado')

        serializer = PaginatedDepositoRetiroFinanzasSerializer(pagos, request, 10)
        return Response(serializer.data)
        # except Exception as e:
        #     return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
