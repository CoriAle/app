# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-11-16 22:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0090_auto_20161116_1127'),
    ]

    operations = [
        migrations.CreateModel(
            name='PagoPersonal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comision_venta', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('comision_servicio', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('bailes', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('adelanto', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('gastos_personal', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('vales', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('a_pagar', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('saldo_anterior', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('saldo_actual', models.DecimalField(decimal_places=2, default=0, max_digits=14)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('modificado', models.DateTimeField(auto_now=True)),
                ('persona', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pagos', to='MainApp.Persona')),
            ],
        ),
    ]
