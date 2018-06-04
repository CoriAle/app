(function() {
    'use strict';

    angular
        .module('app.movimiento')
        .controller('SalidaListaController', SalidaListaController);

    SalidaListaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource'];

    function SalidaListaController(Notify, SweetAlert, MovimientoService, $resource) {
        var vm = this;
        activate();
        vm.ingresos = [];
        vm.salidas = [];

        function activate() {
            vm.query = "";
            // vm.destroy = destroy;
            vm.loadSalidas = loadSalidas;

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

            loadSalidas();

            function loadSalidas() {
                MovimientoService.bajas({
                    page: vm.pagingInfo.page,
                    query: vm.query
                }, function(data) {
                    vm.pagingInfo.totalItems = data.count;
                    vm.salidas = data.results;
                });
            }

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
                loadSalidas();
            };

            // Funcion de eliminar la baja se ha quitado esta comentada abajo por si se necesitara

            // function destroy(data) {
            //     vm.ingresos = [];
            //     vm.salidas = [];
            //     SweetAlert.swal({
            //         title: '¿Esta Seguro?',
            //         text: '¡Se eliminara el movimiento!',
            //         type: 'warning',
            //         showCancelButton: true,
            //         confirmButtonColor: '#DD6B55',
            //         confirmButtonText: '¡Sí, eliminarlo!',
            //         cancelButtonText: 'Cancelar',
            //         closeOnConfirm: true
            //     }, function(isConfirm) {
            //         if (isConfirm) {
            //             MovimientoService.destroy({
            //                     id: data.id
            //                 },
            //                 function(data) {
            //                     Notify.alert(
            //                         '<em class="fa fa-check"></em> Salida eliminada..', {
            //                             status: 'success'
            //                         }
            //                     );
            //                     loadSalidas();
            //                 },
            //                 function(error) {
            //                     Notify.alert(
            //                         '<em class="fa fa-times"></em> Error..' + error, {
            //                             status: 'error'
            //                         }
            //                     );
            //                     loadSalidas();
            //                 });
            //         } else {
            //             loadSalidas();
            //         }
            //     });
            // }
        }
    }
})();
