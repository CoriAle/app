(function() {
    'use strict';
    //Controlador de edicion de personas
    angular
        .module('app.persona')
        .controller('PersonaEditController', PersonaEditController);

    PersonaEditController.$inject = ['$uibModal', 'Notify', '$stateParams', 'TipoPersonaService', 'PersonaService', '$state', 'UsuarioService'];

    function PersonaEditController($uibModal, Notify, $stateParams, TipoPersonaService, PersonaService, $state, UsuarioService) {
        var vm = this;

        activate();

        function activate() {
            vm.usuario = {};
            vm.isUsuario = false;
            vm.password1 = "";
            vm.password2 = "";
            vm.tipopersona = {};
            vm.tipopersona.id = 0;
            vm.isChica = false;

            function modelHistorial() {
                vm.historial = {
                    fecha : new Date()
                }
            }
            PersonaService.impresoras({},function (data) {
                vm.impresoras = data.results;
            },function (error) {

            });

            vm.tipos_historial = [
                {id:1, nombre:"Contratado"},
                {id:2, nombre:"Re-Contratado"},
                {id:3, nombre:"Despido"},
                {id:4, nombre:"Renuncia"}
            ];

            vm.clasificaciones= [
                {
                    "id":1, "nombre":"Bajo Rendimiento"
                },{
                    "id":2, "nombre":"Rendimiento Medio"
                },{
                    "id":1, "nombre":"Alto Rendimiento"
                }
            ];
            vm.grupos = [
                {value:1, text:"Bodeguero"},
                {value:2, text:"Mesero"},
                {value:3, text:"Cajero"},
                {value:4, text:"Administrador"},
                {value:5, text:"Cocina"}
            ];
            modelHistorial();
            vm.change = function () {
                // console.log(vm.model.grupo);
            };
            PersonaService.show({
                id: $stateParams.id
            }, function(data) {
                console.log(data);
                data.sueldo_cuenta = (data.sueldo_cuenta == null) ? 0 : parseFloat(data.sueldo_cuenta);
                data.porcentaje_chica = (data.porcentaje_chica == null) ? 0 : parseFloat(data.porcentaje_chica);
                vm.model = data;
                if (vm.model.grupo == null) {
                    vm.model.grupo = ''
                }
                switch (vm.model.grupo) {
                    case 1:
                        vm.model.grupo = vm.grupos[0];
                        break;
                    case 2:
                        vm.model.grupo = vm.grupos[1];
                        break;
                    case 3:
                        vm.model.grupo = vm.grupos[2];
                        break;
                    case 4:
                        vm.model.grupo = vm.grupos[3];
                }
                vm.verifica_empleado();

                for (var i = 0; i < vm.listaTipopersona.length; i++){
                    if (vm.listaTipopersona[i].id == vm.model.tipo_persona.id){
                        vm.tipopersona = vm.listaTipopersona[i];
                        break;
                    }
                }
                // console.log(vm.tipopersona);

                if(vm.model.codigo_barra==true)
                    vm.isChica = !vm.isChica;
            });

            PersonaService.usuario_persona({
                id: $stateParams.id
            }, function(data) {
                vm.usuario = data;
                vm.usuario.username = data.usuario.username;
                if(vm.usuario)
                    vm.isUsuario = true;
            }, function (error) {
                vm.usuario = null;
            });

            /*
             *Buscamos los tipos de personas
             */
            vm.tipos = function(val) {
                return TipoPersonaService.filtro({
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

            vm.submitPerson = function submitPerson() {
                console.log("MODEL", vm.model);
                vm.model.grupo = vm.model.grupo.value;
                vm.model.tipo_persona = vm.model.tipo_persona.id;
                if (vm.isEmpleado){
                    vm.model.clasificacion_empleado = vm.model.clasificacion_empleado.id;
                }
                PersonaService.update({
                        id: vm.model.id
                    },
                    vm.model,
                    function(data) {
                        vm.model = data;
                        // console.log(vm.usuario);
                        if(vm.usuario){
                            vm.setUser = ({
                                id: vm.usuario.usuario.id,
                                is_staff: true,
                                password: null,
                                username: vm.usuario.username
                            });
                            if(vm.password1 != "" && vm.password2 != "" && vm.password1 == vm.password2){
                                vm.setUser.password = vm.password1;
                                UsuarioService.cambiar_usuario_password({
                                        id: vm.setUser.id
                                    },
                                    vm.setUser
                                );
                            }else{
                                vm.usuario.username = vm.usuario.usuario.username;
                                // console.log(vm.usuario.u);
                                UsuarioService.cambiar_usuario_password({
                                        id: vm.setUser.id
                                    },
                                    vm.setUser
                                );
                            }
                        }
                        Notify.alert(
                            '<em class="fa fa-check"></em> Persona Editada..', {
                                status: 'success'
                            }
                        );
                        $state.go('app.persona.lista');
                    },
                    function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                                status: 'danger'
                            }
                        );
                    }
                );
            };

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

            vm.agregar_historial = function () {
                vm.historial.id = null;
                vm.historial.tipo = vm.historial.tipo.id;
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

            /// Carga de eventos de datepicker
            vm.openDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.dateOpened = true;
            };
            vm.openDate2 = function($event) {
                // $event.preventDefault();
                // $event.stopPropagation();
                vm.dateOpened2 = true;
            };
        }
    }
})();
