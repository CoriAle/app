# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-01-30 15:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0099_persona_fecha_labores'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='fecha_labores',
            field=models.DateTimeField(null=True),
        ),
    ]
