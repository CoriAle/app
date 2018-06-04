(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('AutorizacionController', AutorizacionController);

    AutorizacionController.$inject = ['$window', 'Notify', '$resource', '$rootScope', '$uibModal', '$location', 'LoginService'];

    function AutorizacionController($window, Notify, $resource, $rootScope, $uibModal, $location, LoginService) {
        var vm = this;
        activate();

        function activate() {
            // Caja
            $rootScope.autenticacion_cortesia = false;

            // Usuario
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');

            vm.pagos = [];

            // Cierra Ventana Modal
            vm.cancelogin = function() {
                $rootScope.modalInstance.close();
            };

            // Verifica Usuario para cancelar orden
            vm.login = function() {
                if (vm.loginForm.$valid) {
                    LoginService.login({
                            username: vm.account.username,
                            password: vm.account.password
                        },
                        function(data) {
                            //Save the token in session
                            // $window.sessionStorage.setItem('token', data.token);
                            LoginService.hace_cortesias({id:vm.account.username},function (data) {
                               if (data.cortesias == true){
                                   LoginService.busca_usuario({
                                       nick: vm.account.username
                                   }, function(dat) {

                                       $rootScope.persona_autenticacion = dat.persona.nombre;
                                       console.log("LOG EXITOSO AUTEN");
                                       $rootScope.autenticacion_cortesia = true;
                                       // vm.cancelogin();
                                   });
                                   $rootScope.modalInstance.close();
                                   vm.cancelogin();
                               }else{
                                   vm.authMsg = 'Datos Incorrectos';
                               }
                            },function (error) {
                                vm.authMsg = 'Datos Incorrectos';
                            });

                            // $state.go('app.dashboard');
                        },
                        function(error) {
                            vm.authMsg = 'Datos Incorrectos';
                        });
                } else {
                    vm.loginForm.username.$dirty = true;
                    vm.loginForm.account_password.$dirty = true;
                }
            }


        }
    }
})();
