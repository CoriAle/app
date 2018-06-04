(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('CajaPendienteController', CajaPendienteController);

    CajaPendienteController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource', '$rootScope', '$uibModal', 'CajaAccionService', 'CajaService', '$window', 'LoginService', '$state'];

    function CajaPendienteController(Notify, SweetAlert, MovimientoService, $resource, $rootScope, $uibModal, CajaAccionService, CajaService, $window, LoginService, $state) {
      var vm = this;
      activate();

      function activate() {
        vm.account = {};
        vm.usuario = {};
        vm.caja = {};
        vm.usuario.id = $window.sessionStorage.getItem('userid');
        // Funcion que verifica el CierreCaja para colocar su fecha de apertura y buscar a un dia siguiente
        vm.caja_abierta = function(){
          CajaService.comprueba_caja_usuario({
            user: vm.usuario.id
          }, function(data){
            vm.caja = data
            console.log("caja", vm.caja);
            console.log("fecha caja", vm.caja.creado);
          }, function(error){
              console.log(error);
          });
        }
        vm.caja_abierta();

        vm.query = "";
        vm.today = function() {
          vm.dt = new Date();
        };
        vm.today();

        vm.clear = function () {
          vm.dt = null;
        };

        vm.initFechas = function() {
          var f = new Date();
          vm.iniDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
          vm.finDate = new Date(f.getFullYear(), f.getMonth(), f.getDate() + 1);
        };
        vm.initFechas();

        vm.open = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          vm.opened = true;
        };

        vm.openfin = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          vm.openend = true;
        };

        vm.dateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        vm.initDate = new Date('2019-10-20');
        vm.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];

        // Paginacion del frontend expresado en paginas
        vm.pagingInfo = {
            page: 1,
            itemsPerPage: 10,
            sortBy: 'id',
            reverse: false,
            search: '',
            totalItems: 0,
        };

        // Paginacion para el backend expresado con saltos y limites
        vm.pagination = {
            skip: 0,
            sort: 'id',
            where: {
                "activo": true
            },
            limit: 10
        }
        vm.advertencia = function() {
          SweetAlert.swal('Información', 'La "Caja" no esta abierta o no hay pedidos en espera de cobro', 'info');
        };

        // Cuentas pendientes de Pago se envía id para saber el usuario que tiene abierta la caja y busque desde la fecha de apertura de la caja
        vm.filtro_pendientes = function(){
          var i = new Date(vm.iniDate);
          var f = new Date(vm.finDate);
          MovimientoService.pedidos_pendientes({
              ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
              fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
              user: vm.usuario.id,
              page: vm.pagingInfo.page,
              query: vm.query
          }, function(data) {
              console.log(data);
              vm.lista = data;
              vm.pagingInfo.totalItems = data.count;
              vm.pedidospendientes = data.results;
              $rootScope.mesaspendientes = data.results.length;
              if (data.count == 0){
                  vm.advertencia();
              }
          }, function(error){
              vm.advertencia();
          });
        //   CajaAccionService.compruebaCaja({},function(data){},function(error))
        }

        vm.filtro_pendientes();

        /**
         * Convierte el numero de página generado por uibootstrap a salto y limite utilizado
         * por el backend
         * @para page: numero de pagina a convertir
         */
        vm.selectPage = function(page) {
            vm.pagingInfo.page = page;
            // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
            vm.pagination.skip = 0;
            if (vm.pagingInfo.page > 1)
                vm.pagination.skip = (vm.pagingInfo.page - 1) * vm.pagingInfo.itemsPerPage;
            vm.filtro_pendientes();
        };

        // Cancelar Orden
        vm.ingresoUsuario = function(item) {
            $rootScope.item = item
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                size: 'sm',
                templateUrl: 'Usuario.html',
                controller: 'CajaPendienteController as ctrl',
                resolve: {
                    item: function() {
                        // return id;
                    }
                }
            });
        };

        // Cierra Ventana Modal
        vm.cancel = function() {
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
                        LoginService.cancela_ordenes({id:vm.account.username},function (data) {
                            if (data.anulaciones == true){
                                LoginService.busca_usuario({
                                    nick: vm.account.username
                                }, function(dat) {
                                    // $window.sessionStorage.setItem('userid', dat.usuario.id);
                                    // $window.sessionStorage.setItem('username', dat.persona.nombre);
                                    $rootScope.persona_autenticacion = dat.persona.nombre;
                                    console.log("LOG EXITOSO");
                                    console.log("DENTRO DE LOG", $rootScope.item);
                                    vm.cancelOrder($rootScope.item);
                                });
                                $rootScope.modalInstance.close();
                            }else{
                                vm.authMsg = 'Datos Incorrectos';
                            }
                        }, function (error) {
                            vm.authMsg = 'Datos Incorrectos';
                        });

                        // $state.go('app.dashboard');
                    },
                    function(error) {
                        // Erase the token if the user fails to log in
                        // $window.sessionStorage.removeItem('token');
                        // $window.sessionStorage.removeItem('user');
                        vm.authMsg = 'Datos Incorrectos';
                    });
            } else {
                vm.loginForm.username.$dirty = true;
                vm.loginForm.account_password.$dirty = true;
            }
        }


        // Cancelar Orden Individual en la Lista de Pedidos
        vm.cancelOrder = function cancelOrder(item) {
            console.log("ITEM CO", item);
            SweetAlert.swal({
              title: '¿Esta Seguro?',
              text: '¡Se eliminará la orden!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: '¡Sí, eliminarla!',
              cancelButtonText: 'Cancelar',
              closeOnConfirm: true
            }, function(isConfirm) {
              if (isConfirm) {
                // Se reformatean algunas variables para que las pueda validar el serializador, para no tocar el serializador en el BackEnd
                // y no romper otras funcionalidades del mismo en otros lados

                // Se crea una nueva variable fecha para definir fecha/hr en que fue anulada la orden
                var d = new Date();

                item.cuenta_separada=false;
                for (var i = 0; i < item.detalle.length; i++){
                  item.detalle[i].producto.productos = [];
                  item.detalle[i].producto_presentacion.producto.productos = [];
                  item.detalle[i].observacion = "Cancelado por: ";
                  if (item.detalle[i].persona == null){
                    console.log('Producto simple');
                  } else {
                    item.detalle[i].persona = item.detalle[i].persona.id;
                  }
                };

                for (var i = 0; i < item.transacciones.length; i++){
                  item.transacciones[i].usuario = item.transacciones[i].usuario.id;
                };
                if (item.mesa != 1){
                  item.mesa = item.mesa.id
                }
                if (item.persona != 1){
                  item.persona = item.persona.id
                }
                // Si el pedido es anulado queda registro de usuario, fecha y hr
                if (item.motivo == "" || item.motivo == null){
                    item.motivo = "Orden anulada por: " + $rootScope.persona_autenticacion + " - Fecha: " + d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                }
                MovimientoService.update(item,
                  function(data) {
                    Notify.alert(
                      '<em class="fa fa-check"></em> Orden eliminada..', {
                        status: 'success'
                      }
                    );
                    vm.filtro_pendientes();
                    $state.reload();
                    delete $rootScope.item
                  },
                  function(error) {
                    Notify.alert(
                      '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                        status: 'warning'
                      }
                    );
                    vm.filtro_pendientes();
                    $state.reload();
                  });
              } else {
                  item.cuenta_separada=true;
                  $state.reload();
                  vm.filtro_pendientes();
              }
            });
        }
      }
    }
})();
