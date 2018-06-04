from __future__ import unicode_literals
from django.db import models


class Configuracion(models.Model):
    """ Clase para el manejo de las configuracion de jornadas """
    nombre_empresa = models.CharField(max_length=150)
    inicio_jornada = models.DateTimeField()
    finalizacion_jornada = models.DateTimeField()
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '%s / %s' % (self.nombre_empresa, self.creado)

    class Meta:
        app_label = 'MainApp'
