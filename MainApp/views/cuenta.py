import datetime
from django.core.exceptions import ObjectDoesNotExist
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import Cuenta
from MainApp.serializers import CuentaSerializer
from MainApp.permisos import *


class CuentaViewSet(viewsets.ModelViewSet):
    permission_classes = [AdminPermission]
    serializer_class = CuentaSerializer

    def get_queryset(response):
        queryset = Cuenta.objects.all()
        return queryset

    # Crea una cuenta para una Persona o Empresa
    def save_cuenta(self, persona, empresa):
        if persona == None:
            cuenta = Cuenta(
                empresa = empresa,
                saldo = 0
            )
            cuenta.save()
        if empresa == None:
            cuenta = Cuenta(
                persona = persona,
                saldo = 0
            )
            cuenta.save()

    # Consulta de la cuenta de una persona en especifico
    @list_route(methods=['get'])
    def me(self, request):
        try:
            cuenta = Cuenta.objects.get(persona_id=request.GET.get('id'))
            serializer = CuentaSerializer(cuenta)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response({"detail": "No se encontro la cuenta de la persona"}, status=status.HTTP_404_NOT_FOUND)
