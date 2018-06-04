from django.contrib import admin

# Register your models here.
from MainApp.models import Persona, PerfilUsuario
admin.site.register(Persona)
admin.site.register(PerfilUsuario)