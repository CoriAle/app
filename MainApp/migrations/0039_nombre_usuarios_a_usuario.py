# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-05-12 22:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0038_add_activo_en_pagos'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pago',
            old_name='usuarios',
            new_name='usuario',
        ),
    ]
