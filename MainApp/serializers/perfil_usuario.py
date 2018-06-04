from django.contrib.auth.models import User

from MainApp.models import PerfilUsuario
from MainApp.models.historial_empleado import HistorialEmpleado
from MainApp.models.persona import Persona
from MainApp.serializers import PersonaWriteSerializer, UserWriteSerializer
from rest_framework import serializers
from django.db import transaction


class PerfilUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = PerfilUsuario
        fields = (
            'id', 'usuario', 'persona'
        )


class PerfilUsuarioWriteSerializer(serializers.ModelSerializer):
    usuario = UserWriteSerializer(required=False)
    persona = PersonaWriteSerializer(required=False)
    class Meta:
        model = PerfilUsuario
        fields = (
            'id', 'usuario', 'persona'
        )

    @transaction.atomic
    def create(self, validated_data):
        # extraemos la persona, evitamos el error si no existe
        try:
            persona_data = validated_data.pop('persona')
            try:
                historial_contratacion = persona_data.pop('historial_contratacion')
            except:
                historial_contratacion = []
                pass
            persona_data = Persona.objects.create(**persona_data)
            # Creamos la lista de historial que se nos ingresa
            for historial in historial_contratacion:
                HistorialEmpleado.objects.create(persona=persona_data, **historial)
        except:
            pass

        # extraemos la usuario, evitamos el error si no existe
        try:
            usuario_data = validated_data.pop('usuario')
            usuario_data = User.objects.create_user(**usuario_data)
        except:
            pass

        # creamos el perfilusuario
        perfilusuario = PerfilUsuario.objects.create(usuario=usuario_data, persona=persona_data, **validated_data)

        return perfilusuario
