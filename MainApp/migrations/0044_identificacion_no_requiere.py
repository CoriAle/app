# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-06-03 19:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0043_persona_historial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='identificacion',
            field=models.CharField(blank=True, max_length=45),
        ),
    ]
