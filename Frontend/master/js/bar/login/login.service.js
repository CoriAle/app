(function() {
  'use strict';
  angular.module('app.login')
    .factory('LoginService', LoginService);
  LoginService.$inject = ['$resource'];

  function LoginService($resource) {
    var url = '/api';
    return $resource('api/token/:id', {}, {
      login: {
        method: 'POST',
        //url: 'api-auth/'
      },
      busca_usuario: {
        url: url + '/users/busca_usuario/',
        method: 'GET',
        params: {
          nick: '@nick'
        }
      },
      hace_cortesias: {
        url: url + '/users/hace_cortesias/',
        method: 'GET',
        params: {
          nick: '@nick'
        }
      },
      cancela_ordenes: {
        url: url + '/users/cancela_ordenes/',
        method: 'GET',
        params: {
          nick: '@nick'
        }
      }
    });
  }
}());
