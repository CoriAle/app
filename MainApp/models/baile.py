from django.contrib.auth.models import User
from django.db import models


class Baile(models.Model):
    nombre_baile = models.CharField(max_length=50, null=False)
    costo = models.DecimalField(max_digits=14, decimal_places=2, default=0)
    activo = models.BooleanField(default=True)
    creado_por = models.ForeignKey(User, related_name='bailes_creados')
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.nombre_baile

    class Meta:
        app_label = 'MainApp'