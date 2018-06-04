(function() {
  'use strict';
  angular.module('app.formapago')
    .factory('FormaPagoService', FormaPagoService);
  FormaPagoService.$inject = ['$resource'];

  function FormaPagoService($resource) {
    var url = '/api';
    return $resource(url + '/formapago/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/formapago/filtro_no_paginate/',
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
