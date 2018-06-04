from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from MainApp.models.caja import Caja


class CierreCaja(models.Model):

    """ Clase para el manejo de los cierres de caja """
    caja = models.ForeignKey(Caja)
    usuario = models.ForeignKey(User)
    apertura = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    cierre = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    vendido = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    diferencia = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    vendido_costo = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    activo = models.BooleanField(default=True)

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        # return '%s / %s' % (self.nombre, self.creado)
        return '%s' % (self.modificado)

    class Meta:
        app_label = 'MainApp'
