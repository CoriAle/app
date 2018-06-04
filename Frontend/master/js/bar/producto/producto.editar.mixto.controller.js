(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoEditarMixtoController', ProductoEditarMixtoController);

    ProductoEditarMixtoController.$inject = ['$stateParams', '$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService',
        'ProductoService', '$resource', '$state', 'ProductoPresentacionService'];

    function ProductoEditarMixtoController($stateParams, $uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService,
        ProductoService, $resource, $state, ProductoPresentacionService) {
        var vm = this;
        vm.id = $stateParams.id;
        activate();

        function activate() {

            vm.combo = false;
            vm.mixto = false;
            vm.producto = {
                es_combo: false,
                combo_mixto: false,
                productos: []
            };
            vm.producto.productos = [];
            vm.totalcostocombo = 0.00;
            vm.presentacion = {};
            vm.lista_presentaciones = [];
            var prodMod;

            vm.listapresentaciones = {};

            function inicializa_producto() {
                vm.productoVacio = {
                    es_combo: false,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
            }

            inicializa_producto();

            // Filtro de Presentaciones del Producto ya existentes
            vm.filtro_presentaciones = function() {
                ProductoService.presentacion_producto({
                    pro: vm.id
                }, function(data) {
                    vm.listapresentaciones = data;
                    vm.producto.presentacion = vm.listapresentaciones.id;
                    vm.listapresentaciones[0].precio_venta = parseFloat(vm.listapresentaciones[0].precio_venta);
                    vm.listapresentaciones[0].comision_mesero = parseFloat(vm.listapresentaciones[0].comision_mesero);
                    vm.listapresentaciones[0].precio_fichas = parseFloat(vm.listapresentaciones[0].precio_fichas);
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.filtro_presentaciones();

            function inicializa_producto_combo() {
                vm.producto_combo = {
                    cantidad: 0
                }
            }

            inicializa_producto_combo();

            function iniciaProducto() {
                ProductoService.show({
                    id: vm.id
                }, function(data) {
                    data.costo_minimo_producto = (data.costo_minimo_producto == null) ? 0 : parseFloat(data.costo_minimo_producto);
                    data.precio_costo = (data.precio_costo == null) ? 0 : parseFloat(data.precio_costo);
                    data.precio_venta = (data.precio_venta == null) ? 0 : parseFloat(data.precio_venta);
                    data.precio_fichas = (data.precio_fichas == null) ? 0 : parseFloat(data.precio_fichas);
                    data.comision_mesero = (data.comision_mesero == null) ? 0 : parseFloat(data.comision_mesero);
                    vm.producto = data;
                    vm.combo = data.es_combo;
                    vm.mixto = data.combo_mixto;
                    vm.producto.productos = data.productos;
                    for (var i = 0; i < vm.producto.productos.length; i++) {
                        if (vm.producto.productos[i].producto_combo != null) {
                            vm.totalcostocombo = vm.totalcostocombo + (vm.producto.productos[i].producto_combo.precio_costo * vm.producto.productos[i].cantidad)
                        }
                    }
                    vm.esCombo();
                })
            }

            //Funcion para controlar el cambio de la seleccion de como o mixto
            vm.esCombo = function esCombo() {
                if (vm.producto.es_combo) {
                    if (vm.producto.combo_mixto) {
                        vm.combo = false;
                        vm.mixto = true;
                    } else {
                        vm.combo = true;
                        vm.mixto = false;
                    }
                } else {
                    vm.combo = false;
                    vm.mixto = false;
                }
            }

            iniciaProducto();

            vm.validacion = function () {
                if (vm.producto.productos_presentacion.length <= 0){
                    return true;
                }  else {
                    if (vm.formValidate.$invalid){
                        return true;
                    }
                    return false;
                }
            };


            //Eliminamos un producto seleccionado dentro de la lista de productos de combo
            vm.removeProdCombo = function removeProdCombo(data) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara el Tipo de Producto del combo!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        if (!data.producto_combo == null) {
                            vm.totalcostocombo = vm.totalcostocombo - (data.cantidad * data.producto_combo.precio_costo);
                        }
                        _.remove(vm.producto.productos, function(n) {
                            return n == data;
                        });
                        Notify.alert(
                            '<em class="fa fa-check"></em> Tipo de Producto eliminada de la lista', {
                                status: 'success'
                            }
                        );
                    }
                });
            }

            //Guardado de producto/combo
            vm.submit = function submit() {
                vm.producto.existencia = 0;
                if (vm.producto.es_combo) {
                    if (vm.producto.combo_mixto) {
                        for (var i = 0; i < vm.producto.productos.length; i++) {
                            vm.producto.productos[i].tipo_producto_combo = vm.producto.productos[i].tipo_producto_combo.id;
                            vm.producto.productos[i].producto_combo = null;
                        };
                        save();
                    } else {
                        for (var i = 0; i < vm.producto.productos.length; i++) {
                            vm.producto.productos[i].tipo_producto_combo = null;
                            vm.producto.productos[i].producto_combo = vm.producto.productos[i].producto_combo.id;
                        };
                        save();
                    }
                } else {
                    vm.producto.productos = [];
                    save();
                }
            }


            //Eliminamos presentacion seleccionada
            vm.removePresentacion = function removePresentacion(data) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara la presentacion del producto de la lista actual! Para eliminarlo completamente debe "Guardar" los cambios',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        _.remove(vm.listapresentaciones, function(item) {
                            return item == data;
                        });
                        Notify.alert(
                            '<em class="fa fa-check"></em> Tipo de Producto eliminada de la lista', {
                                status: 'success'
                            }
                        );
                    }
                });
            };

            /*
             *Buscamos los tipos de productos
             */
            vm.tipos = function(val) {
                return TipoProductoService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            /*
             *Buscamos las presentaciones
             */
            vm.presentaciones = function(val) {
                return PresentacionService.filtro_no_paginate({
                    query: val,
                    page: 1
                }).$promise.then(function(data) {
                    return data;
                });
            };

            /*
             *Buscamos los productos que no son combos
             */
            vm.query_producto = function(val) {
                return ProductoService.filtro_no_combo({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.openTipo = function() {
              var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'addTipo.html',
                controller: 'TipoProductoAddController as tipos'
              });
            };

            vm.openPresentacion = function() {
              var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'addPresentacion.html',
                controller: 'PresentacionAddController as tipos'
              });
            };

            vm.addTipoCombo = function addTipoCombo() {
                var existe = false;
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    if (vm.producto_combo.tipo_producto_combo.id == vm.producto.productos[i].tipo_producto_combo.id) {
                        existe = true;
                        break;
                    }
                }
                if (existe == false) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Tipo de Producto Agredado a la lista', {
                            status: 'success'
                        }
                    );
                    if (vm.producto_combo.repetir == null)
                        vm.producto_combo.repetir = false
                    vm.producto.productos.push(vm.producto_combo);
                    vm.producto_combo = {};
                    vm.tipoForm.$setPristine();
                } else {
                    vm.producto_combo = {};
                    Notify.alert(
                        '<em class="fa fa-times"></em> Tipo de Producto ya existe dentro de la lista', {
                            status: 'danger'
                        }
                    );
                    vm.tipoForm.$setPristine();
                }
            }

            //Agregamos un nuevo elemento a lista de productos de combo
            vm.addProdCombo = function addProdCombo() {
                var existe = false;
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    if (vm.producto_combo.producto_combo.id == vm.producto.productos[i].producto_combo.id) {
                        existe = true;
                        break;
                    }
                }

                if (existe == false) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto Agredado a la lista', {
                            status: 'success'
                        }
                    );
                    vm.totalcostocombo = vm.totalcostocombo + (vm.producto_combo.producto_combo.precio_costo * vm.producto_combo.cantidad);
                    vm.producto.productos.push(vm.producto_combo);
                    inicializa_producto_combo();
                    vm.comboForm.$setPristine();
                } else {
                    vm.producto_combo = {};
                    Notify.alert(
                        '<em class="fa fa-times"></em> Producto ya existe dentro de la lista', {
                            status: 'danger'
                        }
                    );
                }
            };


            function save() {
                if (vm.producto.productos != 0){
                    vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                    // vm.producto.presentacion = vm.producto.presentacion.id;
                    var result = typeof(vm.listapresentaciones[0].nombre)
                    if ( typeof(vm.listapresentaciones[0].nombre) == "object") {
                        // console.log("object");
                        vm.listapresentaciones[0].presentacion = vm.listapresentaciones[0].nombre
                    } else if ( typeof(vm.listapresentaciones[0].nombre) == "string") {
                        // console.log("string");
                    }
                    vm.producto.presentacion = vm.listapresentaciones;
                    ProductoService.update(vm.producto, function(data) {
                        vm.producto = {
                            es_combo: false,
                            combo_mixto: false,
                            productos: []
                        };
                        vm.formValidate.$setPristine();
                        Notify.alert(
                            '<em class="fa fa-check"></em> Producto actualizado..', {
                                status: 'success'
                            }
                        );
                        $state.go('app.producto.lista');
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data, {
                                status: 'danger'
                            }
                        );
                    });
                }
                else if (vm.producto.productos == 0) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> El producto debe tener al menos un Tipo de Producto', {
                                status: 'warning'
                            }
                        );

                };
            };


        }
    }
})();
