# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-07-19 23:31
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0062_depositoretiro_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='depositoretiro',
            name='cuenta_entrada',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cuenta_entrada', to='MainApp.Cuenta'),
        ),
        migrations.AlterField(
            model_name='depositoretiro',
            name='cuenta_salida',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cuenta_salida', to='MainApp.Cuenta'),
        ),
        migrations.AlterField(
            model_name='depositoretiro',
            name='tipo_persona',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tipo_persona', to='MainApp.TipoPersona'),
        ),
    ]
