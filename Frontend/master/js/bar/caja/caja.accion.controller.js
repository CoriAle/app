(function() {
  'use strict';

  angular
    .module('app.caja')
    .controller('CajaAccionController', CajaAccionController);

  CajaAccionController.$inject = ['$window', 'Notify', 'SweetAlert', 'CajaService', 'CajaAccionService', 'MovimientoService', '$resource', '$uibModalInstance', '$log', 'caja', 'estado', 'cierre', '$rootScope', '$state'];

  function CajaAccionController($window, Notify, SweetAlert, CajaService, CajaAccionService, MovimientoService, $resource, $uibModalInstance, $log, caja, estado, cierre, $rootScope, $state) {
    var vm = this;
    activate();

    function activate() {
      vm.cajero = {};
      vm.cajero.ide = parseInt($window.sessionStorage.getItem('userid'));
      vm.cajero.nombre = $window.sessionStorage.getItem('username');
      vm.imprimir = false;
      vm.caja = caja;
      $rootScope.caja = caja;
      vm.estadoCaja = estado;
      vm.cierre = cierre;
      vm.denominaciones = [{id:'1', nombre: 'Q. 0.50', valor: 0.50},
                           {id:'2', nombre: 'Q. 1', valor: 1},
                           {id:'3', nombre: 'Q. 5', valor: 5},
                           {id:'4', nombre: 'Q. 10', valor: 10},
                           {id:'5', nombre: 'Q. 20', valor: 20},
                           {id:'6', nombre: 'Q. 50', valor: 50},
                           {id:'7', nombre: 'Q. 100', valor: 100},
                           {id:'8', nombre: 'Q. 200', valor: 200},
                           {id:'9', nombre: 'Voucher', valor: 'Voucher'}
                         ];
      vm.denominacion = {};
      vm.detalle = [];
      vm.total = 0;
      vm.totales = {};
      vm.ventas = {};
      vm.ventas.totales = 0;
      vm.ventas.pagos = 0;
      vm.ventas.cortesias = 0;
      vm.ventas.tdia = 0;
      vm.ventas.diferencia = 0;
      vm.errMsg = '';
      vm.agregarMsg = '';
      // $rootScope.cierreCaja = [];

      console.log('caja');
      console.log($rootScope.caja);

      // vm.cierre_actual = function(){
      //   // Service para buscar buscar y mandar la fecha en la cual se creo la caja y desde esa fecha y hr que busque las ventas por dia
      //   CajaAccionService.compruebaCaja({
      //     id: $rootScope.caja.id
      //   },function(data){
      //     $rootScope.cierreCaja = data
      //     console.log('cierre_actual');
      //     console.log(data);
      //   },function(error){
      //     console.log(error);
      //   });
      // }
      // vm.cierre_actual();

      vm.ventas_dia = function(tipo) {
        console.log(tipo);
        console.log(vm.cajero.ide);
        console.log($rootScope.caja.id);
        MovimientoService.ventas_dia({
          tipo: tipo,
          user: vm.cajero.ide,
          caja: $rootScope.caja.id
        },function(data) {
          console.log('ventas dia');
          console.log(data);
            if(tipo == 1){
              vm.ventas.efectivo = data.movimientos.formas_pago__monto__sum;
              vm.ventas.pagos = data.pagos.monto__sum;
              vm.ventas.cortesias = data.cortesias.formas_pago__monto__sum;
              vm.ventas.totales += vm.ventas.efectivo;
              vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
              vm.ventas.tdia -= data.pagos.monto__sum;
            }else{
              vm.ventas.tarjeta = data.movimientos.formas_pago__monto__sum;
              vm.ventas.totales += vm.ventas.tarjeta;
              vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
            }
        },function(error) {
            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
        });
      }

      if(!vm.estadoCaja){
        var apertura = parseFloat(vm.cierre[0].apertura);
        vm.ventas.tdia += apertura;
        vm.ventas_dia(1);
        vm.ventas_dia(2);
      }

      vm.addDetalle = function addDetalle() {
        var item = 0;
        if(vm.denominacion.denominacion.nombre == 'Voucher')
          item = vm.denominacion.monto * vm.denominacion.cantidad;
        else
          item = vm.denominacion.denominacion.valor * vm.denominacion.cantidad;

        vm.detalle.push({
          denominacion: vm.denominacion.denominacion.valor,
          cantidad: vm.denominacion.cantidad,
          total: item,
          tipo: vm.estadoCaja
        });
        vm.total += item;
        vm.denominacion = {};
        vm.ventas.diferencia = vm.total - vm.ventas.tdia;
        vm.formAdd.$setPristine();
      };

      vm.remove = function(item) {
        vm.total -= item.total;
        vm.ventas.diferencia = vm.total - vm.ventas.tdia;
        _.remove(vm.detalle, function(n) {
          return n === item;
        });
      };

      vm.cancel = function() {
        // Recarga de pagina y cierre de Modal
        $state.reload();
        $uibModalInstance.close();
      };

      vm.valida = function() {
        if (vm.ventas.pagos==null){
          vm.ventas.pagos = 0;
        }
        if (vm.ventas.efectivo==null){
          vm.ventas.efectivo = 0;
        }
        if (vm.ventas.tarjeta==null){
          vm.ventas.tarjeta = 0;
        }
          if (vm.detalle.length > 0 && vm.total != 0 && vm.imprimir === false) {
            return false;
          } else {
            return true;
          }
      }

      vm.submit = function(){
        if(vm.estadoCaja)
          vm.create();
        else
          vm.update();
      }

      vm.create = function() {
        var apertura = ({
          caja: vm.caja.id,
          usuario: vm.cajero.ide,
          apertura: vm.total,
          cierre: 0,
          vendido: 0,
          diferencia: 0,
          vendido_costo: 0,
          detalle: vm.detalle
        });
        CajaAccionService.create({
        }, apertura,
          function(data) {
            Notify.alert(
              '<em class="fa fa-check"></em> Accion realizada con éxito..', {
                status: 'success'
              }
            );
            vm.imprimir = true;
            $uibModalInstance.close(true);
            $state.reload();
          },
          function(error) {
            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
            $state.reload();
        });
      }

      // console.log($rootScope.mesaspendientes);
      /**
       * Actualiza un elemento en la BD validando que no exista
       */
      vm.update = function() {

        // Validacion para que no haya ninguna Cuenta Pendiente de Pago
        if ( $rootScope.mesaspendientes > 0 ){
          // Validacion con Mesas Pendientes de Pago
          Notify.alert(
            '<em class="fa fa-info-circle"></em> Debe Pagar todas las cuentas', {
              status: 'info'
            }
          );
          $state.reload();
          $uibModalInstance.close();
        } else if ( $rootScope.mesaspendientes == 0) {
          // Ninguna Mesa pendiente, se puede pagar
          MovimientoService.ordenes_tablet({},function (data) {
            if (data.disponible == false){
              $uibModalInstance.close();
              Notify.alert(
                  '<em class="fa fa-info-circle"></em> La caja no se puede cerrar aún. Existen ordenes pendientes en las tablets, espere a que esas sean procesadas.', {
                    status: 'danger'
                  }
              );
            }else{
              MovimientoService.ordenes_caja({},function (data) {
                if (data.disponible == false){
                  $uibModalInstance.close();
                  Notify.alert(
                      '<em class="fa fa-info-circle"></em> La caja no se puede cerrar aún. Existen ordenes pendientes, haga click en Refrescar para atenderlas.', {
                        status: 'danger'
                      }
                  );
                }else{
                  var cierre = ({
                    caja: vm.caja.id,
                    usuario: vm.cajero.ide,
                    cierre: vm.total,
                    vendido: vm.ventas.totales,
                    diferencia: vm.ventas.diferencia,
                    vendido_costo: 0,
                    detalle: vm.detalle,
                    activo: false
                  });
                  CajaAccionService.update({
                    id: vm.cierre[0].id
                  }, cierre, function(data) {
                    vm.agregarMsg = 'Caja cerrada exitosamente, puede imprimir ahora.';
                    Notify.alert(
                        '<em class="fa fa-check"></em> Caja cerrada exitosamente..', {
                          status: 'success'
                        }
                    );
                    // vm.formAdd.$setPristine();
                    // $uibModalInstance.close(true);
                    vm.cierre[0].modificado = new Date();
                    vm.imprimir = true;
                    $state.reload();
                  }, function(error) {
                    vm.errMsg = 'Ocurrio un error: ' + error.data.detail;
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                          status: 'danger'
                        }
                    );
                    $state.reload();
                    vm.imprimir = false;
                  });
                }
              });
            }
          },function (error) {
            vm.errMsg = 'Ocurrio un error: ' + error.data.detail;
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'danger'
              }
            );
            $state.reload();
            vm.imprimir = false;
          });
          

        }

      }
    }
  }
})();
