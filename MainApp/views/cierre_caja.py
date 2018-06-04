import datetime
from decimal import *
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User
from django.db import transaction
from rest_framework import viewsets, status
from django.db.models import F
from django.db.models.query_utils import Q
from rest_framework.decorators import list_route
from rest_framework.response import Response
from MainApp.models import CierreCaja, Caja, DetalleCierre
from MainApp.serializers import CierreCajaSerializer, CierreCajaUpdateSerializer, CierreCajaListadoSerializer
from MainApp.serializers.cierre_caja import CierreCajaVerifySerializer
from MainApp.permisos import *


class CierreCajaViewSet(viewsets.ModelViewSet):
    queryset = CierreCaja.objects.filter(activo=True)
    serializer_class = CierreCajaSerializer
    permission_classes = [CajeroPermission]
    serializer_classes = {
        'GET': CierreCajaSerializer,
        'POST': CierreCajaSerializer,
        'PUT': CierreCajaUpdateSerializer,
        'DELETE': CierreCajaSerializer,
        'PATCH': CierreCajaSerializer
    }

    def create(self, request, *args, **kwargs):
        try:
            serializer = CierreCajaSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @transaction.atomic
    def update(self, request, *args, **kwargs):
        try:
            detalle_data = request.data.pop('detalle')
            model = self.get_object()

            serializer = CierreCajaUpdateSerializer(model, request.data)
            if serializer.is_valid():
                serializer.save()
                # Retiramos los detalles que estan agregados al movimiento y los sustituimos por nuevos
                for detalle in detalle_data:
                    print detalle
                    DetalleCierre.objects.create(cierre=model, **detalle)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)



    @list_route(methods=['get'])
    def comprueba_caja(self, request):
        cierre = CierreCaja.objects.filter(activo=True, cierre=0, caja=request.GET.get('id'))

        serializer = CierreCajaVerifySerializer(cierre, many=True)
        return Response(serializer.data)

    # Metodo que verifica si una caja esta abierta y le corresponde a el usuario logeado
    @list_route(methods=['get'])
    def busca_caja_usuario(self, request):
        try:
            cierre = CierreCaja.objects.get(activo=True, cierre=0, usuario=request.GET.get('user'))
            serializer = CierreCajaSerializer(cierre)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({'detail': 'Sin resultados'}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def listado(self, request):
        ant = int(request.GET.get('ant'))
        sig = int(request.GET.get('sig'))
        cierres = CierreCaja.objects.all().order_by('-id').annotate(costo_vendido=F('vendido'))
        serializer = CierreCajaListadoSerializer(cierres[ant:sig], many=True)
        if ant > 0:
            anterior = CierreCajaListadoSerializer(cierres[ant - 1])
            anterior = anterior.data
        else:
            anterior = None
        try:
            siguiente = CierreCajaListadoSerializer(cierres[sig])

            return Response({"data": serializer.data, "total": cierres.count(),
                             "siguiente": siguiente.data, "anterior": anterior},
                            status=status.HTTP_200_OK)
        except IndexError:
            return Response({"data": serializer.data, "total": cierres.count(),
                             "siguiente": None, "anterior": anterior},
                            status=status.HTTP_200_OK)
        totalCierres = []
        for c in cierres:
            caja = Caja.objects.get(id=c.caja_id)
            user = User.objects.get(id=c.usuario_id)
            totalCierres.append({'id': c.id,
                                 'apertura': c.apertura,
                                 'cierre': c.cierre,
                                 'diferencia': c.diferencia,
                                 'creado': c.creado,
                                 'modificado': c.modificado,
                                 'vendido': c.vendido,
                                 'caja': caja.nombre,
                                 'usuario': user.username})
        fecha = totalCierres[0]["creado"]
        suma = Decimal(0)
        temp = []
        totalAentregar = []
        for c in totalCierres:
            if fecha.date() == c["creado"].date():
                suma += c["vendido"]
                temp.append(c)
            else:
                for t in temp:
                    t["costo_vendido"] = suma
                    totalAentregar.append(t)
                temp = []
                suma = c["vendido"]
                fecha = c["creado"]
        for t in temp:
            t["costo_vendido"] = suma
            totalAentregar.append(t)
        return Response({"data": totalAentregar[ant:sig], "total": cierres.count()})
