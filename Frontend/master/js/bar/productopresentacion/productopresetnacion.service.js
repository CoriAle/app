(function() {
  'use strict';
  angular.module('app.productopresentacion')
    .factory('ProductoPresentacionService', ProductoPresentacionService);
  ProductoPresentacionService.$inject = ['$resource'];

  function ProductoPresentacionService($resource) {
    var url = '/api';
    return $resource(url + '/presentacionesproducto/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
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
