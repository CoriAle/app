from MainApp.models import ProductoPresentacion, Producto
from MainApp.serializers import ComboSerializer, TipoProductoSerializer
from MainApp.serializers.presentacion import PresentacionSerializer
from MainApp.serializers.combo import ComboSerializer

from rest_framework import serializers


class ProductoSerializer(serializers.ModelSerializer):
    tipo_producto = TipoProductoSerializer()
    productos = ComboSerializer(many=True)

    class Meta:
        model = Producto
        fields = (
            'id', 'tipo_producto', 'precio_costo', 'existencia', 'existencia_minima',
            'es_combo', 'se_descuenta', 'combo_mixto', 'costo_minimo_producto',
            'cantidad_productos', 'nombre', 'activo', 'creado',
            'modificado', 'productos'
        )


class ProductoPresentacionSerializer(serializers.ModelSerializer):
    # presentacion = PresentacionSerializer()
    presentacion_nombre = serializers.SerializerMethodField(read_only=True,required=False)
    producto = ProductoSerializer()

    class Meta:
        model = ProductoPresentacion
        fields = (
            'id', 'producto', 'presentacion', 'precio_venta', 'se_imprime_ticket', 'presentacion_nombre',
            'comision_mesero', 'cantidad_fichas', 'precio_fichas', 'se_carga_a_empleada'
        )
    def get_presentacion_nombre(self, obj):
            return obj.presentacion.nombre

class ProductoPresentacionesMovilSerializer(serializers.ModelSerializer):
    presentacion = PresentacionSerializer()
    producto = ProductoSerializer()

    class Meta:
        model = ProductoPresentacion
        fields = (
            'id', 'producto', 'presentacion', 'precio_venta', 'se_imprime_ticket',
            'comision_mesero', 'cantidad_fichas', 'precio_fichas', 'se_carga_a_empleada'
        )

class PresentacionesProductoSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()
    presentacion = PresentacionSerializer()
    nombre = serializers.SerializerMethodField()

    class Meta:
        model = ProductoPresentacion
        fields = (
            'id', 'producto', 'presentacion', 'precio_venta', 'se_imprime_ticket', 'mostrar', 'porcentaje_completo',
            'comision_mesero', 'cantidad_fichas', 'activo', 'se_carga_a_empleada', 'precio_fichas', 'nombre'
        )

    def get_nombre(self, obj):
        return obj.presentacion.nombre
