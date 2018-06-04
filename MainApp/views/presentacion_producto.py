from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from MainApp.models import ProductoPresentacion, Producto, Presentacion
from MainApp.serializers import PresentacionesProductoSerializer
from rest_framework.response import Response
from MainApp.permisos import *


class PresentacionProductoViewSet(viewsets.ModelViewSet):
    queryset=ProductoPresentacion.objects.filter(presentacion__activo=True, producto__activo=True)
    serializer_class=PresentacionesProductoSerializer
    permission_classes = [BodegaPermission]
    @list_route(methods=['get'])
    def presentacion_producto(self, request):

        pro = request.GET.get('pro', False)

        presentaciones=ProductoPresentacion.objects.filter(
            producto__activo=True,
            presentacion__activo=True,
            activo=True,
            producto=pro
        )

        serializer=PresentacionesProductoSerializer(presentaciones, many=True)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        model = self.get_object()
        model.activo = False
        model.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
