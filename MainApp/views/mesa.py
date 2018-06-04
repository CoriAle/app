from rest_framework import viewsets, status
from rest_framework.response import Response
from MainApp.models import Mesa, Movimiento, DetalleMovimiento, TransaccionVenta
from rest_framework.decorators import list_route
from MainApp.serializers import MesaSerializer
from MainApp.permisos import *


class MesaViewSet(viewsets.ModelViewSet):
    queryset = Mesa.objects.filter(activo=True)
    serializer_class = MesaSerializer
    permission_classes = [MeseroPermission]

    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)

    # Lista de Mesas activas para AppMovil
    @list_route(methods=['get'])
    def mesas_lista(self, request):
        try:
            mesas = Mesa.objects.filter(
                activo=True
            ).order_by('id')

            serializer = MesaSerializer(mesas, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def comprobar_mesas(self, request):
        ocupadas = []
        lim_i = int(request.GET.get('lim_i', 0))
        lim_s = int(request.GET.get('lim_s', 10))
        filtro = int(request.GET.get('tipo', 1))  # Filtro en 1 busca todos, 2 solo en Caja, 3 solo en Tablet
        if filtro == 1 or filtro == 3:
            # Consiguiendo todos los movimientos que esten en la Tablet
            movimientos = Movimiento.objects.filter(anulado=False,
                                                    cuenta_separada=False,
                                                    finalizado=False).prefetch_related("mesa", "persona")
            for movimiento in movimientos:
                if movimiento.mesa is not None:
                    detalles = DetalleMovimiento.objects.filter(movimiento=movimiento)
                    transaccion = TransaccionVenta.objects.filter(movimiento=movimiento, tipo_transaccion=4).first()
                    detail = "- "
                    for detalle in detalles:
                        detail = detail + detalle.producto.nombre + " Q" + str(detalle.precio_venta)
                        if movimiento.persona is not None:
                            detail = detail + " de " + detalle.persona.nombre
                        detail += ", - "
                    detail = detail[0:len(detail)-4]
                    # Agregando al arreglo de mesas el diccionario que necesita el frontend
                    ocupadas.append({"mesa": movimiento.mesa.nombre, "mesero": transaccion.usuario.get_username(),
                                     "total": movimiento.total, "fecha": movimiento.modificado,
                                     "estado": "Tablet", "detalle": detail})
        if filtro == 1 or filtro == 2:
            # Consiguiendo todos los movimientos que esten en la Caja
            movimientos = Movimiento.objects.filter(anulado=False,
                                                    cuenta_separada=True,
                                                    finalizado=False).prefetch_related("mesa", "persona")
            for movimiento in movimientos:
                if movimiento.mesa is not None:
                    detalles = DetalleMovimiento.objects.filter(movimiento=movimiento)
                    transaccion = TransaccionVenta.objects.filter(movimiento=movimiento, tipo_transaccion=4).first()
                    detail = "- "
                    for detalle in detalles:
                        detail = detail + detalle.producto.nombre + " Q" + str(detalle.precio_venta)
                        if movimiento.persona is not None:
                            detail = detail + " de " + detalle.persona.nombre
                        detail += ", - "
                    detail = detail[0:len(detail) - 4]
                    # Agregando al arreglo de mesas el diccionario que necesita el frontend
                    ocupadas.append({"mesa": movimiento.mesa.nombre, "mesero": transaccion.usuario.get_username(),
                                     "total": movimiento.total, "fecha": movimiento.modificado,
                                     "estado": "Caja", "detalle": detail})
        if lim_i > 0 and len(ocupadas[lim_i:lim_s]) == 0:
            lim_i = 0
            lim_s = 10
        pagina = lim_s / 10
        total = len(ocupadas)
        response = {"mesas": ocupadas[lim_i:lim_s], "total_mesas": total, "pagina": pagina}
        return Response(response, status=status.HTTP_200_OK)

    @list_route(methods=['get'])
    def get_mesa(self, request):
        mesa = request.GET.get('mesa')
        ocupadas = []
        movimientos = Movimiento.objects.filter(anulado=False,
                                                cuenta_separada=False,
                                                finalizado=False,
                                                mesa__nombre=mesa).prefetch_related("mesa", "persona")
        for movimiento in movimientos:
            if movimiento.mesa is not None:
                detalles = DetalleMovimiento.objects.filter(movimiento=movimiento)
                transaccion = TransaccionVenta.objects.filter(movimiento=movimiento, tipo_transaccion=4).first()
                detail = "- "
                for detalle in detalles:
                    detail = detail + detalle.producto.nombre + " Q" + str(detalle.precio_venta)
                    if movimiento.persona is not None:
                        detail = detail + " de " + detalle.persona.nombre
                    detail += ", - "
                detail = detail[0:len(detail) - 4]
                # Agregando al arreglo de mesas el diccionario que necesita el frontend
                ocupadas.append({"mesa": movimiento.mesa.nombre, "mesero": transaccion.usuario.get_username(),
                                 "total": movimiento.total, "fecha": movimiento.modificado,
                                 "estado": "Tablet", "detalle": detail})

        movimientos = Movimiento.objects.filter(anulado=False,
                                                cuenta_separada=True,
                                                finalizado=False,
                                                mesa__nombre=mesa).prefetch_related("mesa", "persona")
        for movimiento in movimientos:
            if movimiento.mesa is not None:
                detalles = DetalleMovimiento.objects.filter(movimiento=movimiento)
                transaccion = TransaccionVenta.objects.filter(movimiento=movimiento, tipo_transaccion=4).first()
                detail = "- "
                for detalle in detalles:
                    detail = detail + detalle.producto.nombre + " Q" + str(detalle.precio_venta)
                    if movimiento.persona is not None:
                        detail = detail + " de " + detalle.persona.nombre
                    detail += ", - "
                detail = detail[0:len(detail) - 4]
                # Agregando al arreglo de mesas el diccionario que necesita el frontend
                ocupadas.append({"mesa": movimiento.mesa.nombre, "mesero": transaccion.usuario.get_username(),
                                 "total": movimiento.total, "fecha": movimiento.modificado,
                                 "estado": "Caja", "detalle": detail})
        return Response(ocupadas, status=status.HTTP_200_OK)
