from django.db import models

from MainApp.models.baile import Baile
from MainApp.models.persona import Persona


class BailePersona(models.Model):
    persona = models.ForeignKey(Persona, null=False, related_name="bailes_persona")
    baile = models.ForeignKey(Baile, null=False, related_name="baile_personas")
    creado = models.DateTimeField(auto_now_add=True)
    anulado = models.BooleanField(default=False)
    costo= models.DecimalField(max_digits=8, decimal_places=2, default=0)

    class Meta:
        app_label = 'MainApp'
