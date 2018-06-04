from __future__ import unicode_literals
from django.db import models


class TipoDepositoRetiro(models.Model):

    """ Clase para el manejo de Tipos de Depositos y Retiros """
    nombre = models.CharField(max_length=150)
    activo = models.BooleanField(default=True) # Activo o inactivo Tipo de Deposito o Retiro
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    tipo_ingreso_egreso = models.BooleanField(default=False) # Ingreso es 1 y Gasto es 0

    def __unicode__(self):
        return '%s / %s' % (self.nombre, self.creado)

    class Meta:
        app_label = 'MainApp'
