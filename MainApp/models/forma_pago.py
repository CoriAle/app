# -*- coding: utf-8 -*-
from django.db import models
from .movimiento import Movimiento


TIPOS_PAGOS = (
    (1, 'Efectivo'),
    (2, 'Tarjeta de crédito'),
    (3, 'Cheque'),
    (4, 'Cortesia'),)


class FormaPago(models.Model):

    """detalle del pago. """
    movimiento = models.ForeignKey(Movimiento, related_name='formas_pago')
    monto = models.DecimalField(max_digits=8, decimal_places=2)
    tipo = models.IntegerField(choices=TIPOS_PAGOS)
    motivo = models.TextField(max_length=500, default="", null=True)  # Campo utilizado para describir el TIPOS_PAGOS = 4, Cortesia

    class Meta:
        app_label = 'MainApp'
