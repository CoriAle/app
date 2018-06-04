from __future__ import unicode_literals
from django.db import models


class LibroContable(models.Model):

    """ Clase para el manejo de Libros Contables COMPRAS, VENTAS, BANCOS ETC"""
    nombre = models.CharField(max_length=150)
    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.creado)

    class Meta:
        app_label = 'MainApp'