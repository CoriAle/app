from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from MainApp.models import Presentacion
from rest_framework import serializers


class PresentacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentacion
        fields = ('id', 'nombre', 'activo', 'creado', 'modificado')


class PaginatedPresentacionSerializer():
    def __init__(self, presentacion, request, num):
        paginator = Paginator(presentacion, num)
        page = request.query_params.get('page')
        try:
            presentacion = paginator.page(page)
        except PageNotAnInteger:
            presentacion = paginator.page(1)
        except EmptyPage:
            presentacion = paginator.page(paginator.num_pages)
        count = paginator.count

        previous = None if not presentacion.has_previous() else presentacion.previous_page_number()
        next = None if not presentacion.has_next() else presentacion.next_page_number()
        serializer = PresentacionSerializer(presentacion, many=True)
        self.data = {'count': count, 'previous': previous, 'next': next, 'results': serializer.data}