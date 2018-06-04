from django.db.models.signals import post_save
from django.dispatch import receiver
from MainApp.models.movimiento import Movimiento
from MainApp.models.transaccion_contable import TransaccionContable


@receiver(post_save, sender=Movimiento)
def add_transaccion_contable(sender, instance, **kargs):
    transaccion = TransaccionContable()
    transaccion.movimiento = instance.id
    """ Clase para el manejo de Libros Contables Ingreso, Baja, Ventas"""
    if instance.anulado:
        if instance.tipo == 1:
            transaccion.tipo_movimiento = 'Eliminacion de Ingreso de Producto'
        elif instance.tipo == 2:
            transaccion.tipo_movimiento = 'Eliminacion de Venta de Producto'
        else:
            transaccion.tipo_movimiento = 'Eliminacion de Baja de Producto'
    else:
        if instance.tipo == 1:
            transaccion.tipo_movimiento = 'Ingreso de Producto'
        elif instance.tipo == 2:
            transaccion.tipo_movimiento = 'Venta de Producto'
        else:
            transaccion.tipo_movimiento = 'Baja de Producto'
    transaccion.monto_venta = instance.total
    transaccion.monto_costo = instance.total_costo
    transaccion.activo = True
    transaccion.save()
