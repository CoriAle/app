(function() {
    'use strict';

    angular
        .module('app.movimiento')
        .controller('SalidaController', SalidaController);

    SalidaController.$inject = ['Notify', 'ProductoService', 'PersonaService', 'MovimientoService', '$resource'];

    function SalidaController(Notify, ProductoService, PersonaService, MovimientoService, $resource) {
        var vm = this;
        activate();

        function cargaDatos() {
            vm.movimiento = {};
            vm.movimiento.total_costo = 0;
            vm.movimiento.total = 0;
            vm.movimiento.tipo = 3;
            vm.movimiento.detalle = [];
            vm.detalle = {};
            vm.detalle.cantidad = 0;
            vm.detalle.precio_costo = 0;
            vm.detalle.precio_venta = 0;
            vm.cantidadetalle = true;
        }

        cargaDatos();

        function activate() {
            var prodMod;

            vm.tipos_baja = [{
                'id': 1,
                'nombre': 'Perdida'
            }, {
                'id': 2,
                'nombre': 'Robo'
            }, {
                'id': 3,
                'nombre': 'Devolución'
            }, {
                'id': 4,
                'nombre': 'Caducidad'
            }, {
                'id': 5,
                'nombre': 'Daño'
            }]

            /*
             *Buscamos los productos que no son combos
             */
            vm.productos = function(val) {
                return ProductoService.filtro_no_combo({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            //Asignacion de Variables para la vista
            vm.addProd = addProd;
            vm.removeProd = removeProd;
            vm.submit = submit;

            //Agregamos un nuevo elemento a lista de movimientos de combo
            function addProd() {
                var existe = false;
                for (var i = 0; i < vm.movimiento.detalle.length; i++) {
                    if (vm.detalle.producto.id == vm.movimiento.detalle[i].producto.id) {
                        existe = true;
                        break;
                    }
                }
                if (detalleCompleto()) {
                    if (existe == false) {
                        if (vm.detalle.producto.existencia >= vm.detalle.cantidad) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Movimiento agregado a la lista..', {
                                    status: 'success'
                                }
                            );
                            vm.movimiento.detalle.push(vm.detalle);
                            vm.movimiento.total_costo = vm.movimiento.total_costo + (vm.movimiento.detalle[i].producto.precio_costo * vm.movimiento.detalle[i].cantidad);
                            // En dado caso se da el cambio de Baja en el total se trae el precio_venta del modelo ProductoPresentacion
                            // vm.movimiento.total = vm.movimiento.total + (vm.movimiento.detalle[i].producto.precio_venta * vm.movimiento.detalle[i].cantidad);
                            // console.log(vm.movimiento.detalle[i].precio_venta);
                            // console.log(vm.movimiento.detalle[i].cantidad);
                            // console.log(vm.movimiento.total);
                            vm.detalle = {};
                            vm.cantidadetalle = true;
                        } else {
                            Notify.alert(
                                    '<em class="fa fa-times"></em> Existencia menor al ingresado', {
                                        status: 'warning'
                                    }
                                );
                            vm.detalle = {};
                        }
                    } else {
                        vm.detalle = {};
                        Notify.alert(
                            '<em class="fa fa-times"></em> Producto ya existe dentro de la lista', {
                                status: 'warning'
                            }
                        );
                    }; console.log(vm.movimiento);
                }
            }

            function detalleCompleto() {
                var completo = false;
                if (vm.detalle.producto != null && vm.detalle.producto.id > 0 && vm.detalle.cantidad > 0) {
                    completo = true;
                } else {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Datos Incompletos del detalle..', {
                            status: 'warning'
                        }
                    );
                }
                return completo;
            }

            //Eliminamos un movimiento seleccionado dentro de la lista de movimientos de combo
            function removeProd(data) {
                for (var i = 0; i < vm.movimiento.detalle.length; i++) {
                    if (vm.movimiento.detalle[i] == data) {
                        vm.movimiento.total_costo = vm.movimiento.total_costo - (vm.movimiento.detalle[i].producto.precio_costo * vm.movimiento.detalle[i].cantidad);
                        // En dado caso se da el cambio de Baja en el total se trae el precio_venta del modelo ProductoPresentacion
                        // vm.movimiento.total = vm.movimiento.total - (vm.movimiento.detalle[i].producto.precio_venta * vm.movimiento.detalle[i].cantidad);
                        vm.movimiento.detalle.splice(i, 1);
                        Notify.alert(
                            '<em class="fa fa-times"></em> Producto eliminado del detalle..', {
                                status: 'warning'
                            }
                        );
                        break;
                    }
                }
                if (vm.movimiento.detalle.length == 0) {
                    vm.cantidadetalle = false;
                }
            }

            //Guardado de movimiento/combo
            function submit() {
                if (vm.movimiento.detalle.length > 0) {
                    vm.movimiento.tipo_baja = vm.movimiento.tipo_baja.id;
                    for (var i = 0; i < vm.movimiento.detalle.length; i++) {
                        vm.movimiento.detalle[i].producto = vm.movimiento.detalle[i].producto.id;
                    }
                    MovimientoService.create(vm.movimiento, function(data) {
                        cargaDatos();
                        Notify.alert(
                            '<em class="fa fa-check"></em> Baja de Producto exitosa', {
                                status: 'success'
                            }
                        );
                        vm.formValidate.$setPristine();
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Error:' + error.data.detail, {
                                status: 'error'
                            }
                        );
                    });
                } else {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Lista vacia de Detalle', {
                            status: 'warning'
                        }
                    );
                }
            }
        }
    }
})();
