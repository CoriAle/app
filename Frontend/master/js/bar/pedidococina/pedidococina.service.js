(function () {
    'use strict';
    angular.module('app.pedidococina')
        .factory('PedidoCocinaService',PedidoCocinaService);
    PedidoCocinaService.$inject = ['$resource'];
    function PedidoCocinaService($resource) {
        var url = '/api';
        return $resource(url + '/pedidoscocina/', {}, {
            list: { method: 'GET',
                params: { ini:'@ini',
                    fin:'@fin',
                    query: '@query',
                    order: '@order',
                    page: '@page',
                    limit: '@limit',
                    tipo: '@tipo'
                }
            }
        });
    }
}());
