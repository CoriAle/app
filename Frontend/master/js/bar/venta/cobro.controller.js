(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('CobroController', CobroController);

    CobroController.$inject = ['$window', 'Notify', 'MovimientoService', '$resource', '$rootScope', '$uibModal', '$location', 'LoginService', '$uibModalInstance'];

    function CobroController($window, Notify, MovimientoService, $resource, $rootScope, $uibModal, $location, LoginService, $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            // Caja
            vm.caja = $rootScope.caja;
            // console.log(vm.caja);

            // Caja Abierta actualmente
            vm.cajaA = $rootScope.cajaAbierta;
            // console.log(vm.cajaA);

            // Variable utilizada para la autenticacion_cortesia en AutorizacionController
            $rootScope.autenticacion_cortesia = false;
            var cont = 0;
            var bandera = true;
            $rootScope.detalle_motivo = " ";

            // Detiene el vm.interval
            clearInterval(vm.interval);

            // Usuario
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');

            vm.pagos = [];

            // Inicializamos los datos de pago
            function iniciaPago() {
                vm.tipos = [{
                    'id': 1,
                    'nombre': 'Efectivo'
                }, {
                    'id': 2,
                    'nombre': 'Tarjeta de Credito'
                }, {
                    'id': 4,
                    'nombre': 'Cortesia'
                }];
                vm.pago = {
                    monto: 0,
                    tipo: null
                }
            }
            iniciaPago();
            vm.errMsg = '';
            vm.agregarMsg = '';
            vm.tipoMsg = '';

            vm.tipos = [{
                'id': 1,
                'nombre': 'Efectivo'
            }, {
                'id': 2,
                'nombre': 'Tarjeta de Credito'
            }, {
                'id': 4,
                'nombre': 'Cortesia'
            }];

            //Cargamos los datos del movimiento
            MovimientoService.show({
                id: $rootScope.orden.id
            }, function(data) {
                vm.pedido = data;
                vm.total = vm.pedido.total;
                vm.pago.monto = Number(vm.total);
                vm.pago.tipo = vm.tipos[0];
            }, function(error) {
                Notify.alert(
                    '<em class="fa fa-times"></em>', {
                        status: 'warning'
                    }
                );
            });

            // Cortesia Usuario
            vm.ingresoUsuario = function() {
                 $rootScope.modalInstance = $uibModal.open({
                    animation: true,
                    size: 'sm',
                    templateUrl: 'app/views/caja/autorizacion.html',
                    controller: 'AutorizacionController',
                });
            };

            // Funcion que se ejecuta a cada 100ms verificando si la cortersia es verdadera cuando el login es EXITOSO
            // y que no sea null el tipo de forma de pago y haga el push correspondiente junto con persona_autenticacion
            // junto con la fecha y hr con la que se esta haciendo la transaccion
            vm.interval = "";
            vm.bulk_available = function() {
                vm.interval = setInterval(function() {
                    if ( $rootScope.autenticacion_cortesia == true) {
                        if (vm.pago.tipo == null) {
                        } else {
                            vm.total = vm.total - vm.pago.monto;
                            vm.d = new Date();
                            $rootScope.detalle_motivo = " | Autorizado por: " + $rootScope.persona_autenticacion + " - Fecha: " + vm.d.getFullYear() + "-" + vm.d.getMonth() + "-" + vm.d.getDate() + " " + vm.d.getHours() + ":" + vm.d.getMinutes() + ":" + vm.d.getSeconds();
                            vm.pago.motivo = vm.pago.motivo + $rootScope.detalle_motivo;
                            vm.pagos.push(vm.pago);
                            iniciaPago();
                            vm.formAdd.$setPristine();
                            vm.agregarMsg = "Se ha agregado una nueva forma de pago";
                            vm.pago.motivo = " ";
                            delete vm.pago.motivo;
                            $rootScope.detalle_motivo = " ";
                            $rootScope.autenticacion_cortesia = false;
                            vm.pago.monto = Number(vm.total);

                        }

                    }
                }, 100)
            };
            // Funcion que limpia vm.interval
            vm.limpiar = function(){
                clearInterval(vm.interval)
            }

            var contador = 0;
            // Agregamos un nuevo pago a lista de pagos
            // 3 tipos de condiciones Cortesia, Efectivo y Tarjeta de Credito
            // En Cortesia primero abre modal y luego bulk_available se ejecuta
            vm.addPago = function() {
                var busqueda = buscaTipo(vm.pago.tipo.id)
                if (vm.total >= vm.pago.monto && !busqueda) {
                    if (vm.pago.tipo.nombre == "Cortesia") {
                        contador = contador + 1;
                        if (contador === 1 || contador === 3 || contador === 5 || contador === 7 || contador === 9 || contador === 11 || contador === 13 || contador === 15) {
                            vm.ingresoUsuario();
                            vm.bulk_available();
                        }
                    } else if (vm.pago.tipo.nombre == "Efectivo") {
                        vm.pago.motivo = "Sin motivo ";
                        vm.total = vm.total - vm.pago.monto;
                        vm.pagos.push(vm.pago);
                        iniciaPago();
                        vm.formAdd.$setPristine();
                        vm.agregarMsg = "Se ha agregado una nueva forma de pago";
                        vm.pago.monto = Number(vm.total);
                    } else if (vm.pago.tipo.nombre == "Tarjeta de Credito") {
                        vm.pago.motivo = "Sin motivo ";
                        vm.total = vm.total - vm.pago.monto;
                        vm.pagos.push(vm.pago);
                        iniciaPago();
                        vm.formAdd.$setPristine();
                        vm.agregarMsg = "Se ha agregado una nueva forma de pago";
                        vm.pago.monto = Number(vm.total);
                    }

                } else {
                    if (busqueda) {
                        iniciaPago();
                        vm.formAdd.$setPristine();
                        vm.tipoMsg = 'Ya existe la forma de pago dentro de la lista';
                    } else {
                        iniciaPago();
                        vm.formAdd.$setPristine();
                        vm.tipoMsg = 'El monto ingresado es mayor al total';
                    }
                }
            }

            //Verificamos si un tipo de pago ya se encuentra dentro de la lista
            function buscaTipo(id) {
                var busca = false;
                var pago = _.find(vm.pagos, function(item) {
                    return item.tipo.id === id;
                });
                if (pago) {
                    busca = true;
                }
                return busca;
            }

            vm.valida = function() {
                if (vm.pagos.length > 0 && vm.total == 0) {
                    return false;
                } else {
                    return true;
                }
            }

            vm.submit = function() {
                vm.pedido.movimientos={
                    'id': null,
                    'monto': vm.pedido.total,
                    'descripcion': null,
                    'numero_boleta': null,
                    'caja': vm.cajaA.id,
                    'cuenta_salida': {
                        id: 1
                    },
                    'cuenta_entrada': {
                        id: 1
                    },
                    'motivo': 1
                }

                _.each(vm.pagos, function(item){
                  item.tipo = item.tipo.id;
                });

                if (vm.pedido.persona != null) {
                    vm.pedido.persona = vm.pedido.persona.id;
                }
                vm.pedido.motivo = 'Cancelacion de pedido';
                vm.pedido.nombre_cuenta = 'c/f'
                vm.pedido.transacciones.push({
                    'id': null,
                    'tipo_transaccion': 3,
                    'usuario': 1
                });
                vm.pedido.mesa = vm.pedido.mesa.id;
                vm.pedido.formas_pago = vm.pagos;
                _(vm.pedido.detalle).forEach(function(value) {
                    delete value.movimiento
                    if (value.persona != null) {
                        value.persona = value.persona.id;
                    }
                });
                // console.log(vm.pedido.detalle);
                // Se coloca con el vm.usuario.id para que en usuario_id en la tabla lo guarde de esta forma y sirva de busqueda
                _(vm.pedido.transacciones).forEach(function(value) {
                    delete value.movimiento
                    value.usuario = vm.usuario.id;
                });

                // Ciclo for que vacia los productos para que el serializador en el BackEnd sea VALIDO
                for (var i = 0; i < vm.pedido.detalle.length; i ++){
                    vm.pedido.detalle[i].producto.productos = [];
                    vm.pedido.detalle[i].producto_presentacion.producto.productos = [];
                }
                // Se reformatea el motivo den la forma de pago para que los que NO sean cortesias vayan Sin motivo
                for (var j = 0; j < vm.pedido.formas_pago.length; j ++){
                    if ( vm.pedido.formas_pago[j].tipo != 4 ) {
                        vm.pedido.formas_pago[j].motivo = "Sin motivo"
                    }
                }
                MovimientoService.update({
                        id: vm.pedido.id
                    }, vm.pedido,
                    function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Orden Pagada..', {
                                status: 'success'
                            }
                        );
                        MovimientoService.imprimir({id: vm.pedido.id}, function (data) {
                            
                        },function (error) {
                            Notify.alert(
                            '<em class="fa fa-check"></em> Las fichas no se han podido imprimir.', {
                                status: 'error'
                            }
                        );
                        });
                        $uibModalInstance.close(true);
                    },
                    function(error) {
                        if(error.data.detalle != null){
                            vm.errMsg = error.data.detalle;
                            // $uibModalInstance.close(true);
                        }else{
                            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
                        }
                    });
            }

            vm.remove = function(item) {
                vm.total = vm.total + item.monto;
                _.remove(vm.pagos, function(n) {
                    return n === item;
                });
            }

            vm.cancel = function() {
                $uibModalInstance.close();
                console.log(vm.pedido);
                console.log(vm.caja);
            };
        }
    }
})();
