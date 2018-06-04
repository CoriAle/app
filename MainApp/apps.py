from __future__ import unicode_literals
from django.apps import AppConfig
from django.db.models.signals import pre_save

class MainappConfig(AppConfig):
    name = 'MainApp'

    def ready(self):
        from .signals import add_transaccion_contable