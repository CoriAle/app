(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('CierreCajasController', CierreCajasController);

    CierreCajasController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PagoService',
        '$resource', 'SweetAlert', 'ReporteVentaService', '$rootScope'];

    function CierreCajasController($location, $log, $uibModal, $stateParams, Notify, PagoService,
        $resource, SweetAlert, ReporteVentaService, $rootScope) {
        var vm = this;
        // Trae el id del DepositoRetiro
        activate();

        function activate() {
            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            vm.loadData = function (pageInfo) {
                var ant = (pageInfo.page-1)*10;
                var sig = (pageInfo.page)*10;
                ReporteVentaService.lista_cierre_caja({ant:ant,sig:sig},function (data) {
                    vm.lista = data.data;
                    var lista = [];
                    vm.lista.forEach(function (l1) {
                        var costo_vendido = 0;
                        var creado1 = new Date(l1.creado);
                        vm.lista.forEach(function (l2) {
                            var creado2 = new Date(l2.creado);
                            if (creado1.getDate() == creado2.getDate())
                                costo_vendido = costo_vendido + parseFloat(l2.vendido);
                        });
                        lista.push({'id': l1.id,
                            'apertura': l1.apertura,
                            'cierre': l1.cierre,
                            'diferencia': l1.diferencia,
                            'creado': l1.creado,
                            'modificado': l1.modificado,
                            'vendido': l1.vendido,
                            'caja': l1.caja,
                            'usuario': l1.user,
                            'costo_vendido': costo_vendido
                        });
                    });
                    if(data.siguiente != null){
                        var creado1 = new Date(data.siguiente.creado);
                        var creado2 = new Date(lista[lista.length-1].creado);
                        if (creado1.getDate() == creado2.getDate())
                            lista[lista.length-1].costo_vendido = lista[lista.length-1].costo_vendido + parseFloat(data.siguiente.vendido);
                    }
                    if(data.anterior != null){
                        var cread1 = new Date(data.anterior.creado);
                        var cread2 = new Date(lista[0].creado);
                        if (cread1.getDate() == cread2.getDate())
                            lista[0].costo_vendido = lista[0].costo_vendido + parseFloat(data.anterior.vendido);
                    }
                    vm.lista = lista;
                    pageInfo.totalItems = data.total;
                })
            };
            vm.loadData(vm.pagingInfo);
        }
        /**funcion para ver abrir los datos del cierre*/
        vm.datosCierre = function (id) {
            $rootScope.cierre = id;
            $uibModal.open({
                animation: true,
                size: 'lg',
                templateUrl: "app/views/reportes/detalle_cierre.html",
                controller: 'DetalleCierreController as accion'
            });
        };
    }
})();
