(function() {
    'use strict';
    angular
        .module('app.tipoproducto')
        .controller('TipoProductoAddController', TipoProductoAddController);

    TipoProductoAddController.$inject = [
        '$uibModalInstance', 'TipoProductoService', 'Notify'
    ];

    function TipoProductoAddController($uibModalInstance, TipoProductoService, Notify) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            vm.tipoProducto = {
                id: 0,
                nombre: null
            }

            vm.ok = function() {
                vm.errMsg = '';
                vm.tipoProducto = {
                    nombre: vm.model.nombre,
                    activo: true
                };
                TipoProductoService.create(vm.tipoProducto, function(data) {
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
