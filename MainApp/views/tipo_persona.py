from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import TipoPersona
from MainApp.serializers import TipoPersonaSerializer
from MainApp.serializers.tipo_persona import PaginatedTipoPersonaSerializer
from MainApp.permisos import *


class TipoPersonaViewSet(viewsets.ModelViewSet):
    queryset = TipoPersona.objects.filter(activo=True)
    serializer_class = TipoPersonaSerializer
    permission_classes = [CajeroPermission]
    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            if model.nombre.upper() == 'CLIENTE' or model.nombre.upper() == 'PROVEEDOR':
                raise ValueError('No se puede eliminar {} '.format(model.nombre))
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro(self, request):
        try:
            tipos = TipoPersona.objects.filter(
                activo=True,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = PaginatedTipoPersonaSerializer(tipos, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:
            tipos = TipoPersona.objects.filter(
                activo=True,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = TipoPersonaSerializer(tipos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
