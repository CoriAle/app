from django.db import transaction

from MainApp.models import CierreCaja, DetalleCierre
from rest_framework import serializers

from MainApp.serializers import CajaSerializer
from MainApp.serializers.detalle_cierre import DetalleCierreSerializer
from MainApp.serializers.user import UserNameSerializer


class CierreCajaSerializer(serializers.ModelSerializer):
    detalle = DetalleCierreSerializer(many=True)
    # caja = CajaSerializer()

    class Meta:
        model = CierreCaja
        fields = ('id', 'caja', 'usuario', 'apertura', 'cierre', 'vendido', 'diferencia',
                  'vendido_costo', 'creado', 'modificado', 'detalle')

    @transaction.atomic
    def create(self, validated_data):
        # extraemos detalles del movimiento
        detalle_data = validated_data.pop('detalle')

        # creamos el movimiento
        cierre = CierreCaja.objects.create(**validated_data)

        # # creamos los detalles del movimiento
        for detalle_data in detalle_data:
            DetalleCierre.objects.create(cierre=cierre, **detalle_data)

        return cierre

class CierreCajaVerifySerializer(serializers.ModelSerializer):
    detalle = DetalleCierreSerializer(many=True)
    # caja = CajaSerializer()

    class Meta:
        model = CierreCaja
        fields = ('id', 'caja', 'usuario', 'apertura', 'cierre', 'vendido', 'diferencia',
                  'vendido_costo', 'creado', 'modificado', 'detalle', 'activo')

class CierreCajaUpdateSerializer(serializers.ModelSerializer):
    # detalle = DetalleCierreSerializer(many=True)

    class Meta:
        model = CierreCaja
        fields = ('id', 'caja', 'usuario', 'apertura', 'cierre', 'vendido', 'diferencia',
                  'vendido_costo', 'activo')


class CierreCajaListadoSerializer(serializers.ModelSerializer):
    caja = CajaSerializer()
    usuario = UserNameSerializer()
    costo_vendido = serializers.DecimalField(default=0, max_digits=18, decimal_places=2, required=False)

    class Meta:
        model = CierreCaja
        fields = ('id', 'caja', 'usuario', 'apertura', 'cierre', 'vendido', 'diferencia',
                  'vendido_costo', 'creado', 'modificado', 'costo_vendido')
