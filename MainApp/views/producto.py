import datetime
from django.db.models.expressions import F
from MainApp.models import Producto, Combo, Presentacion, TipoProducto, ProductoPresentacion, DetalleMovimiento
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.serializers import ProductoSerializer, ProductoWriteSerializer, ProductoShowSerializer, ProductoUpdateSerializer, ProductoUpdateGeneralSerializer
from MainApp.serializers.producto import ProductoTipoSerializer
from MainApp.serializers.tipo_producto import ComboMixtoSerializer
from MainApp.views import SwappableSerializerMixin
from django.http import JsonResponse
from django.db import transaction
from django.db.models import Q
from MainApp.permisos import *


class ProductoViewSet(SwappableSerializerMixin, viewsets.ModelViewSet):
    queryset = Producto.objects.filter(activo=True)
    model = Producto

    serializer_class = ProductoSerializer

    permission_classes = [BodegaMeseroPermission]

    serializer_classes = {
        'GET': ProductoShowSerializer,
        'POST': ProductoWriteSerializer,
        'PUT': ProductoUpdateGeneralSerializer,
        'DELETE': ProductoWriteSerializer,
        'PATCH': ProductoWriteSerializer
    }

    def create(self, request, *args, **kwargs):
        try:
            serializer = ProductoWriteSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @transaction.atomic
    def update(self, request, pk=None):
        serializer = ProductoUpdateGeneralSerializer(data=request.data)
        prodpres = ProductoPresentacion.objects.filter(producto_id=request.data['id'])

        if serializer.is_valid():

            producto = Producto.objects.get(id=request.data['id'])

            combos = Combo.objects.filter(producto_padre=producto.id)
            for combo in combos:
                combo.delete()

            producto.tipo_producto = TipoProducto.objects.get(id=request.data['tipo_producto'])
            producto.nombre = request.data['nombre']
            producto.precio_costo = request.data['precio_costo']
            producto.existencia_minima = request.data['existencia_minima']
            producto.se_descuenta = request.data['se_descuenta']
            producto.comsetible = request.data['comsetible']
            producto.costo_minimo_producto = request.data.get('costo_minimo_producto', producto.costo_minimo_producto)
            producto.cantidad_productos = request.data.get('cantidad_productos', producto.cantidad_productos)
            # Coloca a todas las presentaciones de ese producto en inactivo
            for prod in prodpres:
                prod.activo=False
                prod.save()

            # Crea nuevas presentaciones y actualiza las existentes
            for presentacion in request.data['presentacion']:
                try:
                    pres = ProductoPresentacion.objects.get(id=presentacion['id'], producto=producto)
                    pres.presentacion_id = presentacion['presentacion'].get('id', None)
                    pres.precio_venta = presentacion.get('precio_venta', None)
                    pres.se_imprime_ticket = presentacion.get('se_imprime_ticket', None)
                    pres.comision_mesero = presentacion.get('comision_mesero', None)
                    pres.cantidad_fichas = presentacion.get('cantidad_fichas', None)
                    pres.precio_fichas = presentacion.get('precio_fichas', None)
                    pres.se_carga_a_empleada = presentacion.get('se_carga_a_empleada', None)
                    pres.mostrar = presentacion.get('mostrar', None)
                    pres.porcentaje_completo = presentacion.get('porcentaje_completo', None)
                    pres.activo = True
                    pres.save()
                except KeyError:
                    productopresentacion = ProductoPresentacion(
                        precio_venta = presentacion['precio_venta'],
                        se_imprime_ticket = presentacion['se_imprime_ticket'],
                        comision_mesero = presentacion['comision_mesero'],
                        cantidad_fichas = presentacion['cantidad_fichas'],
                        precio_fichas = presentacion['precio_fichas'],
                        se_carga_a_empleada = presentacion['se_carga_a_empleada'],
                        mostrar = presentacion['mostrar'],
                        porcentaje_completo = presentacion['porcentaje_completo'],
                        producto = producto,
                        presentacion_id = presentacion['presentacion']['id'],
                        activo = True
                    )
                    productopresentacion.save()
                except ProductoPresentacion.DoesNotExist:
                    raise serializers.ValidationError({'productos_presentacion': {'id': 'Item no encontrado'}})

            try:
                productos_data = request.data.pop('productos')
            except:
                pass

            if request.data['combo_mixto']:
                # creamos los combos nuevos combos
                for producto_data in productos_data:
                    tipo_producto_db = TipoProducto.objects.get(id=producto_data['tipo_producto_combo'])
                    producto_data['tipo_producto_combo'] = tipo_producto_db
                    Combo.objects.create(producto_padre=producto, **producto_data)
                    producto_data['tipo_producto_combo'] = tipo_producto_db.id
            else:
                # creamos los combos nuevos combos
                for producto_data in productos_data:
                    producto_db = Producto.objects.get(id=producto_data['producto_combo'])
                    producto_data['producto_combo'] = producto_db
                    Combo.objects.create(producto_padre=producto, **producto_data)
                    producto_data['producto_combo'] = producto_db.id

            producto.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # @transaction.atomic
    # def actualiza_como(self, request, pk=None):
    #     try:
    #         serializer = ProductoUpdateSerializer(data=request.data)
    #         if serializer.is_valid():
    #             # Buscamos el producto anterior
    #             producto = Producto.objects.get(id=request.data['id'])
    #
    #             combos = Combo.objects.filter(producto_padre=producto.id)
    #             for combo in combos:
    #                 combo.delete()
    #
    #             # Persistimos los nuevos datos del producto
    #             producto.tipo_producto = TipoProducto.objects.get(id=request.data['tipo_producto'])
    #             producto.presentacion = Presentacion.objects.get(id=request.data['presentacion'])
    #             producto.nombre = request.data.get('nombre', producto.nombre)
    #             producto.precio_costo = request.data.get('precio_costo', producto.precio_costo)
    #             producto.precio_venta = request.data.get('precio_venta', producto.precio_venta)
    #             # producto.existencia = request.data.get('existencia', producto.existencia)
    #             producto.existencia_minima = request.data.get('existencia_minima', producto.existencia_minima)
    #             producto.es_combo = request.data.get('es_combo', producto.es_combo)
    #             producto.se_imprime_ticket = request.data.get('se_imprime_ticket', producto.se_imprime_ticket)
    #             producto.se_descuenta = request.data.get('se_descuenta', producto.se_descuenta)
    #             producto.combo_mixto = request.data.get('combo_mixto', producto.combo_mixto)
    #             producto.costo_minimo_producto = request.data.get('costo_minimo_producto', producto.costo_minimo_producto)
    #             producto.cantidad_productos = request.data.get('cantidad_productos', producto.cantidad_productos)
    #             producto.comision_mesero = request.data.get('comision_mesero', producto.comision_mesero)
    #             producto.cantidad_fichas = request.data.get('cantidad_fichas', producto.cantidad_fichas)
    #             producto.precio_fichas = request.data.get('precio_fichas', producto.precio_fichas)
    #             producto.se_carga_a_empleada = request.data.get('se_carga_a_empleada', producto.se_carga_a_empleada)
    #
    #             # extraemos los productos, evitamos el error si no existe
    #             try:
    #                 productos_data = request.data.pop('productos')
    #             except:
    #                 pass
    #
    #             if request.data['combo_mixto']:
    #                 # creamos los combos nuevos combos
    #                 for producto_data in productos_data:
    #                     tipo_producto_db = TipoProducto.objects.get(id=producto_data['tipo_producto_combo'])
    #                     producto_data['tipo_producto_combo'] = tipo_producto_db
    #                     Combo.objects.create(producto_padre=producto, **producto_data)
    #                     producto_data['tipo_producto_combo'] = tipo_producto_db.id
    #             else:
    #                 # creamos los combos nuevos combos
    #                 for producto_data in productos_data:
    #                     producto_db = Producto.objects.get(id=producto_data['producto_combo'])
    #                     producto_data['producto_combo'] = producto_db
    #                     Combo.objects.create(producto_padre=producto, **producto_data)
    #                     producto_data['producto_combo'] = producto_db.id
    #
    #             # Actualizamos el producto
    #             producto.save()
    #
    #             request.data['productos'] = productos_data
    #             request.data['tipo_producto'] = producto.tipo_producto.id
    #             request.data['presentacion'] = producto.presentacion.id
    #             return Response(serializer.data, status=status.HTTP_200_OK)
    #         else:
    #             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #     except Exception as e:
    #         return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def no_combo(self, request):
        try:
            productos = Producto.objects.filter(
                activo=True,
                es_combo=False
            ).order_by('nombre')

            serializer = ProductoSerializer(productos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro_no_combo(self, request):
        try:
            productos = Producto.objects.filter(
                nombre__icontains=request.GET.get('query'),
                # Q(precio_costo__icontains=request.GET.get('query')) |
                # Q(existencia__icontains=request.GET.get('query')) |
                # Q(tipo_producto__nombre__icontains=request.GET.get('query')) |
                # Q(productos_presentacion__presentacion__nombre__icontains=request.GET.get('query')),
                # productos_presentacion__activo=True,
                activo=True,
                # productos_presentacion__se_carga_a_empleada=False,
                es_combo=False
            ).order_by('nombre')
            print len(productos)

            serializer = ProductoSerializer(productos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def lista_combo_mixto(self, request):
        try:
            productos = Producto.objects.filter(
                Q(activo=True), Q(es_combo=True), Q(combo_mixto=True), Q(nombre__icontains=request.GET.get('query')) |
                                                                       Q(precio_costo__icontains=request.GET.get('query')) |
                                                                       Q(precio_venta__icontains=request.GET.get('query')) |
                                                                       Q(existencia__icontains=request.GET.get('query')) |
                                                                       Q(tipo_producto__nombre__icontains=request.GET.get('query')) |
                                                                       Q(presentacion__nombre__icontains=request.GET.get('query'))
            ).order_by('nombre')

            serializer = ProductoSerializer(productos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def productos_de_combo_mixto(self, request):
        try:
            productos = []
            combos = Combo.objects.filter(producto_padre=request.GET.get('id'))
            for combo in combos:
                productos_tipos = Producto.objects.filter(
                    activo=True,
                    tipo_producto=combo.tipo_producto_combo,
                    precio_costo__lte=request.GET.get('precio'),
                    existencia__gt=5
                ).order_by('nombre')
                productos = productos + list(productos_tipos)

            serializer = ProductoSerializer(productos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def tipos(self, request):
        try:
            filtro = []
            productos = Producto.objects.filter(
                activo=True,
                tipo_producto=request.GET.get('tipo')
            ).order_by('nombre')

            for item in productos:
                if item.existencia == 0:
                    if item.es_combo:
                        filtro.append(item)
                else:
                    filtro.append(item)

            serializer = ProductoTipoSerializer(filtro, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def existencia_minima(self, request):
        try:
            productos = Producto.objects.filter(
                activo=True,
                es_combo=False,
                existencia__lte=F('existencia_minima'),
            ).order_by('nombre')

            return JsonResponse({'cantidad': len(productos)})
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def filtro(self, request):
        try:

            productos = Producto.objects.filter(
                Q(activo=True), Q(nombre__icontains=request.GET.get('query')) |
                                Q(precio_costo__icontains=request.GET.get('query')) |
                                # Q(precio_venta__icontains=request.GET.get('query')) |
                                Q(existencia__icontains=request.GET.get('query')) |
                                Q(tipo_producto__nombre__icontains=request.GET.get('query'))
                                # Q(presentacion__nombre__icontains=request.GET.get('query'))
            ).order_by('nombre')

            page = self.paginate_queryset(productos)
            if page is not None:
                serializer = ProductoSerializer(page, many=True)
                return self.get_paginated_response(serializer.data)

            serializer = self.get_serializer(productos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def busca_combo_mixto(self, request):

        combomixto = TipoProducto.objects.get(
            activo=True,
            nombre__icontains="Combo Mixto"
        )

        serializer = ComboMixtoSerializer(combomixto)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def lista_impresion_productos(self, request):

        lista = []
        ant = request.GET.get('ant')
        sig = request.GET.get('sig')

        productos = Producto.objects.filter(
            activo=True,
            se_descuenta=True,
            es_combo=False
        ).order_by('nombre')

        for producto in productos:
            lista.append([producto.nombre,producto.existencia])

        filas = len(lista)
        datos = lista[int(ant):int(sig)]

        return Response({'filas':filas,'productos':datos})

    # Funcion que sirve para conseguir el reporte de productos
    @list_route(methods=['get'])
    def get_products(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        detalles = DetalleMovimiento.objects.filter(
            producto__combo_mixto=False,
            creado__range=(fecha_inicio, fecha_fin)
        ).prefetch_related("producto","movimiento")
        nombre = request.GET.get('nombre')
        productos = []
        if nombre != "":
            detalles = detalles.filter(producto__nombre__icontains=nombre)

        print len(detalles)
        for detalle in detalles:
            esta = False
            for producto in productos:
                if producto['producto'] == detalle.producto.nombre:
                    esta = True
                    if detalle.movimiento.anulado:
                        anulado = detalle.cantidad
                        ingreso = 0
                        egreso = 0
                    else:
                        if detalle.movimiento.tipo == 1:
                            anulado = 0
                            ingreso = detalle.cantidad
                            egreso = 0
                        else:
                            anulado = 0
                            ingreso = 0
                            egreso = detalle.cantidad
                    producto['anulados'] += anulado
                    producto['ingresos'] += ingreso
                    producto['egresos'] += egreso
            if not esta:
                if detalle.movimiento.anulado:
                    anulado = detalle.cantidad
                    ingreso = 0
                    egreso = 0
                else:
                    if detalle.movimiento.tipo == 1:
                        anulado = 0
                        ingreso = detalle.cantidad
                        egreso = 0
                    else:
                        anulado = 0
                        ingreso = 0
                        egreso = detalle.cantidad
                productos.append({
                    'producto': detalle.producto.nombre,
                    'anulados': anulado,
                    'ingresos': ingreso,
                    'egresos': egreso
                })
        return Response(productos, status=status.HTTP_200_OK)

    # Funcion que sirve para conseguir el reporte de productos
    @list_route(methods=['get'])
    def get_presentations(self, request):
        fecha_inicio = str(request.GET.get('ini'))
        fecha_inicio = datetime.datetime.strptime(fecha_inicio, '%Y-%m-%d %H:%M:%S')

        fecha_fin = str(request.GET.get('fin'))
        fecha_fin = datetime.datetime.strptime(fecha_fin, '%Y-%m-%d %H:%M:%S')

        detalles = DetalleMovimiento.objects.filter(
            creado__range=(fecha_inicio, fecha_fin)
        ).prefetch_related("producto", "movimiento", "producto_presentacion", "persona")
        productos = []
        nombre = request.GET.get('nombre')
        if nombre != "" and nombre is not None:
            detalles = detalles.filter(producto__nombre__icontains=nombre)
        presentacion = request.GET.get('presentacion')
        if presentacion != "" and presentacion is not None:
            detalles = detalles.filter(producto_presentacion__presentacion__nombre__icontains=presentacion)
        print len(detalles)
        for detalle in detalles:
            try:
                # TIPO_MOVIMIENTO = ((1, 'Ingreso'), (2, 'Venta'), (3, 'Baja'))
                if detalle.movimiento.tipo == 1:
                    tipo = "Ingreso"
                elif detalle.movimiento.tipo == 2:
                    tipo = "Venta"
                else:
                    tipo = "Baja"
                persona = ""
                if detalle.persona is not None:
                    persona = detalle.persona.nombre
                presentacion = ""
                if detalle.producto_presentacion is not None:
                    presentacion = detalle.producto_presentacion.presentacion.nombre
                productos.append({
                    'presentacion': presentacion,
                    'producto': detalle.producto.nombre,
                    'tipo_movimiento': tipo,
                    'cantidad': detalle.cantidad,
                    'fecha': detalle.creado,
                    'anulado': detalle.movimiento.anulado,
                    'chica': persona
                })
            except:
                print detalle.id

        return Response(productos, status=status.HTTP_200_OK)
