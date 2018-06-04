(function() {
  'use strict';
  angular.module('app.personacuenta')
    .factory('PersonaCuentaService', PersonaCuentaService);
  PersonaCuentaService.$inject = ['$resource'];

  function PersonaCuentaService($resource) {
    var url = '/api';
    return $resource(url + '/personacuenta/', {}, {
      list_chica: {
        method: 'GET',
        params: {
          query: '@query',
          tipo: '@tipo'
        },
        url: url + '/personacuenta/',
      },
      lista: {
        url: url + '/personacuenta/busca_usuario/',
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true
      },
      list: {
        method: 'GET',
        params: {
          query: '@query',
          tipo: '@tipo'
        },
        url: url + '/personaquery/',
      }
    });
  }
}());
