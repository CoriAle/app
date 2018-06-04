from MainApp.models import Baile
from rest_framework import serializers


class BaileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Baile
        fields = ('id', 'nombre_baile', 'activo', 'creado', 'modificado', 'costo')


class BaileWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baile
        fields = ('id', 'nombre_baile', 'activo', 'creado', 'modificado', 'costo')
        read_only_fields = ('creado_por',)


class BaileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baile
        fields = ('id', 'nombre_baile', 'activo', 'creado', 'modificado', 'costo')
