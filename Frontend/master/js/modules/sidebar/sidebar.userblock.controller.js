(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$window', '$rootScope', '$scope'];
    function UserBlockController($window, $rootScope, $scope) {
        var vm = this;
        activate();

        ////////////////

        function activate() {
          vm.usuario = {};
          vm.usuario.ide = parseInt($window.sessionStorage.getItem('userid'));
          vm.usuario.nombre = $window.sessionStorage.getItem('username');
          $rootScope.user = {
            name:     vm.usuario.nombre,
            job:      'Usuario',
            picture:  'app/img/user/13.jpg'
          };

          // Hides/show user avatar on sidebar
          $rootScope.toggleUserBlock = function(){
            $rootScope.$broadcast('toggleUserBlock');
          };

          $rootScope.userBlockVisible = true;

          var detach = $rootScope.$on('toggleUserBlock', function(/*event, args*/) {

            $rootScope.userBlockVisible = ! $rootScope.userBlockVisible;

          });

          $scope.$on('$destroy', detach);
        }
    }
})();
