(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location', '$window'];
    function authInterceptor($q, $location, $window) {
      return {
          request: function (config) {
              config.headers = config.headers || {};
              if ($window.sessionStorage.getItem('token')) {
                  config.headers.Authorization = 'Token ' + $window.sessionStorage.getItem('token');
              }
              return config || $q.when(config);
          },
          responseError: function (response) {
              if (response.status === 401) {
                  $window.sessionStorage.removeItem('token');
                  $location.path('/page/login');
              }
              return $q.reject(response);
          }
      };
    }
})();
