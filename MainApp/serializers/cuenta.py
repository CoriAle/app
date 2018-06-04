from MainApp.models import Cuenta
from rest_framework import serializers
from MainApp.serializers import PersonaSerializer


class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ('id', 'empresa', 'persona', 'saldo')

class CuentaEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ('id', 'empresa','saldo')

class CuentaPersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ('id', 'persona', 'saldo')

class PersonaTipoPersonaCuentaSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()
    class Meta:
        model = Cuenta
        fields = ('id', 'persona', 'saldo')
