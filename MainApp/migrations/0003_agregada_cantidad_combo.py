# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-02-02 19:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0002_auto_20160201_2232'),
    ]

    operations = [
        migrations.AddField(
            model_name='combo',
            name='cantidad',
            field=models.IntegerField(default=0),
        ),
    ]
