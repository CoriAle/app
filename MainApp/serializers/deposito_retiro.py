import hashlib
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from MainApp.models import DepositoRetiro
from MainApp.serializers import UserNameSerializer
from MainApp.serializers.caja import CajaSerializer
from MainApp.serializers.cuenta import CuentaPersonaSerializer
from MainApp.serializers.cuenta import CuentaEmpresaSerializer
from MainApp.serializers.cuenta import PersonaTipoPersonaCuentaSerializer
from rest_framework import serializers


class DepositoRetiroCrearSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepositoRetiro
        fields = ('id', 'usuario', 'monto', 'descripcion', 'caja', 'motivo',
                    'cuenta_entrada', 'cuenta_salida', 'creado', 'semanal')

class DepositoMovimientoSerializer(serializers.ModelSerializer):
    nombre_persona = serializers.SerializerMethodField()
    cuenta_entrada = CuentaPersonaSerializer()
    cuenta_salida = CuentaEmpresaSerializer()
    tipo_persona = serializers.SerializerMethodField()

    class Meta:
        model = DepositoRetiro
        fields = ('id', 'monto', 'descripcion', 'caja', 'motivo', 'forma_pago',
                    'cuenta_entrada', 'cuenta_salida', 'creado', 'nombre_persona', 'tipo_persona')

    def get_nombre_persona(self, obj):
        return obj.cuenta_entrada.persona.nombre

    def get_tipo_persona(self, obj):
        return obj.cuenta_entrada.persona.tipo_persona.nombre


class DepositoRetiroSerializer(serializers.ModelSerializer):
    usuario = UserNameSerializer()
    nombre_persona = serializers.SerializerMethodField()
    cuenta_entrada = CuentaPersonaSerializer()
    cuenta_salida = CuentaEmpresaSerializer()
    tipo_persona = serializers.SerializerMethodField()

    class Meta:
        model = DepositoRetiro
        fields = ('id', 'usuario', 'monto', 'descripcion', 'caja', 'motivo', 'forma_pago',
                    'cuenta_entrada', 'cuenta_salida', 'creado', 'nombre_persona', 'tipo_persona')

    def get_nombre_persona(self, obj):
        return obj.cuenta_entrada.persona.nombre

    def get_tipo_persona(self, obj):
        return obj.cuenta_entrada.persona.tipo_persona.nombre

class PaginatedDepositoRetiroSerializer():
    def __init__(self, pagos, request, num):
        paginator = Paginator(pagos, num)
        page = request.query_params.get('page')
        try:
            pagos = paginator.page(page)
        except PageNotAnInteger:
            pagos = paginator.page(1)
        except EmptyPageDepositoRetiroFinanzasSerializer:
            pagos = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not pagos.has_previous() else pagos.previous_page_number()
        next = None if not pagos.has_next() else pagos.next_page_number()
        serializer = DepositoRetiroSerializer(pagos, many=True, context={'request': request})
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}

class DepositoRetiroFinanzasSerializer(serializers.ModelSerializer):
    usuario = UserNameSerializer()
    # nombre_persona = serializers.SerializerMethodField()
    # tipo_persona = serializers.SerializerMethodField()
    cuenta_entrada = PersonaTipoPersonaCuentaSerializer()
    caja = CajaSerializer()

    class Meta:
        model = DepositoRetiro
        fields = ('id', 'usuario', 'monto', 'descripcion', 'caja', 'motivo', 'forma_pago',
                    'cuenta_entrada', 'creado', 'modificado')

    # def get_nombre_persona(self, obj):
    #     return obj.cuenta_entrada.persona.nombre
    #
    # def get_tipo_persona(self, obj):
    #     return obj.cuenta_entrada.persona.tipo_persona.nombre

class PaginatedDepositoRetiroFinanzasSerializer():
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
        serializer = DepositoRetiroFinanzasSerializer(pagos, many=True, context={'request': request})
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}
