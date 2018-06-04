from __future__ import unicode_literals
from django.db import models

from MainApp.models import Presentacion, Producto
from simple_history.models import HistoricalRecords

class ProductoPresentacion(models.Model):

    """ Clase para el manejo de Presentacion de Producto """
    producto = models.ForeignKey(Producto, related_name='productos_presentacion')
    presentacion = models.ForeignKey(Presentacion, related_name='presentaciones')
    precio_venta = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    se_imprime_ticket = models.BooleanField(default=False)
    comision_mesero = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    cantidad_fichas = models.IntegerField(default=0)
    precio_fichas = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    se_carga_a_empleada = models.BooleanField(default=False)
    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    mostrar = models.BooleanField(default=True) #Campo para saber si se va a mostrar en la AppMovil, en la Web se coloca esta caracteristica
    porcentaje_completo = models.BooleanField(default=False) #Campo para saber si se va a cargar el porcentaje, en la Web se coloca esta caracteristica

    history = HistoricalRecords()  # simple history

    def __unicode__(self):
        return '%s / %s / %s' % (self.producto, self.presentacion, self.precio_venta)

    class Meta:
        app_label = 'MainApp'
