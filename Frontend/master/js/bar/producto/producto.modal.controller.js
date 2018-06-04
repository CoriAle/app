(function() {
    'use strict';
    angular
        .module('app.producto')
        .controller('ProductoAddController', ProductoAddController);

    ProductoAddController.$inject = [
        '$uibModalInstance', 'ProductoService', 'Notify', 'PresentacionService', 'TipoProductoService'
    ];

    function ProductoAddController($uibModalInstance, ProductoService, Notify, PresentacionService, TipoProductoService) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            vm.producto = {
                id: 0,
                nombre: null
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
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.ok = function() {
                vm.errMsg = '';
                vm.producto.productos = [];
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                vm.producto.presentacion = vm.producto.presentacion.id;
                ProductoService.create(vm.producto, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    $uibModalInstance.close();
                }, function(error) {
                    vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
                });
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();
