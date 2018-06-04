from MainApp.models import Caja
from rest_framework import serializers


class CajaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caja
        fields = ('id', 'nombre', 'activo', 'creado', 'modificado')
