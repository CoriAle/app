from rest_framework import permissions
from MainApp.models import PerfilUsuario


class CocinaPermission(permissions.BasePermission):
    """
    Global permission check for user logged.
    """
    message = 'El usuario no tiene los permisos adecuados.'

    def has_permission(self, request, view):
        try:
            persona = PerfilUsuario.objects.get(usuario=request.user)
            persona = persona.persona
            if persona.grupo == 4 or persona.grupo == 5:
                return True
            return False
        except:
            return False
