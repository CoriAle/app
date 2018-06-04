from rest_framework import viewsets, status
from rest_framework.response import Response
from MainApp.models import DetalleMovimiento
from MainApp.serializers.detalle_movimiento import DetalleMovimientoCocinaSerializer
from MainApp.permisos import *


class DetalleMovimientoViewSet(viewsets.ModelViewSet):
    queryset = DetalleMovimiento.objects.filter(servido=False)
    serializer_class = DetalleMovimientoCocinaSerializer

    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.servido = True
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)
