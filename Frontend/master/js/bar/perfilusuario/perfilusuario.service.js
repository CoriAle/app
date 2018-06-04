(function () {
    'use strict';
    angular.module('app.perfilusuario')
        .factory('PerfilUsuarioService',PerfilUsuarioService);
    PerfilUsuarioService.$inject = ['$resource'];
    function PerfilUsuarioService($resource) {
        var url = '/api';
        return $resource(url + '/perfilesusuarios/:id/', {}, {
            list: { method: 'GET'},
            create: { method: 'POST' },
            show: { method: 'GET', params: { id: '@id' } },
            destroy: { method: 'DELETE', params: { id: '@id' } },
            update: { method: 'PUT', params: { id: '@id' } }
        });
    }
}());
