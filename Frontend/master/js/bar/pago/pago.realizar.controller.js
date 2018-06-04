(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PagoRealizarController', PagoRealizarController);

    PagoRealizarController.$inject = ['$window', '$state', '$uibModal', '$stateParams', 'Notify',
        'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService', '$rootScope',
        '$uibModalInstance'];

    function PagoRealizarController($window, $state, $uibModal, $stateParams, Notify, PersonaService,
                                    PagoService, $resource, SweetAlert, DepositoRetiroService, $rootScope,
                                    $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            vm.fin = $rootScope.fin;
            vm.datefin = new Date(vm.fin);
            vm.ini = $rootScope.ini;
            vm.dateini = new Date(vm.ini);
            vm.pagado = false;
            vm.total_servicios = $rootScope.total_servicios;
            vm.total_comisiones = $rootScope.detalles_comisiones;
            vm.total_bailes = $rootScope.detalles_bailes;
            vm.total_gastos = $rootScope.gastos_personal;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.hoy = new Date();
            // model.total_servicios - ctrl.model.total_adelantos - ctrl.model.total_gastos + ctrl.model.total_comisiones + ctrl.model.total_bailes
            vm.model = $rootScope.model;
            if (!vm.model.total_adelantos){vm.model.total_adelantos = 0}
            if (!vm.model.total_bailes){vm.model.total_bailes = 0}
            if (!vm.model.total_comisiones){vm.model.total_comisiones = 0}
            if (!vm.model.total_gastos){vm.model.total_gastos = 0}
            if (!vm.model.total_servicios){vm.model.total_servicios = 0}
            vm.total = vm.model.total_servicios - vm.model.total_adelantos - vm.model.total_gastos + vm.model.total_comisiones + vm.model.total_bailes;

            vm.pago = vm.total;
            vm.saldar = function () {
                if (vm.pago > (vm.total + vm.saldo)){
                    vm.pago = vm.total + vm.saldo;
                }
                try {
                    vm.pago = parseFloat(vm.pago.toFixed(2));
                }catch(err){
                    vm.pago = 0;
                }
                if (!vm.total){
                    vm.total=0;
                }
                vm.new_saldo = vm.total + vm.saldo - vm.pago;
                vm.new_saldo = parseFloat(vm.new_saldo.toFixed(2));
            };
            PagoService.me({id:vm.model.id}, function (data) {
                vm.saldo = parseFloat(data.saldo);
                vm.saldar();
            },function (error) {
                vm.saldo = 0;
            });
            vm.cancel = function() {
                $uibModalInstance.close();
            };
            vm.pagar = function () {
                vm.user_id = $window.sessionStorage.getItem('userid');
                vm.modelo = {
                    'comision_venta':vm.model.total_comisiones,
                    'comision_servicio':vm.model.total_servicios,
                    'bailes':vm.model.total_bailes,
                    'adelanto':vm.model.total_adelantos,
                    'gastos_personal':vm.model.total_gastos,
                    'a_pagar':vm.pago,
                    'saldo_anterior':vm.saldo,
                    'saldo_actual':vm.new_saldo,
                    'persona':vm.model.id
                };
                PagoService.new_payment({fin: vm.fin, ini: vm.ini , total: vm.total, user:vm.user_id},vm.modelo,function (data) {
                    swal("Pago realizado","Ya puede imprimir");
                    vm.pagado = true;
                    $state.go('app.pagoempleado');
                },function (error) {

                })
            };
            /**Funcion para ver la vista previa de impresion*/
            vm.vista_impresion = function () {
                $uibModalInstance.close();
                $rootScope.fin = vm.fin;
                $rootScope.ini = vm.ini;
                $rootScope.total_servicios = vm.total_servicios;
                $rootScope.detalles_comisiones = vm.total_comisiones;
                $rootScope.detalles_bailes = vm.total_bailes;
                $rootScope.gastos_personal = vm.total_gastos;
                $rootScope.adelantos_sueldos = vm.total_adelantos;
                $rootScope.model = vm.model;
                $rootScope.total = vm.total;
                $rootScope.pago = vm.pago;
                $rootScope.pagado = vm.pagado;
                $rootScope.new_saldo = vm.new_saldo;
                $state.go('app.impresion_chica');
            }

        }
    }
})();
