# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-03-23 20:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0013_auto_20160323_1403'),
    ]

    operations = [
        migrations.AlterField(
            model_name='combo',
            name='producto_combo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='padres', to='MainApp.Producto'),
        ),
    ]
