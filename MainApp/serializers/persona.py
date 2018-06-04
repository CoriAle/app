import hashlib
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.db import transaction
from MainApp.models import Persona
from MainApp.models.historial_empleado import HistorialEmpleado
from MainApp.serializers import TipoPersonaSerializer
from rest_framework import serializers
from MainApp.serializers.historial_empleado import HistorialEmpleadoSerializer


class PersonaSerializer(serializers.ModelSerializer):
    tipo_persona = TipoPersonaSerializer()
    historial_contratacion = HistorialEmpleadoSerializer(many=True)

    class Meta:
        model = Persona
        fields = ('id', 'tipo_persona', 'nombre', 'direccion', 'telefono', 'nit', 'activo', 'codigo_barra',
                  'hash_codigo_barra', 'creado', 'modificado', 'area', 'sueldo_cuenta', 'identificacion',
                  'clasificacion_empleado', 'historial_contratacion', 'fecha_pago', 'porcentaje_chica',
                  'anulaciones', 'cortesias', 'grupo', 'fecha_labores', 'impresora')

class PersonaNombreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id', 'nombre')

class PersonaEmpleadosSerializer(serializers.ModelSerializer):
    tipo_persona = TipoPersonaSerializer()
    ventas = serializers.DecimalField(max_digits=15,decimal_places=2,required=False,read_only=True)
    servicios = serializers.DecimalField(max_digits=15,decimal_places=2,required=False,read_only=True)
    adelantos = serializers.DecimalField(max_digits=15,decimal_places=2,required=False,read_only=True)
    gastos = serializers.DecimalField(max_digits=15,decimal_places=2,required=False,read_only=True)
    bailes = serializers.DecimalField(max_digits=15,decimal_places=2,required=False,read_only=True)

    class Meta:
        model = Persona
        fields = ('id', 'tipo_persona', 'nombre', 'direccion', 'telefono', 'nit', 'activo', 'codigo_barra',
                'hash_codigo_barra', 'creado', 'modificado', 'area', 'sueldo_cuenta', 'identificacion',
                'fecha_pago', 'ventas', 'servicios', 'adelantos', 'gastos', 'bailes', 'impresora')


class PersonaWriteSerializer(serializers.ModelSerializer):
    historial_contratacion = HistorialEmpleadoSerializer(many=True, required=False)

    class Meta:
        model = Persona
        fields = ('id', 'tipo_persona', 'nombre', 'direccion', 'telefono', 'nit', 'activo', 'codigo_barra',
                  'hash_codigo_barra', 'creado', 'modificado', 'area', 'sueldo_cuenta', 'identificacion',
                  'clasificacion_empleado', 'historial_contratacion', 'porcentaje_chica', 'anulaciones',
                  'cortesias', 'grupo', 'fecha_labores', 'impresora')

    @transaction.atomic
    def create(self, validated_data):
        # Extraemos el historial
        try:
            historial_contratacion = validated_data.pop('historial_contratacion')
        except:
            historial_contratacion = []
            pass

        # Creamos la persona
        persona = Persona.objects.create(**validated_data)

        # Creamos la lista de historial que se nos ingresa
        for historial in historial_contratacion:
            HistorialEmpleado.objects.create(persona=persona, **historial)

        # Generamos datos que necesitamos luego de haber creado a la persona
        hash_persona = str(persona.id) + str(persona.nombre) + str(persona.tipo_persona)
        persona.hash_codigo_barra = hashlib.md5(hash_persona).hexdigest()[0:5]
        persona.save()
        return persona


class PaginatedPersonaSerializer():
    def __init__(self, personas, request, num):
        paginator = Paginator(personas, num)
        page = request.query_params.get('page')
        try:
            personas = paginator.page(page)
        except PageNotAnInteger:
            personas = paginator.page(1)
        except EmptyPage:
            personas = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not personas.has_previous() else personas.previous_page_number()
        next = None if not personas.has_next() else personas.next_page_number()
        serializer = PersonaSerializer(personas, many=True)
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}

class PaginatedPersonaEmpleadosSerializer():
    def __init__(self, personas, request, num):
        paginator = Paginator(personas, num)
        page = request.query_params.get('page')
        try:
            personas = paginator.page(page)
        except PageNotAnInteger:
            personas = paginator.page(1)
        except EmptyPage:
            personas = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not personas.has_previous() else personas.previous_page_number()
        next = None if not personas.has_next() else personas.next_page_number()
        serializer = PersonaEmpleadosSerializer(personas, many=True)
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}
