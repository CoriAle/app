(function() {
    'use strict';

    angular
        .module('app.depositoretiro')
        .controller('RetiroController', RetiroController);

    RetiroController.$inject = ['$window', '$uibModal', 'Notify', 'SweetAlert', '$resource', 'ConfiguracionService', 'TipoPersonaService',
        'DepositoRetiroService', 'TipoDepositoRetiroService', 'CuentaService', 'PersonaCuentaService', 'EmpresaCuentaService', '$uibModalInstance'
    ];

    function RetiroController($window, $uibModal, Notify, SweetAlert, $resource, ConfiguracionService, TipoPersonaService,
        DepositoRetiroService, TipoDepositoRetiroService, CuentaService, PersonaCuentaService, EmpresaCuentaService, $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            vm.tipopersonaSelect = {};
            vm.tipopersonaSelect.id = 0;

            vm.motivoSelect = {};
            vm.motivoSelect.id = 0;

            vm.tipopagoSelect = {};
            vm.tipopagoSelect.id = 0;

            vm.monto = 0;
            vm.descripcion = null;

            vm.egresoSelect = {};
            vm.egresoSelect.id = 0;

            // Set de Formas de Pago
            vm.listaFormaPago = [{
                id: 1,
                tipo: 'Efectivo'
            }, {
                id: 2,
                tipo: 'Tarjeta de Credito'
            }, {
                id: 3,
                tipo: 'Cheque'
            }];

            // Usuario
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');


            // Agrega Nuevo Proveedor
            vm.openPersona = function() {
            // function openPersona() {
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'lg',
                templateUrl: 'addPersona.html',
                controller: 'PersonaAddController as tipos'
                });
            }


            // Inicializa Retiro
            vm.cargaRetiro = function() {
                vm.tipoRetiro = {
                    motivo: null,
                    monto: null,
                    cuenta_entrada: null,
                    cuenta_salida: null,
                    forma_pago: null,
                    descripcion: null,
                }
            }
            vm.cargaRetiro();

            // Busca los nombres con cuenta desde la api
            vm.personacuenta = function(val) {
                return PersonaCuentaService.list({
                    query: val,
                    tipo: vm.tipopersonaSelect.id
                }).$promise.then(function(data) {
                    return data.results;
                });
            };

            // Busca las empresas con cuentas desde la api
            vm.empresacuenta = function(val) {
                return EmpresaCuentaService.list({
                    query: val
                }).$promise.then(function(data) {
                    return data.results;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    // PARA QUE NO LISTE A LOS PROVEEDORES DENTRO DE LOS PAGOS
                    // for (var i = 0; i < data.length; i++) {
                    //     if (data[x].nombre == 'Proveedor' || data[x].nombre == 'proveedor'){
                    //         vm.listaTipopersona = data[x].p
                    //     }
                    // }
                    vm.listaTipopersona = data;
                    console.log(data);
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

            // Lista Motivo (Tipo Egresos) VALIDOS
            vm.listaTipoegreso = function() {
                return TipoDepositoRetiroService.filtro_egreso({
                    query: ''
                }, function(data) {
                    vm.listaTipoegreso = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipoegreso();

            // Alerta de advertencia donde el monto tiene qu ser mayor a 0
            vm.advertencia = function() {
              SweetAlert.swal('Información', 'Ingrese un monto mayor a 0');
            };

            // Crea un nuevo Retiro
            vm.create = function() {
                // Validacion de checkbox semanal
                if (vm.semanal == null)
                    vm.semanal = false;

                vm.tipoRetiro = {
                    motivo: vm.motivoSelect.id,
                    monto: vm.monto,
                    semanal: vm.semanal,
                    cuenta_entrada: vm.personaSelect.cuenta.id,
                    cuenta_salida: vm.empresaSelect.cuentas.id,
                    descripcion: vm.descripcion,
                };
                // Validacion el monto a ingresar tiene que ser mayor a 0
                if (vm.monto > 0) {
                    DepositoRetiroService.create(vm.tipoRetiro, function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Elemento creado..', {
                                status: 'success'
                            }
                        );
                        vm.cargaRetiro();
                        $uibModalInstance.close(true);

                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'danger'
                            }
                        );
                    });
                } else {
                    vm.advertencia();
                }
            };

            // Cierra Ventana Modal
            vm.cancel = function() {
                $uibModalInstance.close();
            };

        }
    }
})();
