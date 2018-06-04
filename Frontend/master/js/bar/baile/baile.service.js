(function() {
    'use strict';
    angular.module('app.baile')
        .factory('BaileService', BaileService);
    BaileService.$inject = ['$resource'];

    function BaileService($resource) {
        return $resource('/api/bailes/:id/', {}, {
            list: {
                method: 'GET',
                params: { query: '@query',
                    order: '@order',
                    page: '@page',
                    limit: '@limit'
                }
            },
            details: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            },
            create: {
                method: 'POST'
            },
            edit: {
                method: 'PUT',
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
            get_dances:{
                method: 'GET',
                params: { id: '@id' },
                url: '/api/bailespersona/get_dances/',
                isArray: true
            }
        });
    }
}());
