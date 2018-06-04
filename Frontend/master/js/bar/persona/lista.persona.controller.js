(function() {
  'use strict';

  //Controlador de agregar, listar y eliminar personas
  angular
    .module('app.persona')
    .controller('PersonaController', PersonaController);

  PersonaController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PersonaService', 'TipoPersonaService', '$resource', '$state'];

  function PersonaController($uibModal, Notify, SweetAlert, PersonaService, TipoPersonaService, $resource, $state) {
    var vm = this;

    activate();

    function activate() {
      vm.query = '';
      vm.removePersona = removePersona;

      function modifyPersona(data) {
        vm.model = data;
      }

      // Paginacion del frontend expresado en paginas
      vm.pagingInfo = {
        page: 1,
        itemsPerPage: 10,
        sortBy: 'id',
        reverse: false,
        search: '',
        totalItems: 0,
      };

      // Paginacion para el backend expresado con saltos y limites
      vm.pagination = {
        skip: 0,
        sort: 'id',
        where: {
          "activo": true
        },
        limit: 10
      }

      function loadPersonas() {
        vm.persona = [];
        //Comprobamos si query no esta vacio
        if (vm.query.length > 0) {
          PersonaService.filtro({
            query: vm.query,
            page: vm.pagingInfo.page
          }, function(data) {
            vm.persona = data.results;
            vm.pagingInfo.totalItems = data.count;
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'warning'
              }
            );
          });

        } else {
          PersonaService.list({
            page: vm.pagingInfo.page
          }, function(data) {
            vm.pagingInfo.totalItems = data.count;
            vm.persona = data.results;
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'warning'
              }
            );
          });
        }
      }

      loadPersonas();

      // Lista tipos de personas
      vm.listaTipopersona = function() {
          return TipoPersonaService.filtro_no_paginate({
              query: ''
          }, function(data) {
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

      // Filtro por Persona
      vm.filtro_tipo_persona = function() {
          PersonaService.filtro_tipo_persona({
              tipo: vm.tipopersonaSelect.id
          }, function(data) {
              vm.persona = data.results
              console.log(data);;
              vm.pagingInfo.totalItems = data.count;
          }, function(error) {
              Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                      status: 'danger'
                  }
              );
          });
      }

      /**
       * Buscamos un elemento enviando parametros a el backend
       */
      vm.search = loadPersonas;

      /**
       * Convierte el numero de página generado por uibootstrap a salto y limite utilizado
       * por el backend
       * @para page: numero de pagina a convertir
       */
      vm.selectPage = function(page) {
        vm.pagingInfo.page = page;
        // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
        vm.pagination.skip = 0;
        if (vm.pagingInfo.page > 1)
          vm.pagination.skip = (vm.pagingInfo.page - 1) * vm.pagingInfo.itemsPerPage;
        loadPersonas();
      };

      vm.openBarcode = function (id){
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'barcode.html',
          controller: 'PersonaBarCodeController as ctrl',
          resolve: {
            persona: function() {
              return id;
            }
          }
        });
      }

      function removePersona(index) {
        SweetAlert.swal({
          title: '¿Esta Seguro?',
          text: '¡Se eliminara a la persona!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: '¡Sí, eliminarlo!',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: true
        }, function(isConfirm) {
          if (isConfirm) {
            PersonaService.destroy({
                id: index
              },
              function(data) {
                Notify.alert(
                  '<em class="fa fa-check"></em> Persona eliminada..', {
                    status: 'success'
                  }
                );
                loadPersonas();
                $state.go('app.persona.lista');
              },
              function(error) {
                Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                    status: 'warning'
                  }
                );
                loadPersonas();
              });
          } else {
            loadPersonas();
          }
        });
      }

      vm.cancel = function() {
        loadPersonas();
      }
    }
  }
})();
