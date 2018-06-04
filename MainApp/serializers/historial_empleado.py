from MainApp.models import HistorialEmpleado
from rest_framework import serializers


class HistorialEmpleadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = HistorialEmpleado
        fields = ('id', 'tipo', 'fecha', 'observacion')


class HistorialEmpleadoWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = HistorialEmpleado
        fields = ('id', 'tipo', 'fecha', 'observacion', 'persona')