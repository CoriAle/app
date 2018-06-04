(function() {
    'use strict';
    angular.module('app.usuario')
        .factory('UsuarioService', UsuarioService);
    UsuarioService.$inject = ['$resource'];

    function UsuarioService($resource) {
        var url = '/api';
        return $resource(url + '/users/:id/', {}, {
            list: {
                method: 'GET'
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
            },
            cambiar_usuario_password: {
                url: '/api/users/:id/cambiar_usuario_password/',
                method: 'PUT',
                params: {
                    id: '@id'
                }
            }
        });
    }
}());
