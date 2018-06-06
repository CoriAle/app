(function() {
  'use strict';

  angular
    .module('app.caja')
    .controller('CajaModalController', CajaModalController);

  CajaModalController.$inject = ['$window', 'Notify', 'SweetAlert', 'CajaService', 'CajaAccionService', '$resource', '$uibModal', '$log', '$location', '$rootScope'];

  function CajaModalController($window, Notify, SweetAlert, CajaService, CajaAccionService, $resource, $uibModal, $log, $location, $rootScope) {
    var vm = this;
    activate();

    function activate() {
      vm.lista = [];
      vm.cajaSelect = {};
      vm.estadoCaja = true;
      vm.cierrecaja = [];
      vm.cajaSelect.id = 0;
      vm.usuario = {};
      vm.usuario.id = $window.sessionStorage.getItem('userid');
      vm.activaBoton = false;
      vm.activaPago = false;

      vm.caja_abierta = function(){
        vm.lista = [];
        CajaService.comprueba_caja_usuario({
          user: vm.usuario.id
        }, function(data){

          CajaService.show({
            id: data.caja
          }, function(datac){
            vm.lista.push(datac);
            vm.cajaSelect = vm.lista[0];
            vm.estadoCaja = vm.cajaSelect.estado;
            vm.activaPago = vm.cajaSelect.estado;
            // Variable Global para caja que se utilza en Realizar Pago
            $rootScope.cajaAbierta=vm.lista[0];
            // console.log(vm.lista[0].id);
            // console.log(vm.lista[0]);
            // console.log(vm.lista);
            CajaAccionService.compruebaCaja({
              id: vm.cajaSelect.id
            },function(dataci) {
                if(dataci.length > 0)
                {
                  vm.estadoCaja = false;
                  vm.cierrecaja = dataci;
                }else{
                  vm.estadoCaja = true;
                }
              },
              function(error) {
                vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
            });
          })

        }, function(error){
          vm.listaCombo();
        });
      }

      vm.cajaUsuario = function(){
        vm.cajaU = {};
        CajaService.comprueba_caja_usuario({
          user: vm.usuario.id
        }, function(data){
          vm.cajaU = data
          Notify.alert(
            '<em class="fa fa-check"></em> Caja abierta', {
              status: 'success'
            }
          );
        }, function(error){
          Notify.alert(
            '<em class="fa fa-times"></em> Ninguna caja abierta', {
              status: 'warning'
            }
          );
        })
      }
      vm.cajaUsuario();

      vm.listaCombo = function(){
        CajaService.filtro_no_paginate({
        },function(data) {
          vm.lista = data;
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      vm.caja_abierta();

      vm.compruebaCaja = function(){
        vm.activaBoton = true;
        vm.activaPago = true;
        CajaAccionService.compruebaCaja({
          id: vm.lista.id
        },function(data) {
            if(data.length > 0)
            {
              vm.estadoCaja = false;
              vm.cierrecaja = data;
              vm.activaPago = true;
              // console.log(vm.activaBoton);
              console.log(data);
            }else{
              vm.estadoCaja = true;
              vm.activaPago = false;
              // console.log(vm.activaBoton);
            }
            console.log(vm.cierrecaja);
          },
          function(error) {
            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
        });
      }

      vm.accionCaja = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            size: 'lg',
            templateUrl: 'accionesCaja.html',
            controller: 'CajaAccionController as accion',
            resolve: {
                caja: function() {
                    return vm.cajaSelect;
                },
                estado: function(){
                  return vm.estadoCaja;
                },
                cierre: function(){
                  return vm.cierrecaja;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            if (selectedItem) {
              vm.activaBoton = false;
              $location.path('/app/caja/pendientes');
              vm.listaCombo();
            } else {
                //$log.info('Modal dismissed at: ' + new Date());
            }
        }, function() {
           // $log.info('Modal dismissed at: ' + new Date());
        });
      };

      // Pago desde Caja
      vm.openPagos = function() {
          var modalInstance = $uibModal.open({
              animation: true,
              size: 'lg',
              templateUrl: 'accionesPago.html',
              controller: 'RetiroCajaController as accion',
              resolve: {
                  caja: function() {
                    return vm.cajaSelect;
                  },
                  estado: function(){
                    return vm.estadoCaja;
                  },
                  cierre: function(){
                    return vm.cierrecaja;
                  }
              }
          });
      };
    }
  }
})();
