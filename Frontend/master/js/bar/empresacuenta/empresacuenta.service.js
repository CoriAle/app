(function() {
  'use strict';
  angular.module('app.empresacuenta')
    .factory('EmpresaCuentaService', EmpresaCuentaService);
  EmpresaCuentaService.$inject = ['$resource'];

  function EmpresaCuentaService($resource) {
    var url = '/api';
    return $resource(url + '/empresacuenta/', {}, {
      list: {
        method: 'GET',
        params: {
          query: '@query'
        },
        url: url + '/empresacuenta/',
      }
    });
  }
}());
