from django.db import models
from .persona import Persona
from .configuracion import Configuracion


class Cuenta(models.Model):

    """cuenta de clientes, proveedores y empleados"""
    empresa = models.OneToOneField(Configuracion, null=True, related_name="cuentas") # Relacion a Configuracion
    persona = models.OneToOneField(Persona, null=True, related_name="cuenta") # Relacion a Persona
    saldo = models.DecimalField(max_digits=8, decimal_places=2, default=0)

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return u'{}'.format(self.saldo)


    class Meta:
        app_label = 'MainApp'
