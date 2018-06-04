(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService', '$http', '$state', '$window', '$location'];

  function LoginController(LoginService, $http, $state, $window) {
    var vm = this;
    activate();

    ////////////////

    function activate() {
      // bind here all data from the form
      vm.account = {};
      // place the message if something goes wrong
      vm.authMsg = '';

      vm.login = function() {
        vm.authMsg = '';

        if (vm.loginForm.$valid) {

          LoginService.login({
              username: vm.account.username,
              password: vm.account.password
            },
            function(data) {
              //Save the token in session
              $window.sessionStorage.setItem('token', data.token);
              LoginService.busca_usuario({
                nick: vm.account.username
              }, function(dat){
                $window.sessionStorage.setItem('userid', dat.usuario.id);
                $window.sessionStorage.setItem('usergroup', dat.persona.grupo);
                $window.sessionStorage.setItem('username', dat.persona.nombre);
                $state.go('app.dashboard')
              });

            },
            function(error) {
              // Erase the token if the user fails to log in
              $window.sessionStorage.removeItem('token');
              $window.sessionStorage.removeItem('user');
              vm.authMsg = 'Server Request Error';
            }
          );
        } else {
          // set as dirty if the user click directly to login so we show the validation messages
          /*jshint -W106*/
          vm.loginForm.username.$dirty = true;
          vm.loginForm.account_password.$dirty = true;
        }
      };

      vm.logout = function(){
        swal({
          title: '¿Salir del sistema?',
          text: '¡Esta seguro de querer salir del sistema!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: '¡Sí, salir!',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: true
        }, function(isConfirm) {
          if (isConfirm) {
            vm.account = {};
            $window.sessionStorage.removeItem('token');
            $window.sessionStorage.removeItem('user');
            $state.go('page.login');
          }
        });
      }

    }
  }
})();
