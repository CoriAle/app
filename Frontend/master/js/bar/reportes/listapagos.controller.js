(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ListaPagosController', ListaPagosController);

    ListaPagosController.$inject = ['Notify', 'ReporteVentaService', '$rootScope', '$uibModal'];

    function ListaPagosController(Notify, ReporteVentaService, $rootScope, $uibModal) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            vm.pago = {};
            vm.pago.id = 0;
            vm.hoursfin = 23;
            vm.hoursini = 0;
            vm.minutesfin = 59;
            vm.minutesini = 0;
            vm.meridiano = vm.meridianos = "AM";
            vm.nombre = "";

            vm.today = function() {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function() {
                vm.dt = null;
            };
            vm.initFechas = function() {
                var f = new Date();
                vm.iniDate = new Date(f.getFullYear(), f.getMonth(), 1);
                vm.finDate = new Date(f.getFullYear(), f.getMonth(), f.getDate());
                vm.hoy = new Date(f.getFullYear(), f.getMonth(), f.getDate());
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
                vm.filtro_pagos();
            };

            // vm.load(); //Cargamos la lista

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
                vm.trasladaData();
            };
            vm.trasladaData = function () {
                var ant = vm.pagination.skip;
                var sig = vm.pagination.skip + vm.pagingInfo.itemsPerPage;
                if (sig > vm.model.length){sig = vm.model.length}
                vm.items = vm.model.slice(ant,sig);
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
            vm.filtro_pagos = function() {
                var dif = Math.abs(vm.finDate.getTime() - vm.iniDate.getTime());
                // vm.daysWorked = Math.ceil(dif / (1000 * 3600 * 24));
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                vm.probarAMPM();
                ReporteVentaService.payments({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    tipo: vm.tipo,
                    nombre: vm.nombre
                }, function(data) {
                    // vm.lista = data;
                    vm.model = data;
                    vm.pagingInfo.totalItems = vm.model.length;
                    vm.selectPage(1);
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
            };
            vm.imprimir = function (item) {
                $rootScope.item = item;
                console.log(item);
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: "app/views/reportes/resumen_pagos.html",
                    controller: 'ResumenPagoController as ctrl'
                });
            }
        }
    }
})();

