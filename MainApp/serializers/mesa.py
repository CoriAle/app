from MainApp.models import Mesa
from rest_framework import serializers


class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = ('id', 'nombre', 'cantidad_asientos', 'activo', 'creado', 'modificado')
