(function() {
  'use strict';

  angular
    .module('app.tipodepositoretiro')
    .controller('IngresoEgresoController', IngresoEgresoController);

  IngresoEgresoController.$inject = ['$window', 'Notify', 'SweetAlert', '$resource', 'ConfiguracionService', 'TipoPersonaService', 'TipoDepositoRetiroService'];

  function IngresoEgresoController($window, Notify, SweetAlert, $resource, ConfiguracionService, TipoPersonaService, TipoDepositoRetiroService) {
    var vm = this;
    activate();

    function activate() {
      vm.usuario = {};

      vm.ingreso = false;
      vm.egreso = false;
      vm.tipopersona = false;
      vm.empresa = false;

      vm.listaTipopersona = [];
      vm.tipopersonaSelect = {};
      vm.tipopersonaSelect.id = 0;

      vm.empresa = {
          id: 0,
          nombre_empresa: null,
      };

      /**
      * Inicia TipoDepositoRetiro
      */
      vm.cargaTipoDepositoRetiro = function(){
        vm.tipoDepositoRetiro = {
          id: 0,
          nombre: null,
          activo: true,
          tipo_ingreso_egreso: false,
          tipo_persona: null,
          empresa: null,

        }
      }
      vm.cargaTipoDepositoRetiro();

      vm.usuario.id = $window.sessionStorage.getItem('userid');

      /**
      * Lista Tipo Persona
      */
      vm.listaTipopersona = function(){
        return TipoPersonaService.filtro_no_paginate({
          query: ''
        },function(data) {
          vm.listaTipopersona = data;
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      };

      vm.listaTipopersona();

      /**
      * Lista Empresa
      */
      cargaConfiguracion();

      function cargaConfiguracion() {
        ConfiguracionService.busca_configuracion({
        }, function(data) {
          if(data.id != null){
            vm.empresa = {
                id: data.id,
                nombre_empresa: data.nombre_empresa,
            }
          }
          // debugger
        });
      }

      /**
      * Crea un nuevo Tipo Deposito Retiro
      */

      vm.create = function(){
        vm.tipoDepositoRetiro = {
          id: vm.tipoDepositoRetiro.id,
          nombre: vm.tipoDepositoRetiro.nombre,
          tipo_ingreso_egreso: vm.tipoDepositoRetiro.RadioEgresoIngreso,
          tipo_persona: vm.tipopersonaSelect.id,
          empresa: vm.empresa.id
        };
        console.log(vm.tipoDepositoRetiro);
        TipoDepositoRetiroService.create(vm.tipoDepositoRetiro, function(data){
          Notify.alert(
            '<em class="fa fa-check"></em> Elemento creado..', {
              status: 'success'
            }
          );
          vm.form.$setPristine();
          vm.cargaTipoDepositoRetiro();

        }, function(error){
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }


    }
  }
})();
