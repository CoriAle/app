(function() {
    'use strict';

    angular
        .module('app.reporteventa')
        .controller('ResumenPagoController', ResumenPagoController);
    
    ResumenPagoController.$inject = ['Notify', '$uibModalInstance', '$rootScope'];

    function ResumenPagoController(Notify, $uibModalInstance, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            vm.hoy = new Date();
            vm.model = $rootScope.item;
            vm.eschica = vm.model.persona.codigo_barra;
            vm.total = parseFloat(vm.model.comision_servicio) + parseFloat(vm.model.comision_venta) + parseFloat(vm.model.bailes) + parseFloat(vm.model.persona.sueldo_cuenta) - parseFloat(vm.model.adelanto) - parseFloat(vm.model.gastos_personal);
            console.log(vm.total);
            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }

    }
})();
