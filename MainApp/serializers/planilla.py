from rest_framework import serializers

class PlanillaSerializer(serializers.Serializer):
    nombres = serializers.CharField()
    direccion_persona = serializers.CharField()
    dias_trabajados = serializers.IntegerField()
    sueldo_base = serializers.DecimalField(max_digits=14, decimal_places=2, default=0)
    comision = serializers.DecimalField(max_digits=14, decimal_places=2, default=0)
    total = serializers.DecimalField(max_digits=14, decimal_places=2, default=0)
