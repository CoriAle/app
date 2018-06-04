(function() {
    'use strict';

    angular
        .module('app.pedidococina')
        .controller('PedidoCocinaController', PedidoCocinaController);

    PedidoCocinaController.$inject = ['Notify', 'SweetAlert', 'PedidoCocinaService', 'DetalleMovimientoService'];

    function PedidoCocinaController(Notify, SweetAlert, PedidoCocinaService, DetalleMovimientoService) {
        var vm = this;
        activate();

        function activate() {
            var inicio;
            var fin;
            //Inicializamos los datos de la busqueda
            vm.busqueda = {
                desde: new Date(),
                hasta: new Date()
            };

            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };

            /**
             * Carga todos los empleados de personas desde el backend
             */
            vm.load = function () {
                vm.lista = null;
                //Seteamos las horas de la fecha para ingresarlas a la busqueda
                inicio = moment(vm.busqueda.desde).format('YYYY-MM-DD');
                fin = moment(vm.busqueda.hasta).format('YYYY-MM-DD');
                PedidoCocinaService.list({
                    page: vm.pagingInfo.page,
                    limit: vm.pagingInfo.itemsPerPage,
                    order: vm.pagingInfo.sortBy,
                    query: vm.pagingInfo.search,
                    ini: inicio,
                    fin: fin,
                    tipo: 1
                }, function (data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail,
                        { status: 'danger' }
                    );
                });
            };

            vm.load(); // Cargamos la lista

            /**
             * Reinicia la pagina y recarga la lista con la busqueda ingresada
             */
            vm.search  = function () {
                vm.pagingInfo.page = 1;
                vm.load();
            };

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
             * Actualiza la pagina seleccionada
             * @para page: numero de pagina a mostrar
             */
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.load();
            };

            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.terminado = function (item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Terminar el Pedido!',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#27C24C',
                    confirmButtonText: '¡Sí, terminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        // FINALIZAR PEDIDDO
                        DetalleMovimientoService.destroy({ id: item.id }, item, function () {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..',
                                { status: 'success' }
                            );
                            vm.load();
                        }, function (error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail,
                                { status: 'danger' }
                            );
                        });
                    }
                });
            };

            /// Carga de eventos de datepicker
            vm.desdeDP = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.desdeOpened = true;
            };

            /// Carga de eventos de datepicker
            vm.hastaDP = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.hastaOpened = true;
            };

        }
    }
})();
