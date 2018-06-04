(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('PedidosListaController', PedidosListaController);

    PedidosListaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource'];

    function PedidosListaController(Notify, SweetAlert, MovimientoService, $resource) {
        var vm = this;
        activate();

        function activate() {
            vm.destroy = destroy;
            vm.query = "";
            vm.loadPedidos = loadPedidos;

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

            loadPedidos();

            //Busqueda de Pedidos
            function loadPedidos() {
                MovimientoService.pedidos({
                    page: vm.pagingInfo.page,
                    query: vm.query
                }, function(data) {
                    vm.pagingInfo.totalItems = data.count;
                    vm.pedidos = data.results;
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
                loadPedidos();
            };

            function destroy(item) {
                vm.pedidos = [];
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara el movimiento!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.motivo = 'Cancelacion de pedido';
                        item.transacciones.push({
                            'id': null,
                            'tipo_transaccion': 2,
                            'usuario': 1
                        });
                        item.mesa = item.mesa.id;
                        _(item.detalle).forEach(function(value) {
                            delete value.movimiento
                            value.producto = value.producto.id
                        });
                        MovimientoService.update({
                                id: item.id
                            }, item,
                            function(data) {
                                MovimientoService.destroy({
                                        id: item.id
                                    },
                                    function(data) {
                                        Notify.alert(
                                            '<em class="fa fa-check"></em> Pedido Cancelado..', {
                                                status: 'success'
                                            }
                                        );
                                        loadPedidos();
                                    },
                                    function(error) {
                                        Notify.alert(
                                            '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                                status: 'error'
                                            }
                                        );
                                        loadPedidos();
                                    });

                            },
                            function(error) {
                                Notify.alert(
                                    '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                        status: 'error'
                                    }
                                );
                                loadPedidos();
                            });
                    } else {
                        loadPedidos();
                    }
                });
            }
        }
    }
})();
