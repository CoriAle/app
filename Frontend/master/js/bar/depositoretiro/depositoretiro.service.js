(function() {
  'use strict';
  angular.module('app.depositoretiro')
    .factory('DepositoRetiroService', DepositoRetiroService);
  DepositoRetiroService.$inject = ['$resource'];

  function DepositoRetiroService($resource) {
    var url = '/api';
    return $resource(url + '/depositoretiro/:id/', {}, {
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
          fin: '@fin',
          page: '@page'
        },
        url: url + '/depositoretiro/filtro_pagos/'
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
