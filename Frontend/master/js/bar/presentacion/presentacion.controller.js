(function() {
'use strict';

angular
  .module('app.tipopersona')
  .controller('PresentacionController', PresentacionController);

PresentacionController.$inject = ['$window', 'Notify', 'SweetAlert', 'PresentacionService', '$resource'];

function PresentacionController($window, Notify, SweetAlert, PresentacionService, $resource) {
  var vm = this;
  activate();

  function activate() {
    vm.show = false;
    vm.query = '';
    //Cargamos los datos de tipo de Persona
    function cargaPresentacion() {
      vm.presentacion = {
        id: 0,
        nombre: null
      }
    }

    //Cargamos el tipo de Persona
    cargaPresentacion();

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

    /**
     * Carga todos los tipos de personas desde el backend
     */
    vm.load = function() {
      vm.lista = [];
      if (vm.query.length>0) {
        PresentacionService.filtro({
          query: vm.query,
          page: vm.pagingInfo.page
        }, function(data) {
          vm.lista = data.results;
          vm.pagingInfo.totalItems = data.count;
        }, function(error) {
          console.log(error);
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'warning'
            }
          );
        });
      } else {
        PresentacionService.list({
          page: vm.pagingInfo.page
        }, function(data) {
          vm.lista = data.results;
          vm.pagingInfo.totalItems = data.count;
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }
    }

    vm.load(); //Cargamos la lista

    /**
     * Determina la ordenacion a aplicar en la lista en base al campo indicado
     * @param sortBy: campo a ordenar
     */
    vm.sort = function(sortBy) {
      vm.pagingInfo.sortBy = sortBy;
      vm.pagination.sort = sortBy + ' ASC';

      if (sortBy === vm.pagingInfo.sortBy) {
        vm.pagingInfo.reverse = !vm.pagingInfo.reverse;

        if (vm.pagingInfo.reverse)
          vm.pagination.sort = sortBy + ' DESC';
      } else
        vm.pagingInfo.reverse = false;

      vm.pagination.skip = 0;
      vm.load();
    }

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
      vm.load();
    };

    /**
     * Muestra el dialogo para agregar nuevos elementos a la BD
     * @param show: booleano que determina si se muestra u oculta
     */
    vm.showAdd = function(show) {
      vm.show = show;
      if (!vm.show) {
        vm.form.$setPristine();
        vm.presentacion = {
          id: 0
        };
      }
    }

    /**
     * Crea un nuevo elemento en la BD
     */
    vm.create = function() {
      vm.presentacion = {
        nombre: vm.presentacion.nombre,
        activo: true
      };
      PresentacionService.create(vm.presentacion, function(data) {
        Notify.alert(
          '<em class="fa fa-check"></em> Elemento creado..', {
            status: 'success'
          }
        );
        vm.form.$setPristine();
        cargaPresentacion();
        vm.show = false;
        vm.load();
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
      PresentacionService.update({
        id: vm.presentacion.id
      }, vm.presentacion, function(data) {
        Notify.alert(
          '<em class="fa fa-check"></em> Elemento actualizado..', {
            status: 'success'
          }
        );
        vm.form.$setPristine();
        cargaPresentacion();
        vm.show = false;
        vm.load();
      }, function(error) {
        Notify.alert(
          '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
            status: 'danger'
          }
        );
        vm.load();
      });
    }

    /**
     * Crea un nuevo elemento en la BD
     */
    vm.add = function() {
      // Verificamos si se hace add o update
      if (vm.presentacion.id < 1) {
        vm.create();
      } else {
        vm.update();
      }
    }

    vm.edit = function(item) {
      vm.show = true;
      vm.presentacion = item;
      $window.scrollTo(0, 0);
    }

    /**
     * Realiza un soft delete al elemento indicado
     * @param item: elemento a desactivar
     */
    vm.disable = function(item) {      
      SweetAlert.swal({
        title: '¿Esta Seguro?',
        text: '¡Se eliminara este Tipo de Persona!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: '¡Sí, eliminarlo!',
        cancelButtonText: 'Cancelar',
        closeOnConfirm: true
      }, function(isConfirm) {
        if (isConfirm) {
          item.activo = false;
          PresentacionService.update({
            id: item.id
          }, item, function(data) {
            Notify.alert(
              '<em class="fa fa-check"></em> Elemento eliminado..', {
                status: 'success'
              }
            );
            vm.show = false;
            vm.load();
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'danger'
              }
            );
          });
        }
      });
    }
  }
}
})();
