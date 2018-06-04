from MainApp.models import DetalleMovimiento
from rest_framework import serializers
from MainApp.models.movimiento import Movimiento
from MainApp.serializers.mesa import MesaSerializer
from MainApp.serializers.persona import PersonaSerializer
from MainApp.serializers.producto import ProductoSerializer


class MovimientoSerializer(serializers.ModelSerializer):
    mesa = MesaSerializer()

    class Meta:
        model = Movimiento
        fields = (
            'id', 'persona', 'tipo', 'total', 'total_costo', 'tipo_compra', 'tipo_baja', 'documento', 'motivo',
            'no_documento', 'descuento', 'porcentaje_descuento', 'monto_descuento', 'anulado', 'creado', 'modificado',
            'detalle', 'formas_pago', 'transacciones', 'mesa', 'nombre_cuenta', 'cuenta_separada', 'finalizado',
        )


class PedidoCocinaSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()
    persona = PersonaSerializer()
    movimiento = MovimientoSerializer()

    class Meta:
        model = DetalleMovimiento
        fields = ('id', 'movimiento', 'producto', 'persona', 'cantidad', 'precio_costo', 'precio_venta', 'cortesia',
                  'creado', 'modificado', 'de_combo_mixto', 'observacion', 'servido')


class PedidoCocinaWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = DetalleMovimiento
        fields = ('id', 'servido')