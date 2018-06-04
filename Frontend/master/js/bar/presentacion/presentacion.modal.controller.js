(function() {
    'use strict';
    angular
      .module('app.presentacion')
      .controller('PresentacionAddController', PresentacionAddController);

    PresentacionAddController.$inject = [
      '$uibModalInstance', 'PresentacionService', 'Notify'
    ];

    function PresentacionAddController($uibModalInstance, PresentacionService, Notify) {
      var vm = this;
      activate();

      function activate() {
        vm.errMsg = '';
        vm.presentacion = {
          id: 0,
          nombre: null
        }

        vm.ok = function() {
          vm.errMsg = '';
          vm.presentacion = {
            nombre: vm.model.nombre,
            activo: true
          };
          PresentacionService.create(vm.presentacion, function(data) {
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
