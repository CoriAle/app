(function() {
  'use strict';

  angular
    .module('app.movimiento')
    .controller('IngresoController', IngresoController);

  IngresoController.$inject = ['Notify', '$uibModal', 'ProductoService', 'PersonaService', 'MovimientoService', '$resource',];

  function IngresoController(Notify, $uibModal, ProductoService, PersonaService, MovimientoService, $resource) {
    var vm = this;
    activate();
    vm.movimiento = {};
    vm.movimiento.total_costo = 0;
    vm.movimiento.total = 0;
    vm.movimiento.detalle = [];
    vm.detalle = {};
    vm.detalle.cantidad = 0;
    vm.detalle.precio_costo = 0;
    // vm.detalle.precio_venta = 0;

    function activate() {
      var prodMod;

      //Busquedas para la api
      /*
       *Buscamos los proveedores
       */
      vm.proveedores = function(val) {
        return PersonaService.proveedores({
          query: val
        }).$promise.then(function(data) {
          return data;
        });
      };

      /*
       *Buscamos los productos que no son combos
       */
      vm.productos = function(val) {
        return ProductoService.filtro_no_combo({
          query: val
        }).$promise.then(function(data) {
          return data;
        });
      };

      vm.tipos = [{
        'id': 1,
        'nombre': 'Contado'
      }, {
        'id': 2,
        'nombre': 'Credito'
      }];

      vm.documentos = [{
        'id': 1,
        'nombre': 'Factura'
      }, {
        'id': 2,
        'nombre': 'Recibo'
      }, {
        'id': 3,
        'nombre': 'Vale'
      }];

      //Asignacion de Variables para la vista
      vm.addProd = addProd;
      vm.removeProd = removeProd;
      vm.openPersona = openPersona;
      vm.openProducto = openProducto;
      vm.submit = submit;
      vm.cargaProducto = cargaProducto;

      //Funciones para cargar los dialogos de agregar un nuevo tipo y presentacion de movimientos
      function openPersona() {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'addPersona.html',
          controller: 'PersonaAddController as tipos'
        });
      }

      function openProducto() {
        var modalInstance = $uibModal.open({
          animation: true,
          size: 'lg',
          templateUrl: 'addProducto.html',
          controller: 'ProductoAddController as nuevo'
        });
      }

      //Agregamos un nuevo elemento a lista de movimientos de combo
      function addProd() {
        var existe = false;
        for (var i = 0; i < vm.movimiento.detalle.length; i++) {
          if (vm.detalle.producto.id == vm.movimiento.detalle[i].producto.id) {
            existe = true;
            break;
          }
        }
        if (detalleCompleto()) {
          if (existe == false) {
            Notify.alert(
              '<em class="fa fa-check"></em> movimiento agregado a la lista..', {
                status: 'success'
              }
            );
            vm.movimiento.detalle.push(vm.detalle);
            vm.movimiento.total_costo = vm.movimiento.total_costo + (vm.detalle.precio_costo * vm.detalle.cantidad);
            vm.movimiento.total = 0;
            vm.detalle = {};
          } else {
            vm.detalle = {};
            Notify.alert(
              '<em class="fa fa-times"></em> Producto ya existe..', {
                status: 'warning'
              }
            );
          }
        }
      }

      function detalleCompleto() {
        var completo = false;
        if (vm.detalle.producto != null && vm.detalle.producto.id > 0 && vm.detalle.observacion != '' && vm.detalle.costo != '' && vm.detalle.costo != 0 && vm.detalle.cantidad != 0) {
          completo = true;
        } else {
          Notify.alert(
            '<em class="fa fa-times"></em> Debe ingresar todos los datos del detalle..', {
              status: 'warning'
            }
          );
        }
        return completo;
      }

      //Eliminamos un movimiento seleccionado dentro de la lista de movimientos de combo
      function removeProd(data) {
        for (var i = 0; i < vm.movimiento.detalle.length; i++) {
          if (vm.movimiento.detalle[i] == data) {
            vm.movimiento.total_costo = vm.movimiento.total_costo - (vm.movimiento.detalle[i].precio_costo * vm.movimiento.detalle[i].cantidad);
            vm.movimiento.total = 0;
            vm.movimiento.detalle.splice(i, 1);
            Notify.alert(
              '<em class="fa fa-times"></em> Producto eliminado de la lista..', {
                status: 'warning'
              }
            );
            break;
          }
        }
      }

      //Guardado de movimiento
      function submit() {
        if (vm.movimiento.detalle.length > 0) {
          vm.movimiento.persona = vm.movimiento.persona.id;
          vm.movimiento.tipo = vm.movimiento.tipo.id;
          vm.movimiento.documento = vm.movimiento.documento.id;
          for (var i = 0; i < vm.movimiento.detalle.length; i++) {
            vm.movimiento.detalle[i].producto = vm.movimiento.detalle[i].producto.id;
            vm.movimiento.detalle[i].persona = null;
            // vm.movimiento.detalle[i].producto_presentacion = null;
          }
          vm.movimiento.mesa = null;
          vm.movimiento.total = 0;
          MovimientoService.create(vm.movimiento, function(data) {
            setDatos();
            vm.formValidate.$setPristine();
            Notify.alert(
              '<em class="fa fa-check"></em> Ingreso de Porductos con exito..', {
                status: 'success'
              }
            );
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Error de Guardado.. '+ error.data.detail, {
                status: 'error'
              }
            );
          });
        } else {
          Notify.alert(
            '<em class="fa fa-times"></em> Lista vacia de Productos..', {
              status: 'warning'
            }
          );
        }
      }

      //Cargamos los datos del producto seleccionado al precio costo y precio Venta
      function cargaProducto() {
        vm.detalle.precio_costo = parseFloat(vm.detalle.producto.precio_costo);
        // vm.detalle.precio_venta = parseFloat(vm.detalle.producto.precio_venta);
      }

      //Recargamos los datos nuevamente para que puedan ser seteados adecuadamente
      function setDatos() {
        vm.movimiento = {};
        vm.movimiento.total_costo = 0;
        vm.movimiento.total = 0;
        vm.movimiento.detalle = [];
        vm.detalle = {};
        vm.detalle.cantidad = 0;
        vm.detalle.precio_costo = 0;
        // vm.detalle.precio_venta = 0;
      }
    }
  }
})();
