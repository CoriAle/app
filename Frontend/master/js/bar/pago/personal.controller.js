(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PersonalController', PersonalController);

    PersonalController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PagoService',
        '$resource', 'SweetAlert', 'DepositoRetiroService', 'PersonaService','$rootScope'];

    function PersonalController($location, $log, $uibModal, $stateParams, Notify, PagoService,
        $resource, SweetAlert, DepositoRetiroService, PersonaService, $rootScope) {
        var vm = this;
        // Trae el id del DepositoRetiro
        vm.id = $stateParams.id;
        activate();

        vm.model = {};
        vm.model.total_comisiones = 0;
        vm.model.total_adelantos = 0;
        vm.model.total_gastos = 0;

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
                totalItems: 0
            };
            vm.pagingInfoAS = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            vm.pagingInfoGP = {
                page: 1,
                itemsPerPage: 5,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
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

            vm.cargaPersona = function() {
                PersonaService.show({
                    id: $stateParams.id
                }, function(data) {
                    vm.model = data;
                    vm.diasFaltantes(0);
                })
            };
            vm.cargaPersona();

            vm.diasFaltantes = function(dias) {
                if ( dias == null || dias < 0 ) {
                    dias = 0
                }

                if (vm.model.sueldo_cuenta == 0) {
                    vm.pago = 0
                } else {
                    var i = new Date(vm.model.fecha_pago);
                    var f = new Date(vm.finDate);
                    vm.iniDate = new Date(i.getFullYear(), i.getMonth(), i.getDate());
                    vm.finDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    var fecha1 = moment(vm.iniDate);
                    var fecha2 = moment(vm.finDate);

                    var diasTrabajados = moment(fecha2).diff(moment(fecha1), 'day')
                    var diasEfectivos = diasTrabajados - dias

                    if (vm.model.sueldo_cuenta > 0) {
                        var ppd = parseFloat(parseFloat(vm.model.sueldo_cuenta / 30).toFixed(2))
                    }
                    var nuevoSueldo = 0
                    if (diasEfectivos >= 0) {
                        nuevoSueldo = parseFloat(parseFloat(ppd * diasEfectivos).toFixed(2))
                    } else {
                        nuevoSueldo = 0
                    }
                    vm.pago = nuevoSueldo
                }


            }


            // GRID Comision Ventas
            vm.comisiones = [];
            vm.comi = [];
            vm.comisionventas = function() {
                var i = new Date(vm.model.fecha_pago);
                var f = new Date(vm.finDate);
                PersonaService.personal_comisionventas({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    ant: vm.paginationCV.skip,
                    sig: vm.paginationCV.skip + 5
                }, function(data) {
                    vm.comisiones = data;
                    vm.comi = data.datos;
                    $rootScope.detalles_comisiones = data.total;
                    vm.model.total_comisiones = 0;
                    for (var i = 0; i < vm.comisiones.total.length; i++){
                        vm.model.total_comisiones = vm.model.total_comisiones + (vm.comisiones.total[i].comision);
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

            // GRID Adelanto de Sueldo
            vm.adelantos = [];
            vm.adelantosueldos = function() {
                var i = new Date(vm.model.fecha_pago);
                var f = new Date(vm.finDate);
                PersonaService.empleado_adelantosueldos({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    page: vm.pagingInfoAS.page
                }, function(data) {
                    vm.adelantos = data.datos.results;
                    $rootScope.adelantos_sueldos = data.todos.results;
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
                var i = new Date(vm.model.fecha_pago);
                var f = new Date(vm.finDate);
                PersonaService.empleado_gastospersonal({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    page: vm.pagingInfoGP.page
                }, function(data) {
                    vm.gastos = data.datos.results;
                    $rootScope.gastos_personal = data.todos.results;
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
                    vm.adelantosueldos();
                    vm.gastopersonal();
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
                vm.finDate = $rootScope.finDate;
                vm.hoursfin = $rootScope.hoursfin;
                vm.minutesfin = $rootScope.minutesfin;
                vm.meridiano = $rootScope.meridiano;
            };
            vm.persona = function(){
                PersonaService.show({
                    id: $stateParams.id
                }, function(data) {
                    vm.model = data;
                    data.sueldo_cuenta = (data.sueldo_cuenta == null) ? 0 : parseFloat(data.sueldo_cuenta);
                    var f = new Date(data.fecha_pago);
                    var iniDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                    vm.minutesini = f.getMinutes();
                    vm.hoursini = f.getHours();
                    if (vm.hoursini > 11){
                        vm.meridiano = "PM";
                        vm.hoursini = vm.hoursini - 12;
                    }else{
                        vm.meridiano = "AM";
                    }
                    vm.meridianos = vm.meridiano;
                    vm.hoursfin = vm.hoursini;
                    vm.minutesfin = f.getMinutes();
                    vm.setdatetimeinscope();
                    vm.probarAMPM();
                    // Funciones de los filtros para cada Grid
                    vm.comisionventas();
                    vm.adelantosueldos();
                    vm.gastopersonal();
                    // console.log(vm.model);
                });


            };
            vm.persona();
            vm.incrementHours = function () {
                if (vm.hoursfin == 11){
                    vm.hoursfin++;
                    vm.toggleMeridian();
                }else if(vm.hoursfin == 12){
                    vm.hoursfin = 1;
                } else {
                    vm.hoursfin++;
                }
            };
            vm.incrementMinutes = function () {
                if (vm.minutesfin + 1 == 60){
                    vm.minutesfin = 0;
                    vm.incrementHours()
                } else {
                    vm.minutesfin++;
                }
            };
            vm.decrementHours = function () {
                if (vm.hoursfin == 12){
                    vm.hoursfin--;
                    vm.toggleMeridian();
                }else if(vm.hoursfin == 1){
                    vm.hoursfin = 12;
                } else {
                    vm.hoursfin--;
                }
            };
            vm.decrementMinutes = function () {
                if (vm.minutesfin - 1 == -1){
                    vm.minutesfin = 59;
                    vm.decrementHours()
                } else {
                    vm.minutesfin--;
                }
            };
            vm.toggleMeridian = function () {
                if (vm.meridiano == "AM"){ vm.meridiano = "PM" }else{ vm.meridiano = "AM" }
            };
            vm.openPagos = function(dias) {
                var d = dias;
                vm.diasFaltantes(d);
                var f = new Date(vm.finDate);
                var i = new Date(vm.model.fecha_pago);
                $rootScope.model = vm.model;
                $rootScope.pago = vm.pago;
                $rootScope.ini = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00";
                $rootScope.fin = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00";
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: "app/views/pago/realiza_pago_personal.html",
                    controller: 'PagoPersonalController as ctrl'
                });
            }



        }
    }
})();
