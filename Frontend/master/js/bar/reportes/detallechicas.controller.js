(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('DetalleChicasController', DetalleChicasController);

    DetalleChicasController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PagoService',
        '$resource', 'SweetAlert', 'DepositoRetiroService', 'PersonaService', '$rootScope'];

    function DetalleChicasController($location, $log, $uibModal, $stateParams, Notify, PagoService,
        $resource, SweetAlert, DepositoRetiroService, PersonaService, $rootScope) {
        var vm = this;
        // Trae el id del DepositoRetiro
        vm.id = $stateParams.id;
        activate();

        vm.model = {};
        vm.model.total_comisiones = 0;
        vm.model.total_servicios = 0;
        vm.model.total_adelantos = 0;
        vm.model.total_gastos = 0;
        vm.model.total_bailes = 0;

        function activate() {
            vm.query = '';
            vm.pago = {};
            vm.pago.id = 0;

            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function() {
                vm.dt = null;
            };

            vm.initFechas = function() {
                // console.log(vm.iniDate);
                var f = new Date();
                // vm.iniDate = new Date(f.getFullYear(), f.getMonth(), 1);
                vm.hoy = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                vm.finDate = new Date(f.getFullYear(), f.getMonth() + 1, 0);
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
            vm.pagingInfoCV = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0,
            };
            vm.pagingInfoCS = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0,
            };
            vm.pagingInfoAS = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0,
            };
            vm.pagingInfoGP = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0,
            };
            vm.pagingInfoBA = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0,
            };

            // Paginacion para el backend expresado con saltos y limites
            vm.paginationCV = {
                skip: 0,
                sortCV: 'id',
                where: {
                    "activo": true
                },
                limit: 5
            };
            vm.paginationCS = {
                skip: 0,
                sortCS: 'id',
                where: {
                    "activo": true
                },
                limit: 5
            };
            vm.paginationAS = {
                skip: 0,
                sortAS: 'id',
                where: {
                    "activo": true
                },
                limit: 5
            };
            vm.paginationGP = {
                skip: 0,
                sortGP: 'id',
                where: {
                    "activo": true
                },
                limit: 5
            };
            vm.paginationBA = {
                skip: 0,
                sortBA: 'id',
                where: {
                    "activo": true
                },
                limit: 5
            };

            /**
             * Convierte el numero de página generado por uibootstrap a salto y limite utilizado
             * por el backend
             * @para page: numero de pagina a convertir
             */
            // selectPage Comision Ventas
            vm.selectPageCV = function(page) {
                vm.pagingInfoCV.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.paginationCV.skip = 0;
                if (vm.pagingInfoCV.page > 1)
                    vm.paginationCV.skip = (vm.pagingInfoCV.page - 1) * vm.pagingInfoCV.itemsPerPage;
                vm.comisionventas();
            };
            // selectPage Comision Servicios
            vm.selectPageCS = function(page) {
                vm.pagingInfoCS.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.paginationCS.skip = 0;
                if (vm.pagingInfoCS.page > 1)
                    vm.paginationCS.skip = (vm.pagingInfoCS.page - 1) * vm.pagingInfoCS.itemsPerPage;
                vm.comisionservicios();
            };
            // selectPage Adelanto Sueldo
            vm.selectPageAS = function(page) {
                vm.pagingInfoAS.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.paginationAS.skip = 0;
                if (vm.pagingInfoAS.page > 1)
                    vm.paginationAS.skip = (vm.pagingInfoAS.page - 1) * vm.pagingInfoAS.itemsPerPage;
                vm.adelantosueldos();
            };
            // selectPage Gastos Personal
            vm.selectPageGP = function(page) {
                vm.pagingInfoGP.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.paginationGP.skip = 0;
                if (vm.pagingInfoGP.page > 1)
                    vm.paginationGP.skip = (vm.pagingInfoGP.page - 1) * vm.pagingInfoGP.itemsPerPage;
                vm.gastopersonal();
            };
            // selectPage Bailes
            vm.selectPageBA = function(page) {
                vm.pagingInfoBA.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.paginationBA.skip = 0;
                if (vm.pagingInfoBA.page > 1)
                    vm.paginationBA.skip = (vm.pagingInfoBA.page - 1) * vm.pagingInfoBA.itemsPerPage;
                vm.comisionbailes();
            };

            // GRID Comision Ventas
            vm.comisiones = [];
            vm.comi = [];
            vm.comisionventas = function() {
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                PersonaService.empleado_comisionventas({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    ant: vm.paginationCV.skip,
                    sig: vm.paginationCV.skip + 5
                }, function(data) {
                    vm.comisiones = data;
                    vm.comi = data.datos;
                    vm.model.total_comisiones = 0;
                    for (var i = 0; i < vm.comisiones.total.length; i++){
                        vm.model.total_comisiones = vm.model.total_comisiones + (vm.comisiones.total[i].precio_ficha * vm.comisiones.total[i].conteo);
                    }
                    vm.pagingInfoCV.totalItems = vm.comisiones.filas;

                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            // GRID Comision Servicios
            vm.servicios = [];
            vm.servi = [];
            vm.comisionservicios = function() {
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                PersonaService.empleado_comisionservicios({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    ant: vm.paginationCS.skip,
                    sig: vm.paginationCS.skip + 5
                }, function(data) {
                    vm.servicios = data;
                    vm.servi = data.datos;
                    vm.model.total_servicios = 0;
                    for (var i = 0; i < vm.servicios.total.length; i++){
                        vm.model.total_servicios = vm.model.total_servicios + (vm.servicios.total[i].precio_ficha * vm.servicios.total[i].conteo);
                    }
                    vm.pagingInfoCS.totalItems = vm.servicios.filas;

                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            // GRID Adelanto de Sueldo
            vm.adelantos = [];
            vm.adelantosueldos = function() {
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                PersonaService.empleado_adelantosueldos({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    page: vm.pagingInfoAS.page
                }, function(data) {
                    vm.adelantos = data.datos.results;
                    vm.model.total_adelantos = 0;
                    data.total.suma = (data.total.suma == null) ? 0 : parseFloat(data.total.suma);
                    vm.model.total_adelantos = data.total.suma;
                    vm.pagingInfoAS.totalItems = data.datos.count;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            // GRID Gastos Personal
            vm.gastos = [];
            vm.gastopersonal = function() {
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                PersonaService.empleado_gastospersonal({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    page: vm.pagingInfoGP.page
                }, function(data) {
                    vm.gastos = data.datos.results;
                    vm.model.total_gastos = 0;
                    data.total.suma = (data.total.suma == null) ? 0 : parseFloat(data.total.suma);
                    vm.model.total_gastos = data.total.suma;
                    vm.pagingInfoGP.totalItems = data.datos.count;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            // GRID Comision Servicios
            vm.bailes = [];
            vm.bai = [];
            vm.comisionbailes = function() {
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                PersonaService.empleado_bailes({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    ant: vm.paginationBA.skip,
                    sig: vm.paginationBA.skip + 5
                }, function(data) {
                    // console.log("BAILES",data);
                    vm.bailes = data;
                    vm.bai = data.datos_sin_cambio;
                    vm.model.total_bailes = 0;
                    for (var i = 0; i < vm.bailes.total_sin_cambio.length; i++){
                        vm.model.total_bailes = vm.model.total_bailes + (vm.bailes.total_sin_cambio[i].cantidad * vm.bailes.total_sin_cambio[i].precio);
                        // vm.model.total_bailes = (dvm.model.total_bailes == null) ? 0 : parseFloat(vm.model.total_bailes).toFixed(2);
                    }
                    // vm.model.total_bailes = parseFloat(vm.model.total_bailes).toFixed(2);
                    vm.pagingInfoBA.totalItems = vm.bailes.filas;

                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };
            vm.persona2 = function(){
                PersonaService.show({
                    id: $stateParams.id
                }, function(data) {
                    vm.model = data;
                    data.sueldo_cuenta = (data.sueldo_cuenta == null) ? 0 : parseFloat(data.sueldo_cuenta);
                    var f = new Date(data.fecha_pago);
                    var iniDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    // Funciones de los filtros para cada Grid
                    vm.probarAMPM();
                    vm.comisionventas();
                    vm.comisionservicios();
                    vm.adelantosueldos();
                    vm.gastopersonal();
                    vm.comisionbailes();
                    // console.log(vm.model);
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
            /*Funcion que trae la fecha y hora seteada de la lista de empleados*/
            vm.setdatetimeinscope = function () {
                vm.iniDate = $rootScope.iniDate;
                vm.finDate = $rootScope.finDate;
                vm.hoursfin = $rootScope.hoursfin;
                vm.hoursini = $rootScope.hoursini;
                vm.minutesfin = $rootScope.minutesfin;
                vm.minutesini = $rootScope.minutesini;
                vm.meridiano = $rootScope.meridiano;
                vm.meridianos = $rootScope.meridianos;
            };
            vm.persona = function(){
                PersonaService.show({
                    id: $stateParams.id
                }, function(data) {
                    vm.model = data;
                    data.sueldo_cuenta = (data.sueldo_cuenta == null) ? 0 : parseFloat(data.sueldo_cuenta);
                    var f = new Date(data.fecha_pago);
                    vm.setdatetimeinscope();
                    vm.probarAMPM();
                    // Funciones de los filtros para cada Grid
                    vm.comisionventas();
                    vm.comisionservicios();
                    vm.adelantosueldos();
                    vm.gastopersonal();
                    vm.comisionbailes();
                    // console.log(vm.model);
                });


            };
            vm.persona();
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
