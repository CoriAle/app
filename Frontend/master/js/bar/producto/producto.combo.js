(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoComboController', ProductoComboController);

    ProductoComboController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService', 'ProductoService', '$state'];

    function ProductoComboController($uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService, ProductoService, $state) {
        var vm = this;
        activate();

        function activate() {
            function inicializa_producto() {
                vm.producto = {
                    es_combo: true,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
                vm.totalcostocombo = 0.00;
                TipoProductoService.combo({}, function (data) {
                    vm.producto.tipo_producto = data;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> El tipo de producto combo no se encuentra creado', {
                            status: 'danger'
                        }
                    );
                });
            }

            function inicializa_presentacion() {
                vm.presentacion = {};
            }

            function inicializa_producto_combo() {
                vm.producto_combo = {
                    cantidad : 0
                }
            }

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

            inicializa_presentacion();
            inicializa_producto();
            inicializa_producto_combo();

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
                if (!vm.formValidate.$invalid && vm.producto.productos.length > 0 ||
                    vm.producto.productos_presentacion.length <= 0) {
                    return false;
                } else {
                    return true;
                }
            };

            vm.openTipo = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoProductoAddController as tipos'
                });
            };

            vm.openPresentacion = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addPresentacion.html',
                    controller: 'PresentacionAddController as tipos'
                });
            };

            //Agregamos un nuevo elemento a lista de productos de combo
            vm.addProdCombo = function addProdCombo() {
                var existe = false;
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
                    inicializa_producto_combo();
                    vm.comboForm.$setPristine();
                } else {
                    vm.producto_combo = {};
                    Notify.alert(
                        '<em class="fa fa-times"></em> Producto ya existe dentro de la lista', {
                            status: 'danger'
                        }
                    );
                }
            };

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
            };

            //Guardado de producto/combo
            vm.submit = function submit() {
                vm.producto.productos_presentacion=[];
                vm.presentacion.presentacion = vm.presentacion.presentacion.id;
                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                vm.producto.productos_presentacion.push(vm.presentacion);
                vm.producto.existencia = 0;
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    vm.producto.productos[i].tipo_producto_combo = null;
                    vm.producto.productos[i].producto_combo = vm.producto.productos[i].producto_combo.id;
                }
                save();
            };

            function save() {
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                vm.producto.precio_costo = vm.totalcostocombo;
                // console.log(vm.producto);
                ProductoService.create(vm.producto, function() {
                    vm.producto = {
                        es_combo: true,
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
