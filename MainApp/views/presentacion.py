from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import Presentacion
from MainApp.serializers import PresentacionSerializer
from MainApp.serializers.presentacion import PaginatedPresentacionSerializer
from MainApp.permisos import *


class PresentacionViewSet(viewsets.ModelViewSet):
    queryset = Presentacion.objects.filter(activo=True)
    serializer_class = PresentacionSerializer
    permission_classes = [BodegaPermission]
    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro(self, request):
        try:
            presentaciones = Presentacion.objects.filter(
                activo=True,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = PaginatedPresentacionSerializer(presentaciones, request, 10)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:
            presentaciones = Presentacion.objects.filter(
                activo=True,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = PresentacionSerializer(presentaciones,many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)