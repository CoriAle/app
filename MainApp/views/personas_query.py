from MainApp.models import Persona
from rest_framework import serializers
from rest_framework import viewsets
from MainApp.serializers import PersonaCuentaSerializer
from MainApp.permisos import *

class PersonaQueryViewSet(viewsets.ModelViewSet):

    serializer_class=PersonaCuentaSerializer
    permission_classes = [CajeroPermission]
    def get_queryset (self):
        query=self.request.GET.get('query', '')
        tipo=self.request.GET.get('tipo', '')
        queryset=Persona.objects.filter(
            activo=True,
            tipo_persona=tipo,
            nombre__icontains=query
        ).select_related('cuenta')
        return queryset
