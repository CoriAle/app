(function() {
  'use strict';
  angular.module('app.cuenta')
    .factory('CuentaService', CuentaService);
  CuentaService.$inject = ['$resource'];

  function CuentaService($resource) {
    var url = '/api';
    return $resource(url + '/cuenta/:id/', {}, {
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
