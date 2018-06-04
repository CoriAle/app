(function() {
  'use strict';
  angular.module('app.tipodepositoretiro')
    .factory('TipoDepositoRetiroService', TipoDepositoRetiroService);
  TipoDepositoRetiroService.$inject = ['$resource'];

  function TipoDepositoRetiroService($resource) {
    var url = '/api';
    return $resource(url + '/tiposdepositosretiros/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro_egreso: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/tiposdepositosretiros/filtro_egreso/',
        isArray: true
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
