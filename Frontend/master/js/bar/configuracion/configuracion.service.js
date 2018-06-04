(function() {
  'use strict';
  angular.module('app.tipoproducto')
    .factory('ConfiguracionService', ConfiguracionService);
  ConfiguracionService.$inject = ['$resource'];

  function ConfiguracionService($resource) {
    var url = '/api';
    return $resource(url + '/configuracion/:id/', {}, {
      create: {
        method: 'POST'
      },
      busca_configuracion: {
        url: url + '/configuracion/busca_configuracion/',
        method: 'GET'
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
