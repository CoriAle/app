(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PagoPersonalController', PagoPersonalController);

    PagoPersonalController.$inject = ['$window', '$state', '$uibModal', '$stateParams', 'Notify',
        'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService', '$rootScope',
        '$uibModalInstance'];

    function PagoPersonalController($window, $state, $uibModal, $stateParams, Notify, PersonaService,
                                    PagoService, $resource, SweetAlert, DepositoRetiroService, $rootScope,
                                    $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            vm.fin = $rootScope.fin;
            vm.datefin = new Date(vm.fin);
            vm.ini = $rootScope.ini;
            vm.dateini = new Date(vm.ini);
            vm.hoy = new Date();
            vm.model = $rootScope.model;
            vm.total_comisiones = $rootScope.detalles_comisiones;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.pago = $rootScope.pago;
            vm.model.sueldo_cuenta = parseInt(vm.model.sueldo_cuenta);
            vm.pagado = false;
            vm.total = vm.pago - vm.model.total_adelantos - vm.model.total_gastos + vm.model.total_comisiones;
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
                    'comision_servicio':0,
                    'bailes':0,
                    'adelanto':vm.model.total_adelantos,
                    'gastos_personal':vm.model.total_gastos,
                    'a_pagar':vm.pago,
                    'saldo_anterior':vm.saldo,
                    'saldo_actual':vm.new_saldo,
                    'persona':vm.model.id
                };
                PagoService.new_payment({fin: vm.fin, total: vm.total, user:vm.user_id},vm.modelo,function (data) {
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
                $rootScope.detalles_comisiones = vm.total_comisiones;
                $rootScope.gastos_personal = vm.total_gastos;
                $rootScope.adelantos_sueldos = vm.total_adelantos;
                $rootScope.model = vm.model;
                $rootScope.total = vm.total;
                $rootScope.pago = vm.pago;
                $rootScope.pagado = vm.pagado;
                $rootScope.new_saldo = vm.new_saldo;
                $state.go('app.impresion_empleado');
            }

        }
    }
})();
