(function() {
  'use strict';
  angular.module('app.caja')
    .factory('CajaService', CajaService);
  CajaService.$inject = ['$resource'];

  function CajaService($resource) {
    var url = '/api';
    return $resource(url + '/cajas/:id/', {}, {
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
      buscar_cajas: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        isArray: true,
        url: url + '/cajas/buscar_cajas',
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
      proveedores: {
        url: url + '/personas/proveedores/',
        method: 'GET',
        isArray: true
      },
      clientes: {
        url: url + '/personas/clientes/',
        method: 'GET',
        isArray: true
      },
      comprueba_caja_usuario: {
        url: url + '/cierrecaja/busca_caja_usuario/',
        method: 'GET',
        params: {
          user: '@user'
        }
      },
    });
  }
}());
