from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import TipoProducto
from MainApp.serializers import TipoProductoSerializer
from MainApp.serializers.tipo_producto import PaginatedTipoProductoSerializer
from MainApp.permisos import *


class TipoProductoViewSet(viewsets.ModelViewSet):
    queryset = TipoProducto.objects.filter(activo=True)
    serializer_class = TipoProductoSerializer
    permission_classes = [BodegaMeseroPermission]
    def destroy(self, request, *args, **kwargs):
        model = self.get_object()
        #print model
        if model.nombre.upper() == 'COMBO' or model.nombre.upper() == 'COMBO MIXTO':
            return Response({'detail': 'No se puede eliminar {} '.format(model.nombre)},
                            status=status.HTTP_400_BAD_REQUEST)
        model.activo = False
        model.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @list_route(methods=['get'])
    def filtro(self, request):
        try:
            tipos = TipoProducto.objects.filter(
                activo=True,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = PaginatedTipoProductoSerializer(tipos, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def combo(self, request):
        try:
            tipo = TipoProducto.objects.get(
                activo=True,
                nombre="combo"
            )

            serializer = TipoProductoSerializer(tipo)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def combo_mixto(self, request):
        try:
            tipo = TipoProducto.objects.get(
                activo=True,
                nombre="combo mixto"
            )

            serializer = TipoProductoSerializer(tipo)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:
            tipos = TipoProducto.objects.filter(
                activo=True,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = TipoProductoSerializer(tipos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    # Lista de Tipos de Productos Existentes que se muestran en la button-bar en la AppMovil
    @list_route(methods=['get'])
    def tipos_de_productos(self, request):
        tipos = TipoProducto.objects.filter(
            activo=True,
            mostrar=True
        ).order_by('nombre')

        serializer = TipoProductoSerializer(tipos, many=True)
        return Response(serializer.data)
