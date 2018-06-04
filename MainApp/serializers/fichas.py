from rest_framework import serializers


class FichaDetalleSerializer(serializers.Serializer):
    item = serializers.CharField()
    fichas = serializers.IntegerField()
    valor = serializers.DecimalField(max_digits=6, decimal_places=2)
    total = serializers.DecimalField(max_digits=6, decimal_places=2)


class FichasSerializer(serializers.Serializer):
    fecha = serializers.DateTimeField()
    mesero = serializers.CharField()
    chica = serializers.CharField()
    detalle = FichaDetalleSerializer(many=True)
    total = serializers.DecimalField(max_digits=6, decimal_places=2)

    class Meta:
        fields = ('fecha', 'mesero', 'chica', 'total', 'detalle')
