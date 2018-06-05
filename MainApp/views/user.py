from django.contrib.auth.models import User
from rest_framework.decorators import list_route, detail_route
from MainApp.models import PerfilUsuario, Persona
from MainApp.serializers import PerfilUsuarioWriteSerializer
from MainApp.serializers.user import UserSerializer, UserWriteSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from MainApp.views import SwappableSerializerMixin
from MainApp.permisos import *


class UserViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AnyPermission]
    serializer_classes = {
        'PUT': UserWriteSerializer,
    }

    @list_route(methods=['get'], permission_classes=[AnyPermission])
    def busca_usuario_nick(self, request):
        print("hola")
        try:
            usuario = User.objects.get(
                username=request.GET.get('nick'))

            serializer = UserSerializer(usuario, context={'request': request})
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def busca_usuario(self, request):
        try:
            print("hola")
            usuario = User.objects.get(
                username=request.GET.get('nick'))
            print(usuario)
            perfil = PerfilUsuario.objects.get(usuario=usuario)
            # persona = Persona.objects.get(id=perfil.persona)
            serializer = PerfilUsuarioWriteSerializer(perfil, context={'request': request})
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['put'])
    def cambiar_usuario_password(self, request, *args, **kwargs):
        try:
            model = self.get_object()
            usuario = request.data.get('username')
            password = request.data.get('password')
            if password != None:
                model.set_password(password)
            model.username = usuario
            model.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def hace_cortesias(self, request):
        try:
            usuario = User.objects.get(
                username=request.GET.get('id'))
            perfil = PerfilUsuario.objects.get(usuario=usuario)
            data = {"cortesias": perfil.persona.cortesias}
            return Response(data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def cancela_ordenes(self, request):
        try:
            usuario = User.objects.get(
                username=request.GET.get('id'))
            perfil = PerfilUsuario.objects.get(usuario=usuario)
            data = {"anulaciones": perfil.persona.anulaciones}
            return Response(data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
