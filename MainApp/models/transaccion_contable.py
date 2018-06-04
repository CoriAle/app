from __future__ import unicode_literals
from django.db import models


class TransaccionContable(models.Model):

    movimiento = models.IntegerField()
    tipo_movimiento = models.CharField(max_length=35)
    monto_venta = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    monto_costo = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    # usuario = models.IntegerField()
    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.creado)

    class Meta:
        app_label = 'MainApp'
