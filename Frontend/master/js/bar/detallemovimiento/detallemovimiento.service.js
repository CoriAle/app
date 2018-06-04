(function() {
  'use strict';
  angular.module('app.detallemovimiento')
    .factory('DetalleMovimientoService', DetalleMovimientoService);
  DetalleMovimientoService.$inject = ['$resource'];

  function DetalleMovimientoService($resource) {
    var url = '/api';
    return $resource(url + '/detallemovimiento/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());
