(function() {
  'use strict';
  angular.module('app.pago')
    .factory('PagoService', PagoService);
  PagoService.$inject = ['$resource'];

  function PagoService($resource) {
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
        // url: url + '/tiposproductos/filtro_no_paginate/'
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
      me: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/cuenta/me/'
      },
      new_payment: {
        method: 'POST',
        url: '/api/pagos_personal/new_payment/'
      }
    });
  }
}());
