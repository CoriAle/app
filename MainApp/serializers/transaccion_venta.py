from MainApp.models import TransaccionVenta
from rest_framework import serializers

from MainApp.serializers.user import UserSerializer


class TransaccionVentaSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()

    class Meta:
        model = TransaccionVenta
        fields = (
            'id', 'movimiento', 'tipo_transaccion', 'usuario'
        )


class TransaccionVentaWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = TransaccionVenta
        fields = (
            'id', 'tipo_transaccion', 'usuario'
        )
