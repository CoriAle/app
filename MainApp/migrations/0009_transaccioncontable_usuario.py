# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-03-04 14:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0008_auto_20160303_1721'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaccioncontable',
            name='usuario',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
