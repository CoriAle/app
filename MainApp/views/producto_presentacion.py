from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import ProductoPresentacion, Combo
from MainApp.serializers import ProductoPresentacionSerializer
from MainApp.serializers.producto_presentacion import ProductoPresentacionesMovilSerializer
from MainApp.serializers.combo import ComboSerializer
from django.db.models import Q, F
from MainApp.permisos import *


class ProductoPresentacionViewSet(viewsets.ModelViewSet):
    queryset = ProductoPresentacion.objects.filter(producto__activo=True)
    serializer_class = ProductoPresentacionSerializer
    permission_classes = [BodegaMeseroPermission]
    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro(self, request):
        try:
            presentaciones = ProductoPresentacion.objects.filter(
                producto__activo=True,
                producto__nombre__icontains=request.GET.get('query')
            ).order_by('producto__nombre')

            page = self.paginate_queryset(presentaciones)
            if page is not None:
                serializer = ProductoPresentacionSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = self.get_serializer(presentaciones, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_no_paginate(self, request):
        try:
            presentaciones = ProductoPresentacion.objects.filter(
                producto__activo=True,
                producto__nombre__icontains=request.GET.get('query')
            ).order_by('producto__nombre')

            serializer = ProductoPresentacionSerializer(presentaciones, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def producto_presentacion_tipo(self, request):
        try:
            presentaciones = ProductoPresentacion.objects.filter(
                activo=True,
                mostrar=True,
                producto__activo=True,
                producto__tipo_producto__id=request.GET.get('tipo')
            ).order_by('producto__nombre')

            serializer = ProductoPresentacionesMovilSerializer(presentaciones, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def productos_de_combo_mixto(self, request):
        try:
            productos = []
            combos = Combo.objects.filter(producto_padre=request.GET.get('id'))
            for combo in combos:
                productos_tipos = ProductoPresentacion.objects.filter(
                    (Q(producto__existencia__gt=0) | Q (producto__se_descuenta=False)),
                    activo=True,
                    producto__es_combo=False,
                    producto__activo=True,
                    producto__tipo_producto=combo.tipo_producto_combo,
                    producto__precio_costo__lte=request.GET.get('precio'),
                    se_carga_a_empleada=False,
                ).order_by('producto__nombre')
                productos = productos + list(productos_tipos)

            serializer = ProductoPresentacionSerializer(productos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    # Verifica si se pueden repetir los tipos productos de un Combo Mixto en especifico para la AppMovil
    @list_route(methods=['get'])
    def se_repite_producto(self, request):
        productos = []
        combo = Combo.objects.filter(producto_padre=request.GET.get('id'))

        serializer = ComboSerializer(combo, many=True)
        # print serializer.data
        return Response(serializer.data)
