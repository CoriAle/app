# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-01-30 15:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0098_auto_20170117_1217'),
    ]

    operations = [
        migrations.AddField(
            model_name='persona',
            name='fecha_labores',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
