from django.db import models
from MainApp.models import Persona


class PagoPersonal(models.Model):
    comision_venta = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    comision_servicio = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    bailes = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    adelanto = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    gastos_personal = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    a_pagar = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    saldo_anterior = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    saldo_actual = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    persona = models.ForeignKey(Persona, related_name="pagos")
    fecha_inicio = models.DateTimeField(null=True)
    fecha_fin = models.DateTimeField(null=True)

    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.a_pagar

    class Meta:
        app_label = 'MainApp'