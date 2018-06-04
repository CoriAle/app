(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http', '$window', '$state'];
    function SidebarLoader($http, $window, $state) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
          var grupo = $window.sessionStorage.getItem('usergroup');
          if (grupo == 1){
            var menuJson = 'server/sidebar-menu-bodeguero.json',
            menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else if (grupo == 2){
              $state.go('page.404')
          }else if (grupo == 3){
              var menuJson = 'server/sidebar-menu-cajero.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else if (grupo == 4){
              var menuJson = 'server/sidebar-menu.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else if (grupo == 5){
              var menuJson = 'server/sidebar-menu-cocina.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else {
              $state.go('page.404')
          }

          onError = onError || function() { console.log(''); };
          // onError = onError || function() { alert('Failure loading menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();