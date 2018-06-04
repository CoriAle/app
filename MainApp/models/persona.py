# -*- coding: utf-8 -*-
from django.db import models
from .tipo_persona import TipoPersona


class Persona(models.Model):
    # Opciones de tipo de Persona
    BAJO = 1
    MEDIO = 2
    ALTO = 3

    CLASIFICACIONES = (
        (BAJO, 'Bajo'),
        (MEDIO, 'Medio'),
        (ALTO, 'Alto'),)

    AREAS = (
        (1, 'Barra'),
        (2, 'Mesas'),
        (3, 'Pista'),
        (4, 'Servicio'),
        (5, 'VIP'),)

    GRUPOS = (
        (1, 'Bodeguero'),
        (2, 'Mesero'),
        (3, 'Cajero'),
        (4, 'Administrador'),
        (5, 'Cocina')
    )

    """clientes,proveedores y empleados"""
    tipo_persona = models.ForeignKey(TipoPersona)
    nombre = models.CharField(max_length=150)
    direccion = models.CharField(max_length=150, null=True, blank=True)
    codigo_barra = models.BooleanField(default=False)
    hash_codigo_barra = models.CharField(max_length=50, null=True, blank=True)
    telefono = models.CharField(max_length=30, blank=True)
    nit = models.CharField(max_length=10, null=True, blank=True)
    modificado = models.DateTimeField(auto_now=True)
    sueldo_cuenta = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    identificacion = models.CharField(max_length=45, blank=True)
    clasificacion_empleado = models.IntegerField(choices=CLASIFICACIONES, blank=True, null=True)
    area = models.IntegerField(choices=AREAS, blank=True, null=True)
    fecha_pago = models.DateTimeField(auto_now_add=True, null=True) #Fecha de ultimo pago que se le realizo al Empleado
    porcentaje_chica = models.DecimalField(max_digits=5, decimal_places=2, default=0) #Porcentaje que se maneja para la chica para sus servicios
    cortesias = models.BooleanField(default=False)
    anulaciones = models.BooleanField(default=False)
    grupo = models.IntegerField(choices=GRUPOS, null=True, blank=True)
    fecha_labores = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, editable=True) #Fecha de inicio de labores
    impresora = models.CharField(max_length=100, blank=True, null=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.nombre


    class Meta:
        app_label = 'MainApp'
