# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-07-22 15:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0066_remove_depositoretiro_tipo_persona'),
    ]

    operations = [
        migrations.AddField(
            model_name='detallemovimiento',
            name='prod',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='producto', to='MainApp.Producto'),
        ),
        migrations.AlterField(
            model_name='detallemovimiento',
            name='producto',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='productopresentacion', to='MainApp.ProductoPresentacion'),
        ),
    ]
