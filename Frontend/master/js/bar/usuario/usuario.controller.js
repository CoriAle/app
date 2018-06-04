(function() {
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    UsuarioController.$inject = ['ngDialog', 'toaster', '$location', 'UsuarioService', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];

    function UsuarioController(ngDialog, toaster, $location, UsuarioService, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;
        activate();

        function activate() {

            UsuarioService.list({}, function(data) {
                vm.usuario = data.results;
            });

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withPaginationType('full_numbers')
                .withDisplayLength(5);

            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1).notSortable()
            ];
            vm.removeUsuario = removeUsuario;
            vm.nuevo = nuevo;
            vm.saveDialog = saveDialog;

            function nuevo() {
                var dialog = ngDialog.open({
                    template: 'app/views/usuario/usuario.nuevo.html',
                    controller: 'UsuarioController'
                });
                dialog.closePromise.then(function(data) {
                    if (data.value === true) {
                        UsuarioService.list({}, function(data) {
                            vm.usuario = data.results;
                        });
                        toaster.success('Se ha ingresado un nuevo usuario');
                    }
                });
            }

            function saveDialog() {
                vm.model.is_staff = true;
                if (vm.formValidate.$valid) {
                    UsuarioService.create(vm.model, function(data) {
                        vm.model = {};
                        ngDialog.closeAll(true);
                    }, function(error) {

                    });
                }
            }

            function removeUsuario(index) {
                UsuarioService.destroy({
                        id: index
                    },
                    function(data) {
                        toaster.pop('warning', 'Usuario Eliminado', 'Usuario Eliminado');
                        UsuarioService.list({}, function(data) {
                            vm.usuario = data.results;
                        });
                    },
                    function(error) {
                        toaster.pop('error', 'Error', 'Error al intentar eliminar el usuario');
                        UsuarioService.list({}, function(data) {
                            vm.usuario = data.results;
                        });
                    });
            }
        }
    }
})();
