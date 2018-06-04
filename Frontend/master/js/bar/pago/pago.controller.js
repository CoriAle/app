(function() {
  'use strict';

  angular
    .module('app.pago')
    .controller('PagoController', PagoController);

  PagoController.$inject = ['$window', 'Notify', 'SweetAlert', 'PagoService', '$resource', 'PersonaService', '$uibModalInstance', 'pago'];

  function PagoController($window, Notify, SweetAlert, PagoService, $resource, PersonaService, $uibModalInstance, pago) {
    var vm = this;
    activate();

    function activate() {
      vm.show = false;
      vm.query = '';
      vm.pago = {};
      vm.motivos = [{id:1, nombre: 'Pago Servicio'},
                    {id:2, nombre: 'Adelanto'},
                    {id:3, nombre: 'Mantenimiento'},
                    {id:4, nombre: 'Seguridad'},
                    {id:5, nombre: 'Deuda'},
                    {id:6, nombre: 'Gastos Varios'}
                  ];
      vm.listaEmpleados = [];
      vm.usuario = {};
      vm.usuario.id = $window.sessionStorage.getItem('userid');



      //Cargamos los datos de tipo de Producto
      // function cargaTipoProducto() {
      //   vm.tipoProducto = {
      //     id: 0,
      //     nombre: null
      //   }
      // }
      //
      // //Cargamos el tipo de Producto
      // cargaTipoProducto();

      vm.empleados = function(){
        PersonaService.empleados({
        }, function(data) {
          vm.listaEmpleados = data;
          if(pago.id != 0){
            vm.pago = pago;
            var motivo = _.find(vm.motivos, function(n){return n.nombre === vm.pago.motivo});
            vm.pago.monto = parseFloat(pago.monto);
            vm.pago.motivo = motivo;
          }
          else {
            vm.pago = {};
            vm.pago.id = 0;
          }
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      vm.empleados();

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.create = function() {
        vm.envio_pago = {
          monto: vm.pago.monto,
          motivo: vm.pago.motivo.nombre,
          observacion: vm.pago.observacion,
          persona: vm.pago.persona,
          usuario: vm.usuario.id,
        };
        PagoService.create(vm.envio_pago, function(data) {
          Notify.alert(
            '<em class="fa fa-check"></em> Pago creado..', {
              status: 'success'
            }
          );
          vm.formAdd.$setPristine();
          $uibModalInstance.close(true);
          //cargaTipoProducto();
          // vm.load();
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      /**
       * Actualiza un elemento en la BD validando que no exista
       */
      vm.update = function() {
        console.log(vm.envio_pago);
        vm.update_pago = {
          monto: vm.pago.monto,
          motivo: vm.pago.motivo.nombre,
          observacion: vm.pago.observacion,
          persona: vm.pago.persona.id,
          usuario: vm.usuario.id,
        };
        PagoService.update({
          id: vm.pago.id
        }, vm.update_pago, function(data) {
          Notify.alert(
            '<em class="fa fa-check"></em> Elemento actualizado..', {
              status: 'success'
            }
          );
          vm.formAdd.$setPristine();
          $uibModalInstance.close(true);
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.add = function() {
        // Verificamos si se hace add o update
        if (vm.pago.id == 0) {
          vm.create();
        } else {
          vm.update();
        }
      }

      vm.cancel = function() {
        $uibModalInstance.close();
      };
    }
  }
})();
