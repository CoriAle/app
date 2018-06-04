(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('MesasController', MesasController);

    MesasController.$inject = ['Notify', 'SweetAlert', 'MesasService', '$resource', '$uibModal', '$rootScope'];

    function MesasController(Notify, SweetAlert, MesasService, $resource, $uibModal, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            /** Paginacion del frontend expresado en paginas **/
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            /** Refresca el listado de las mesas y regresa a la primera pagina de la paginacion**/
            vm.refrescar = function () {
                MesasService.comprobar_mesas({},function (data) {
                    vm.mesas = data.mesas;
                    vm.pagingInfo.totalItems = data.total_mesas;
                    vm.pagingInfo.page = data.pagina;
                },function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'warning'
                        }
                    );
                });
            };
            vm.refrescar();
            /** Opciones de radio button **/
            vm.tipo = 1;
            vm.tipo_seleccionado = 1;
            vm.selectTipo = function(tipo) {
                if (tipo==1){
                    vm.tipo = 1
                } else if (tipo==2){
                    vm.tipo = 2
                } else if (tipo==3){
                    vm.tipo = 3
                }
            };
            /** Buscar mesa específica **/
            vm.query ="";
            vm.buscar = function () {
                MesasService.get_mesa({mesa:vm.query},function (data) {
                    vm.mesas = data;
                    vm.pagingInfo.page = 1;
                    vm.pagingInfo.totalItems = data.length;
                    vm.query ="";
                },function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'warning'
                        }
                    );
                });
            };
            /** Funcion para filtrar por tablet o caja **/
            vm.filtrar = function (tipo, pagina) {
                vm.tipo_seleccionado = tipo;
                var lim_i = (pagina - 1) * 10;
                var lim_s = pagina * 10;
                MesasService.comprobar_mesas({tipo:vm.tipo_seleccionado, lim_i: lim_i, lim_s: lim_s},function (data) {
                    vm.mesas = data.mesas;
                    vm.pagingInfo.totalItems = data.total_mesas;
                    vm.pagingInfo.page = data.pagina;
                },function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'warning'
                        }
                    );
                });
            };
            
            /** Funcion para cambio de pagina **/
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.filtrar(vm.tipo_seleccionado, page);
            }
        }
    }
})();
