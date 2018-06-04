from __future__ import unicode_literals
from django.db import models
from .movimiento import Movimiento
from django.contrib.auth.models import User

TIPO_TRANSACCION = ((1, 'Pedido'), (2, 'Anulado'), (3, 'Cobrado'), (4, 'Pendiente de Pago'))

class TransaccionVenta(models.Model):

    """ Clase para el manejo de Transacciones de Venta """

    movimiento = models.ForeignKey(Movimiento, related_name='transacciones')
    tipo_transaccion = models.IntegerField(choices=TIPO_TRANSACCION, default=1)  # Pedido
    usuario = models.ForeignKey(User)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '%s / %s' % (self.producto_combo, self.creado)

    class Meta:
        app_label = 'MainApp'
