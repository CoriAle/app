(function() {
    'use strict';
    angular.module('app.caja')
        .factory('MesasService', MesasService);
    MesasService.$inject = ['$resource'];

    function MesasService($resource) {
        var url = '/api';
        return $resource(url + '/mesas/:id/', {}, {
            comprobar_mesas: {
                method: 'GET',
                url: url + '/mesas/comprobar_mesas/',
                params: {tipo: '@tipo', lim_i: '@lim_i', lim_s: '@lim_s'}
            },
            get_mesa: {
                method: 'GET',
                url: url + '/mesas/get_mesa/',
                isArray: true,
                params: {mesa: '@mesa'}
            }
        });
    }
}());
