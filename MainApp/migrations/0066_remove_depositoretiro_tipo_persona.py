# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-07-21 18:19
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0065_auto_20160720_0946'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='depositoretiro',
            name='tipo_persona',
        ),
    ]
