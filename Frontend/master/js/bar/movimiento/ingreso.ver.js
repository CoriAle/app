(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('IngresoVerController', IngresoVerController);

    IngresoVerController.$inject = ['$stateParams', '$uibModal', 'Notify', 'SweetAlert', 'MovimientoService', 'TipoProductoService', 'ProductoService', '$resource', '$state'];

    function IngresoVerController($stateParams, $uibModal, Notify, SweetAlert, MovimientoService, TipoProductoService, ProductoService, $resource, $state) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.movimiento = {};
        activate();

        function activate() {
            function iniciaMovimiento() {
                MovimientoService.show({
                    id: vm.id
                }, function(data) {
                    vm.movimiento = data;

                    switch (vm.movimiento.documento) {
                      case 1:
                        vm.movimiento.documento = "Factura";
                        break;
                      case 2:
                        vm.movimiento.documento = "Recibo";
                        break;
                      case 3:
                        vm.movimiento.documento = "Vale";
                        break;
                      break;
                      default:
                    }

                    switch (vm.movimiento.tipo) {
                      case 1:
                        vm.movimiento.tipo = "Contado";
                        break;
                      case 2:
                        vm.movimiento.tipo = "Credito";
                        break;
                      break;
                      default:
                    }
                })
            }

            iniciaMovimiento();
        }
    }
})();
