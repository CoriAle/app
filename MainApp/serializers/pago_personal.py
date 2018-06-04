from MainApp.models import PagoPersonal
from MainApp.serializers import PersonaSerializer
from rest_framework import serializers


class PagoPersonalSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()

    class Meta:
        model = PagoPersonal
        fields = ('id',
                  'comision_venta',
                  'comision_servicio',
                  'bailes',
                  'adelanto',
                  'gastos_personal',
                  'a_pagar',
                  'saldo_anterior',
                  'saldo_actual',
                  'persona',
                  'creado',
                  'fecha_inicio',
                  'fecha_fin'
                  )
