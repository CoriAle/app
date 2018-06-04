(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('EmpleadosController', EmpleadosController);

    EmpleadosController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', '$rootScope',
        'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService'];

    function EmpleadosController($location, $log, $uibModal, $stateParams, Notify, $rootScope, PersonaService, 
                                 PagoService, $resource, SweetAlert, DepositoRetiroService) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            vm.pago = {};
            vm.pago.id = 0;
            vm.hoursfin = vm.hoursini = 3;
            vm.minutesfin = vm.minutesini = 0;
            vm.meridiano = vm.meridianos = "PM";
            vm.nombre = "";

            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function() {
                vm.dt = null;
            };
            vm.setdatetimeinscope = function () {
                $rootScope.iniDate = vm.iniDate;
                $rootScope.finDate = vm.finDate;
                $rootScope.hoursfin = vm.hoursfin;
                $rootScope.hoursini = vm.hoursini;
                $rootScope.minutesfin = vm.minutesfin;
                $rootScope.minutesini = vm.minutesini;
                $rootScope.meridiano = vm.meridiano;
                $rootScope.meridianos = vm.meridianos;
            };
            vm.initFechas = function() {
                var f = new Date();
                if ($rootScope.iniDate == null) {
                    vm.iniDate = new Date(f.getFullYear(), f.getMonth(), 1);
                    vm.finDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    vm.hoy = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    vm.setdatetimeinscope();
                }else{
                    vm.iniDate = $rootScope.iniDate;
                    vm.finDate = $rootScope.finDate;
                    vm.hoursfin = $rootScope.hoursfin;
                    vm.hoursini = $rootScope.hoursini;
                    vm.minutesfin = $rootScope.minutesfin;
                    vm.minutesini = $rootScope.minutesini;
                    vm.meridiano = $rootScope.meridiano;
                    vm.meridianos = $rootScope.meridianos;
                }
                var dif = Math.abs(vm.finDate.getTime() - vm.iniDate.getTime());
                vm.daysWorked = Math.ceil(dif / (1000 * 3600 * 24));
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

            //Detalle Pago Empleado
            vm.detallePagoempleado = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'md',
                    templateUrl: 'app/views/pago/chica.html',
                    controller: 'ProductoEditarController'
                });
            };

            // Agrega Pago
            vm.openPagos = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: 'accionesPago.html',
                    controller: 'RetiroController as accion',
                });
            };

            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };

            // Paginacion para el backend expresado con saltos y limites
            vm.pagination = {
                skip: 0,
                sort: 'id',
                where: {
                    "activo": true
                },
                limit: 10
            };

            /**
             * Carga todos los tipos de personas desde el backend
             */
            vm.load = function() {
                vm.lista = [];
                //Comprobamos si query no esta vacio
                if (vm.query.length > 0) {
                    DepositoRetiroService.filtro({
                        query: vm.query,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        vm.pagingInfo.totalItems = data.length;
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'warning'
                            }
                        );
                    });
                } else {
                    vm.filtro_pagos();
                }

            };

            // vm.load(); //Cargamos la lista

            /**
             * Determina la ordenacion a aplicar en la lista en base al campo indicado
             * @param sortBy: campo a ordenar
             */
            vm.sort = function(sortBy) {
                vm.pagingInfo.sortBy = sortBy;
                vm.pagination.sort = sortBy + ' ASC';

                if (sortBy === vm.pagingInfo.sortBy) {
                    vm.pagingInfo.reverse = !vm.pagingInfo.reverse;

                    if (vm.pagingInfo.reverse)
                        vm.pagination.sort = sortBy + ' DESC';
                } else
                    vm.pagingInfo.reverse = false;

                vm.pagination.skip = 0;
                vm.load();
            };

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
                vm.load();
            };

            // Opciones de radio button
            vm.tipo = 1;
            vm.selectTipo = function(tipo) {
                if (tipo==1){
                    vm.tipo = 1
                } else if (tipo==2){
                    vm.tipo = 2
                } else if (tipo==3){
                    vm.tipo = 3
                }
                // console.log(vm.tipo);
            };

            // se inicializan las variables a trabajar de los totales
            vm.total_adelantos = 0;
            vm.total_bailes = 0;
            vm.total_gastos = 0;
            vm.total_servicios = 0;
            vm.total_ventas = 0;
            vm.total_ventasp = 0;
            vm.super_total = 0;
            vm.total_empleados = 0;
            vm.total_chicas = 0;
            vm.filtro_pagos = function() {
                vm.setdatetimeinscope();
                var dif = Math.abs(vm.finDate.getTime() - vm.iniDate.getTime());
                // vm.daysWorked = Math.ceil(dif / (1000 * 3600 * 24));
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                vm.probarAMPM();
                PersonaService.lista_empleados({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    tipo: vm.tipo,
                    ant: vm.pagination.skip,
                    sig: vm.pagination.skip + 10,
                    nombre: vm.nombre
                }, function(data) {
                    // vm.lista = data;
                    vm.pagingInfo.totalItems = data.filas;
                    vm.items = [];
                    vm.super_total = data.super_total;
                    vm.total_empleados = data.total_empleados;
                    vm.total_chicas = data.total_chicas;
                    // Carga codigos de barra, fechas, id, nombre y sueldo de cada persona dentro de datosad todos los datos vienen en el mismo orden
                    for (var i = 0; i < data.datosad.length; i++){
                        vm.items.push(data.datosad[i][1])
                    }
                    // Calcula el total de adelantos para todas las personas dentro de datosad  y compara cada id para que coincida la candidad
                    for (var a = 0; a < data.datosad.length; a++){
                        if (data.datosad[a][1].id==vm.items[a].id){
                            if (data.datosad[a][0].suma == null){
                                data.datosad[a][0].suma = 0
                            }
                            vm.total_adelantos = vm.total_adelantos + data.datosad[a][0].suma;
                            vm.items[a].total_adelantos=vm.total_adelantos;
                            vm.total_adelantos = 0;
                        }
                    }
                    // Calcula el total de bailes para todas las personas dentro de datosba y compara cada id para que coincida la candidad
                    for (var b = 0; b < data.datosba.length; b++){
                        if (data.datosba[b][1]==vm.items[b].id){
                            var conteo = 0;
                            for (var cont = 0; cont < data.datosve[b][0].length; cont++){
                                conteo = conteo + data.datosve[b][0][cont].conteo;
                            }
                            for(var c = 0; c < data.datosba[b][0].length; c++){
                                if (data.datosba[b][0][c].baile__nombre_baile == "Normal"){
                                    //parseFloat(vm.pago.toFixed(2)); console.log(data.datosve[b][0][c].conteo);
                                    if (conteo < 11){data.datosba[b][0][c].precio = parseFloat(50/3).toFixed(2)}
                                    else if (conteo < 25){data.datosba[b][0][c].precio = parseFloat(100/3).toFixed(2)}
                                    else if (conteo < 31){data.datosba[b][0][c].precio = parseFloat(125/3).toFixed(2)}
                                    else if (conteo < 40){data.datosba[b][0][c].precio = parseFloat(150/3).toFixed(2)}
                                    else {data.datosba[b][0][c].precio = parseFloat(200/3).toFixed(2)}
                                }
                                vm.total_bailes = vm.total_bailes + (data.datosba[b][0][c].precio * data.datosba[b][0][c].cantidad);
                            }

                            vm.items[b].total_bailes=vm.total_bailes;
                            vm.total_bailes = 0;
                        }
                    }
                    // Calcula el total de gastos para todas las personas dentro de datosga y compara cada id para que coincida la candidad
                    for (var a = 0; a < data.datosga.length; a++){
                        if (data.datosga[a][1]==vm.items[a].id){
                            if (data.datosga[a][0].suma == null){
                                data.datosga[a][0].suma = 0
                            }
                            vm.total_gastos = vm.total_gastos + data.datosga[a][0].suma;
                            vm.items[a].total_gastos=vm.total_gastos;
                            vm.total_gastos = 0;
                        }
                    }
                    // Calcula el total de servicios para todas las personas dentro de datosse y compara cada id para que coincida la candidad
                    for (var b = 0; b < data.datosse.length; b++){
                        if (data.datosse[b][1]==vm.items[b].id){
                            for(var c = 0; c < data.datosse[b][0].length; c++){
                                vm.total_servicios = vm.total_servicios + (data.datosse[b][0][c].conteo * data.datosse[b][0][c].precio_ficha);
                            }

                            vm.items[b].total_servicios=vm.total_servicios;
                            vm.total_servicios = 0;
                        }
                    }
                    // Calcula el total de ventas para todas las chicas dentro de datosve y compara cada id para que coincida la candidad
                    for (var b = 0; b < data.datosve.length; b++){
                        if (data.datosve[b][1]==vm.items[b].id){
                            for(var c = 0; c < data.datosve[b][0].length; c++){

                                vm.total_ventas = vm.total_ventas + (data.datosve[b][0][c].conteo * data.datosve[b][0][c].precio_ficha);
                            }

                            vm.items[b].total_ventas=vm.total_ventas;
                            vm.total_ventas = 0;
                        }
                    }
                    // Calcula el total de ventas para todas los empleados de datosvp y compara cada id para que coincida la candidad
                    for (var b = 0; b < data.datosvp.length; b++){
                        if (data.datosvp[b][1]==vm.items[b].id){
                            for(var c = 0; c < data.datosvp[b][0].length; c++){
                                vm.total_ventasp = vm.total_ventasp + (data.datosvp[b][0][c].comision);
                            }

                            vm.items[b].total_ventasp=vm.total_ventasp;
                            vm.total_ventasp = 0;
                        }
                    }

                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };
            vm.probarAMPM = function () {
                vm.hoursi = parseInt(vm.hoursini);
                vm.hoursf = parseInt(vm.hoursfin);
                if (vm.meridiano == "PM"){
                    if (vm.hoursf != 12){
                    vm.hoursf = vm.hoursf + 12;}
                }
                if (vm.meridianos == "PM"){
                    if (vm.hoursi != 12){
                    vm.hoursi = vm.hoursi + 12;}
                    
                }
            };
            vm.filtro_pagos();
            /*Parte para el inicio del filtro de fechas*/
            vm.incrementHours = function () {
                if (vm.hoursini == 11){
                    vm.hoursini++;
                    vm.toggleMeridian();
                }else if(vm.hoursini == 12){
                    vm.hoursini = 1;
                } else {
                    vm.hoursini++;
                }
            };
            vm.incrementMinutes = function () {
                if (vm.minutesini + 1 == 60){
                    vm.minutesini = 0;
                    vm.incrementHours()
                } else {
                    vm.minutesini++;
                }
            };
            vm.decrementHours = function () {
                if (vm.hoursini == 12){
                    vm.hoursini--;
                    vm.toggleMeridian();
                }else if(vm.hoursini == 1){
                    vm.hoursini = 12;
                } else {
                    vm.hoursini--;
                }
            };
            vm.decrementMinutes = function () {
                if (vm.minutesini - 1 == -1){
                    vm.minutesini = 59;
                    vm.decrementHours()
                } else {
                    vm.minutesini--;
                }
            };
            vm.toggleMeridian = function () {
                if (vm.meridianos == "AM"){ vm.meridianos = "PM" }else{ vm.meridianos = "AM" }
            };
            /*Parte para el fin de inicio de fechas*/
            vm.incrementHoursF = function () {
                if (vm.hoursfin == 11){
                    vm.hoursfin++;
                    vm.toggleMeridianF();
                }else if(vm.hoursfin == 12){
                    vm.hoursfin = 1;
                } else {
                    vm.hoursfin++;
                }
            };
            vm.incrementMinutesF = function () {
                if (vm.minutesfin + 1 == 60){
                    vm.minutesfin = 0;
                    vm.incrementHoursF()
                } else {
                    vm.minutesfin++;
                }
            };
            vm.decrementHoursF = function () {
                if (vm.hoursfin == 12){
                    vm.hoursfin--;
                    vm.toggleMeridianF();
                }else if(vm.hoursfin == 1){
                    vm.hoursfin = 12;
                } else {
                    vm.hoursfin--;
                }
            };
            vm.decrementMinutesF = function () {
                if (vm.minutesfin - 1 == -1){
                    vm.minutesfin = 59;
                    vm.decrementHoursF()
                } else {
                    vm.minutesfin--;
                }
            };
            vm.toggleMeridianF = function () {
                if (vm.meridiano == "AM"){ vm.meridiano = "PM" }else{ vm.meridiano = "AM" }
            }
        }
    }
})();
