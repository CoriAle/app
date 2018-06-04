from MainApp.models import BailePersona
from rest_framework import serializers
from MainApp.serializers.baile import BaileSerializer
from MainApp.serializers.persona import PersonaSerializer


class BailePersonaSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()
    baile = BaileSerializer()
    class Meta:
        model = BailePersona
        fields = ('id', 'creado', 'persona', 'baile', 'anulado', 'costo')


class BailePersonaWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = BailePersona
        fields = ('id', 'creado', 'persona', 'baile', 'anulado', 'costo')
