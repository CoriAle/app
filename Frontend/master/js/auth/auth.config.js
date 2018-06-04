(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(authConfig);

  authConfig.$inject = ['$httpProvider'];

  function authConfig($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }
  
})();
