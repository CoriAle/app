# -*- coding: utf-8 -*-
from django.db import models
from .caja import Caja
from .cuenta import Cuenta
from .forma_pago import FormaPago
from .movimiento import Movimiento
from .tipo_deposito_retiro import TipoDepositoRetiro
from django.contrib.auth.models import User
from django.db.models.signals import post_save

class DepositoRetiro(models.Model):

    """Depositos Retiros del Bar"""

    motivo = models.ForeignKey(TipoDepositoRetiro, null=True)
    monto = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    descripcion = models.TextField(null=True)
    numero_boleta = models.IntegerField(null=True, blank=True)
    anulado = models.BooleanField(default=False)
    forma_pago = models.ForeignKey(FormaPago, null=True, related_name='forma_pago') # Relacion a Forma de Pago para listar
    caja = models.ForeignKey(Caja, null=True, related_name='caja') # Relacion a Caja
    movimiento = models.ForeignKey(Movimiento, null=True, related_name='movimientos') # Relacion a Movimiento
    cuenta_salida = models.ForeignKey(Cuenta, related_name='cuenta_salida', null=True) # Relacion a Cuenta Salida
    cuenta_entrada = models.ForeignKey(Cuenta, related_name='cuenta_entrada', null=True) # Relacion a Cuenta Entrada
    usuario = models.ForeignKey(User, related_name='usuario', null=True) # Relacion a la Usuario para saber quien hizo la transaccion
    semanal = models.BooleanField(default=False) # Campo usado para saber si es semanal o no dentro de Pagos que sirve para reportes

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def __unicode__(self):
        return self.creado

    class Meta:
        app_label = 'MainApp'
