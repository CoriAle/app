# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-11-15 19:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0086_tipoproducto_mostrar'),
    ]

    operations = [
        migrations.AddField(
            model_name='persona',
            name='anulaciones',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='persona',
            name='cortesias',
            field=models.BooleanField(default=False),
        ),
    ]
