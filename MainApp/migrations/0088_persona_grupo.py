# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-11-15 20:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0087_auto_20161115_1334'),
    ]

    operations = [
        migrations.AddField(
            model_name='persona',
            name='grupo',
            field=models.IntegerField(blank=True, choices=[(1, b'Bodeguero'), (2, b'Mesero'), (3, b'Cajero'), (4, b'Administrador')], null=True),
        ),
    ]
