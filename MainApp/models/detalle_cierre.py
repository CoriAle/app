from __future__ import unicode_literals
from django.db import models
from MainApp.models.cierre_caja import CierreCaja


class DetalleCierre(models.Model):

    """ Clase para el detalle de los cierres de caja """
    cierre = models.ForeignKey(CierreCaja, related_name='detalle')
    cantidad = models.IntegerField(default=0)
    denominacion = models.CharField(max_length=10, default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    tipo = models.BooleanField(default=True)

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.creado)

    class Meta:
        app_label = 'MainApp'
