from MainApp.models.persona import Persona
from MainApp.serializers import CuentaPersonaSerializer
from rest_framework import serializers

class PersonaCuentaSerializer(serializers.ModelSerializer):
    cuenta=CuentaPersonaSerializer()

    class Meta:
        model=Persona
        fields=('id', 'nombre', 'cuenta')
