(function() {
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioEditarController', UsuarioEditarController);

    UsuarioEditarController.$inject = ['$stateParams', 'ngDialog', 'toaster', '$route', 'PresentacionService', '$location', 'UsuarioService', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];

    function UsuarioEditarController($stateParams, ngDialog, toaster, $route, PresentacionService, $location, UsuarioService, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;
        vm.id = $stateParams.id;
        activate();
        vm.usuariosEdit = [];

        function activate() {
            UsuarioService.show({
                id: vm.id
            }, function(data) {
                vm.usuario = data;

            }).$promise.then(function(data) {
                vm.usuario = data;
            });

            var prodMod;

            //Propiedades de datatable
            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withPaginationType('full_numbers')
                .withDisplayLength(5);

            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3),
                DTColumnDefBuilder.newColumnDef(4).notSortable()
            ];

            //Busquedas para la api
            UsuarioService.list({}, function(data) {
                vm.usuarios = data.results;
            });

            //Asignacion de Variables para la vista
            vm.esCombo = esCombo;
            vm.addProdCombo = addProdCombo;
            vm.modifyProdCombo = modifyProdCombo;
            vm.saveModiProdCombo = saveModiProdCombo;
            vm.removeProdCombo = removeProdCombo;
            vm.submit = submit;

            function addPresentacion() {
                var dialog = ngDialog.open({
                    template: 'app/views/presentacion/nuevo.html',
                    controller: 'PresentacionController'
                });
                dialog.closePromise.then(function(data) {
                    if (data.value === true) {
                        toaster.success('Se ha ingresado una nueva presentacion');
                    }
                });
            }

            //Funciones que nos serviran para los usuarios del combo
            function esCombo() {
                vm.combo = !vm.combo;
            }

            //Agregamos un nuevo elemento a lista de usuarios de combo
            function addProdCombo() {
                var existe = false;
                for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                    if (vm.combo_usuario.usuario_combo.id == vm.usuario.usuarios[i].usuario_combo.id) {
                        existe = true;
                        break;
                    }
                }
                if (existe == false) {
                    toaster.pop('success', 'Agregado', 'Usuario agregado a lista');
                    vm.usuario.usuarios.push(vm.combo_usuario);
                    vm.combo_usuario = {};
                } else {
                    vm.combo_usuario = {};
                    toaster.pop('error', 'Usuario ya existente', 'Usuario ya existe dentro de la lista');
                }
            }

            //Modificamos un usuario existente dentro de la lista
            function saveModiProdCombo() {
                if (vm.usuario.usuarios.length > 0 && prodMod.usuario_combo.id > 0) {
                    for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                        if (vm.usuario.usuarios[i].usuario_combo.id === prodMod.usuario_combo.id) {
                            vm.usuario.usuarios[i].cantidad = vm.cantidad;
                            vm.cantidad = 0;
                            prodMod = {};
                            toaster.pop('info', 'Usuario Modificado', 'Usuario Modificado de la lista');
                            break;
                        }
                    }
                }
            }

            //Cargamos los datos del usuario a modificar
            function modifyProdCombo(data) {
                vm.cantidad = data.cantidad;
                prodMod = data;
            }

            //Eliminamos un usuario seleccionado dentro de la lista de usuarios de combo
            function removeProdCombo(data) {
                for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                    if (vm.usuario.usuarios[i] == data) {
                        vm.usuario.usuarios.splice(i, 1);
                        toaster.pop('warning', 'Usuario Eliminado', 'Usuario Eliminado de la lista');
                        break;
                    }
                }
            }

            //Guardado de usuario/combo
            function submit() {
                if (vm.combo) {
                    for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                        vm.usuario.usuarios[i].usuario_combo = vm.usuario.usuarios[i].usuario_combo.id;
                    };
                    if (vm.usuario.usuarios.length > 0) {
                        save();
                    } else {
                        toaster.pop('warning', 'Lista Vacia', 'No hay elementos dentro de la lista');
                    }
                } else {
                    vm.usuario.usuarios = [];
                    save();
                }
            }

            function save() {
                vm.usuario.tipo_usuario = vm.usuario.tipo_usuario.id;
                vm.usuario.presentacion = vm.usuario.presentacion.id;
                UsuarioService.update(vm.usuario, function(data) {
                    vm.usuario = {};
                    toaster.pop('success', 'Agregado con exito', 'Editar usuario agregado con exito');
                }, function(error) {
                    toaster.pop('error', 'Error de Guardado', 'Error al intentar guardar los datos');
                });
            }

            //Funcion para cargar los datos de usuario
            function cargaUsuarios() {

            }
        }
    }
})();
