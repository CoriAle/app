from rest_framework import viewsets, status
from rest_framework.response import Response
from MainApp.models import PerfilUsuario
from MainApp.models.cuenta import Cuenta
from MainApp.models.persona import Persona
from MainApp.serializers import PerfilUsuarioSerializer, PerfilUsuarioWriteSerializer
from MainApp.views import SwappableSerializerMixin
from rest_framework.decorators import list_route
from MainApp.permisos import *


class PerfilUsuarioViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = PerfilUsuario.objects.all()
    model = PerfilUsuario
    permission_classes = [AdminPermission]
    serializer_class = PerfilUsuarioSerializer

    serializer_classes = {
        'GET': PerfilUsuarioSerializer,
        'POST': PerfilUsuarioWriteSerializer,
        'PUT': PerfilUsuarioWriteSerializer,
        'DELETE': PerfilUsuarioWriteSerializer,
        'PATCH': PerfilUsuarioWriteSerializer
    }

    def create(self, request, *args, **kwargs):
        try:
            serializer = PerfilUsuarioWriteSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                # Busca la ultima persona que se creo
                persona = Persona.objects.all().last()
                # Crea una cuenta para esta ulima persona creada
                cuenta = Cuenta.objects.create(
                    saldo = 0,
                    persona_id = persona.id
                )

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def busca_perfil_persona(self, request):
        try:
            perfil = PerfilUsuario.objects.get(persona=request.GET.get('id'))
            serializer = PerfilUsuarioWriteSerializer(perfil, context={'request': request})
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
