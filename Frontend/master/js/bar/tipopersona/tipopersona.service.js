(function() {
  'use strict';
  angular.module('app.tipopersona')
    .factory('TipoPersonaService', TipoPersonaService);
  TipoPersonaService.$inject = ['$resource'];

  function TipoPersonaService($resource) {
    var url = '/api';
    return $resource(url + '/tipospersonas/:id/', {}, {
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
        url: url + '/tipospersonas/filtro/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/tipospersonas/filtro_no_paginate/',
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
