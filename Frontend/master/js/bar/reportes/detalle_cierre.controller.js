
(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('DetalleCierreController', DetalleCierreController);

    DetalleCierreController.$inject = ['MovimientoService', '$uibModalInstance', '$rootScope'];

    function DetalleCierreController(MovimientoService, $uibModalInstance, $rootScope) {
        var vm = this;
        vm.ventas = {};
        vm.ventas.totales = 0;
        vm.ventas.pagos = 0;
        vm.ventas.cortesias = 0;
        vm.ventas.tdia = 0;
        vm.ventas.diferencia = 0;
        vm.ventas_dia = function(tipo) {
            MovimientoService.ventas_cierre({
                tipo: tipo,
                cierre: $rootScope.cierre
            },function(data) {
                if(tipo == 1){
                    vm.ventas.efectivo = data.movimientos.formas_pago__monto__sum;
                    vm.ventas.pagos = data.pagos.monto__sum;
                    vm.ventas.cortesias = data.cortesias.formas_pago__monto__sum;
                    vm.ventas.totales += vm.ventas.efectivo;
                    vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
                    vm.ventas.tdia -= data.pagos.monto__sum;
                    vm.total = data.cierre;
                    vm.apertura = data.apertura;
                    vm.ventas.diferencia = data.diferencia;
                }else{
                    vm.ventas.tarjeta = data.movimientos.formas_pago__monto__sum;
                    vm.ventas.totales += vm.ventas.tarjeta;
                    vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
                }
            },function(error) {
                vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
            });
        };
        vm.cancel = function() {
            $uibModalInstance.close();
        };

        activate();

        function activate() {
            vm.ventas_dia(1);
            vm.ventas_dia(2);
        }
    }
})();
