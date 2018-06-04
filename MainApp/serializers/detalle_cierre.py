from MainApp.models import DetalleCierre
from rest_framework import serializers


class DetalleCierreSerializer(serializers.ModelSerializer):

    class Meta:
        model = DetalleCierre
        fields = (
            'id', 'cantidad', 'denominacion', 'total', 'tipo', 'creado', 'modificado'
        )
