(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoNuevoController', ProductoNuevoController);

    ProductoNuevoController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService', 'ProductoService', '$resource', '$state'];

    function ProductoNuevoController($uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService, ProductoService, $resource, $state) {
        var vm = this;
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

            vm.validaCombo = function validaCombo() {
                if (vm.producto.es_combo) {
                    if (!vm.formValidate.$invalid && vm.producto.productos.length > 0 || vm.lista_presentaciones.length <= 0) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    if (!vm.formValidate.$invalid || vm.lista_presentaciones.length <= 0) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            //Funcion para controlar el cambio de la seleccion de como o mixto
            vm.esCombo = function esCombo() {
                if (vm.producto.es_combo) {
                    if (vm.producto.combo_mixto) {
                        vm.combo = false;
                        vm.mixto = true;
                    } else {
                        vm.combo = true;
                        vm.mixto = false;
                    }
                } else {
                    vm.combo = false;
                    vm.mixto = false;
                }
                vm.comboForm.$setPristine();
            }

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

            //Agregamos un nuevo elemento a lista de productos de combo
            vm.addTipoCombo = function addTipoCombo() {
                var existe = false;
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    if (vm.producto_combo.tipo_producto_combo.id == vm.producto.productos[i].tipo_producto_combo.id) {
                        existe = true;
                        break;
                    }
                }
                if (existe == false) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Tipo de Producto Agredado a la lista', {
                            status: 'success'
                        }
                    );
                    vm.producto.productos.push(vm.producto_combo);
                    vm.producto_combo = {};
                    vm.tipoForm.$setPristine();
                } else {
                    vm.producto_combo = {};
                    Notify.alert(
                        '<em class="fa fa-times"></em> Tipo de Producto ya existe dentro de la lista', {
                            status: 'danger'
                        }
                    );
                    vm.tipoForm.$setPristine();
                }
            }

            //Agregamos un nuevo elemento a lista de productos de combo
            vm.addProdCombo = function addProdCombo() {
                var existe = false;
                console.log(vm.producto.productos);
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    if (vm.producto_combo.producto_combo.id == vm.producto.productos[i].producto_combo.id) {
                        existe = true;
                        break;
                    }
                }

                if (existe == false) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto Agredado a la lista', {
                            status: 'success'
                        }
                    );
                    vm.totalcostocombo = vm.totalcostocombo + (vm.producto_combo.producto_combo.precio_costo * vm.producto_combo.cantidad);
                    vm.producto.productos.push(vm.producto_combo);
                    vm.producto_combo = {};
                    vm.comboForm.$setPristine();
                } else {
                    vm.producto_combo = {};
                    Notify.alert(
                        '<em class="fa fa-times"></em> Producto ya existe dentro de la lista', {
                            status: 'danger'
                        }
                    );
                }
            }

            vm.addPresentacion = function addPresentacion() {
              vm.presentacion.presentacion = vm.presentacion.presentacion.id;
              vm.lista_presentaciones.push(vm.presentacion);
              console.log(vm.lista_presentaciones);
              vm.presentacion = {};
              Notify.alert(
                  '<em class="fa fa-check"></em> Presentacion agredada a la lista', {
                      status: 'success'
                  }
              );
            }

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

            function save() {
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                // vm.producto.presentacion = vm.producto.presentacion.id;
                vm.producto.producto_presentacion = vm.lista_presentaciones;

                ProductoService.create(vm.producto, function(data) {
                    vm.producto = {
                        es_combo: false,
                        combo_mixto: false,
                        productos: []
                    };
                    vm.formValidate.$setPristine();
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto creado..', {
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
        }
    }
})();
