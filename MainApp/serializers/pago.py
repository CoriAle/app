import hashlib
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

from MainApp.models import Pago
from MainApp.serializers import PersonaSerializer, UserSerializer
from rest_framework import serializers


class PagoSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()
    usuario = UserSerializer()

    class Meta:
        model = Pago
        fields = ('id', 'persona', 'usuario', 'monto', 'motivo', 'observacion', 'creado', 'modificado', 'activo')


class PagoWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = ('id', 'persona', 'usuario', 'monto', 'motivo', 'observacion', 'creado', 'modificado', 'activo')


class PaginatedPagoSerializer():
    def __init__(self, pagos, request, num):
        paginator = Paginator(pagos, num)
        page = request.query_params.get('page')
        try:
            pagos = paginator.page(page)
        except PageNotAnInteger:
            pagos = paginator.page(1)
        except EmptyPage:
            pagos = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not pagos.has_previous() else pagos.previous_page_number()
        next = None if not pagos.has_next() else pagos.next_page_number()
        serializer = PagoSerializer(pagos, many=True, context={'request': request})
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}
