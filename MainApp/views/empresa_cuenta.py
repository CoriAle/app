from MainApp.models import Configuracion
from rest_framework import serializers
from rest_framework import viewsets
from MainApp.serializers import EmpresaCuentaSerializer
from MainApp.permisos import *


class EmpresaCuentaViewSet(viewsets.ModelViewSet):

    serializer_class=EmpresaCuentaSerializer
    permission_classes = [AdminPermission]
    def get_queryset (self):
        query=self.request.GET.get('query', '')
        queryset=Configuracion.objects.filter(
            nombre_empresa__icontains=query
        ).select_related('cuentas')
        return queryset
