from rest_framework.decorators import list_route
from MainApp.models import Configuracion
from MainApp.serializers import ConfiguracionSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from .cuenta import CuentaViewSet
from MainApp.permisos import *


class ConfiguracionViewSet(viewsets.ModelViewSet):
    queryset = Configuracion.objects.all()
    serializer_class = ConfiguracionSerializer
    permission_classes = [AdminPermission]
    serializer_classes = {
        'GET': ConfiguracionSerializer,
        'POST': ConfiguracionSerializer,
        'PUT': ConfiguracionSerializer,
        'DELETE': ConfiguracionSerializer,
        'PATCH': ConfiguracionSerializer
    }

    @list_route(methods=['get'])
    def busca_configuracion(self, request):
        try:
            configuracion = Configuracion.objects.filter().first()

            serializer = ConfiguracionSerializer(configuracion, context={'request': request})
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        try:
            serializer = ConfiguracionSerializer(data=request.data)

            if serializer.is_valid():
                model = serializer.save()
                cuenta = CuentaViewSet()
                cuenta.save_cuenta(None,model)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
