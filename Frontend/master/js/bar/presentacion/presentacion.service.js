(function() {
  'use strict';
  angular.module('app.tipopersona')
    .factory('PresentacionService', PresentacionService);
  PresentacionService.$inject = ['$resource'];

  function PresentacionService($resource) {
    var url = '/api';
    return $resource(url + '/presentaciones/:id/', {}, {
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
        url: url + '/presentaciones/filtro/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true,
        url: url + '/presentaciones/filtro_no_paginate/'
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
