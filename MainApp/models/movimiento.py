# -*- coding: utf-8 -*-
from django.db import models

from MainApp.models.mesa import Mesa
from .persona import Persona
from simple_history.models import HistoricalRecords


TIPO_MOVIMIENTO = ((1, 'Ingreso'), (2, 'Venta'), (3, 'Baja'))
TIPOS_COMPRA = ((1, 'Contado'), (2, 'Crédito'))
TIPOS_BAJA = ((1, 'Pérdida'), (2, 'Robo'), (3, 'Devolución'), (4, 'Caducidad'), (5, 'Daño') )
DOCUMENTOS = ((1, 'Factura'), (2, 'Recibo'), (3, 'Vale'))
ESTADO = ((1, 'Pedido'), (2, 'Cancelado'), (3, 'Cobrado'))


class Movimiento(models.Model):

    """ Movimientos de productos, ingresos, ventas, y bajas. """

    persona = models.ForeignKey(Persona, null=True)
    mesa = models.ForeignKey(Mesa, null=True)
    tipo = models.IntegerField(choices=TIPO_MOVIMIENTO)
    total = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    total_costo = models.DecimalField(max_digits=8, decimal_places=2, default=0)

    tipo_compra = models.IntegerField(choices=TIPOS_COMPRA, default=1)  # compra
    tipo_baja = models.IntegerField(choices=TIPOS_BAJA, default=1)

    nombre_cuenta = models.TextField(max_length=25, default="", null=True)
    cuenta_separada = models.BooleanField(default=False) # VALIDACION desde AppMovil "Enviar a caja" cambia a True y con este campo se listan las mesas enviadas caja en la AppWeb
    finalizado = models.BooleanField(default=False) #campo para saber si esta o no ocupada la mesa
    documento = models.PositiveSmallIntegerField(choices=DOCUMENTOS, default=1)  # compra
    motivo = models.TextField(max_length=500, default="", null=True)  #baja
    no_documento = models.CharField(max_length=30, null=True)  # compra
    descuento = models.BooleanField(default=False)  # venta
    porcentaje_descuento = models.IntegerField(null=True, blank=True)  # venta
    monto_descuento = models.DecimalField(max_digits=6, decimal_places=2,
                                          null=True, blank=True)  # venta
    anulado = models.BooleanField(default=False)

    creado = models.DateTimeField(auto_now_add=True, null=True)
    modificado = models.DateTimeField(auto_now=True, null=True)

    history = HistoricalRecords()  # simple history

    class Meta:
        app_label = 'MainApp'
