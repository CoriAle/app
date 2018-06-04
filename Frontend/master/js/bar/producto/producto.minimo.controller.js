(function() {
  'use strict';

  angular
    .module('app.producto')
    .controller('ProductoMinimoController', ProductoMinimoController);

  ProductoMinimoController.$inject = ['ProductoService'];

  function ProductoMinimoController(ProductoService) {
    var vm = this;
    activate();

    function activate() {
      ProductoService.existencia_minima({}, function(data) {
        vm.minimo = data;
      });
    }
  }
})();
