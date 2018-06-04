(function() {
    'use strict';
    angular
        .module('app.persona')
        .controller('PersonaAddController', PersonaAddController);

    PersonaAddController.$inject = [
        '$uibModalInstance', 'PersonaService', 'Notify', 'TipoPersonaService'
    ];

    function PersonaAddController($uibModalInstance, PersonaService, Notify, TipoPersonaService) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            vm.Persona = {
                id: 0,
                nombre: null
            }

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

            vm.proveedor = {
                id: 2,
                nombre: 'Proveedor'
            }

            vm.ok = function() {
                vm.errMsg = '';
                vm.model.tipo_persona = vm.proveedor.id;
                PersonaService.create(vm.model, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    $uibModalInstance.close();
                }, function(error) {
                    vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
                });
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();
