from django.db.models import Q
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import Baile
from MainApp.serializers import BaileSerializer, BaileWriteSerializer, BaileUpdateSerializer
from MainApp.permisos import *


class BaileViewSet(viewsets.ModelViewSet):
    queryset = Baile.objects.filter(activo=True)
    serializer_class = BaileSerializer
    permission_classes = [MeseroPermission]
    serializer_classes = {
        'GET': BaileSerializer,
        'POST': BaileWriteSerializer,
        'PUT': BaileUpdateSerializer,
        'DELETE': BaileSerializer,
        'PATCH': BaileWriteSerializer
    }

    def create(self, request, *args, **kwargs):
        serializer = BaileWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(creado_por=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        order = request.GET.get('order')
        query = request.GET.get('query')

        result = Baile.objects.filter(Q(activo=True), Q(nombre_baile__icontains=query) |
                                      Q(creado_por__username__icontains=query)).order_by(order)

        page = self.paginate_queryset(result)
        if page is not None:
            serializer = BaileSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(result, many=True)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def list_no_paginate(self, request, *args, **kwargs):
        result = Baile.objects.filter(activo=True)

        serializer =self.get_serializer(result, many=True)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = BaileUpdateSerializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
