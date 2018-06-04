from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

from MainApp.models import TipoPersona
from rest_framework import serializers


class TipoPersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoPersona
        fields = ('id', 'nombre', 'activo', 'creado', 'modificado')


class PaginatedTipoPersonaSerializer():
    def __init__(self, tipos, request, num):
        paginator = Paginator(tipos, num)
        page = request.query_params.get('page')
        try:
            tipos = paginator.page(page)
        except PageNotAnInteger:
            tipos = paginator.page(1)
        except EmptyPage:
            tipos = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not tipos.has_previous() else tipos.previous_page_number()
        next = None if not tipos.has_next() else tipos.next_page_number()
        serializer = TipoPersonaSerializer(tipos, many=True)
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}