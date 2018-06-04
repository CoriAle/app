from django.contrib.auth.models import User
from django.db import models
from MainApp.models import Persona


class Pago(models.Model):

    """clientes,proveedores y empleados"""
    persona = models.ForeignKey(Persona, related_name='personas')
    usuario = models.ForeignKey(User, related_name='usuarios')
    monto = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    motivo = models.CharField(max_length=300, null=True)
    observacion = models.CharField(max_length=50, null=True)
    activo = models.BooleanField(default=True)

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.motivo


    class Meta:
        app_label = 'MainApp'
