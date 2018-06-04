(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ChicaImpresionController', ChicaImpresionController);

    ChicaImpresionController.$inject = ['$window', '$state',
        'PagoService','$rootScope'];

    function ChicaImpresionController($window, $state,
                                    PagoService, $rootScope) {
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
            vm.pagado = $rootScope.pagado;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.hoy = new Date();
            // model.total_servicios - ctrl.model.total_adelantos - ctrl.model.total_gastos + ctrl.model.total_comisiones + ctrl.model.total_bailes
            vm.model = $rootScope.model;
            if (!vm.model.total_adelantos){vm.model.total_adelantos = 0}
            if (!vm.model.total_bailes){vm.model.total_bailes = 0}
            if (!vm.model.total_comisiones){vm.model.total_comisiones = 0}
            if (!vm.model.total_gastos){vm.model.total_gastos = 0}
            if (!vm.model.total_servicios){vm.model.total_servicios = 0}
            vm.total = $rootScope.total;
            vm.pago = $rootScope.pago;

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
            vm.saldar();
            PagoService.me({id:vm.model.id}, function (data) {
                vm.saldo = parseFloat(data.saldo);
                vm.saldar();
            },function (error) {
                vm.saldo = 0;
            });
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
                },function (error) {

                })
            };
            vm.cancel = function () {
                $state.go('app.empleado',{id: vm.model.id});
            };
            vm.cerrar = function () {
                $state.go('app.pagoempleado');
            }
        }
    }
})();
