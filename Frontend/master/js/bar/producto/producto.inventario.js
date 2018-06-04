(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('InventarioController', InventarioController);

    InventarioController.$inject = ['SweetAlert', 'ProductoService', 'Notify', '$state', '$uibModalInstance'];

    function InventarioController(SweetAlert, ProductoService, Notify, $state, $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {

            vm.hoy = new Date();
            vm.hoy = vm.hoy.getDate() + "/" + (vm.hoy.getMonth() +1) + "/" + vm.hoy.getFullYear() + " " + vm.hoy.getHours() + ":" + vm.hoy.getMinutes() + ":" + vm.hoy.getSeconds();

            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 15,
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
                limit: 15
            }
            // selectPage
            vm.selectPage = function(page) {
                vm.pagingInfo.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.pagination.skip = 0;
                if (vm.pagingInfo.page > 1)
                    vm.pagination.skip = (vm.pagingInfo.page - 1) * vm.pagingInfo.itemsPerPage;
                vm.listado();
            };

            vm.listado = function (){
                ProductoService.impresion_productos({
                    ant: vm.pagination.skip,
                    sig: vm.pagination.skip + 15
                }, function(data) {
                    console.log(data);
                    vm.producto = data.productos
                    vm.pagingInfo.totalItems = data.filas;
                    // console.log(vm.producto);
                }, function(error) {
                    console.log("ERROR",error);
                });
            }

            vm.listado();


            // Cierra Ventana Modal
            vm.cancel = function() {
                $uibModalInstance.close();
            };


        }
    }
})();
