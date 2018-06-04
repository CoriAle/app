from django.db import models
from MainApp.models.persona import Persona


class HistorialEmpleado (models.Model):
    # Opciones de tipo de Persona
    CONTRATADO = 1
    RECONTRATADO = 2
    DESPEDIDO = 3
    RENUNCIA = 4

    TIPOS = (
        (CONTRATADO, 'Contratado'),
        (RECONTRATADO, 'Recontratado'),
        (DESPEDIDO, 'Despedido'),
        (RENUNCIA, 'Renuncia'),
    )

    tipo = models.IntegerField(choices=TIPOS, null=False)
    fecha = models.DateField(null=False)
    observacion = models.CharField(max_length=200)
    persona = models.ForeignKey(Persona, related_name='historial_contratacion')

    class Meta:
        app_label = 'MainApp'
