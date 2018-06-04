(function() {
    'use strict';

    angular
        .module('app.depositoretiro')
        .controller('RetiroCajaController', RetiroCajaController);

    RetiroCajaController.$inject = ['$window', 'Notify', 'SweetAlert', '$resource', 'ConfiguracionService', 'TipoPersonaService', 'PersonaService',
        'DepositoRetiroService', 'TipoDepositoRetiroService', 'CuentaService', 'PersonaCuentaService', 'EmpresaCuentaService', '$uibModalInstance',
        'caja', 'estado', 'cierre', 'CajaAccionService'
    ];

    function RetiroCajaController($window, Notify, SweetAlert, $resource, ConfiguracionService, TipoPersonaService, PersonaService,
        DepositoRetiroService, TipoDepositoRetiroService, CuentaService, PersonaCuentaService, EmpresaCuentaService, $uibModalInstance,
        caja, estado, cierre, CajaAccionService) {
        var vm = this;
        activate();

        function activate() {
            vm.caja = caja;
            vm.validaGuardar = false;
            // vm.estadoCaja = estado;
            // vm.cierre = cierre;
            console.log(vm.caja.id);

            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');
            console.log(vm.usuario.id);

            vm.tipopersonaSelect = {};
            vm.tipopersonaSelect.id = 0;

            vm.motivoSelect = {};
            vm.motivoSelect.id = 0;

            // vm.personaSelect = {};
            // vm.personaSelect.id = 0;

            vm.monto = 0;
            vm.descripcion = null;

            vm.egresoSelect = {};
            vm.egresoSelect.id = 0;

            // Inicializa Retiro
            vm.cargaRetiro = function() {
                vm.tipoRetiro = {
                    motivo: null,
                    monto: null,
                    cuenta_entrada: null,
                    cuenta_salida: null,
                    caja: null,
                    descripcion: null,
                    usuario: null,
                }
            }
            vm.cargaRetiro();

            // Busca los nombres con cuenta desde la api
            vm.persona = [];
            vm.personacuenta = function(val) {
                return PersonaCuentaService.list({
                    query: val,
                    tipo: vm.tipopersonaSelect.id
                }).$promise.then(function(data) {
                    vm.persona = data.results;
                    return data.results;
                });
            };

            vm.nocuenta = [];
            vm.cuenta = function(val) {
                return PersonaService.cuenta_persona({
                    id: val
                }, function(data) {
                    vm.tipo
                    vm.cancelar();
                    return data.results;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    )
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

            // Crea un Nuevo Retiro desde Caja
            vm.createFromCaja = function() {
                // Validacion de checkbox semanal
                if (vm.semanal == null)
                    vm.semanal = false;

                if ( vm.caja.id > 0){
                    vm.tipoRetiro = {
                        motivo: vm.motivoSelect.id,
                        monto: vm.monto,
                        caja: vm.caja.id,
                        semanal: vm.semanal,
                        cuenta_entrada: vm.personaSelect.cuenta.id,
                        descripcion: vm.descripcion,
                        usuario: vm.usuario.id
                    };
                    // Validacion para un monto mayor a 0
                    if (vm.monto > 0) {
                        DepositoRetiroService.create(vm.tipoRetiro, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento creado..', {
                                    status: 'success'
                                }
                            );
                            vm.cargaRetiro();vm.persona[0].id
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
                } else {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Apertura una caja para pagos', {
                            status: 'danger'
                        }
                    );
                }
            };

            // Cierra Ventana Modal
            vm.cancel = function() {
                $uibModalInstance.close();
            };

        }
    }
})();
