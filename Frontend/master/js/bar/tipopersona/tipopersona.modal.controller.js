(function() {
    'use strict';
    angular
      .module('app.persona')
      .controller('TipoPersonaAddController', TipoPersonaAddController);

    TipoPersonaAddController.$inject = [
      '$uibModalInstance', 'TipoPersonaService', 'Notify'
    ];

    function TipoPersonaAddController($uibModalInstance, TipoPersonaService, Notify) {
      var vm = this;
      activate();

      function activate() {
        vm.errMsg = '';
        vm.tipoPersona = {
          id: 0,
          nombre: null
        }

        vm.ok = function() {
          vm.errMsg = '';
          vm.tipoPersona = {
            nombre: vm.model.nombre,
            activo: true
          };
          TipoPersonaService.create(vm.tipoPersona, function(data) {
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
