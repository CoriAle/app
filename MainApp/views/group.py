from django.contrib.auth.models import Group
from rest_framework import viewsets, status
from MainApp.serializers.group import GroupSerializer
from MainApp.permisos import *


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [AdminPermission]
