from rest_framework import viewsets
from MainApp.models import Combo
from MainApp.serializers import ComboSerializer
from MainApp.permisos import *


class ComboViewSet(viewsets.ModelViewSet):
    queryset = Combo.objects.all()
    serializer_class = ComboSerializer
    permission_classes = [BodegaPermission]
