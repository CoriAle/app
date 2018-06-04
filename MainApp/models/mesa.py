from __future__ import unicode_literals
from django.db import models


class Mesa(models.Model):

    """ Clase para el manejo de mesas """
    nombre = models.CharField(max_length=150)
    cantidad_asientos = models.PositiveIntegerField(default=0)
    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.cantidad_asientos)

    class Meta:
        app_label = 'MainApp'