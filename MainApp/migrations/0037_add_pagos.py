# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-05-12 21:58
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('MainApp', '0036_denominacion_string'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('monto', models.DecimalField(decimal_places=2, default=0, max_digits=8)),
                ('motivo', models.CharField(max_length=300, null=True)),
                ('observacion', models.CharField(max_length=50, null=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('modificado', models.DateTimeField(auto_now=True)),
                ('persona', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='personas', to='MainApp.Persona')),
                ('usuarios', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuarios', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
