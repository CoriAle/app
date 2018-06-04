from rest_framework import serializers


class ImpresoraSerializer(serializers.Serializer):
    printer = serializers.CharField()
    device_uri = serializers.CharField()
    estado = serializers.CharField()
    mensaje = serializers.CharField()
    color = serializers.CharField()
    tareas_pendientes = serializers.CharField()
    printer_uri = serializers.CharField()

    class Meta:
        fields = ('printer', 'device_uri', 'estado', 'mensaje', 'color', 'tareas_pendientes', 'printer_uri')
