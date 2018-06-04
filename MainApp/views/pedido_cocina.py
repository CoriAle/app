import datetime
from django.db.models.query_utils import Q
from rest_framework import viewsets
from rest_framework.response import Response
from MainApp.models.detalle_movimiento import DetalleMovimiento
from MainApp.serializers.pedido_cocina import PedidoCocinaSerializer
from MainApp.permisos import *


class PedidoCocinaViewSet(viewsets.ModelViewSet):
    queryset = DetalleMovimiento.objects.all()
    serializer_class = PedidoCocinaSerializer
    permission_classes = [CocinaPermission]
    # Listado de pedidos para cocina
    def list(self, request, *args, **kwargs):
        fecha_inicio = str(request.GET.get('ini')) + ' 00:00:00'
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin')) + ' 23:59:59'
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')
        tipo = str(request.GET.get('tipo'))
        if tipo == '1':
            servido = False
        else:
            servido = True

        # detalles = DetalleMovimiento.objects.filter(
        #     Q(servido=servido),
        #     Q(movimiento__transacciones__tipo_transaccion=1),
        #     Q(creado__range=(fecha_inicio, fecha_fin)) |
        #     Q(modificado__range=(fecha_inicio, fecha_fin))
        # ).exclude(Q(movimiento__transacciones__tipo_transaccion=2) |
        #           Q(movimiento__transacciones__tipo_transaccion=3) |
        #           Q(movimiento__transacciones__tipo_transaccion=4)
        #           ).order_by('-creado')

        detalles = DetalleMovimiento.objects.filter(
            servido=servido,
            producto__comsetible=True,
            movimiento__anulado=False,
            movimiento__finalizado=True,
            movimiento__cuenta_separada=True,
            # movimiento__transacciones__tipo_transaccion=1
            # creado__range=(fecha_inicio, fecha_fin) |
            modificado__range=(fecha_inicio, fecha_fin)
        ).order_by('-creado')

        page = self.paginate_queryset(detalles)
        if page is not None:
            serializer = PedidoCocinaSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(detalles, many=True)
        print serializer
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = PedidoCocinaSerializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
