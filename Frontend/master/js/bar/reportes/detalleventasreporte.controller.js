(function() {
  'use strict';

  angular
      .module('app.reporteventa')
      .controller('DetalleVentasReporteController', DetalleVentasReporteController);

  DetalleVentasReporteController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$resource', 'SweetAlert', 'Fecha', '$uibModalInstance'];

  function DetalleVentasReporteController($location, $log, $uibModal, $stateParams, Notify, MovimientoService, $resource, SweetAlert, Fecha, $uibModalInstance) {
    var vm = this;
    activate();

    function activate() {
      vm.listaDetalle = [];

      vm.detalle_venta = function(){
        var fecha = new Date(Fecha);
        MovimientoService.ventas_filtro({
          fecha: fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + (fecha.getDate() + 1)
        }, function(data) {
          vm.listaDetalle = data.results;
          console.log(data);
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }
      vm.detalle_venta();

      vm.cancel = function() {
        $uibModalInstance.close();
      };
    }
  }
})();
