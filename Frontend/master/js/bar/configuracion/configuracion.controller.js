(function() {
  'use strict';

  angular
    .module('app.configuracion')
    .controller('ConfiguracionController', ConfiguracionController);

  ConfiguracionController.$inject = ['$window', 'Notify', 'SweetAlert', 'ConfiguracionService', '$resource'];

  function ConfiguracionController($window, Notify, SweetAlert, ConfiguracionService, $resource) {
    var vm = this;
    activate();

    function activate() {
      vm.configuracion = {
          id: 0,
          nombre_empresa: null,
          inicio_jornada: null,
          finalizacion_jornada: null
      }
      //Cargamos la configuracion
      cargaConfiguracion();
      vm.configuracion.inicio_jornada = new Date();
      vm.configuracion.finalizacion_jornada = new Date();

      //Cargamos los datos de la configuracion, si hay un resistro solo lo modificamos de lo contrario
      //solo lo editamos
      function cargaConfiguracion() {
        ConfiguracionService.busca_configuracion({
        }, function(data) {
          if(data.id != null){
            vm.configuracion = {
                id: data.id,
                nombre_empresa: data.nombre_empresa,
                inicio_jornada: data.inicio_jornada,
                finalizacion_jornada: data.finalizacion_jornada
            }
          }
        });
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.create = function() {
          ConfiguracionService.create({
            nombre_empresa: vm.configuracion.nombre_empresa,
            inicio_jornada: vm.configuracion.inicio_jornada,
            finalizacion_jornada: vm.configuracion.finalizacion_jornada
          }, function(data) {
              Notify.alert(
                  '<em class="fa fa-check"></em> Elemento creado..', {
                      status: 'success'
                  }
              );
              vm.form.$setPristine();
              cargaConfiguracion();
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
          ConfiguracionService.update({
              id: vm.configuracion.id
          }, vm.configuracion, function(data) {
              Notify.alert(
                  '<em class="fa fa-check"></em> Elemento actualizado..', {
                      status: 'success'
                  }
              );
              vm.form.$setPristine();
              cargaConfiguracion();
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
        if (vm.configuracion.id < 1) {
            vm.create();
        } else {
            vm.update();
        }
      }
    }
  }
})();
