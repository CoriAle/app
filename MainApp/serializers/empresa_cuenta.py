from MainApp.models.configuracion import Configuracion
from MainApp.serializers import CuentaEmpresaSerializer
from rest_framework import serializers

class EmpresaCuentaSerializer(serializers.ModelSerializer):
    cuentas=CuentaEmpresaSerializer()

    class Meta:
        model=Configuracion
        fields=('id', 'nombre_empresa', 'cuentas')
