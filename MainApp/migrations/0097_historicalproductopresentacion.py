# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2017-01-13 23:14
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('MainApp', '0096_historicaldetallemovimiento_historicalmovimiento_historicalproducto'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalProductoPresentacion',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('precio_venta', models.DecimalField(decimal_places=2, default=0, max_digits=8)),
                ('se_imprime_ticket', models.BooleanField(default=False)),
                ('comision_mesero', models.DecimalField(decimal_places=2, default=0, max_digits=8)),
                ('cantidad_fichas', models.IntegerField(default=0)),
                ('precio_fichas', models.DecimalField(decimal_places=2, default=0, max_digits=8)),
                ('se_carga_a_empleada', models.BooleanField(default=False)),
                ('activo', models.BooleanField(default=True)),
                ('creado', models.DateTimeField(blank=True, editable=False)),
                ('modificado', models.DateTimeField(blank=True, editable=False)),
                ('mostrar', models.BooleanField(default=True)),
                ('porcentaje_completo', models.BooleanField(default=False)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('presentacion', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='MainApp.Presentacion')),
                ('producto', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='MainApp.Producto')),
            ],
            options={
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
                'verbose_name': 'historical producto presentacion',
            },
        ),
    ]
