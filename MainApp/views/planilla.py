from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from MainApp.models import Persona
from MainApp.serializers import PlanillaSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from django.db.models import F
from MainApp.permisos import *


class PlanillaViewSet(viewsets.GenericViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    permission_classes = [AdminPermission]
    def list(self, request):
        queryset = Persona.objects.annotate(nombres=F('nombre'), direccion_persona=F('direccion'),
                    sueldo_base=F('sueldo_cuenta')).values('nombres','direccion_persona','sueldo_base')
        serializer_class = PlanillaSerializer
        return Response(queryset)
