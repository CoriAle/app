(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('CajaPagadaController', CajaPagadaController);

    CajaPagadaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource', '$uibModal', '$rootScope'];

    function CajaPagadaController(Notify, SweetAlert, MovimientoService, $resource, $uibModal, $rootScope) {
      var vm = this;
      activate();

      function activate() {
        vm.query = "";
        // vm.loadPagados = loadPagados;

        vm.today = function() {
          vm.dt = new Date();
        };
        vm.today();

        vm.clear = function () {
          vm.dt = null;
        };

        vm.initFechas = function() {
          var f = new Date();
          vm.iniDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
          vm.finDate = new Date(f.getFullYear(), f.getMonth(), f.getDate() + 1);
        };
        vm.initFechas();

        vm.open = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          vm.opened = true;
        };

        vm.openfin = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          vm.openend = true;
        };

        vm.dateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        vm.initDate = new Date('2019-10-20');
        vm.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];

        // Paginacion del frontend expresado en paginas
        vm.pagingInfo = {
            page: 1,
            itemsPerPage: 10,
            sortBy: 'id',
            reverse: false,
            search: '',
            totalItems: 0,
        };

        // Paginacion para el backend expresado con saltos y limites
        vm.pagination = {
            skip: 0,
            sort: 'id',
            where: {
                "activo": true
            },
            limit: 10
        }

        //Busqueda de Pedidos
        vm.filtro_pagadas = function(){
          var i = new Date(vm.iniDate);
          var f = new Date(vm.finDate);
          MovimientoService.pedidos_pagados({
            ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
            fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
            page: vm.pagingInfo.page,
            query: vm.query
          }, function(data) {
              vm.pagingInfo.totalItems = data.count;
              vm.pedidospagados = data.results;
          });
        }

        vm.filtro_pagadas();
        /**
         * Convierte el numero de página generado por uibootstrap a salto y limite utilizado
         * por el backend
         * @para page: numero de pagina a convertir
         */
        vm.selectPage = function(page) {
            vm.pagingInfo.page = page;
            // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
            vm.pagination.skip = 0;
            if (vm.pagingInfo.page > 1)
                vm.pagination.skip = (vm.pagingInfo.page - 1) * vm.pagingInfo.itemsPerPage;
            // loadPagados();
            vm.filtro_pagadas();
        };

        // Abre modal para Impresion de Datos
        vm.openOrder = function(id) {
            // Guardamos el id en rootScope para usarla en PedidoImpresionController
            $rootScope.id = id;
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'md',
                templateUrl: 'order.html',
                controller: 'PedidoImpresionController as impr',
                resolve: {
                    item: function() {
                        return id;
                    }
                }
            });
        };

        // Abre modal para Impresion de Ficha
        vm.openFicha = function(id) {
            // Guardamos el id en rootScope para usarla en PedidoImpresionController
            $rootScope.id = id;
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'md',
                templateUrl: 'ficha.html',
                controller: 'PedidoImpresionController as impr',
                resolve: {
                    item: function() {
                        return id;
                    }
                }
            });
        };


      }
    }
})();
