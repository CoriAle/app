(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoNormalController', ProductoNormalController);

    ProductoNormalController.$inject = ['$uibModal', 'Notify', 'PresentacionService', 'TipoProductoService', 'ProductoService', 'SweetAlert'];

    function ProductoNormalController($uibModal, Notify, PresentacionService, TipoProductoService, ProductoService, SweetAlert) {
        var vm = this;
        activate();

        function activate() {
            function inicializa_producto() {
                vm.producto = {
                    es_combo: false,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
            }

            function inicializa_presentacion() {
                vm.presentacion = {};
            }

            inicializa_presentacion();
            inicializa_producto();

            /*
             *Buscamos los tipos de productos desde la api
             */
            vm.tipos = function(val) {
                return TipoProductoService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            /*
             *Buscamos las presentaciones desde la api
             */
            vm.presentaciones = function(val) {
                return PresentacionService.filtro_no_paginate({
                    query: val,
                    page: 1
                }).$promise.then(function(data) {
                    return data;
                });
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

            vm.addPresentacion = function addPresentacion() {
                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                vm.producto.productos_presentacion.push(vm.presentacion);
                inicializa_presentacion();
                vm.presentacionForm.$setPristine();
                Notify.alert(
                    '<em class="fa fa-check"></em> Presentacion agredada a la lista', {
                        status: 'success'
                    }
                );
            };

            vm.validacion = function () {
                if (vm.producto.productos_presentacion.length <= 0){
                    return true;
                }  else {
                    if (vm.formValidate.$invalid){
                        return true;
                    }
                    return false;
                }
            };

            //Eliminamos un producto seleccionado dentro de la lista de productos de combo
            vm.removePresentacion = function removePresentacion(data) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara la presentacion de la lista!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        _.remove(vm.producto.productos_presentacion, function(n) {
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
                vm.producto.existencia = 0;
                vm.producto.productos = [];
                save();
            };

            function save() {
                var carga = vm.producto;
                // Seteamos los datos a campos que se necesitan ser validados
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                _(vm.producto.productos_presentacion).forEach(function(item) {
                    item.presentacion = item.presentacion.id;
                });
                console.log(vm.producto);
                // Enviamos a crear un nuevo producto
                ProductoService.create(vm.producto, function() {
                    inicializa_producto();
                    vm.formValidate.$setPristine();
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto creado..', {
                            status: 'success'
                        }
                    );
                    // $state.go('app.producto.lista');
                }, function(error) {
                    vm.producto = carga;
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
