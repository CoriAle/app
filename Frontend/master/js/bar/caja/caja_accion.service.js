(function() {
  'use strict';
  angular.module('app.caja')
    .factory('CajaAccionService', CajaAccionService);
  CajaAccionService.$inject = ['$resource'];

  function CajaAccionService($resource) {
    var url = '/api';
    return $resource(url + '/cierrecaja/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/cajas/',
      },
      filtro_no_paginate: {
        method: 'GET',
        isArray: true,
        url: url + '/cajas/filtro_no_paginate/',
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
      },
      compruebaCaja: {
        url: url + '/cierrecaja/comprueba_caja/',
        method: 'GET',
        isArray: true,
        params: {
          id: '@id'
        }
      },
      clientes: {
        url: url + '/personas/clientes/',
        method: 'GET',
        isArray: true
      }
    });
  }
}());
