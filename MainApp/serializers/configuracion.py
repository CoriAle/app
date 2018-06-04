from MainApp.models import Configuracion
from rest_framework import serializers


class ConfiguracionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Configuracion
        fields = ('id', 'nombre_empresa', 'inicio_jornada', 'finalizacion_jornada')
