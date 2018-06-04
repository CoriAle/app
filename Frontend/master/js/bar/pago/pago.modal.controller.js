(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PagoModalController', PagoModalController);

    PagoModalController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService'];

    function PagoModalController($location, $log, $uibModal, $stateParams, Notify, PersonaService, PagoService, $resource, SweetAlert, DepositoRetiroService) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            vm.pago = {};
            vm.pago.id = 0;

            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function() {
                vm.dt = null;
            };

            vm.initFechas = function() {
                var f = new Date();
                vm.iniDate = new Date(f.getFullYear(), f.getMonth(), 1);
                vm.finDate = new Date(f.getFullYear(), f.getMonth() + 1, 0);
                var dif = Math.abs(vm.finDate.getTime() - vm.iniDate.getTime());
                vm.daysWorked = Math.ceil(dif / (1000 * 3600 * 24));
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

            //Detalle Pago Empleado
            vm.detallePagoempleado = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'md',
                    templateUrl: 'app/views/pago/chica.html',
                    controller: 'ProductoEditarController'
                });
            };

            // Agrega Pago
            vm.openPagos = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: 'accionesPago.html',
                    controller: 'RetiroController as accion',
                });
            }

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

            /**
             * Carga todos los tipos de personas desde el backend
             */
            vm.load = function() {
                vm.lista = [];
                //Comprobamos si query no esta vacio
                if (vm.query.length > 0) {
                    DepositoRetiroService.filtro({
                        query: vm.query,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        vm.pagingInfo.totalItems = data.length;
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'warning'
                            }
                        );
                    });
                } else {
                    vm.filtro_pagos();
                }

            }

            // vm.load(); //Cargamos la lista

            /**
             * Determina la ordenacion a aplicar en la lista en base al campo indicado
             * @param sortBy: campo a ordenar
             */
            vm.sort = function(sortBy) {
                vm.pagingInfo.sortBy = sortBy;
                vm.pagination.sort = sortBy + ' ASC';

                if (sortBy === vm.pagingInfo.sortBy) {
                    vm.pagingInfo.reverse = !vm.pagingInfo.reverse;

                    if (vm.pagingInfo.reverse)
                        vm.pagination.sort = sortBy + ' DESC';
                } else
                    vm.pagingInfo.reverse = false;

                vm.pagination.skip = 0;
                vm.load();
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
                vm.load();
            };

            vm.filtro_pagos = function() {
                var dif = Math.abs(vm.finDate.getTime() - vm.iniDate.getTime());
                vm.daysWorked = Math.ceil(dif / (1000 * 3600 * 24));
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                DepositoRetiroService.filtro({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
                    page: vm.pagingInfo.page
                }, function(data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                    for (var i = 0; i < vm.lista.length; i++){
                        if (vm.lista[i].usuario == null){
                            vm.lista[i].usuario = {
                                id: 0,
                                username: 'Desde pagos'
                            };
                        }
                    }
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            }
            vm.filtro_pagos();
            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.disable = function(item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara este pago!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.persona = item.persona.id;
                        item.usuario = item.usuario.id;
                        item.activo = false;
                        PagoService.update({
                            id: item.id
                        }, item, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..', {
                                    status: 'success'
                                }
                            );
                            vm.load();
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                    }
                });
            }
        }
    }
})();
