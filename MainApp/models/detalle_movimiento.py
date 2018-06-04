# -*- coding: utf-8 -*-
from django.db import models
from .producto import Producto
from .producto_presentacion import ProductoPresentacion
from .movimiento import Movimiento
from .persona import Persona
from simple_history.models import HistoricalRecords


class DetalleMovimiento(models.Model):

    """ Productos afectados por movimientos. """

    movimiento = models.ForeignKey(Movimiento, related_name='detalle')
    producto_presentacion = models.ForeignKey(ProductoPresentacion, null=True, related_name='producto_presentacion') # Relacion a PRODUCTO PRESENTACION
    producto = models.ForeignKey(Producto, null=True, related_name='producto') # Relacion a PRODUCTO
    persona = models.ForeignKey(Persona, null=True)  #solo asignada en la venta
    cantidad = models.IntegerField()
    servido = models.BooleanField(default=False)
    precio_costo = models.DecimalField(max_digits=8, decimal_places=2,default=0) # ventas y compras
    precio_venta = models.DecimalField(max_digits=8, decimal_places=2,default=0) # ventas y compras
    cortesia = models.BooleanField(default=False)
    de_combo_mixto = models.IntegerField(null=True, default=None)
    observacion = models.TextField(max_length=100, default="", null=True, blank=True)

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    comision_mesero  = models.DecimalField(max_digits=8, decimal_places=2,default=0) # comision del mesero
    cantidad_ficha = models.IntegerField(null=True, default=None) # cantidad de fichas del movimiento
    precio_ficha = models.DecimalField(max_digits=8, decimal_places=2,default=0) # Precio de fica

    history = HistoricalRecords()  # simple history

    class Meta:
        app_label = 'MainApp'

    def __unicode__(self):
        return "%s - %i" % (self.producto, self.cantidad)
