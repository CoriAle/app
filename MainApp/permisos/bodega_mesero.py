from rest_framework import permissions
from MainApp.models import PerfilUsuario


class BodegaMeseroPermission(permissions.BasePermission):
    """
    Global permission check for user logged.
    """
    message = 'El usuario no tiene los permisos adecuados.'

    def has_permission(self, request, view):
        try:
            persona = PerfilUsuario.objects.get(usuario=request.user)
            persona = persona.persona
            if persona.grupo == 4 or persona.grupo == 2 or persona.grupo == 1:
                return True
            return False
        except:
            return False
