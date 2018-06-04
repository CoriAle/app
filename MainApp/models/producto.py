from __future__ import unicode_literals
from django.db import models
from .tipo_producto import TipoProducto
from simple_history.models import HistoricalRecords


class Producto(models.Model):

    """ Clase para el manejo de productos. """
    combo_productos = models.ManyToManyField('self', through='Combo', symmetrical=False, related_name='productos_combo')
    tipo_producto = models.ForeignKey(TipoProducto)
    nombre = models.CharField(max_length=150)
    precio_costo = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    existencia = models.IntegerField(default=0)
    existencia_minima = models.PositiveIntegerField(default=0)
    activo = models.BooleanField(default=True)
    es_combo = models.BooleanField(default=False)
    se_descuenta = models.BooleanField(default=False)
    combo_mixto = models.BooleanField(default=False)
    costo_minimo_producto = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    cantidad_productos = models.IntegerField(default=0)
    comsetible = models.BooleanField(default=False)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    history = HistoricalRecords()  # simple history

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.precio_costo)

    class Meta:
        app_label = 'MainApp'
