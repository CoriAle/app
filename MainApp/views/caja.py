from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import Caja
from MainApp.models import CierreCaja
from MainApp.serializers import CajaSerializer
from MainApp.permisos import *


class CajaViewSet(viewsets.ModelViewSet):
    queryset = Caja.objects.filter(activo=True)
    serializer_class = CajaSerializer
    permission_classes = [CajeroPermission]
    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            if model.activo == True:
                abierta = CierreCaja.objects.filter(
                    caja_id=model.id,
                    activo=True
                )
                if len(abierta) == 0:
                    model.activo = False
                    model.save()
                    return Response(status=status.HTTP_204_NO_CONTENT)
                else:
                    return Response({'detail':'NO se puede eliminar Caja Abierta'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:
            cajas = Caja.objects.filter(
                activo=True,
            ).order_by('nombre')

            serializer = CajaSerializer(cajas, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    # Busca cajas dentro de Adminstracion de Cajas
    @list_route(methods=['get'])
    def buscar_cajas(self,request):

        cajas = Caja.objects.filter(
            activo=True,
            nombre__icontains=request.GET.get('query')
        ).order_by('nombre')

        serializer = CajaSerializer(cajas, many=True)
        return Response(serializer.data)
