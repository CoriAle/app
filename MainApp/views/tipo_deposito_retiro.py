from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route
from MainApp.models import TipoDepositoRetiro
from MainApp.serializers import TipoDepositoRetiroSerializer
from MainApp.permisos import *


class TipoDepositoRetiroViewSet(viewsets.ModelViewSet):
    queryset = TipoDepositoRetiro.objects.filter(activo=True)
    serializer_class = TipoDepositoRetiroSerializer
    permission_classes = [CajeroPermission]
    #
    # def create(self, request, *args, **kwargs):
    #     serializer = TipoDepositoRetiroSerializer(data=request.data)
    #     if serializer.is_valid():
    #         if serializer.data['tipo_persona'] == None:
    #             raise ValueError('Tipo de persona debe de ser ingresado')
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk=None):
        try:
            model = self.get_object()
            model.activo = False
            model.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': e}, status=status.HTTP_400_BAD_REQUEST)

    # Filtro de Egresos los cuales esten activos
    @list_route(methods=['get'])
    def filtro_egreso(self, request):
        try:
            tipoegreso = TipoDepositoRetiro.objects.filter(
                activo=True,
                tipo_ingreso_egreso=False,
                nombre__icontains=request.GET.get('query')
            ).order_by('nombre')

            serializer = TipoDepositoRetiroSerializer(tipoegreso, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'detail': e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
