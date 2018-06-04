from __future__ import unicode_literals
from django.db import models


class TipoProducto(models.Model):

    """ Clase para el manejo de Tipos de Producto. """
    nombre = models.CharField(max_length=150)
    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    mostrar = models.BooleanField(default=True) #Campo para saber si se va a mostrar en la AppMovil, en la Web se coloca esta caracteristica

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.creado)

    class Meta:
        app_label = 'MainApp'
