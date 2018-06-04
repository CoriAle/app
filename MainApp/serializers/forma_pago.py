from MainApp.models import FormaPago
from rest_framework import serializers


class FormaPagoSerializer(serializers.ModelSerializer):

    class Meta:
        model = FormaPago
        fields = (
            'id', 'movimiento', 'monto', 'tipo'
        )


class FormaPagoWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = FormaPago
        fields = (
            'id', 'monto', 'tipo'
        )

# Serializador que se usa unicamente para que se pueda agregar un 'motivo' en la forma de pago cuando se 'Realiza un Pago' desde la Web
class FormaPagoUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = FormaPago
        fields = (
            'id', 'monto', 'tipo', 'motivo'
        )
