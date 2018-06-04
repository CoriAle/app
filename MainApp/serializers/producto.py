from django.db import transaction

from MainApp.models import Producto, Combo, ProductoPresentacion
from MainApp.models.tipo_producto import TipoProducto
from MainApp.serializers import TipoProductoSerializer
from MainApp.serializers import ComboSerializer, ComboWriteSerializer, PresentacionSerializer, PresentacionesProductoSerializer
from rest_framework import serializers


class ProductoSerializer(serializers.ModelSerializer):
    tipo_producto = TipoProductoSerializer()
    # presentacion = PresentacionSerializer()
    productos = ComboSerializer(many=True)

    class Meta:
        model = Producto
        fields = (
            'id', 'tipo_producto', 'precio_costo', 'existencia', 'existencia_minima',
            'es_combo', 'se_descuenta', 'combo_mixto', 'costo_minimo_producto',
            'cantidad_productos', 'nombre', 'activo', 'creado',
            'modificado', 'productos', 'comsetible'
        )


class ProductoPresentacionSerializer(serializers.ModelSerializer):
    # producto = ProductoSerializer()
    # presentacion = PresentacionSerializer()

    class Meta:
        model = ProductoPresentacion
        fields = (
            'id', 'presentacion', 'precio_venta', 'se_imprime_ticket',
            'comision_mesero', 'cantidad_fichas', 'precio_fichas', 'se_carga_a_empleada'
        )

# Serializador para 'create' de Producto con nuevo campo 'mostrar' el cual se utilizara para AppMovil
class ProductoPresentacionCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductoPresentacion
        fields = (
            'id', 'presentacion', 'precio_venta', 'se_imprime_ticket', 'mostrar',
            'comision_mesero', 'cantidad_fichas', 'precio_fichas', 'se_carga_a_empleada'
        )

class ProductoTipoSerializer(serializers.ModelSerializer):
    tipo_producto = TipoProductoSerializer()
    productos_presentacion = ProductoPresentacionSerializer(many=True)
    productos = ComboSerializer(many=True)

    class Meta:
        model = Producto
        fields = (
            'id', 'tipo_producto', 'precio_costo', 'existencia', 'existencia_minima',
            'es_combo', 'se_descuenta', 'combo_mixto', 'costo_minimo_producto', 'comsetible',
            'cantidad_productos', 'nombre', 'activo', 'creado', 'modificado', 'productos', 'productos_presentacion'
        )


class ProductoWriteSerializer(serializers.ModelSerializer):
    productos_presentacion = ProductoPresentacionCreateSerializer(many=True, required=False)
    productos = ComboWriteSerializer(many=True)

    class Meta:
        model = Producto
        fields = (
            'id', 'tipo_producto', 'precio_costo', 'existencia', 'existencia_minima',
            'es_combo', 'se_descuenta', 'combo_mixto', 'costo_minimo_producto',
            'cantidad_productos', 'nombre', 'activo', 'creado', 'comsetible',
            'modificado', 'productos', 'productos_presentacion'
        )

    @transaction.atomic
    def create(self, validated_data):
        print validated_data['productos_presentacion']
        # extraemos los productos, evitamos el error si no existe
        try:
            productos_data = validated_data.pop('productos')
            presentaciones_data = validated_data.pop('productos_presentacion')
            print presentaciones_data
        except:
            pass

        # creamos el producto
        producto = Producto.objects.create(**validated_data)

        # creamos los combos
        for presentacion in presentaciones_data:
            ProductoPresentacion.objects.create(producto=producto, **presentacion)

        # creamos los combos
        for producto_data in productos_data:
            Combo.objects.create(producto_padre=producto, **producto_data)

        return producto


class TipoProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoProducto
        fields = ('id', 'nombre', 'activo', 'creado', 'modificado')


class ComboShowSerializer(serializers.ModelSerializer):
    producto_combo = ProductoSerializer()
    tipo_producto_combo = TipoProductoSerializer()

    class Meta:
        model = Combo
        fields = ('id', 'producto_combo', 'tipo_producto_combo', 'cantidad', 'creado', 'modificado', 'repetir')


class ProductoShowSerializer(serializers.ModelSerializer):
    tipo_producto = TipoProductoSerializer()
    # presentacion = PresentacionSerializer()
    productos = ComboShowSerializer(many=True)

    class Meta:
        model = Producto
        fields = (
            'id', 'tipo_producto', 'precio_costo', 'existencia', 'existencia_minima',
            'es_combo', 'se_descuenta', 'combo_mixto', 'costo_minimo_producto',
            'cantidad_productos', 'nombre', 'activo', 'creado', 'comsetible',
            'modificado', 'productos'
        )


class ProductoUpdateSerializer(serializers.ModelSerializer):
    productos = ComboWriteSerializer(many=True)
    tipo_producto = TipoProductoSerializer()
    presentacion = PresentacionSerializer(many=True)

    class Meta:
        model = Producto
        fields = (
            'id', 'tipo_producto', 'presentacion', 'precio_costo', 'existencia', 'existencia_minima',
            'es_combo', 'se_descuenta', 'combo_mixto', 'costo_minimo_producto',
            'cantidad_productos', 'nombre', 'activo', 'creado', 'comsetible',
            'modificado', 'productos'
        )

class ProductoUpdateGeneralSerializer(serializers.ModelSerializer):
    # tipo_producto = TipoProductoSerializer()
    # presentacion = ProductoPresentacion(many=True, required=False)
    # productos_presentacion = ProductoPresentacion(many=True, required=False)

    class Meta:
        model = Producto
        fields = (
            'id',
            'nombre',
            'tipo_producto',
            'existencia_minima',
            'precio_costo',
            'se_descuenta',
            'comsetible'
        )
