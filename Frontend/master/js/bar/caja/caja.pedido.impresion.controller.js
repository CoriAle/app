(function() {
    'use strict';
    angular
        .module('app.caja')
        .controller('PedidoImpresionController', PedidoImpresionController);

    PedidoImpresionController.$inject = ['$window', 'item', '$uibModalInstance', 'PersonaService', 'Notify', 'md5', 'MovimientoService', '$rootScope'];

    function PedidoImpresionController($window, item, $uibModalInstance, PersonaService, Notify, md5, MovimientoService, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            vm.comisiones = 0;
            // Arrays
            vm.chicas_servicios = [];
            vm.productos = [];
            vm.chicas = [];
            // Banderas de Arrays
            vm.bcs = false;
            vm.bp = false;
            vm.bc = false;
            // Usuario activo
            vm.usuario = {};
            vm.usuario.ide = parseInt($window.sessionStorage.getItem('userid'));
            vm.usuario.nombre = $window.sessionStorage.getItem('username');
            // Fecha actual
            vm.hoy = new Date();
            vm.hoy = vm.hoy.getDate() + "/" + (vm.hoy.getMonth() +1) + "/" + vm.hoy.getFullYear() + " " + vm.hoy.getHours() + ":" + vm.hoy.getMinutes() + ":" + vm.hoy.getSeconds();


            vm.ordenFuncion = function(){
                MovimientoService.show({
                    id: $rootScope.id
                }, function(data){
                    vm.orden = data;
                    console.log(vm.orden);
                    // Separacion de productos y servicios para mostrar en modal order.html
                    for (var i = 0; i < vm.orden.detalle.length; i++){
                        // Comisiones del mesero productos normales
                        vm.comisiones = vm.comisiones + ((vm.orden.detalle[i].producto_presentacion.comision_mesero == null) ? 0 : parseFloat(vm.orden.detalle[i].producto_presentacion.comision_mesero));
                        if (vm.orden.detalle[i].persona != null) {
                            // SI TIENE PERSONA ES UNA CHICA
                            if (vm.orden.detalle[i].producto.nombre == 'BOTELLAS') {
                                // SERVICIOS DE CHICAS
                                // precio_venta y porcentaje_chica
                                vm.pv = 0;
                                vm.po = 0;
                                vm.pv = (vm.orden.detalle[i].precio_venta == null) ? 0 : parseFloat(vm.orden.detalle[i].precio_venta);
                                vm.po = (vm.orden.detalle[i].persona.porcentaje_chica == null) ? 0 : parseFloat(vm.orden.detalle[i].persona.porcentaje_chica);
                                vm.chicas_servicios.push({
                                    precio_venta: (vm.orden.detalle[i].precio_venta == null) ? 0 : parseFloat(vm.orden.detalle[i].precio_venta),
                                    persona: vm.orden.detalle[i].persona,
                                    comision_mesero: (vm.orden.detalle[i].producto_presentacion.comision_mesero == null) ? 0 : parseFloat(vm.orden.detalle[i].producto_presentacion.comision_mesero),
                                    precio_fichas: vm.pv * vm.po,
                                    presentacion_nombre: vm.orden.detalle[i].producto_presentacion.presentacion_nombre
                                });
                            } else if (vm.orden.detalle[i].producto.nombre != 'BOTELLAS') {
                                // PRODUCTOS CON CHICAS
                                vm.productos.push({
                                    precio_venta: (vm.orden.detalle[i].precio_venta == null) ? 0 : parseFloat(vm.orden.detalle[i].precio_venta),
                                    persona: vm.orden.detalle[i].persona,
                                    comision_mesero: (vm.orden.detalle[i].producto_presentacion.comision_mesero == null) ? 0 : parseFloat(vm.orden.detalle[i].producto_presentacion.comision_mesero),
                                    precio_fichas: (vm.orden.detalle[i].producto_presentacion.precio_fichas == null) ? 0 : parseFloat(vm.orden.detalle[i].producto_presentacion.precio_fichas),
                                    producto_nombre: vm.orden.detalle[i].producto.nombre
                                });
                            }

                        } else {
                            // PRODUCTOS SIN CHICAS
                            vm.productos.push({
                                precio_venta: (vm.orden.detalle[i].precio_venta == null) ? 0 : parseFloat(vm.orden.detalle[i].precio_venta),
                                comision_mesero: (vm.orden.detalle[i].producto_presentacion.comision_mesero == null) ? 0 : parseFloat(vm.orden.detalle[i].producto_presentacion.comision_mesero),
                                producto_nombre: vm.orden.detalle[i].producto.nombre
                            });
                        }

                    }
                    // Separacion de chicas y crea un arreglo listo para agregar detalles en c/u
                    for (var m = 0; m < vm.orden.detalle.length; m ++) {
                        if (vm.orden.detalle[m].persona != null) {
                            if (vm.chicas.length > 0) {
                                var temp_chica = _.find(vm.chicas, { 'id_chica': vm.orden.detalle[m].persona.id });
                                if(temp_chica !== undefined)
                                    console.log("REPETIDA");
                                else {
                                    vm.chicas.push({
                                        id_chica: vm.orden.detalle[m].persona.id,
                                        nombre: vm.orden.detalle[m].persona.nombre,
                                        fichas: 0,
                                        detalles: []
                                    });
                                }

                            } else {
                                vm.chicas.push({
                                    id_chica: vm.orden.detalle[m].persona.id,
                                    nombre: vm.orden.detalle[m].persona.nombre,
                                    fichas: 0,
                                    detalles: []
                                });
                            }
                        }
                    }

                    // Recorre cada posicion del arreglo creado anteriomente para cada una de las chicas e inserta detalles
                    for ( var x = 0; x < vm.chicas.length; x++ ) {
                        for (var y = 0; y < vm.orden.detalle.length; y++) {
                            // Verifica si el detalle tiene una persona para ver si es producto o servicio
                            if (vm.orden.detalle[y].persona != null) {
                                // Si el id_chica del arreglo creado para c/u es igual a algun detalle existente dentro de la orden
                                if ( vm.chicas[x].id_chica == vm.orden.detalle[y].persona.id ) {
                                    if (vm.orden.detalle[y].producto.nombre == 'BOTELLAS') {
                                        // SERVICIOS DE CHICAS
                                        // precio_venta y porcentaje_chica
                                        vm.pv = 0;
                                        vm.po = 0;
                                        vm.pv = (vm.orden.detalle[y].precio_ficha == null) ? 0 : parseFloat(vm.orden.detalle[y].precio_ficha);
                                        vm.po = (vm.orden.detalle[y].persona.porcentaje_chica == null) ? 0 : parseFloat(vm.orden.detalle[y].persona.porcentaje_chica);
                                        // vm.chicas[x].fichas = vm.chicas[x].fichas + (vm.pv * vm.po);
                                        vm.chicas[x].fichas = vm.chicas[x].fichas + (vm.pv);
                                        vm.chicas[x].detalles.push({
                                            precio_venta: (vm.orden.detalle[y].precio_venta == null) ? 0 : parseFloat(vm.orden.detalle[y].precio_venta),
                                            persona: vm.orden.detalle[y].persona,
                                            comision_mesero: (vm.orden.detalle[y].producto_presentacion.comision_mesero == null) ? 0 : parseFloat(vm.orden.detalle[y].producto_presentacion.comision_mesero),
                                            precio_fichas: (vm.orden.detalle[y].precio_ficha == null) ? 0 : parseFloat(vm.orden.detalle[y].precio_ficha),
                                            // precio_fichas: vm.pv * vm.po,
                                            nombre: vm.orden.detalle[y].producto_presentacion.presentacion_nombre,
                                            cantidad_fichas: 1
                                        });
                                    } else if (vm.orden.detalle[y].producto.nombre != 'BOTELLAS') {
                                        // PRODUCTOS CON CHICAS
                                        vm.chicas[x].fichas = vm.chicas[x].fichas + (((vm.orden.detalle[y].producto_presentacion.precio_fichas == null) ? 0 : parseFloat(vm.orden.detalle[y].producto_presentacion.precio_fichas)) * ((vm.orden.detalle[y].producto_presentacion.cantidad_fichas == null) ? 0 : parseFloat(vm.orden.detalle[y].producto_presentacion.cantidad_fichas)));
                                        vm.chicas[x].detalles.push({
                                            precio_venta: (vm.orden.detalle[y].precio_venta == null) ? 0 : parseFloat(vm.orden.detalle[y].precio_venta),
                                            persona: vm.orden.detalle[y].persona,
                                            comision_mesero: (vm.orden.detalle[y].producto_presentacion.comision_mesero == null) ? 0 : parseFloat(vm.orden.detalle[y].producto_presentacion.comision_mesero),
                                            precio_fichas: (vm.orden.detalle[y].producto_presentacion.precio_fichas == null) ? 0 : parseFloat(vm.orden.detalle[y].producto_presentacion.precio_fichas),
                                            nombre: vm.orden.detalle[y].producto.nombre,
                                            cantidad_fichas: vm.orden.detalle[y].producto_presentacion.cantidad_fichas
                                        });
                                    }
                                }
                            }
                        }
                    }

                    // Arreglos
                    // console.log("CHICAS SERVICIOS", vm.chicas_servicios);
                    // console.log("PRODUCTO NORMAL", vm.productos);
                    // console.log("ARREGLO FICHAS",vm.chicas);

                    // Banderas de productos y servicios para mostrar en impresion en modales
                    if (vm.chicas_servicios.length > 0) {
                        vm.bcs = true
                    }
                    if (vm.productos.length > 0) {
                        vm.bp = true
                    }
                    if (vm.chicas.length > 0) {
                        vm.bc = true
                    }

                }, function(error){
                    console.log(error);
                });
            }
            vm.ordenFuncion();

            vm.ok = function() {
                $uibModalInstance.close();
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();
