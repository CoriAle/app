# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-05-10 22:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0033_cantidad_default_cero'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detallecierre',
            name='denominacion',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
