from __future__ import unicode_literals
from django.db import models

from MainApp.models.tipo_producto import TipoProducto
from .producto import Producto

class Combo(models.Model):

    """ Clase para el manejo de Combos """
    producto_combo = models.ForeignKey(Producto, related_name='padres', null=True)
    tipo_producto_combo = models.ForeignKey(TipoProducto, related_query_name='padres', null=True)
    producto_padre = models.ForeignKey(Producto, related_name='productos')
    cantidad = models.IntegerField(default=0)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)
    repetir = models.BooleanField(default=False)

    def __unicode__(self):
        return '%s / %s' % (self.producto_combo, self.creado)

    class Meta:
        app_label = 'MainApp'
        unique_together = ('producto_combo', 'producto_padre')
