(function() {
    'use strict';
    //Controlador de edicion de personas
    angular
        .module('app.persona')
        .controller('PersonaNuevoController', PersonaNuevoController);

    PersonaNuevoController.$inject = ['$uibModal', 'Notify', 'TipoPersonaService', 'PersonaService', 'PerfilUsuarioService'];

    function PersonaNuevoController($uibModal, Notify, TipoPersonaService, PersonaService, PerfilUsuarioService) {
        var vm = this;

        activate();

        function activate() {
            vm.isUsuario = false;
            vm.isEmpleado = false;
            vm.isChica = false;


            /**Get de impresoras*/
            PersonaService.impresoras({},function (data) {
                vm.impresoras = data.results;
            },function (error) {

            });
            //Funcion para inicializar los datos
            function constructModel() {
                vm.model = {
                    id: 0,
                    nombre: '',
                    tipo_persona: null,
                    historial_contratacion: [],
                    sueldo_cuenta: 0,
                    porcentaje_chica: 0,
                    fecha_labores: new Date()
                };
                vm.usuario = {
                    password: '',
                    nick: ''
                };
                vm.perfil = {

                }
            }

            function modelHistorial() {
                vm.historial = {
                    fecha : new Date()
                }
            }

            //Inicializamos los datos de persona
            constructModel();
            modelHistorial();
            /*
             *Buscamos los tipos de personas
             */
            vm.tipos = function(val) {
                return TipoPersonaService.filtro_no_paginate({
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

            vm.verifica_empleado = function() {
                if (vm.model.tipo_persona != null) {
                    if (vm.model.tipo_persona.id > 0) {
                        if(vm.model.tipo_persona.nombre == 'empleado' || vm.model.tipo_persona.nombre == 'Empleado'){
                            vm.isEmpleado = true;
                        } else {
                            vm.isEmpleado = false;
                        }
                    } else {
                        vm.isEmpleado = false;
                    }
                } else {
                    vm.isEmpleado = false;
                }
                return vm.isEmpleado;
            };

            vm.esUsuario = function() {
                vm.isUsuario = !vm.isUsuario;
            };

            vm.esChica = function(){
                vm.isChica = !vm.isChica;
            }

            vm.agregar_historial = function () {
                vm.historial.fecha = moment(vm.historial.fecha).format('YYYY-MM-DD');
                vm.model.historial_contratacion.push(vm.historial);
                vm.formHistorial.$setPristine();
                modelHistorial();
            };

            vm.retirar = function (item) {
                _.remove(vm.model.historial_contratacion, function(n) {
                    return n == item;
                });
            };

            vm.open = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoPersonaAddController as tipos'
                });
            };

            //Enviamos a guardar los datos del la nueva persona backend
            vm.submitPerson = function() {
                vm.model.tipo_persona = vm.model.tipo_persona.id;
                //Verificamos si el usuario es un usuario
                if (vm.isUsuario) {
                    vm.usuario.is_staff = true;
                    vm.perfil.usuario = vm.usuario;
                    vm.perfil.persona = vm.model;
                    //Si la persona es un usuario creamos un perfil de la misma
                    PerfilUsuarioService.create(vm.perfil, function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Persona creada..', {
                                status: 'success'
                            }
                        );
                        console.log(data);
                        constructModel();
                        vm.formValidate.$setPristine();
                    }, function(error) {
                        //Volvemos a cargar a el tipo de persona
                        TipoPersonaService.show({
                            id: vm.model.tipo_persona
                        }, function(data) {
                            vm.model.tipo_persona = data;
                        });
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: Nick de usuario ya existe o campos no se han ingresado adecuadamente', {
                                status: 'danger'
                            }
                        );
                    });
                    // Reinicio de Variables para condiciones
                    vm.isUsuario = false;
                    vm.isUsuario2 = false;
                    vm.isEmpleado = false;
                    vm.isChica = false;
                } else {
                    //Si la persona no es usuarios creamos a la persona
                    PersonaService.create(vm.model, function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Persona creada..', {
                                status: 'success'
                            }
                        );
                        if (data.codigo_barra) {
                            var modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'barcode.html',
                                controller: 'PersonaBarCodeController as ctrl',
                                resolve: {
                                    persona: function() {
                                        return data.id;
                                    }
                                }
                            });
                        }
                        constructModel();
                        vm.formValidate.$setPristine();
                    }, function(error) {
                        //Volvemos a cargar el tipo de persona
                        TipoPersonaService.show({
                            id: vm.model.tipo_persona
                        }, function(data) {
                            vm.model.tipo_persona = data;
                        });
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data, {
                                status: 'danger'
                            }
                        );
                    });
                }
                // Reinicio de Variables para condiciones
                vm.isUsuario = false;
                vm.isEmpleado = false;
                vm.isChica = false;
            };

            /// Carga de eventos de datepicker
            vm.openDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.dateOpened = true;
            };
            vm.openDate2 = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.dateOpened2 = true;
            };
        }
    }
})();
