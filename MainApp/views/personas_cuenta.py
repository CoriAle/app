from MainApp.models import Persona
from rest_framework import serializers
from rest_framework import viewsets, status
from MainApp.serializers import PersonaCuentaSerializer, UserNameSerializer
from MainApp.permisos import *
from django.contrib.auth.models import User
from rest_framework.decorators import list_route
from rest_framework.response import Response


class PersonaCuentaViewSet(viewsets.ModelViewSet):

    serializer_class=PersonaCuentaSerializer
    permission_classes = [CajeroPermission]
    def get_queryset (self):
        query=self.request.GET.get('query', '')
        tipo=self.request.GET.get('tipo', '')
        if tipo == 'False':
            codigo = False
        else:
            codigo = True

        queryset=Persona.objects.filter(
            activo=True,
            tipo_persona=1,
            codigo_barra=codigo,
            nombre__icontains=query
        ).select_related('cuenta')
        return queryset

    # Busqueda por Nickname  en **Reporte de Ventas por Empleado**
    @list_route(methods=['get'])
    def busca_usuario (self, request):
        query=request.GET.get('query')

        users=User.objects.filter(
            username__icontains=query
        )

        serializer = UserNameSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
