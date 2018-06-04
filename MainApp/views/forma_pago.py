from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import FormaPago
from MainApp.serializers import FormaPagoSerializer
from MainApp.permisos import *


class FormaPagoViewSet(viewsets.ModelViewSet):
    queryset = FormaPago.objects.all()
    serializer_class = FormaPagoSerializer
    permission_classes = [AdminPermission]
    #  Lista de Formas de Pago
    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:
            depositosretiros = FormaPago.objects.all().order_by('tipo')

            serializer = FormaPagoSerializer(depositosretiros, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
