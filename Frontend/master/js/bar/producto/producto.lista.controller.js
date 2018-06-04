(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoController', ProductoController);

    ProductoController.$inject = ['SweetAlert', 'ProductoService', 'Notify', '$state', '$uibModal'];

    function ProductoController(SweetAlert, ProductoService, Notify, $state, $uibModal) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            vm.open_menu = false;
            vm.busqueda = "";
            // Paginacion para el backend expresado con saltos y limites
            vm.pagination = {
                skip: 0,
                sort: 'id',
                where: {
                    "activo": true
                },
                limit: 10
            };

            // Advertencia que productos inexistentes
            vm.advertencia = function() {
              SweetAlert.swal('Información', 'No existe el Producto que se esta buscando', 'info');
            };

            function loadProductos() {
                if (vm.query.length > 0) {
                    if (vm.busqueda != vm.query){
                        vm.pagingInfo.page = 1;
                        vm.busqueda = vm.query;
                    }
                    ProductoService.filtro({
                        query: vm.query,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.producto = data.results;
                        // console.log(data);
                        if (data.count == 0){
                            vm.advertencia();
                        }
                        vm.pagingInfo.totalItems = data.count;
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'warning'
                            }
                        );
                    });
                } else {
                    ProductoService.list({
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.pagingInfo.totalItems = data.count;
                        vm.producto = data.results;
                        // console.log(vm.producto);
                    });
                }
            }

            loadProductos();

            vm.search = loadProductos;

            // Elimina Producto
            vm.removeProducto = function(item) {
                if(item.existencia == 0){
                    SweetAlert.swal({
                        title: '¿Esta Seguro?',
                        text: '¡Se eliminara al Producto!',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: '¡Sí, eliminarlo!',
                        cancelButtonText: 'Cancelar',
                        closeOnConfirm: true
                    }, function(isConfirm) {
                        if (isConfirm) {
                            ProductoService.destroy({
                                    id: item.id
                                },
                                function(data) {
                                    Notify.alert(
                                        '<em class="fa fa-check"></em> Producto eliminado..', {
                                            status: 'success'
                                        }
                                    );
                                    loadProductos();
                                    $state.go('app.producto.lista');
                                },
                                function(error) {
                                    Notify.alert(
                                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                            status: 'warning'
                                        }
                                    );
                                    loadProductos();
                                });
                        }
                    });
                }else{
                    SweetAlert.swal({
                        title: '¡No se puede Eliminar!',
                        text: 'El producto tiene existencia en bodega para poder eliminarlo deberá realizar una baja de producto',
                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#DD6B55',
                        closeOnConfirm: true
                    })
                }
            };

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
                loadProductos();
            };

            // Modal para Impresión de Inventario
            vm.openInventario = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: 'impresionInventario.html',
                    controller: 'InventarioController as impr'
                });
            };

        }
    }
})();
