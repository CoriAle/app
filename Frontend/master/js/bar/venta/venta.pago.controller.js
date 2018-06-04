(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('PedidoPagoController', PedidoPagoController);

    PedidoPagoController.$inject = ['$window', '$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$state', 'CajaService', '$rootScope'];

    function PedidoPagoController($window, $location, $log, $uibModal, $stateParams, Notify, MovimientoService, $state, CajaService, $rootScope) {
        var vm = this;
        activate();


        MovimientoService.tiene_impresora({id:vm.usuario.id},function (data) {
            if (!data.tiene_impresora){
                swal({
                        title: "Error?",
                        text: "No cuentas con una impresora asignada. Solicita una para poder realizar el cobro.!",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Aceptar!",
                        closeOnConfirm: true
                    },
                    function(){
                        $state.go('app.caja.pendientes')
                    });
            }
        },function (error) {

        });

        function activate() {
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.estadoCaja = false;
            vm.cajaA = $rootScope.cajaAbierta;
            //   console.log(vm.cajaA);

            vm.comprobarCaja = function(){
                CajaService.comprueba_caja_usuario({
                    user: vm.usuario.id
                }, function(data){
                    if(data.id > 0)
                        vm.estadoCaja = true;
                }, function(error){
                    vm.estadoCaja = false;
                    Notify.alert(
                        '<em class="fa fa-times">  No tiene una caja<br/> abierta para recibir el pago</em>', {
                            status: 'danger'
                        }
                    );
                });
            };



            MovimientoService.show({
                id: $stateParams.id
            }, function(data) {
                vm.pedido = data;
                $rootScope.orden = data;
            }, function(error) {
                Notify.alert(
                    '<em class="fa fa-times"></em>', {
                        status: 'warning'
                    }
                );
            });

            vm.openPagos = function() {
                CajaService.comprueba_caja_usuario({
                    user: vm.usuario.id
                }, function(data){
                    if(data.id > 0){
                        vm.estadoCaja = true;
                        if(vm.estadoCaja){
                            var modalInstance = $uibModal.open({
                                animation: true,
                                size: 'lg',
                                templateUrl: 'addPago.html',
                                controller: 'CobroController as nuevo',
                                // resolve: {
                                //     orden: function() {
                                //         return vm.pedido;
                                //     }
                                // }
                            });
                            modalInstance.result.then(function(selectedItem) {
                                if (selectedItem) {
                                    $location.path('/app/caja/pendientes');
                                } else {
                                    $log.info('Modal dismissed at: ' + new Date());
                                }
                            }, function() {
                                $log.info('Modal dismissed at: ' + new Date());
                            });
                        }
                    }
                }, function(error){
                    vm.estadoCaja = false;
                    Notify.alert(
                        '<em class="fa fa-times">  No tiene una caja<br/> abierta para recibir el pago</em>', {
                            status: 'danger'
                        }
                    );
                });

            }
        }
    }
})();
