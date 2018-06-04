(function() {
  'use strict';
  angular.module('app.reporteventa')
    .factory('ReporteVentaService', ReporteVentaService);
  ReporteVentaService.$inject = ['$resource'];

  function ReporteVentaService($resource) {
    var url = '/api';
    return $resource(url + '/pagos/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin'
        },
        url: url + '/pagos/filtro_pagos/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true,
        url: url + '/tiposproductos/filtro_no_paginate/'
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
      payments: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/pagos_personal/payments/',
        isArray: true
      },
      get_products: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/productos/get_products/',
        isArray: true
      },
      get_presentations: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/productos/get_presentations/',
        isArray: true
      },
      lista_cierre_caja: {
        method: 'GET',
        params: { ant: '@ant', sig: '@sig' },
        url: '/api/cierrecaja/listado/'
      }
    });
  }
}());
