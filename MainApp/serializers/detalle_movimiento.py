from MainApp.models import DetalleMovimiento
from MainApp.serializers import TipoProductoSerializer, ComboSerializer, ComboWriteSerializer, ProductoPresentacionSerializer
from rest_framework import serializers
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from MainApp.serializers.persona import PersonaSerializer
from MainApp.serializers.producto import ProductoSerializer


class DetalleMovimientoSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()
    persona = PersonaSerializer()
    producto_presentacion = ProductoPresentacionSerializer()
    conteo = serializers.IntegerField(required=False,read_only=True)
    precio_ficha = serializers.DecimalField(max_digits=8, decimal_places=2, default=0, required=False, read_only=True)

    class Meta:
        model = DetalleMovimiento
        fields = (
            'id', 'movimiento', 'producto', 'persona', 'cantidad', 'precio_costo', 'precio_venta', 'cortesia',
            'creado', 'modificado', 'de_combo_mixto', 'observacion', 'producto_presentacion', 'conteo', 'precio_ficha'
        )

class DetalleMovimientoCocinaSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()
    persona = PersonaSerializer()
    producto_presentacion = ProductoPresentacionSerializer()

    class Meta:
        model = DetalleMovimiento
        fields = (
            'id', 'movimiento', 'producto', 'persona', 'cantidad', 'precio_costo', 'precio_venta', 'cortesia',
            'creado', 'modificado', 'de_combo_mixto', 'observacion', 'producto_presentacion', 'servido'
        )


class DetalleMovimientoWriteSerializer(serializers.ModelSerializer):
    producto_presentacion = ProductoPresentacionSerializer()
    producto = ProductoSerializer()
    # persona = PersonaSerializer()

    class Meta:
        model = DetalleMovimiento
        fields = (
            'id', 'producto', 'persona', 'cantidad', 'precio_costo', 'precio_venta', 'cortesia', 'de_combo_mixto', 'observacion',
            'producto', 'producto_presentacion', 'comision_mesero', 'cantidad_ficha', 'precio_ficha'
        )
class DetalleMovimientoCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = DetalleMovimiento
        fields = (
            'id', 'producto', 'persona', 'cantidad', 'precio_costo', 'precio_venta', 'cortesia', 'de_combo_mixto', 'observacion'
        )
# APLICACION MOVIL
class DetalleMovimientoMovilWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = DetalleMovimiento
        fields = (
            'id', 'producto', 'persona', 'cantidad', 'precio_costo', 'precio_venta', 'cortesia', 'de_combo_mixto', 'observacion',
            'producto', 'producto_presentacion', 'comision_mesero', 'cantidad_ficha', 'precio_ficha'
        )

class PaginatedDetalleMovimientoSerializer():
    def __init__(self, pagos, request, num):
        paginator = Paginator(pagos, num)
        page = request.query_params.get('page')
        try:
            pagos = paginator.page(page)
        except PageNotAnInteger:
            pagos = paginator.page(1)
        except EmptyPage:
            pagos = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not pagos.has_previous() else pagos.previous_page_number()
        next = None if not pagos.has_next() else pagos.next_page_number()
        serializer = DetalleMovimientoSerializer(pagos, many=True, context={'request': request})
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}
