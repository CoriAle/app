# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-04-08 15:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0016_auto_20160404_0928'),
    ]

    operations = [
        migrations.AddField(
            model_name='movimiento',
            name='mesa',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='MainApp.Mesa'),
        ),
        migrations.AddField(
            model_name='producto',
            name='se_carga_a_empleada',
            field=models.BooleanField(default=True),
        ),
    ]
