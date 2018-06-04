(function() {
    'use strict';
    angular
        .module('app.persona')
        .controller('PersonaBarCodeController', PersonaBarCodeController);

    PersonaBarCodeController.$inject = ['persona', '$uibModalInstance', 'PersonaService', 'Notify', 'md5'];

    function PersonaBarCodeController(persona, $uibModalInstance, PersonaService, Notify, md5) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            PersonaService.show({
                id: persona
            }, function(data) {
                vm.persona = data
            }, function(error) {
                vm.errMsg = error.detail;
            });

            vm.options = {
                width: 1,
                height: 100,
                quite: 1,
                displayValue: false,
                font: "monospace",
                textAlign: "center",
                fontSize: 12,
                backgroundColor: "",
                lineColor: "#000"
            };

            vm.ok = function(divName) {
                $uibModalInstance.close();
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();
