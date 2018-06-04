# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from .persona import Persona

# USUARIOS
class PerfilUsuario(models.Model):

    """ Manejo de perfil de usuarios """

    usuario = models.OneToOneField(User)
    persona = models.ForeignKey(Persona)

    class Meta:
        app_label = 'MainApp'
