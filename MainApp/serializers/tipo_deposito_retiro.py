from MainApp.models import TipoDepositoRetiro
from rest_framework import serializers


class TipoDepositoRetiroSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoDepositoRetiro
        fields = ('id', 'nombre', 'activo', 'tipo_ingreso_egreso')
