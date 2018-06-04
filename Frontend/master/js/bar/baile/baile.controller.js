(function() {
    'use strict';

    angular
        .module('app.baile')
        .controller('BaileController', BaileController);

    BaileController.$inject = ['$window', 'BaileService', 'SweetAlert', 'Notify'];

    function BaileController($window, BaileService, SweetAlert, Notify) {
        var vm = this;
        activate();

        function activate() {
            vm.show = false;
            vm.baile = {
                id: 0,
                parent: null
            };

            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'nombre_baile',
                reverse: false,
                search: '',
                totalItems: 0
            };

            /**
             * Carga todas las bailes desde el backend
             */
            vm.load = function() {
                vm.bailes = null;
                vm.listaTree = [];
                BaileService.list({
                    page: vm.pagingInfo.page,
                    limit: vm.pagingInfo.itemsPerPage,
                    order: vm.pagingInfo.sortBy,
                    query: vm.pagingInfo.search
                }, function(data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.load(); // Cargamos la lista

            /**
             * Determina la ordenacion a aplicar en la lista en base al campo indicado
             * @param sortBy: campo a ordenar
             */
            vm.sort = function (sortBy) {
                if (sortBy === vm.pagingInfo.sortBy)
                    vm.pagingInfo.sortBy = '-' + sortBy;
                else
                    vm.pagingInfo.sortBy = sortBy;

                vm.pagingInfo.page = 1;
                vm.load();
            };

            /**
             * Muestra el dialogo para agregar nuevos elementos a la BD
             * @param show: booleano que determina si se muestra u oculta
             */
            vm.showAdd = function(show) {
                vm.show = show;
                if (!vm.show) {
                    vm.baileForm.$setPristine();
                    vm.baile = {
                        id: 0
                    };
                }
            };

            /**
             * Actualiza la pagina seleccionada
             * @para page: numero de pagina a mostrar
             */
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.load();
            };

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.create = function() {
                var baile = {
                    nombre_baile: vm.baile.nombre_baile,
                    costo: vm.baile.costo
                };
                BaileService.create(baile, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    vm.baile = {
                        id: 0,
                        parent: null
                    };
                    vm.show = false;
                    vm.load();
                    vm.baileForm.$setPristine();
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            /**
             * Actualiza un elemento en la BD validando que no exista
             */
            vm.update = function() {
                var item_respaldo = vm.baile;
                BaileService.edit({
                    id: vm.baile.id
                }, vm.baile, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento actualizado..', {
                            status: 'success'
                        }
                    );
                    vm.baileForm.$setPristine();
                    vm.baile = {
                        id: 0
                    };
                    vm.show = false;
                    vm.load();
                    vm.baileForm.$setPristine();
                }, function(error) {
                    vm.item = item_respaldo;
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                            status: 'danger'
                        }
                    );
                    vm.load();
                });
            };

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.addBaile = function() {
                if (vm.baile.id < 1) {
                    vm.create();
                } else {
                    vm.update();
                }
            };

            vm.edit = function(item) {
                vm.show = true;
                vm.baile = item;
                vm.baile.costo = parseFloat(vm.baile.costo);
                $window.scrollTo(0, 0);
            };

            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.disable = function(item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara la baile!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.activo = false;
                        BaileService.destroy({"id": item.id}, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..', {
                                    status: 'success'
                                }
                            );
                            vm.baile = {
                                id: 0,
                                parent: null
                            };
                            vm.show = false;
                            vm.load();
                            vm.baileForm.$setPristine();
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Baile ya tiene tiene partidas registradas', {
                                    status: 'danger'
                                }
                            );
                        });
                    }
                });
            };
        }
    }
})();
