(function() {
    'use strict';
    angular.module('app.tipoproducto')
        .factory('TipoProductoService', TipoProductoService);
    TipoProductoService.$inject = ['$resource'];

    function TipoProductoService($resource) {
        var url = '/api';
        return $resource(url + '/tiposproductos/:id/', {}, {
            list: {
                method: 'GET',
                params: {
                    page: '@page'
                }
            },
            filtro: {
                method: 'GET',
                params: {
                    page: '@page',
                    query: '@query'
                },
                url: url + '/tiposproductos/filtro/'
            },
            combo: {
                method: 'GET',
                url: url + '/tiposproductos/combo/'
            },
            combo_mixto: {
                method: 'GET',
                url: url + '/tiposproductos/combo_mixto/'
            },
            filtro_no_paginate: {
                method: 'GET',
                params: {
                    query: '@query'
                },
                isArray: true,
                url: url + '/tiposproductos/filtro_no_paginate/'
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
