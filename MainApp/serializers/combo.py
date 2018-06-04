from MainApp.models import Combo
from rest_framework import serializers


class ComboSerializer(serializers.ModelSerializer):

    class Meta:
        model = Combo
        fields = ('id', 'producto_combo', 'tipo_producto_combo', 'producto_padre', 'cantidad', 'creado', 'modificado', 'repetir')


class ComboWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Combo
        fields = ('id', 'producto_combo', 'tipo_producto_combo', 'cantidad', 'creado', 'modificado', 'repetir')
