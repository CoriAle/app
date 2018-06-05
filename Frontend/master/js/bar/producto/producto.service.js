(function() {
  'use strict';
  angular.module('app.producto')
    .factory('ProductoService', ProductoService);
  ProductoService.$inject = ['$resource'];

  function ProductoService($resource) {
    var url = 'http://localhost:8000/api';
    return $resource(url + '/productos/:id/', {}, {
      list: {
        method: 'GET'
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
      combo_mixto: {
        method: 'GET',
        url: url + '/productos/busca_combo_mixto'
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
      filtro_no_combo: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/productos/filtro_no_combo/',
        isArray: true
      },
      existencia_minima: {
        url: url + '/productos/existencia_minima/',
        method: 'GET'
      },
      impresion_productos: {
        method: 'GET',
        params : {
          ant: '@ant',
          sig: '@sig',
        },
        url: url + '/productos/lista_impresion_productos/'
      },
      no_combo: {
        url: url + '/productos/no_combo/',
        method: 'GET',
        isArray: true
      },
      filtro: {
        url: url + '/productos/filtro/',
        method: 'GET',
        params: {
          query: '@query',
          page: '@page'
        }
      },
      presentacion_producto: {
        method: 'GET',
        params: {
          pro: '@id'
        },
        url: url + '/presentacionesproducto/presentacion_producto/',
        isArray: true
      },
      tipo: {
        url: url + '/productos/tipos/',
        method: 'GET',
        params: {
          tipo: '@tipo'
        },
        isArray: true
      }
    });
  }
}());
