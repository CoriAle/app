# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-06-02 18:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0041_correccion_estructura_producto'),
    ]

    operations = [
        migrations.AddField(
            model_name='detallemovimiento',
            name='servido',
            field=models.BooleanField(default=False),
        ),
    ]
