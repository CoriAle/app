# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-07-22 17:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0068_auto_20160722_1045'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detallemovimiento',
            name='prod',
        ),
        migrations.AddField(
            model_name='detallemovimiento',
            name='producto_presentacion',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='producto_presentacion', to='MainApp.ProductoPresentacion'),
        ),
    ]
