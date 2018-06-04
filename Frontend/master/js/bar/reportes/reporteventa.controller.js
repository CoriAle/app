(function() {
    'use strict';

    angular
        .module('app.reporteventa')
        .controller('ReporteVentaController', ReporteVentaController);

    ReporteVentaController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$resource', 'SweetAlert',
        'TipoPersonaService', 'PersonaCuentaService'
    ];

    function ReporteVentaController($location, $log, $uibModal, $stateParams, Notify, MovimientoService, $resource, SweetAlert,
        TipoPersonaService, PersonaCuentaService) {
        var vm = this;
        activate();

        function activate() {
            vm.lista = [];
            vm.query = '';
            vm.pago = {};
            vm.fecha = [];
            vm.total = 0;
            vm.activaBoton = false;
            vm.personaNickname = ''

            // vm.listaAreas = [{
            //     id: 1,
            //     area: 'Barra'
            // }, {
            //     id: 2,
            //     area: 'Mesas'
            // }, {
            //     id: 3,
            //     area: 'Pista'
            // }, {
            //     id: 4,
            //     area: 'Servicio'
            // }, {
            //     id: 5,
            //     area: 'VIP'
            // }];

            vm.listaDocs = [{
                id: 1,
                doc: 'Comanda'
                // Originalmente es Factura dentro del Modelo
            }, {
                id: 2,
                doc: 'Recibo'
            }, {
                id: 3,
                doc: 'Vale'
            }];


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

            // Busca los nombres con cuenta desde la api
            vm.personacuenta = function(val) {
                return PersonaCuentaService.lista({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    vm.listaTipopersona = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

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
                vm.filtro_reporte();
            };

            vm.calcula_total = function() {
                vm.totalT = 0;
                _.each(vm.lista, function(total, item) {
                    vm.totalT += item.total;
                    // console.log(total);
                    // debugger
                });
            }

            // Filtro por Persona
            vm.filtro_reporte = function() {
                vm.personaUser = vm.personaNickname.username
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                if (vm.personaNickname == '' || vm.personaNickname == null) {
                    Notify.alert(
                        '<em class="fa fa-exclamation-triangle"></em>&nbsp;&nbsp;&nbsp; Introduzca el Nick de un Empleado', {
                            status: 'warning'
                        }
                    );
                } else {
                    MovimientoService.reporte_ventas_empleado({
                        ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " 0:0:00",
                        fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " 23:59:59",
                        per: vm.personaNickname.id,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        // Tipo de Documento
                        vm.lista.forEach(function(item) {
                            vm.lista.tipo_doc = _.filter(
                                vm.listaDocs, {
                                    'id': item.documento
                                })[0].doc
                            });

                            vm.calcula_total();
                            vm.pagingInfo.totalItems = data.count;
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                }
            }
        }
    }
})();
