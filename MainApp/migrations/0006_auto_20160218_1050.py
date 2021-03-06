# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-02-18 16:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0005_agregada_relacion_m2m_combos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='combo',
            name='producto_combo',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='padres', to='MainApp.Producto'),
        ),
        migrations.AlterField(
            model_name='combo',
            name='producto_padre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='productos', to='MainApp.Producto'),
        ),
        migrations.AlterField(
            model_name='movimiento',
            name='no_documento',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='combo_productos',
            field=models.ManyToManyField(related_name='productos_combo', through='MainApp.Combo', to='MainApp.Producto'),
        ),
        migrations.AlterField(
            model_name='transaccionventa',
            name='movimiento',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transacciones', to='MainApp.Movimiento'),
        ),
    ]
