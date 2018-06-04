(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoEditarController', ProductoEditarController);

    ProductoEditarController.$inject = ['$stateParams', '$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService',
        'ProductoService', '$resource', '$state', 'ProductoPresentacionService'];

    function ProductoEditarController($stateParams, $uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService,
        ProductoService, $resource, $state, ProductoPresentacionService) {
        var vm = this;
        vm.id = $stateParams.id;
        activate();

        function activate() {

            vm.combo = false;
            vm.mixto = false;
            vm.producto = {
                es_combo: false,
                combo_mixto: false,
                productos: []
            };
            vm.producto.productos = [];
            vm.totalcostocombo = 0.00;
            vm.presentacion = {};
            vm.lista_presentaciones = [];
            var prodMod;

            vm.listapresentaciones = {};

            function inicializa_producto() {
                vm.productoVacio = {
                    es_combo: false,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
            }

            inicializa_producto();

            function iniciaProducto() {
                ProductoService.show({
                    id: vm.id
                }, function(data) {
                    data.costo_minimo_producto = (data.costo_minimo_producto == null) ? 0 : parseFloat(data.costo_minimo_producto);
                    data.precio_costo = (data.precio_costo == null) ? 0 : parseFloat(data.precio_costo);
                    data.precio_venta = (data.precio_venta == null) ? 0 : parseFloat(data.precio_venta);
                    data.precio_fichas = (data.precio_fichas == null) ? 0 : parseFloat(data.precio_fichas);
                    data.comision_mesero = (data.comision_mesero == null) ? 0 : parseFloat(data.comision_mesero);
                    vm.producto = data;
                    vm.combo = data.es_combo;
                    vm.mixto = data.combo_mixto;
                    vm.producto.productos = data.productos;
                    // for (var i = 0; i < vm.producto.productos.length; i++) {
                    //     if (vm.producto.productos[i].producto_combo != null) {
                    //         vm.totalcostocombo = vm.totalcostocombo + (vm.producto.productos[i].producto_combo.precio_costo * vm.producto.productos[i].cantidad)
                    //     }
                    // }
                    // vm.esCombo();
                })
            }

            iniciaProducto();

            // vm.validacion = function () {
            //     if (vm.producto.productos_presentacion.length <= 0){
            //         return true;
            //     }  else {
            //         if (vm.formValidate.$invalid){
            //             return true;
            //         }
            //         return false;
            //     }
            // };
            //

            //Eliminamos un producto seleccionado dentro de la lista de productos de combo
            vm.removeProdCombo = function removeProdCombo(data) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara el Tipo de Producto del combo!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        if (!data.producto_combo == null) {
                            vm.totalcostocombo = vm.totalcostocombo - (data.cantidad * data.producto_combo.precio_costo);
                        }
                        _.remove(vm.producto.productos, function(n) {
                            return n == data;
                        });
                        Notify.alert(
                            '<em class="fa fa-check"></em> Tipo de Producto eliminada de la lista', {
                                status: 'success'
                            }
                        );
                    }
                });
            }

            //Guardado de producto/combo
            vm.submit = function submit() {
                vm.producto.productos_presentacion=[];
                // vm.presentacion.presentacion = vm.presentacion.presentacion.id;
                // vm.producto.productos_presentacion.push(vm.presentacion);
                vm.producto.existencia = 0;
                if (vm.producto.es_combo) {
                    if (vm.producto.combo_mixto) {
                        for (var i = 0; i < vm.producto.productos.length; i++) {
                            vm.producto.productos[i].tipo_producto_combo = vm.producto.productos[i].tipo_producto_combo.id;
                            vm.producto.productos[i].producto_combo = null;
                        };
                        save();
                    } else {
                        for (var i = 0; i < vm.producto.productos.length; i++) {
                            vm.producto.productos[i].tipo_producto_combo = null;
                            vm.producto.productos[i].producto_combo = vm.producto.productos[i].producto_combo.id;
                        };
                        save();
                    }
                } else {
                    vm.producto.productos = [];
                    save();
                }
            }

            vm.addPresentacion = function addPresentacion() {
                // vm.productoVacio.productos_presentacion.push(vm.presentacion);
                // vm.presentacion.presentacion = vm.presentacion.presentacion.id;

                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                if (vm.presentacion.porcentaje_completo == null)
                    vm.presentacion.porcentaje_completo = false
                vm.listapresentaciones.push(vm.presentacion);
                vm.presentacion = {};
                vm.presentacionForm.$setPristine();
                Notify.alert(
                    '<em class="fa fa-check"></em> Presentacion agredada a la lista', {
                        status: 'success'
                    }
                );
            };

            // Filtro de Presentaciones del Producto ya existentes
            vm.filtro_presentaciones = function() {
                ProductoService.presentacion_producto({
                    pro: vm.id
                }, function(data) {
                    vm.listapresentaciones = data;
                    vm.producto.presentacion = vm.listapresentaciones.id;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.filtro_presentaciones();

            //Eliminamos presentacion seleccionada
            vm.removePresentacion = function removePresentacion(data) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara la presentacion del producto de la lista actual! Para eliminarlo completamente debe "Guardar" los cambios',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        _.remove(vm.listapresentaciones, function(item) {
                            return item == data;
                        });
                        Notify.alert(
                            '<em class="fa fa-check"></em> Tipo de Producto eliminada de la lista', {
                                status: 'success'
                            }
                        );
                    }
                });
            };

            /*
             *Buscamos los tipos de productos
             */
            vm.tipos = function(val) {
                return TipoProductoService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            /*
             *Buscamos las presentaciones
             */
            vm.presentaciones = function(val) {
                return PresentacionService.filtro_no_paginate({
                    query: val,
                    page: 1
                }).$promise.then(function(data) {
                    return data;
                });
            };

            /*
             *Buscamos los productos que no son combos
             */
            vm.query_producto = function(val) {
                return ProductoService.filtro_no_combo({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.openTipo = function() {
              var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'addTipo.html',
                controller: 'TipoProductoAddController as tipos'
              });
            };

            vm.openPresentacion = function() {
              var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'addPresentacion.html',
                controller: 'PresentacionAddController as tipos'
              });
            };

            function save() {

                if (vm.listapresentaciones != 0){
                    vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                    vm.producto.presentacion = vm.listapresentaciones;
                    ProductoService.update(vm.producto, function(data) {
                        vm.producto = {
                            es_combo: false,
                            combo_mixto: false,
                            productos: []
                        };
                        vm.formValidate.$setPristine();
                        Notify.alert(
                            '<em class="fa fa-check"></em> Producto actualizado..', {
                                status: 'success'
                            }
                        );
                        $state.go('app.producto.lista');
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data, {
                                status: 'danger'
                            }
                        );
                    });

                }
                else if (vm.listapresentaciones == 0) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> El producto debe tener al menos una Presentación', {
                                status: 'warning'
                            }
                        );

                };

            };


        }
    }
})();
