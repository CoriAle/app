from rest_framework import permissions


class AnyPermission(permissions.BasePermission):
    """
    Global permission check for user logged.
    """

    def has_permission(self, request, view):
        return True
