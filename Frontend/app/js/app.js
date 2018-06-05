(function() {
  'use strict';

  angular
    .module('angle', [
      'app.core',
      'app.routes',
      'app.sidebar',
      'app.navsearch',
      'app.preloader',
      'app.loadingbar',
      'app.translate',
      'app.settings',
      'app.dashboard',
      'app.icons',
      'app.flatdoc',
      'app.notify',
      'app.bootstrapui',
      'app.elements',
      'app.panels',
      'app.charts',
      'app.forms',
      'app.locale',
      'app.maps',
      'app.pages',
      'app.tables',
      'app.extras',
      'app.mailbox',
      'app.utils',
      'app.auth',
      'app.personacuenta',
      'app.empresacuenta',
      'app.productopresentacion'
    ]);
})();

(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();
(function() {
    'use strict';

    angular
        .module('app.bootstrapui', []);
})();
(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'tmh.dynamicLocale',
            'ui.utils',
            'ngMessages',
            'barcode',
            'AngularPrint',
            'angular-md5',
            'app.tipoproducto',
            'app.tipopersona',
            'app.presentacion',
            'app.producto',
            'app.persona',
            'app.movimiento',
            'app.usuario',
            'app.login',
            'app.perfilusuario',
            'app.venta',
            'app.pago',
            'app.caja',
            'app.reporteventa',
            'app.configuracion',
            'app.pedidococina',
            'app.baile',
            'app.tipodepositoretiro',
            'app.depositoretiro',
            'app.formapago',
            'app.cuenta',
            'app.detallemovimiento',
            // 'app.personacuenta',
            // 'app.empresacuenta',
            'app.productopresentacion'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.dashboard', []);
})();
(function() {
    'use strict';

    angular
        .module('app.elements', []);
})();
(function() {
    'use strict';

    angular
        .module('app.extras', []);
})();
(function() {
    'use strict';

    angular
        .module('app.flatdoc', []);
})();
(function() {
    'use strict';

    angular
        .module('app.icons', []);
})();
(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.locale', []);
})();
(function() {
    'use strict';

    angular
        .module('app.mailbox', []);
})();
(function() {
    'use strict';

    angular
        .module('app.maps', []);
})();
(function() {
    'use strict';

    angular
        .module('app.navsearch', []);
})();
(function() {
    'use strict';

    angular
        .module('app.notify', []);
})();
(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();
(function() {
    'use strict';

    angular
        .module('app.panels', []);
})();
(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.tables', []);
})();
(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function() {
    'use strict';

    angular
        .module('app.utils', [
          'app.colors'
          ]);
})();

(function() {
    'use strict';

    angular
        .module('app.charts', []);
})();
(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#5d9cec',
          'success':                '#27c24c',
          'info':                   '#23b7e5',
          'warning':                '#ff902b',
          'danger':                 '#f05050',
          'inverse':                '#131e26',
          'green':                  '#37bc9b',
          'pink':                   '#f532e5',
          'purple':                 '#7266ba',
          'dark':                   '#3a3f51',
          'yellow':                 '#fad732',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();

/**=========================================================
 * Module: demo-alerts.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'warning', msg: 'Well done! You successfully read this important alert message.' }
          ];

          vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
          };

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    bootstrapuiConfig.$inject = ['$uibTooltipProvider'];
    function bootstrapuiConfig($uibTooltipProvider){
      $uibTooltipProvider.options({appendToBody: true});
    }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.singleModel = 1;

          vm.radioModel = 'Middle';

          vm.checkModel = {
            left: false,
            middle: true,
            right: false
          };
        }
    }
})();

/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.myInterval = 5000;

          var slides = vm.slides = [];
          vm.addSlide = function(id) {
            id = id || 8;
            slides.push({
              image: 'app/img/bg' + id + '.jpg',
              text: ['More','Extra','Lots of','Surplus'][slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 2]
            });
          };

          vm.addSlide(4);
          vm.addSlide(7);
          vm.addSlide(8);

        }
    }
})();

/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.today = function() {
            vm.dt = new Date();
          };
          vm.today();

          vm.clear = function () {
            vm.dt = null;
          };

          // Disable weekend selection
          vm.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

          vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
          };
          vm.toggleMin();

          vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = true;
          };

          vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
          };

          vm.initDate = new Date('2019-10-20');
          vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          vm.format = vm.formats[0];
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal'];
    function ModalController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });

            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
          function ModalInstanceCtrl($scope, $uibModalInstance) {

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          }
        }
    }

})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
          vm.totalItems = 64;
          vm.currentPage = 4;

          vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
          };

          vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);
          };

          vm.maxSize = 5;
          vm.bigTotalItems = 175;
          vm.bigCurrentPage = 1;
        }
    }
})();

/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicPopover = 'Hello, World!';
          vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

/**=========================================================
 * Module: demo-progress.js
 * Provides a simple demo to animate progress bar
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.max = 200;

          vm.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }

            vm.showWarning = (type === 'danger' || type === 'warning');

            vm.dynamic = value;
            vm.type = type;
          };
          vm.random();

          vm.randomStacked = function() {
            vm.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                vm.stacked.push({
                  value: Math.floor((Math.random() * 30) + 1),
                  type: types[index]
                });
            }
          };
          vm.randomStacked();
        }
    }
})();

/**=========================================================
 * Module: demo-rating.js
 * Provides a demo for ratings UI
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.rate = 7;
          vm.max = 10;
          vm.isReadonly = false;

          vm.hoveringOver = function(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.max);
          };

          vm.ratingStates = [
            {stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle'},
            {stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
            {stateOn: 'fa fa-heart', stateOff: 'fa fa-ban'},
            {stateOn: 'fa fa-heart'},
            {stateOff: 'fa fa-power-off'}
          ];
        }
    }
})();

/**=========================================================
 * Module: demo-timepicker.js
 * Provides a simple demo for bootstrap ui timepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.mytime = new Date();

          vm.hstep = 1;
          vm.mstep = 15;

          vm.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
          };

          vm.ismeridian = true;
          vm.toggleMode = function() {
            vm.ismeridian = ! vm.ismeridian;
          };

          vm.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            vm.mytime = d;
          };

          vm.changed = function () {
            console.log('Time changed to: ' + vm.mytime);
          };

          vm.clear = function() {
            vm.mytime = null;
          };
        }
    }
})();

/**=========================================================
 * Module: demo-tooltip.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicTooltip = 'Hello, World!';
          vm.dynamicTooltipText = 'dynamic';
          vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

          vm.autoplace = function (context, source) {
            //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
            var pos = 'top';
            if(predictTooltipTop(source) < 0)
              pos = 'bottom';
            if(predictTooltipLeft(source) < 0)
              pos = 'right';
            return pos;
          };

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipTop(el) {
              var top = el.offsetTop;
              var height = 40; // asumes ~40px tooltip height

              while(el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
              }
              return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipLeft(el) {
              var left = el.offsetLeft;
              var width = el.offsetWidth;

              while(el.offsetParent) {
                el = el.offsetParent;
                left += el.offsetLeft;
              }
              return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];
    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.selected = undefined;
          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

          // Any function returning a promise object can be used to load values asynchronously
          vm.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: val,
                sensor: false
              }
            }).then(function(res){
              var addresses = [];
              angular.forEach(res.data.results, function(item){
                /*jshint -W106*/
                addresses.push(item.formatted_address);
              });
              return addresses;
            });
          };

          vm.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$animateProvider', '$resourceProvider'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider, $resourceProvider){

      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

      // Disables animation on items with class .ng-no-animation
      $animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);
      $resourceProvider.defaults.stripTrailingSlashes = false;

    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
          'desktopLG':             1200,
          'desktop':                992,
          'tablet':                 768,
          'mobile':                 480
        })
      ;

})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams',  '$window', '$templateCache', 'Colors'];
    
    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors) {
      
      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$storage = $window.localStorage;

      // Uncomment this to disable template cache
      /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          if (typeof(toState) !== 'undefined'){
            $templateCache.remove(toState.templateUrl);
          }
      });*/

      // Allows to use branding color with interpolation
      // {{ colorByName('primary') }}
      $rootScope.colorByName = Colors.byName;

      // cancel click event easily
      $rootScope.cancel = function($event) {
        $event.stopPropagation();
      };

      // Hooks Example
      // ----------------------------------- 

      // Hook not found
      $rootScope.$on('$stateNotFound',
        function(event, unfoundState/*, fromState, fromParams*/) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });
      // Hook error
      $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log(error);
        });
      // Hook success
      $rootScope.$on('$stateChangeSuccess',
        function(/*event, toState, toParams, fromState, fromParams*/) {
          // display new view from top
          $window.scrollTo(0, 0);
          // Save the route title
          $rootScope.currTitle = $state.current.title;
        });

      // Load a title dynamically
      $rootScope.currTitle = $state.current.title;
      $rootScope.pageTitle = function() {
        var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
        document.title = title;
        return title;
      };      

    }

})();


(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'ChartData', '$timeout'];
    function DashboardController($scope, ChartData, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // SPLINE
          // ----------------------------------- 
          vm.splineData = ChartData.load('server/chart/spline.json');
          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            
            console.log('Simulating chart refresh during 3s on #'+id);

            // Instead of timeout you can request a chart data
            $timeout(function(){
              
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV2Controller', DashboardV2Controller);

    DashboardV2Controller.$inject = ['$rootScope', '$scope', '$state'];
    function DashboardV2Controller($rootScope, $scope, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          
          // Change layout mode
          if( $state.includes('app-h') ) {
            // Setup layout horizontal for demo
            $rootScope.app.layout.horizontal = true;
            $scope.$on('$destroy', function(){
                $rootScope.app.layout.horizontal = false;
            });            
          }
          else {
            $rootScope.app.layout.isCollapsed = true;
          }

          // BAR STACKED
          // ----------------------------------- 
          vm.barStackedOptions = {
              series: {
                  stack: true,
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 200, // optional: use it for a clear represetation
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // SPLINE
          // ----------------------------------- 

          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV3Controller', DashboardV3Controller);

    DashboardV3Controller.$inject = ['$rootScope'];
    function DashboardV3Controller($rootScope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // SPLINE
          // ----------------------------------- 

          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };


          vm.seriesData = {
            'CA': 11100,   // Canada
            'DE': 2510,    // Germany
            'FR': 3710,    // France
            'AU': 5710,    // Australia
            'GB': 8310,    // Great Britain
            'RU': 9310,    // Russia
            'BR': 6610,    // Brazil
            'IN': 7810,    // India
            'CN': 4310,    // China
            'US': 839,     // USA
            'SA': 410      // Saudi Arabia
          };
          
          vm.markersData = [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
          ];
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AngularCarouselController', AngularCarouselController);

    function AngularCarouselController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.colors = ['#fc0003', '#f70008', '#f2000d', '#ed0012', '#e80017', '#e3001c', '#de0021', '#d90026', '#d4002b', '#cf0030', '#c90036', '#c4003b', '#bf0040', '#ba0045', '#b5004a', '#b0004f', '#ab0054', '#a60059', '#a1005e', '#9c0063', '#960069', '#91006e', '#8c0073', '#870078', '#82007d', '#7d0082', '#780087', '#73008c', '#6e0091', '#690096', '#63009c', '#5e00a1', '#5900a6', '#5400ab', '#4f00b0', '#4a00b5', '#4500ba', '#4000bf', '#3b00c4', '#3600c9', '#3000cf', '#2b00d4', '#2600d9', '#2100de', '#1c00e3', '#1700e8', '#1200ed', '#0d00f2', '#0800f7', '#0300fc'];

          function getSlide(target, style) {
              var i = target.length;
              return {
                  id: (i + 1),
                  label: 'slide #' + (i + 1),
                  img: 'http://lorempixel.com/1200/500/' + style + '/' + ((i + 1) % 10) ,
                  color: vm.colors[ (i*10) % vm.colors.length],
                  odd: (i % 2 === 0)
              };
          }

          function addSlide(target, style) {
              target.push(getSlide(target, style));
          }

          vm.carouselIndex = 3;
          vm.carouselIndex2 = 0;
          vm.carouselIndex2 = 1;
          vm.carouselIndex3 = 5;
          vm.carouselIndex4 = 5;

          function addSlides(target, style, qty) {
              for (var i=0; i < qty; i++) {
                  addSlide(target, style);
              }
          }

          // 1st ngRepeat demo
          vm.slides = [];
          addSlides(vm.slides, 'sports', 50);

          // 2nd ngRepeat demo
          vm.slides2 = [];
          addSlides(vm.slides2, 'sports', 10);

          // 3rd ngRepeat demo
          vm.slides3 = [];
          addSlides(vm.slides3, 'people', 50);

          // 4th ngRepeat demo
          vm.slides4 = [];
          addSlides(vm.slides4, 'city', 50);


          // 5th ngRepeat demo
          vm.slides6 = [];
          vm.carouselIndex6 = 0;
          addSlides(vm.slides6, 'sports', 10);
          vm.addSlide = function(at) {
              if(at==='head') {
                  vm.slides6.unshift(getSlide(vm.slides6, 'people'));
              } else {
                  vm.slides6.push(getSlide(vm.slides6, 'people'));
              }
          };
        }
    }
})();

/**=========================================================
 * Module: demo-dialog.js
 * Demo for multiple ngDialog Usage
 * - ngDialogProvider for default values not supported 
 *   using lazy loader. Include plugin in base.js instead.
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('DialogIntroCtrl', DialogIntroCtrl)
        .controller('DialogMainCtrl', DialogMainCtrl)
        .controller('InsideCtrl', InsideCtrl)
        .controller('SecondModalCtrl', SecondModalCtrl);

    DialogIntroCtrl.$inject = ['$scope', 'ngDialog', 'tpl'];
    // Called from the route state. 'tpl' is resolved before
    function DialogIntroCtrl($scope, ngDialog, tpl) {
        
        activate();

        ////////////////

        function activate() {
          // share with other controllers
          $scope.tpl = tpl;
          // open dialog window
          ngDialog.open({
            template: tpl.path,
            // plain: true,
            className: 'ngdialog-theme-default'
          });
        }
    }

    DialogMainCtrl.$inject = ['$scope', '$rootScope', 'ngDialog'];
    // Loads from view
    function DialogMainCtrl($scope, $rootScope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $rootScope.jsonData = '{"foo": "bar"}';
          $rootScope.theme = 'ngdialog-theme-default';

          $scope.directivePreCloseCallback = function (value) {
            if(confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.preCloseCallbackOnScope = function (value) {
            if(confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.open = function () {
            ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl', data: {foo: 'some data'} });
          };

          $scope.openDefault = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openDefaultWithPreCloseCallbackInlined = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(value) {
                if (confirm('Close it?  (Value = ' + value + ')')) {
                  return true;
                }
                return false;
              }
            });
          };

          $scope.openConfirm = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackOnScope = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: 'preCloseCallbackOnScope',
              scope: $scope
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
            ngDialog.openConfirm({
              template: 'dialogWithNestedConfirmDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(/*value*/) {

                var nestedConfirmDialog = ngDialog.openConfirm({
                  template:
                      '<p>Are you sure you want to close the parent dialog?</p>' +
                      '<div>' +
                        '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
                        '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
                      '</button></div>',
                  plain: true,
                  className: 'ngdialog-theme-default'
                });

                return nestedConfirmDialog;
              },
              scope: $scope
            })
            .then(function(value){
              console.log('resolved:' + value);
              // Perform the save here
            }, function(value){
              console.log('rejected:' + value);

            });
          };

          $scope.openInlineController = function () {
            $rootScope.theme = 'ngdialog-theme-default';

            ngDialog.open({
              template: 'withInlineController',
              controller: ['$scope', '$timeout', function ($scope, $timeout) {
                var counter = 0;
                var timeout;
                function count() {
                  $scope.exampleExternalData = 'Counter ' + (counter++);
                  timeout = $timeout(count, 450);
                }
                count();
                $scope.$on('$destroy', function () {
                  $timeout.cancel(timeout);
                });
              }],
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openTemplate = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope
            });
          };

          $scope.openTemplateNoCache = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope,
              cache: false
            });
          };

          $scope.openTimed = function () {
            var dialog = ngDialog.open({
              template: '<p>Just passing through!</p>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
          };

          $scope.openNotify = function () {
            var dialog = ngDialog.open({
              template:
                '<p>You can do whatever you want when I close, however that happens.</p>' +
                '<div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
              plain: true
            });
            dialog.closePromise.then(function (data) {
              console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
            });
          };

          $scope.openWithoutOverlay = function () {
            ngDialog.open({
              template: '<h2>Notice that there is no overlay!</h2>',
              className: 'ngdialog-theme-default',
              plain: true,
              overlay: false
            });
          };

          $rootScope.$on('ngDialog.opened', function (e, $dialog) {
            console.log('ngDialog opened: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closed', function (e, $dialog) {
            console.log('ngDialog closed: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closing', function (e, $dialog) {
            console.log('ngDialog closing: ' + $dialog.attr('id'));
          });
        }
    
    } // DialogMainCtrl


    InsideCtrl.$inject = ['$scope', 'ngDialog'];
    function InsideCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.dialogModel = {
            message : 'message from passed scope'
          };
          $scope.openSecond = function () {
            ngDialog.open({
              template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
              plain: true,
              closeByEscape: false,
              controller: 'SecondModalCtrl'
            });
          };
        }
    }

    SecondModalCtrl.$inject = ['$scope', 'ngDialog'];
    function SecondModalCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.closeSecond = function () {
            ngDialog.close();
          };
        }

    }


})();




/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable 
 * events and events creations
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('InfiniteScrollController', InfiniteScrollController)
        .factory('datasource', datasource);

    function InfiniteScrollController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

          vm.loadMore = function() {
            var last = vm.images[vm.images.length - 1];
            for(var i = 1; i <= 10; i++) {
              vm.images.push(last + i);
            }
          };
        }
    }
    
    datasource.$inject = ['$log', '$timeout'];
    function datasource(console, $timeout) {

        var get = function(index, count, success) {
            return $timeout(function() {
                var i, result, _i, _ref;
                result = [];
                for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                    result.push('item #' + i);
                }
                return success(result);
            }, 100);
        };
        return {
            get: get
        };
    }

})();

/**=========================================================
 * Module: masonry-deck.js
 * Demo for Angular Deck
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('MasonryDeckController', MasonryDeckController)
        .directive('imageloaded', imageloaded); // required by demo

    MasonryDeckController.$inject = ['RouteHelpers'];
    function MasonryDeckController(RouteHelpers) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.basepath = RouteHelpers.basepath;

          vm.photos = [
              {id: 'photo-1', name: 'Awesome photo', src: 'http://lorempixel.com/400/300/abstract'},
              {id: 'photo-2', name: 'Great photo', src: 'http://lorempixel.com/450/400/city'},
              {id: 'photo-3', name: 'Strange photo', src: 'http://lorempixel.com/400/300/people'},
              {id: 'photo-4', name: 'A photo?', src: 'http://lorempixel.com/400/300/transport'},
              {id: 'photo-5', name: 'What a photo', src: 'http://lorempixel.com/450/300/fashion'},
              {id: 'photo-6', name: 'Silly photo', src: 'http://lorempixel.com/400/300/technics'},
              {id: 'photo-7', name: 'Weird photo', src: 'http://lorempixel.com/410/350/sports'},
              {id: 'photo-8', name: 'Modern photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-9', name: 'Classical photo', src: 'http://lorempixel.com/400/300/nature'},
              {id: 'photo-10', name: 'Dynamic photo', src: 'http://lorempixel.com/420/300/abstract'},
              {id: 'photo-11', name: 'Neat photo', src: 'http://lorempixel.com/400/300/sports'},
              {id: 'photo-12', name: 'Bumpy photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-13', name: 'Brilliant photo', src: 'http://lorempixel.com/400/380/nature'},
              {id: 'photo-14', name: 'Excellent photo', src: 'http://lorempixel.com/480/300/technics'},
              {id: 'photo-15', name: 'Gorgeous photo', src: 'http://lorempixel.com/400/300/sports'},
              {id: 'photo-16', name: 'Lovely photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-17', name: 'A "wow" photo', src: 'http://lorempixel.com/400/300/nature'},
              {id: 'photo-18', name: 'Bodacious photo', src: 'http://lorempixel.com/400/300/abstract'}
          ];
        }
    }

    // Add class to img element when source is loaded
    function imageloaded () {
        // Copyright(c) 2013 André König <akoenig@posteo.de>
        // MIT Licensed
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var cssClass = attrs.loadedclass;

          element.bind('load', function () {
              angular.element(element).addClass(cssClass);
          });
        }
    }

})();



/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AbnTestController', AbnTestController);

    AbnTestController.$inject = ['$timeout', '$resource'];
    function AbnTestController($timeout, $resource) {
        var vm = this;

        activate();

        ////////////////

        /*jshint -W106*/
        function activate() {
          vm.my_tree_handler = function(branch) {

            vm.output = 'You selected: ' + branch.label;

            if (branch.data && branch.data.description) {
              vm.output += '(' + branch.data.description + ')';
              return vm.output;
            }
          };

          // onSelect event handlers
          var apple_selected = function(branch) {
            vm.output = 'APPLE! : ' + branch.label;
            return vm.output;
          };

          var treedata_avm = [
            {
              label: 'Animal',
              children: [
                {
                  label: 'Dog',
                  data: {
                    description: 'man\'s best friend'
                  }
                }, {
                  label: 'Cat',
                  data: {
                    description: 'Felis catus'
                  }
                }, {
                  label: 'Hippopotamus',
                  data: {
                    description: 'hungry, hungry'
                  }
                }, {
                  label: 'Chicken',
                  children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }
              ]
            }, {
              label: 'Vegetable',
              data: {
                definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
                data_can_contain_anything: true
              },
              onSelect: function(branch) {
                vm.output = 'Vegetable: ' + branch.data.definition;
                return vm.output;
              },
              children: [
                {
                  label: 'Oranges'
                }, {
                  label: 'Apples',
                  children: [
                    {
                      label: 'Granny Smith',
                      onSelect: apple_selected
                    }, {
                      label: 'Red Delicous',
                      onSelect: apple_selected
                    }, {
                      label: 'Fuji',
                      onSelect: apple_selected
                    }
                  ]
                }
              ]
            }, {
              label: 'Mineral',
              children: [
                {
                  label: 'Rock',
                  children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                  label: 'Metal',
                  children: ['Aluminum', 'Steel', 'Copper']
                }, {
                  label: 'Plastic',
                  children: [
                    {
                      label: 'Thermoplastic',
                      children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                    }, {
                      label: 'Thermosetting Polymer',
                      children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                    }
                  ]
                }
              ]
            }
          ];
          
          var treedata_geography = [
            {
              label: 'North America',
              children: [
                {
                  label: 'Canada',
                  children: ['Toronto', 'Vancouver']
                }, {
                  label: 'USA',
                  children: ['New York', 'Los Angeles']
                }, {
                  label: 'Mexico',
                  children: ['Mexico City', 'Guadalajara']
                }
              ]
            }, {
              label: 'South America',
              children: [
                {
                  label: 'Venezuela',
                  children: ['Caracas', 'Maracaibo']
                }, {
                  label: 'Brazil',
                  children: ['Sao Paulo', 'Rio de Janeiro']
                }, {
                  label: 'Argentina',
                  children: ['Buenos Aires', 'Cordoba']
                }
              ]
            }
          ];

          vm.my_data = treedata_avm;
          vm.try_changing_the_tree_data = function() {
            if (vm.my_data === treedata_avm) {
              vm.my_data = treedata_geography;
            } else {
              vm.my_data = treedata_avm;
            }
            return vm.my_data;
          };
          
          var tree;
          // This is our API control variable
          vm.my_tree = tree = {};
          vm.try_async_load = function() {
            
            vm.my_data = [];
            vm.doing_async = true;
            
            // Request tree data via $resource
            var remoteTree = $resource('server/treedata.json');
            
            return remoteTree.get(function(res){
              
              vm.my_data = res.data;

              vm.doing_async = false;
            
              return tree.expand_all();
            
            // we must return a promise so the plugin 
            // can watch when it's resolved
            }).$promise;
          };
          
          // Adds a new branch to the tree
          vm.try_adding_a_branch = function() {
            var b;
            b = tree.get_selected_branch();
            return tree.add_branch(b, {
              label: 'New Branch',
              data: {
                something: 42,
                'else': 43
              }
            });
          };

        }
    }
})();


/**=========================================================
 * Module: nestable.js
 * Nestable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.items =  [
            {
              item: {text: 'a'},
              children: []
            },
            {
              item: {text: 'b'},
              children: [
                {
                  item: {text: 'c'},
                  children: []
                },
                {
                  item: {text: 'd'},
                  children: []
                }
              ]
            },
            {
              item: {text: 'e'},
              children: []
            },
            {
              item: {text: 'f'},
              children: []
            }
          ];

          vm.items2 =  [
            {
              item: {text: '1'},
              children: []
            },
            {
              item: {text: '2'},
              children: [
                {
                  item: {text: '3'},
                  children: []
                },
                {
                  item: {text: '4'},
                  children: []
                }
              ]
            },
            {
              item: {text: '5'},
              children: []
            },
            {
              item: {text: '6'},
              children: []
            }
          ];

        }
    }
})();

/**=========================================================
 * Module: scroll.js
 * Make a content box scrollable
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .directive('scrollable', scrollable);

    function scrollable () {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var defaultHeight = 250;
          element.slimScroll({
              height: (attrs.height || defaultHeight)
          });
        }
    }

})();

/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SortableController', SortableController);

    SortableController.$inject = ['$scope'];
    function SortableController($scope) {
        // doesn't support controllerAs syntax https://github.com/voidberg/html5sortable/issues/86

        activate();

        ////////////////

        function activate() {
          // Single List
          $scope.data1 = [
            { id: 1, name: 'Donald Hoffman' },
            { id: 2, name: 'Wallace Barrett' },
            { id: 3, name: 'Marsha Hicks' },
            { id: 4, name: 'Roland Brown' }
          ];

          $scope.add = function () {
            $scope.data1.push({id: $scope.data1.length + 1, name: 'Earl Knight'});
          };

          $scope.sortableCallback = function (sourceModel, destModel, start, end) {
            console.log(start + ' -> ' + end);
          };
          
          $scope.sortableOptions = {
              placeholder: '<div class="box-placeholder p0 m0"><div></div></div>',
              forcePlaceholderSize: true
          };
        }
    }

})();

/**=========================================================
 * Module: sweetalert.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SweetAlertController', SweetAlertController);

    SweetAlertController.$inject = ['SweetAlert'];
    function SweetAlertController(SweetAlert) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.demo1 = function() {
            SweetAlert.swal('Here\'s a message');
          };

          vm.demo2 = function() {
            SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
          };

          vm.demo3 = function() {
            SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
          };

          vm.demo4 = function() {
            SweetAlert.swal({   
              title: 'Are you sure?',   
              text: 'Your will not be able to recover this imaginary file!',   
              type: 'warning',   
              showCancelButton: true,   
              confirmButtonColor: '#DD6B55',   
              confirmButtonText: 'Yes, delete it!',
              closeOnConfirm: false
            },  function(){  
              SweetAlert.swal('Booyah!');
            });
          };

          vm.demo5 = function() {
            SweetAlert.swal({   
              title: 'Are you sure?',   
              text: 'Your will not be able to recover this imaginary file!',   
              type: 'warning',   
              showCancelButton: true,   
              confirmButtonColor: '#DD6B55',   
              confirmButtonText: 'Yes, delete it!',   
              cancelButtonText: 'No, cancel plx!',   
              closeOnConfirm: false,   
              closeOnCancel: false 
            }, function(isConfirm){  
              if (isConfirm) {     
                SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');   
              } else {     
                SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');   
              } 
            });
          };

          vm.demo6 = function() {
            SweetAlert.swal({   
              title: 'Sweet!',   
              text: 'Here\'s a custom image.',   
              imageUrl: 'http://oitozero.com/img/avatar.jpg' 
            });
          };
        }
    }
})();

/**=========================================================
 * Module: demo-toaster.js
 * Demos for toaster notifications
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('ToasterDemoCtrl', ToasterDemoCtrl);

    ToasterDemoCtrl.$inject = ['toaster'];
    function ToasterDemoCtrl(toaster) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.toaster = {
              type:  'success',
              title: 'Title',
              text:  'Message'
          };

          vm.pop = function() {
            toaster.pop(vm.toaster.type, vm.toaster.title, vm.toaster.text);
          };
        }
    }
})();

/**=========================================================
 * Module: tour.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('TourCtrl', TourCtrl);

    TourCtrl.$inject = ['$scope'];
    function TourCtrl($scope) {

        activate();

        ////////////////

        function activate() {
          // BootstrapTour is not compatible with z-index based layout
          // so adding position:static for this case makes the browser
          // to ignore the property
          var section = angular.element('.wrapper > section');
          section.css({'position': 'static'});
          // finally restore on destroy and reuse the value declared in stylesheet
          $scope.$on('$destroy', function(){
            section.css({'position': ''});
          });
        }
    }
})();

/**=========================================================
 * Module: article.js
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('ArticleController', ArticleController);

    function ArticleController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.htmlContent = 'Article content...';

          vm.postDemo = {};
          vm.postDemo.tags = ['coding', 'less'];
          vm.availableTags = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
          vm.postDemo.categories = ['JAVASCRIPT','WEB'];
          vm.availableCategories = ['JAVASCRIPT','WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];

          vm.reviewers = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];


          vm.alerts = [
            { type: 'info', msg: 'There is an autosaved version of this article that is more recent than the version below. <a href="#" class="text-white">Restore</a>' }
          ];

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable 
 * events and events creations
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .directive('calendar', calendar);

    calendar.$inject = ['$rootScope'];
    function calendar ($rootScope) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element) {
          
          if(!$.fn.fullCalendar) return;
          
          // The element that will display the calendar
          var calendar = element;

          var demoEvents = createDemoEvents();

          initExternalEvents(calendar);

          initCalendar(calendar, demoEvents, $rootScope.app.layout.isRTL);
        }
    }


    // global shared var to know what we are dragging
    var draggingEvent = null;


    /**
     * ExternalEvent object
     * @param jQuery Object elements Set of element as jQuery objects
     */
    function ExternalEvent(elements) {
        
        if (!elements) return;
        
        elements.each(function() {
            var $this = $(this);
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var calendarEventObject = {
                title: $.trim($this.text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $this.data('calendarEventObject', calendarEventObject);

            // make the event draggable using jQuery UI
            $this.draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });

        });
    }

    /**
     * Invoke full calendar plugin and attach behavior
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     * @param  EventObject [events] An object with the event list to load when the calendar displays
     */
    function initCalendar(calElement, events, isRTL) {

        // check to remove elements from the list
        var removeAfterDrop = $('#remove-after-drop');

        calElement.fullCalendar({
            isRTL: isRTL,
            header: {
                left:   'prev,next today',
                center: 'title',
                right:  'month,agendaWeek,agendaDay'
            },
            buttonIcons: { // note the space at the beginning
                prev:    ' fa fa-caret-left',
                next:    ' fa fa-caret-right'
            },
            buttonText: {
                today: 'today',
                month: 'month',
                week:  'week',
                day:   'day'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar 
            drop: function(date, allDay) { // this function is called when something is dropped
                
                var $this = $(this),
                    // retrieve the dropped element's stored Event Object
                    originalEventObject = $this.data('calendarEventObject');

                // if something went wrong, abort
                if(!originalEventObject) return;

                // clone the object to avoid multiple events with reference to the same object
                var clonedEventObject = $.extend({}, originalEventObject);

                // assign the reported date
                clonedEventObject.start = date;
                clonedEventObject.allDay = allDay;
                clonedEventObject.backgroundColor = $this.css('background-color');
                clonedEventObject.borderColor = $this.css('border-color');

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" 
                // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                calElement.fullCalendar('renderEvent', clonedEventObject, true);
                
                // if necessary remove the element from the list
                if(removeAfterDrop.is(':checked')) {
                  $this.remove();
                }
            },
            eventDragStart: function (event/*, js, ui*/) {
              draggingEvent = event;
            },
            // This array is the events sources
            events: events
        });
    }

    /**
     * Inits the external events panel
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     */
    function initExternalEvents(calElement){
      // Panel with the external events list
      var externalEvents = $('.external-events');

      // init the external events in the panel
      new ExternalEvent(externalEvents.children('div'));

      // External event color is danger-red by default
      var currColor = '#f6504d';
      // Color selector button
      var eventAddBtn = $('.external-event-add-btn');
      // New external event name input
      var eventNameInput = $('.external-event-name');
      // Color switchers
      var eventColorSelector = $('.external-event-color-selector .circle');

      // Trash events Droparea 
      $('.external-events-trash').droppable({
        accept:       '.fc-event',
        activeClass:  'active',
        hoverClass:   'hovered',
        tolerance:    'touch',
        drop: function(event, ui) {
          
          // You can use this function to send an ajax request
          // to remove the event from the repository
          
          if(draggingEvent) {
            var eid = draggingEvent.id || draggingEvent._id;
            // Remove the event
            calElement.fullCalendar('removeEvents', eid);
            // Remove the dom element
            ui.draggable.remove();
            // clear
            draggingEvent = null;
          }
        }
      });

      eventColorSelector.click(function(e) {
          e.preventDefault();
          var $this = $(this);

          // Save color
          currColor = $this.css('background-color');
          // De-select all and select the current one
          eventColorSelector.removeClass('selected');
          $this.addClass('selected');
      });

      eventAddBtn.click(function(e) {
          e.preventDefault();
          
          // Get event name from input
          var val = eventNameInput.val();
          // Dont allow empty values
          if ($.trim(val) === '') return;
          
          // Create new event element
          var newEvent = $('<div/>').css({
                              'background-color': currColor,
                              'border-color':     currColor,
                              'color':            '#fff'
                          })
                          .html(val);

          // Prepends to the external events list
          externalEvents.prepend(newEvent);
          // Initialize the new event element
          new ExternalEvent(newEvent);
          // Clear input
          eventNameInput.val('');
      });
    }

    /**
     * Creates an array of events to display in the first load of the calendar
     * Wrap into this function a request to a source to get via ajax the stored events
     * @return Array The array with the events
     */
    function createDemoEvents() {
      // Date for the calendar events (dummy data)
      var date = new Date();
      var d = date.getDate(),
          m = date.getMonth(),
          y = date.getFullYear();

      return  [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: '#f56954', //red 
                    borderColor: '#f56954' //red
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    backgroundColor: '#f39c12', //yellow
                    borderColor: '#f39c12' //yellow
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    backgroundColor: '#0073b7', //Blue
                    borderColor: '#0073b7' //Blue
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: '#00c0ef', //Info (aqua)
                    borderColor: '#00c0ef' //Info (aqua)
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    backgroundColor: '#00a65a', //Success (green)
                    borderColor: '#00a65a' //Success (green)
                },
                {
                    title: 'Open Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: '//google.com/',
                    backgroundColor: '#3c8dbc', //Primary (light-blue)
                    borderColor: '#3c8dbc' //Primary (light-blue)
                }
            ];
    }

})();

(function() {
    'use strict';

    angular
        .module('app.extras')
        .service('LoadTreeService', LoadTreeService);

    LoadTreeService.$inject = ['$resource'];
    function LoadTreeService($resource) {
        // Loads the list of files to populate the treeview
        return $resource('server/editor/filetree.json');
    }

})();
/**=========================================================
 * Module: code-editor.js
 * Codemirror code editor controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CodeEditorController', CodeEditorController);

    CodeEditorController.$inject = ['$rootScope', '$scope', '$http', '$ocLazyLoad', 'filetree'];
    function CodeEditorController($rootScope, $scope, $http, $ocLazyLoad, filetree) {
        var vm = this;

        layout();
        activate();

        ////////////////
        /*jshint -W106*/
        function layout() {
          // Setup the layout mode 
          $rootScope.app.useFullLayout = true;
          $rootScope.app.hiddenFooter = true;
          $rootScope.app.layout.isCollapsed = true;
          
          // Restore layout for demo
          $scope.$on('$destroy', function(){
              $rootScope.app.useFullLayout = false;
              $rootScope.app.hiddenFooter = false;
          });

        }

        function activate() {

          // Set the tree data into the scope
          vm.filetree_data = filetree;

          // Available themes
          vm.editorThemes = ['3024-day','3024-night','ambiance-mobile','ambiance','base16-dark','base16-light','blackboard','cobalt','eclipse','elegant','erlang-dark','lesser-dark','mbo','mdn-like','midnight','monokai','neat','neo','night','paraiso-dark','paraiso-light','pastel-on-dark','rubyblue','solarized','the-matrix','tomorrow-night-eighties','twilight','vibrant-ink','xq-dark','xq-light'];

          vm.editorOpts = {
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true,
            theme: 'mbo',
            viewportMargin: Infinity
          };

          vm.refreshEditor = 0;

          // Load dinamically the stylesheet for the selected theme
          // You can use ozLazyLoad to load also the mode js based 
          // on the file extension that is loaded (see handle_filetree)
          vm.loadTheme = function() {
            var BASE = 'vendor/codemirror/theme/';
            $ocLazyLoad.load(BASE + vm.editorOpts.theme + '.css');
            vm.refreshEditor = !vm.refreshEditor;
          };
          // load default theme
          vm.loadTheme(vm.editorOpts.theme);
          // Add some initial text
          vm.code = '// Open a file from the left menu \n' +
                        '// It will be requested to the server and loaded into the editor\n' +
                        '// Also try adding a New File from the toolbar\n';


          // Tree

          var selectedBranch;
          vm.handle_filetree = function(branch) {
            
            selectedBranch = branch;

            var basePath = 'server/editor/';
            var isFolder = !!branch.children.length;

            console.log('You selected: ' + branch.label + ' - isFolder? ' + isFolder);

            if ( ! isFolder ) {

              $http
                .get( basePath + branch.path )
                .success(function(response){
                  
                  console.log('Loaded.. ' + branch.path);
                  // set the new code into the editor
                  vm.code = response;
                  
                  vm.editorOpts.mode = detectMode(branch.path);
                  console.log( 'Mode is: ' + vm.editorOpts.mode);

                });
            }
          };

          function detectMode(file) {
            var ext = file.split('.');
            ext = ext ? ext[ext.length - 1] : '';
            switch (ext) {
              case 'html':  return 'htmlmixed';
              case 'css':   return 'css';
              default:      return 'javascript';
            }
          }

          var tree;
          tree = vm.filetree = {};

          // Adds a new branch to the tree
          vm.new_filetree = function() {
            var b;
            b = tree.get_selected_branch();

            // if we select a leaf -> select the parent folder
            if ( b && b.children.length === 0 ) {
              b = tree.get_parent_branch(b);
            }
            
            return tree.add_branch(b, {
              'label': 'another.html',
              'path': 'source/another.html'
            });
          };
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$filter'];
    function TodoController($filter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.items = [
            {
              todo: {title: 'Meeting with Mark at 7am.', description: 'Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. '},
              complete: true
            },
            {
              todo: {title: 'Call Sonya. Talk about the new project.', description: ''},
              complete: false
            },
            {
              todo: {title: 'Find a new place for vacations', description: ''},
              complete: false
            }
            ];
          
          vm.editingTodo = false;
          vm.todo = {};

          vm.addTodo = function() {
            
            if( vm.todo.title === '' ) return;
            if( !vm.todo.description ) vm.todo.description = '';
            
            if( vm.editingTodo ) {
              vm.todo = {};
              vm.editingTodo = false;
            }
            else {
              vm.items.push({todo: angular.copy(vm.todo), complete: false});
              vm.todo.title = '';
              vm.todo.description = '';
            }
          };
          
          vm.editTodo = function(index, $event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.todo = vm.items[index].todo;
            vm.editingTodo = true;
          };

          vm.removeTodo = function(index/*, $event*/) {
            vm.items.splice(index, 1);
          };
          
          vm.clearAll = function() {
            vm.items = [];
          };

          vm.totalCompleted = function() {
            return $filter('filter')(vm.items, function(item){
              return item.complete;
            }).length;
          };

          vm.totalPending = function() {
            return $filter('filter')(vm.items, function(item){
              return !item.complete;
            }).length;
          };

        }
    }
})();

/**=========================================================
 * Module: word-cloud.js
 * Controller for jqCloud
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('WordCloudController', WordCloudController);

    function WordCloudController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.words = [
              {
                text: 'Lorem',
                weight: 13
                //link: 'http://themicon.co'
              }, {
                text: 'Ipsum',
                weight: 10.5
              }, {
                text: 'Dolor',
                weight: 9.4
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }
          ];
        }
    }
})();

/**=========================================================
 * Module: flatdoc.js
 * Creates the flatdoc markup and initializes the plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.flatdoc')
        .directive('flatdoc', flatdoc);

    function flatdoc () {

        var directive = {
            template: '<div role="flatdoc"><div role="flatdoc-menu"></div><div role="flatdoc-content"></div></div>',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          Flatdoc.run({
            fetcher: Flatdoc.file(attrs.src)
          });
          
          var $root = $('html, body');
          $(document).on('flatdoc:ready', function() {
            var docMenu = $('[role="flatdoc-menu"]');
            docMenu.find('a').on('click', function(e) {
              e.preventDefault(); e.stopPropagation();
              
              var $this = $(this);
              
              docMenu.find('a.active').removeClass('active');
              $this.addClass('active');

              $root.animate({
                    scrollTop: $(this.getAttribute('href')).offset().top - ($('.topnavbar').height() + 10)
                }, 800);
            });

          });
        }
    }


})();

/**=========================================================
 * Module: skycons.js
 * Include any animated weather icon from Skycons
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.icons')
        .directive('skycon', skycon);

    function skycon () {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var skycons = new Skycons({'color': (attrs.color || 'white')});

          element.html('<canvas width="' + attrs.width + '" height="' + attrs.height + '"></canvas>');

          skycons.add(element.children()[0], attrs.skycon);

          skycons.play();
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.hexPicker = {
              color: ''
            };

            vm.rgbPicker = {
              color: ''
            };

            vm.rgbaPicker = {
              color: ''
            };

            vm.nonInput = {
              color: ''
            };

            vm.resetColor = function() {
              vm.hexPicker = {
                color: '#ff0000'
              };
            };

            vm.resetRBGColor = function() {
              vm.rgbPicker = {
                color: 'rgb(255,255,255)'
              };
            };

            vm.resetRBGAColor = function() {
              vm.rgbaPicker = {
                color: 'rgb(255,255,255, 0.25)'
              };
            };

            vm.resetNonInputColor = function() {
              vm.nonInput = {
                color: '#ffffff'
              };
            };
        }
    }
})();
/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var options = element.data();
          
          // old usage support
          options.classInput = element.data('classinput') || options.classInput;
          
          element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: form-imgcrop.js
 * Image crop controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ImageCropController', ImageCropController);

    ImageCropController.$inject = ['$scope'];
    function ImageCropController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.reset = function() {
            vm.myImage        = '';
            vm.myCroppedImage = '';
            vm.imgcropType    = 'square';
          };

          vm.reset();

          var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
              $scope.$apply(function(/*$scope*/){
                vm.myImage=evt.target.result;
              });
            };
            if(file)
              reader.readAsDataURL(file);
          };
          
          angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
        }
    }
})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {
          
          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;
          
          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {
            
            if ( angular.isDefined(self.steps[step]) ) {

              if(self.validate && step !== 1) {
                var form = $(self.element),
                    group = form.children().children('div').get(step - 2);

                if (false === form.parsley().validate( group.id )) {
                  return false;
                }
              }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }
    }


})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // ----------------------------------- 

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // ----------------------------------- 

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // ----------------------------------- 

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};
          
          // Tags inputs
          // ----------------------------------- 
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // ----------------------------------- 

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg 
          // ----------------------------------- 

          vm.wysiwygContent = '<p> Write something here.. </p>';

          // Text Angular (wysiwyg)
          // ----------------------------------- 
          
          vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('masked', masked);

    function masked () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.inputmask)
            $elem.inputmask();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function() {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
          var out = [];

          if (angular.isArray(items)) {
            items.forEach(function(item) {
              var itemMatches = false;

              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var text = props[prop].toLowerCase();
                if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                  itemMatches = true;
                  break;
                }
              }

              if (itemMatches) {
                out.push(item);
              }
            });
          } else {
            // Let the output be the input untouched
            out = items;
          }

          return out;
        }
    }

})();
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];
    function tagsinput ($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
          element.on('itemAdded itemRemoved', function(){
            // check if view value is not empty and is a string
            // and update the view from string to an array of tags
            if(ngModel.$viewValue && ngModel.$viewValue.split) {
              ngModel.$setViewValue( ngModel.$viewValue.split(',') );
              ngModel.$render();
            }
          });

          $timeout(function(){
            element.tagsinput();
          });
        }
    }

})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];
    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.disabled = undefined;

          vm.enable = function() {
            vm.disabled = false;
          };

          vm.disable = function() {
            vm.disabled = true;
          };

          vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
          };

          vm.person = {};
          vm.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];

          vm.address = {};
          vm.refreshAddresses = function(address) {
            var params = {address: address, sensor: false};
            return $http.get(
              '//maps.googleapis.com/maps/api/geocode/json',
              {params: params}
            ).then(function(response) {
              vm.addresses = response.data.results;
            });
          };

          vm.country = {};
          vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
          ];


          // Multiple
          vm.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

          };

          vm.counter = 0;
          vm.someFunction = function (item, model){
            vm.counter++;
            vm.eventResult = {item: item, model: model};
          };

          vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

          vm.multipleDemo = {};
          vm.multipleDemo.colors = ['Blue','Red'];
          vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
          vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
          vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: validate-form.js
 * Initializes the validation plugin Parsley
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('validateForm', validateForm);

    function validateForm () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.parsley)
            $elem.parsley();
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'whirl':              ['vendor/whirl/dist/whirl.css'],
            'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
            'animo':              ['vendor/animo.js/animo.js'],
            'fastclick':          ['vendor/fastclick/lib/fastclick.js'],
            'modernizr':          ['vendor/modernizr/modernizr.custom.js'],
            'animate':            ['vendor/animate.css/animate.min.css'],
            'skycons':            ['vendor/skycons/skycons.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'weather-icons':      ['vendor/weather-icons/css/weather-icons.min.css',
                                   'vendor/weather-icons/css/weather-icons-wind.min.css'],
            'sparklines':         ['vendor/sparkline/index.js'],
            'wysiwyg':            ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                                   'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
            'slimscroll':         ['vendor/slimScroll/jquery.slimscroll.min.js'],
            'screenfull':         ['vendor/screenfull/dist/screenfull.js'],
            'vector-map':         ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
            'vector-map-maps':    ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'],
            'loadGoogleMapsJS':   ['vendor/load-google-maps/load-google-maps.js'],
            'flot-chart':         ['vendor/Flot/jquery.flot.js'],
            'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                                   'vendor/Flot/jquery.flot.resize.js',
                                   'vendor/Flot/jquery.flot.pie.js',
                                   'vendor/Flot/jquery.flot.time.js',
                                   'vendor/Flot/jquery.flot.categories.js',
                                   'vendor/flot-spline/js/jquery.flot.spline.min.js'],
                                  // jquery core and widgets
            'jquery-ui':          ['vendor/jquery-ui/ui/core.js',
                                   'vendor/jquery-ui/ui/widget.js'],
                                   // loads only jquery required modules and touch support
            'jquery-ui-widgets':  ['vendor/jquery-ui/ui/core.js',
                                   'vendor/jquery-ui/ui/widget.js',
                                   'vendor/jquery-ui/ui/mouse.js',
                                   'vendor/jquery-ui/ui/draggable.js',
                                   'vendor/jquery-ui/ui/droppable.js',
                                   'vendor/jquery-ui/ui/sortable.js',
                                   'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
            'moment' :            ['vendor/moment/min/moment-with-locales.min.js'],
            'inputmask':          ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js'],
            'flatdoc':            ['vendor/flatdoc/flatdoc.js'],
            'codemirror':         ['vendor/codemirror/lib/codemirror.js',
                                   'vendor/codemirror/lib/codemirror.css'],
            // modes for common web files
            'codemirror-modes-web': ['vendor/codemirror/mode/javascript/javascript.js',
                                     'vendor/codemirror/mode/xml/xml.js',
                                     'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                                     'vendor/codemirror/mode/css/css.js'],
            'taginput' :          ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                                   'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
            'filestyle':          ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
            'parsley':            ['vendor/parsleyjs/dist/parsley.min.js'],
            'fullcalendar':       ['vendor/fullcalendar/dist/fullcalendar.min.js',
                                   'vendor/fullcalendar/dist/fullcalendar.css'],
            'gcal':               ['vendor/fullcalendar/dist/gcal.js'],
            'chartjs':            ['vendor/Chart.js/Chart.js'],
            'morris':             ['vendor/raphael/raphael.js',
                                   'vendor/morris.js/morris.js',
                                   'vendor/morris.js/morris.css'],
            'loaders.css':          ['vendor/loaders.css/loaders.css'],
            'spinkit':              ['vendor/spinkit/css/spinkit.css']
          },
          // Angular based script (use the right module name)
          modules: [
            {name: 'toaster',                   files: ['vendor/angularjs-toaster/toaster.js',
                                                       'vendor/angularjs-toaster/toaster.css']},
            {name: 'localytics.directives',     files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                                                       'vendor/chosen_v1.2.0/chosen.min.css',
                                                       'vendor/angular-chosen-localytics/chosen.js']},
            {name: 'ngDialog',                  files: ['vendor/ngDialog/js/ngDialog.min.js',
                                                       'vendor/ngDialog/css/ngDialog.min.css',
                                                       'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
            {name: 'ngWig',                     files: ['vendor/ngWig/dist/ng-wig.min.js'] },
            {name: 'ngTable',                   files: ['vendor/ng-table/dist/ng-table.min.js',
                                                        'vendor/ng-table/dist/ng-table.min.css']},
            {name: 'ngTableExport',             files: ['vendor/ng-table-export/ng-table-export.js']},
            {name: 'angularBootstrapNavTree',   files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                                                        'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']},
            {name: 'htmlSortable',              files: ['vendor/html.sortable/dist/html.sortable.js',
                                                        'vendor/html.sortable/dist/html.sortable.angular.js']},
            {name: 'xeditable',                 files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                                                        'vendor/angular-xeditable/dist/css/xeditable.css']},
            {name: 'angularFileUpload',         files: ['vendor/angular-file-upload/dist/angular-file-upload.js']},
            {name: 'ngImgCrop',                 files: ['vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                                                        'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']},
            {name: 'ui.select',                 files: ['vendor/angular-ui-select/dist/select.js',
                                                        'vendor/angular-ui-select/dist/select.css']},
            {name: 'ui.codemirror',             files: ['vendor/angular-ui-codemirror/ui-codemirror.js']},
            {name: 'angular-carousel',          files: ['vendor/angular-carousel/dist/angular-carousel.css',
                                                        'vendor/angular-carousel/dist/angular-carousel.js']},
            {name: 'infinite-scroll',           files: ['vendor/ngInfiniteScroll/build/ng-infinite-scroll.js']},
            {name: 'ui.bootstrap-slider',       files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                                                        'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                                                        'vendor/angular-bootstrap-slider/slider.js']},
            {name: 'ui.grid',                   files: ['vendor/angular-ui-grid/ui-grid.min.css',
                                                        'vendor/angular-ui-grid/ui-grid.min.js']},
            {name: 'textAngular',               files: ['vendor/textAngular/dist/textAngular.css',
                                                        'vendor/textAngular/dist/textAngular-rangy.min.js',
                                                        'vendor/textAngular/dist/textAngular-sanitize.js',
                                                        'vendor/textAngular/src/globals.js',
                                                        'vendor/textAngular/src/factories.js',
                                                        'vendor/textAngular/src/DOM.js',
                                                        'vendor/textAngular/src/validators.js',
                                                        'vendor/textAngular/src/taBind.js',
                                                        'vendor/textAngular/src/main.js',
                                                        'vendor/textAngular/dist/textAngularSetup.js'
                                                        ], serie: true},
            {name: 'angular-rickshaw',          files: ['vendor/d3/d3.min.js',
                                                        'vendor/rickshaw/rickshaw.js',
                                                        'vendor/rickshaw/rickshaw.min.css',
                                                        'vendor/angular-rickshaw/rickshaw.js'], serie: true},
            {name: 'angular-chartist',          files: ['vendor/chartist/dist/chartist.min.css',
                                                        'vendor/chartist/dist/chartist.js',
                                                        'vendor/angular-chartist.js/dist/angular-chartist.js'], serie: true},
            {name: 'ui.map',                    files: ['vendor/angular-ui-map/ui-map.js']},
            {name: 'datatables',                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                        'vendor/datatables/media/js/jquery.dataTables.js',
                                                        'vendor/angular-datatables/dist/angular-datatables.js'], serie: true},
            {name: 'angular-jqcloud',           files: ['vendor/jqcloud2/dist/jqcloud.css',
                                                        'vendor/jqcloud2/dist/jqcloud.js',
                                                        'vendor/angular-jqcloud/angular-jqcloud.js']},
            {name: 'angularGrid',               files: ['vendor/ag-grid/dist/ag-grid.css',
                                                        'vendor/ag-grid/dist/ag-grid.js',
                                                        'vendor/ag-grid/dist/theme-dark.css',
                                                        'vendor/ag-grid/dist/theme-fresh.css']},
            {name: 'ng-nestable',               files: ['vendor/ng-nestable/src/angular-nestable.js',
                                                        'vendor/nestable/jquery.nestable.js']},
            {name: 'akoenig.deckgrid',          files: ['vendor/angular-deckgrid/angular-deckgrid.js']},
            {name: 'oitozero.ngSweetAlert',     files: ['vendor/sweetalert/dist/sweetalert.css',
                                                        'vendor/sweetalert/dist/sweetalert.min.js',
                                                        'vendor/angular-sweetalert/SweetAlert.js']},
            {name: 'bm.bsTour',                 files: ['vendor/bootstrap-tour/build/css/bootstrap-tour.css',
                                                        'vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                                                        'vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'], serie: true},
            {name: 'ui.knob',                   files: ['vendor/angular-knob/src/angular-knob.js',
                                                        'vendor/jquery-knob/dist/jquery.knob.min.js']},
            {name: 'easypiechart',              files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']},
            {name: 'colorpicker.module',        files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                                                        'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js']}
          ]
        })
        ;

})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // ----------------------------------- 
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
(function() {
    'use strict';

    angular
        .module('app.locale')
        .config(localeConfig)
        ;
    localeConfig.$inject = ['tmhDynamicLocaleProvider'];
    function localeConfig(tmhDynamicLocaleProvider){
  
      tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular-i18n/angular-locale_{{locale}}.js');
      // tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
/**=========================================================
 * Module: locale.js
 * Demo for locale settings
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.locale')
        .controller('LocalizationController', LocalizationController);

    LocalizationController.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];
    function LocalizationController($rootScope, tmhDynamicLocale, $locale) {

        activate();

        ////////////////

        function activate() {
          $rootScope.availableLocales = {
            'en': 'English',
            'es': 'Spanish',
            'de': 'German',
            'fr': 'French',
            'ar': 'Arabic',
            'ja': 'Japanese',
            'ko': 'Korean',
            'zh': 'Chinese'};
          
          $rootScope.model = {selectedLocale: 'en'};
          
          $rootScope.$locale = $locale;
          
          $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailboxController', MailboxController);

    function MailboxController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.folders = [
            {name: 'Inbox',   folder: 'inbox',   alert: 42, icon: 'fa-inbox' },
            {name: 'Starred', folder: 'starred', alert: 10, icon: 'fa-star' },
            {name: 'Sent',    folder: 'sent',    alert: 0,  icon: 'fa-paper-plane-o' },
            {name: 'Draft',   folder: 'draft',   alert: 5,  icon: 'fa-edit' },
            {name: 'Trash',   folder: 'trash',   alert: 0,  icon: 'fa-trash'}
          ];

          vm.labels = [
            {name: 'Red',     color: 'danger'},
            {name: 'Pink',    color: 'pink'},
            {name: 'Blue',    color: 'info'},
            {name: 'Yellow',  color: 'warning'}
          ];

          vm.mail = {
            cc: false,
            bcc: false
          };
          // Mailbox editr initial content
          vm.content = '<p>Type something..</p>';
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailFolderController', MailFolderController);

    MailFolderController.$inject = ['mails', '$stateParams'];
    function MailFolderController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          
          vm.folder = {};
          // no filter for inbox
          vm.folder.folder = $stateParams.folder === 'inbox' ? '' : $stateParams.folder;

          mails.all().then(function(mails){
            vm.mails = mails;
          });
        }
    }
})();

// A RESTful factory for retrieving mails from json file

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .factory('mails', mails);

    mails.$inject = ['$http'];
    function mails($http) {
        var service = {
            all: all,
            get: get
        };
        return service;

        ////////////////
        
        function readMails() {
          var path = 'server/mails.json';
          return $http.get(path).then(function (resp) {
            return resp.data.mails;
          });
        }

        function all() {
          return readMails();
        }

        function get(id) {
          return readMails().then(function(mails){
            for (var i = 0; i < mails.length; i++) {
              if (+mails[i].id === +id) return mails[i];
            }
            return null;
          });
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailViewController', MailViewController);

    MailViewController.$inject = ['mails', '$stateParams'];
    function MailViewController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          mails.get($stateParams.mid).then(function(mail){
            vm.mail = mail;
          });
        }
    }
})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('ModalGmapController', ModalGmapController);

    ModalGmapController.$inject = ['$uibModal'];
    function ModalGmapController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            //var modalInstance =
            $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', '$timeout'];
          function ModalInstanceCtrl($scope, $uibModalInstance, $timeout) {

            $uibModalInstance.opened.then(function () {
              var position = new google.maps.LatLng(33.790807, -117.835734);

              $scope.mapOptionsModal = {
                zoom: 14,
                center: position,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              // we use timeout to wait maps to be ready before add a markers
              $timeout(function(){
                // 1. Add a marker at the position it was initialized
                new google.maps.Marker({
                  map: $scope.myMapModal,
                  position: position
                });
                // 2. Trigger a resize so the map is redrawed
                google.maps.event.trigger($scope.myMapModal, 'resize');
                // 3. Move to the center if it is misaligned
                $scope.myMapModal.panTo(position);
              });

            });

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

          }

        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$timeout'];
    function GMapController($timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var position = [
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.787453, -117.835858)
            ];
          
          vm.addMarker = addMarker;
          // we use timeout to wait maps to be ready before add a markers
          $timeout(function(){
            addMarker(vm.myMap1, position[0]);
            addMarker(vm.myMap2, position[1]);
            addMarker(vm.myMap3, position[2]);
            addMarker(vm.myMap5, position[3]);
          });

          vm.mapOptions1 = {
            zoom: 14,
            center: position[0],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          vm.mapOptions2 = {
            zoom: 19,
            center: position[1],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          vm.mapOptions3 = {
            zoom: 14,
            center: position[2],
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };

          vm.mapOptions4 = {
            zoom: 14,
            center: position[3],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          // for multiple markers
          $timeout(function(){
            addMarker(vm.myMap4, position[3]);
            addMarker(vm.myMap4, position[4]);
          });

          // custom map style
          var MapStyles = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#bdd1f9'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'color':'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}];
          vm.mapOptions5 = {
            zoom: 14,
            center: position[3],
            styles: MapStyles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          ///////////////
          
          function addMarker(map, position) {
            return new google.maps.Marker({
              map: map,
              position: position
            });
          }

        }
    }
})();

/**=========================================================
 * Module: vector-map.js.js
 * Init jQuery Vector Map plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .directive('vectorMap', vectorMap);

    vectorMap.$inject = ['VectorMap'];
    function vectorMap (VectorMap) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
              seriesData: '=',
              markersData: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
          
          var defaultColors = {
              markerColor:  '#23b7e5',      // the marker points
              bgColor:      'transparent',      // the background
              scaleColors:  ['#878c9a'],    // the color of the region in the serie
              regionFill:   '#bbbec6'       // the base region color
          };

          var mapHeight   = attrs.height || '300',
              options     = {
                markerColor:  attrs.markerColor  || defaultColors.markerColor,
                bgColor:      attrs.bgColor      || defaultColors.bgColor,
                scale:        attrs.scale        || 1,
                scaleColors:  attrs.scaleColors  || defaultColors.scaleColors,
                regionFill:   attrs.regionFill   || defaultColors.regionFill,
                mapName:      attrs.mapName      || 'world_mill_en'
              };
          
          element.css('height', mapHeight);
          
          VectorMap.init( element , options, scope.seriesData, scope.markersData);
        }
    }

})();

/**=========================================================
 * Module: vector-map.js
 * Services to initialize vector map plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .service('VectorMap', VectorMap);

    function VectorMap() {
        this.init = init;

        ////////////////

        function init($element, opts, series, markers) {
          $element.vectorMap({
            map:             opts.mapName,
            backgroundColor: opts.bgColor,
            zoomMin:         1,
            zoomMax:         8,
            zoomOnScroll:    false,
            regionStyle: {
              initial: {
                'fill':           opts.regionFill,
                'fill-opacity':   1,
                'stroke':         'none',
                'stroke-width':   1.5,
                'stroke-opacity': 1
              },
              hover: {
                'fill-opacity': 0.8
              },
              selected: {
                fill: 'blue'
              },
              selectedHover: {
              }
            },
            focusOn:{ x:0.4, y:0.6, scale: opts.scale},
            markerStyle: {
              initial: {
                fill: opts.markerColor,
                stroke: opts.markerColor
              }
            },
            onRegionLabelShow: function(e, el, code) {
              if ( series && series[code] )
                el.html(el.html() + ': ' + series[code] + ' visitors');
            },
            markers: markers,
            series: {
                regions: [{
                    values: series,
                    scale: opts.scaleColors,
                    normalizeFunction: 'polynomial'
                }]
            },
          });
        }
    }
})();

/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('VectorMapController', VectorMapController);

    function VectorMapController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.seriesData = {
            'CA': 11100,   // Canada
            'DE': 2510,    // Germany
            'FR': 3710,    // France
            'AU': 5710,    // Australia
            'GB': 8310,    // Great Britain
            'RU': 9310,    // Russia
            'BR': 6610,    // Brazil
            'IN': 7810,    // India
            'CN': 4310,    // China
            'US': 839,     // USA
            'SA': 410      // Saudi Arabia
          };
          
          vm.markersData = [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
          ];
        }
    }
})();

/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    // 
    
    function searchOpen () {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss () {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;
        
    }

    //
    // Contrller definition
    // 
    
    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchOpenController ($scope, $element, NavSearch) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchDismissController ($scope, $element, NavSearch) {
      
      var inputSelector = '.navbar-form input[type="text"]';

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode === 27) // ESC
            NavSearch.dismiss();
        });
        
      // click anywhere closes the search
      $(document).on('click', NavSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/
 
(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
          var navbarForm = $(navbarFormSelector);

          navbarForm.toggleClass('open');
          
          var isOpen = navbarForm.hasClass('open');
          
          navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
          $(navbarFormSelector)
            .removeClass('open') // Close control
            .find('input[type="text"]').blur() // remove focus
            .val('') // Empty input
            ;
        }        
    }
})();

/**=========================================================
 * Module: demo-notify.js
 * Provides a simple demo for notify
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.notify')
        .controller('NotifyDemoCtrl', NotifyDemoCtrl);

    NotifyDemoCtrl.$inject = ['Notify', '$timeout'];
    function NotifyDemoCtrl(Notify, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.msgHtml = '<em class="fa fa-check"></em> Message with icon..';

          vm.notifyMsg = 'Some messages here..';
          vm.notifyOpts = {
            status: 'danger',
            pos: 'bottom-center'
          };

          // Service usage example
          $timeout(function(){
            
            Notify.alert( 
                'This is a custom message from notify..', 
                {status: 'success'}
            );
          
          }, 500);
        }
    }
})();

/**=========================================================
 * Module: notify.js
 * Directive for notify plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.notify')
        .directive('notify', notify);

    notify.$inject = ['$window', 'Notify'];
    function notify ($window, Notify) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              options: '=',
              message: '='
            }
        };
        return directive;

        function link(scope, element) {

          element.on('click', function (e) {
            e.preventDefault();
            Notify.alert(scope.message, scope.options);
          });
        }

    }

})();


/**=========================================================
 * Module: notify.js
 * Create a notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 =========================================================*/

(function() {
    'use strict';
    angular
        .module('app.notify')
        .service('Notify', Notify);

    Notify.$inject = ['$timeout'];
    function Notify($timeout) {

        this.alert = notifyAlert;

        ////////////////

        function notifyAlert(msg, opts) {
            if ( msg ) {
                $timeout(function(){
                    $.notify(msg, opts || {});
                });
            }
        }
    }

})();

/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */
(function($){
    'use strict';
    var containers = {},
        messages   = {},
        notify     =  function(options){
            if ($.type(options) === 'string') {
                options = { message: options };
            }
            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) === 'string' ? {status:arguments[1]} : arguments[1]);
            }
            return (new Message(options)).show();
        },
        closeAll  = function(group, instantly){
            var id;
            if(group) {
                for(id in messages) { if(group===messages[id].group) messages[id].close(instantly); }
            } else {
                for(id in messages) { messages[id].close(instantly); }
            }
        };
    var Message = function(options){
        // var $this = this;
        this.options = $.extend({}, Message.defaults, options);
        this.uuid    = 'ID'+(new Date().getTime())+'RAND'+(Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
                '<a class="close">&times;</a>',
                '<div>'+this.options.message+'</div>',
            '</div>'
        ].join('')).data('notifyMessage', this);
        // status
        if (this.options.status) {
            this.element.addClass('alert alert-'+this.options.status);
            this.currentstatus = this.options.status;
        }
        this.group = this.options.group;
        messages[this.uuid] = this;
        if(!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo('body').on('click', '.uk-notify-message', function(){
                $(this).data('notifyMessage').close();
            });
        }
    };
    $.extend(Message.prototype, {
        uuid: false,
        element: false,
        timout: false,
        currentstatus: '',
        group: false,
        show: function() {
            if (this.element.is(':visible')) return;
            var $this = this;
            containers[this.options.pos].show().prepend(this.element);
            var marginbottom = parseInt(this.element.css('margin-bottom'), 10);
            this.element.css({'opacity':0, 'margin-top': -1*this.element.outerHeight(), 'margin-bottom':0}).animate({'opacity':1, 'margin-top': 0, 'margin-bottom':marginbottom}, function(){
                if ($this.options.timeout) {
                    var closefn = function(){ $this.close(); };
                    $this.timeout = setTimeout(closefn, $this.options.timeout);
                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout);  }
                    );
                }
            });
            return this;
        },
        close: function(instantly) {
            var $this    = this,
                finalize = function(){
                    $this.element.remove();
                    if(!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }
                    delete messages[$this.uuid];
                };
            if(this.timeout) clearTimeout(this.timeout);
            if(instantly) {
                finalize();
            } else {
                this.element.animate({'opacity':0, 'margin-top': -1* this.element.outerHeight(), 'margin-bottom':0}, function(){
                    finalize();
                });
            }
        },
        content: function(html){
            var container = this.element.find('>div');
            if(!html) {
                return container.html();
            }
            container.html(html);
            return this;
        },
        status: function(status) {
            if(!status) {
                return this.currentstatus;
            }
            this.element.removeClass('alert alert-'+this.currentstatus).addClass('alert alert-'+status);
            this.currentstatus = status;
            return this;
        }
    });
    Message.defaults = {
        message: '',
        status: 'normal',
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };
    
    $.notify          = notify;
    $.notify.message  = Message;
    $.notify.closeAll = closeAll;
    
    return notify;
}(jQuery));

/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$http', '$state'];
    function LoginFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

          vm.login = function() {
            vm.authMsg = '';

            if(vm.loginForm.$valid) {

              $http
                .post('api/account/login', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = 'Incorrect credentials.';
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.loginForm.account_email.$dirty = true;
              vm.loginForm.account_password.$dirty = true;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('RegisterFormController', RegisterFormController);

    RegisterFormController.$inject = ['$http', '$state'];
    function RegisterFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';
            
          vm.register = function() {
            vm.authMsg = '';

            if(vm.registerForm.$valid) {

              $http
                .post('api/account/register', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = response;
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.registerForm.account_email.$dirty = true;
              vm.registerForm.account_password.$dirty = true;
              vm.registerForm.account_agreed.$dirty = true;
              
            }
          };
        }
    }
})();

/**=========================================================
 * Collapse panels * [panel-collapse]
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelCollapse', panelCollapse);

    function panelCollapse () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$localStorage'];
    function Controller ($scope, $element, $timeout, $localStorage) {
      var storageKeyName = 'panelState';

      // Prepare the panel to be collapsible
      var $elem   = $($element),
          parent  = $elem.closest('.panel'), // find the first parent panel
          panelId = parent.attr('id');

      // Load the saved state if exists
      var currentState = loadPanelState( panelId );
      if ( typeof currentState !== 'undefined') {
        $timeout(function(){
            $scope[panelId] = currentState; },
          10);
      }

      // bind events to switch icons
      $element.bind('click', function(e) {
        e.preventDefault();
        savePanelState( panelId, !$scope[panelId] );

      });
  
      // Controller helpers
      function savePanelState(id, state) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(!data) { data = {}; }
        data[id] = state;
        $localStorage[storageKeyName] = angular.toJson(data);
      }
      function loadPanelState(id) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(data) {
          return data[id];
        }
      }
    }

})();

/**=========================================================
 * Dismiss panels * [panel-dismiss]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelDismiss', panelDismiss);

    function panelDismiss () {

        var directive = {
            controller: Controller,
            restrict: 'A'
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$q', 'Utils'];
    function Controller ($scope, $element, $q, Utils) {
      var removeEvent   = 'panel-remove',
          removedEvent  = 'panel-removed';

      $element.on('click', function (e) {
        e.preventDefault();

        // find the first parent panel
        var parent = $(this).closest('.panel');

        removeElement();

        function removeElement() {
          var deferred = $q.defer();
          var promise = deferred.promise;
          
          // Communicate event destroying panel
          $scope.$emit(removeEvent, parent.attr('id'), deferred);
          promise.then(destroyMiddleware);
        }

        // Run the animation before destroy the panel
        function destroyMiddleware() {
          if(Utils.support.animation) {
            parent.animo({animation: 'bounceOut'}, destroyPanel);
          }
          else destroyPanel();
        }

        function destroyPanel() {

          var col = parent.parent();
          parent.remove();
          // remove the parent if it is a row and is empty and not a sortable (portlet)
          col
            .filter(function() {
            var el = $(this);
            return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
          }).remove();

          // Communicate event destroyed panel
          $scope.$emit(removedEvent, parent.attr('id'));

        }

      });
    }
})();



/**=========================================================
 * Refresh panels
 * [panel-refresh] * [data-spinner="standard"]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelRefresh', panelRefresh);

    function panelRefresh () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element'];
    function Controller ($scope, $element) {
      var refreshEvent   = 'panel-refresh',
          whirlClass     = 'whirl',
          defaultSpinner = 'standard';

      // catch clicks to toggle panel refresh
      $element.on('click', function (e) {
        e.preventDefault();

        var $this   = $(this),
            panel   = $this.parents('.panel').eq(0),
            spinner = $this.data('spinner') || defaultSpinner
            ;

        // start showing the spinner
        panel.addClass(whirlClass + ' ' + spinner);

        // Emit event when refresh clicked
        $scope.$emit(refreshEvent, panel.attr('id'));

      });

      // listen to remove spinner
      $scope.$on('removeSpinner', removeSpinner);

      // method to clear the spinner when done
      function removeSpinner (ev, id) {
        if (!id) return;
        var newid = id.charAt(0) === '#' ? id : ('#'+id);
        angular
          .element(newid)
          .removeClass(whirlClass);
      }
    }
})();



/**=========================================================
 * Module panel-tools.js
 * Directive tools to control panels.
 * Allows collapse, refresh and dismiss (remove)
 * Saves panel state in browser storage
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('paneltool', paneltool);

    paneltool.$inject = ['$compile', '$timeout'];
    function paneltool ($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

          var templates = {
            /* jshint multistr: true */
            collapse:'<a href="#" panel-collapse="" uib-tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}"> \
                        <em ng-show="{{panelId}}" class="fa fa-plus ng-no-animation"></em> \
                        <em ng-show="!{{panelId}}" class="fa fa-minus ng-no-animation"></em> \
                      </a>',
            dismiss: '<a href="#" panel-dismiss="" uib-tooltip="Close Panel">\
                       <em class="fa fa-times"></em>\
                     </a>',
            refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" uib-tooltip="Refresh Panel">\
                       <em class="fa fa-refresh"></em>\
                     </a>'
          };

          var tools = scope.panelTools || attrs;

          $timeout(function() {
            element.html(getTemplate(element, tools )).show();
            $compile(element.contents())(scope);

            element.addClass('pull-right');
          });

          function getTemplate( elem, attrs ){
            var temp = '';
            attrs = attrs || {};
            if(attrs.toolCollapse)
              temp += templates.collapse.replace(/{{panelId}}/g, (elem.parent().parent().attr('id')) );
            if(attrs.toolDismiss)
              temp += templates.dismiss;
            if(attrs.toolRefresh)
              temp += templates.refresh.replace(/{{spinner}}/g, attrs.toolRefresh);
            return temp;
          }
        }// link
    }

})();

/**=========================================================
 * Module: demo-panels.js
 * Provides a simple demo for panel actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('PanelsCtrl', PanelsCtrl);

    PanelsCtrl.$inject = ['$scope', '$timeout'];
    function PanelsCtrl($scope, $timeout) {

        activate();

        ////////////////

        function activate() {

          // PANEL COLLAPSE EVENTS
          // ----------------------------------- 

          // We can use panel id name for the boolean flag to [un]collapse the panel
          $scope.$watch('panelDemo1',function(newVal){
              
              console.log('panelDemo1 collapsed: ' + newVal);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            var secs = 3;
            
            console.log('Refreshing during ' + secs +'s #'+id);

            $timeout(function(){
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });

          // PANELS VIA NG-REPEAT
          // ----------------------------------- 

          $scope.panels = [
            {
              id: 'panelRepeat1',
              title: 'Panel Title 1',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat2',
              title: 'Panel Title 2',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat3',
              title: 'Panel Title 3',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            }
          ];
        }

    } //PanelsCtrl

})();


/**=========================================================
 * Drag and drop any panel based on jQueryUI portlets
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('portlet', portlet);

    portlet.$inject = ['$timeout', '$localStorage'];
    function portlet ($timeout, $localStorage) {
      var storageKeyName = 'portletState';

      return {
        restrict: 'A',
        link: link
      };

      /////////////

      function link(scope, element) {
          
        // not compatible with jquery sortable
        if(!$.fn.sortable) return;

        element.sortable({
          connectWith:          '[portlet]', // same like directive 
          items:                'div.panel',
          handle:               '.portlet-handler',
          opacity:              0.7,
          placeholder:          'portlet box-placeholder',
          cancel:               '.portlet-cancel',
          forcePlaceholderSize: true,
          iframeFix:            false,
          tolerance:            'pointer',
          helper:               'original',
          revert:               200,
          forceHelperSize:      true,
          update:               savePortletOrder,
          create:               loadPortletOrder
        });

      }


      function savePortletOrder(event/*, ui*/) {
        var self = event.target;
        var data = angular.fromJson($localStorage[storageKeyName]);
        
        if(!data) { data = {}; }

        data[self.id] = $(self).sortable('toArray');

        if(data) {
          $timeout(function() {
            $localStorage[storageKeyName] = angular.toJson(data);
          });
        }
      }

      function loadPortletOrder(event) {
        var self = event.target;
        var data = angular.fromJson($localStorage[storageKeyName]);

        if(data) {
          
          var porletId = self.id,
              panels   = data[porletId];

          if(panels) {
            var portlet = $('#'+porletId);
            
            $.each(panels, function(index, value) {
               $('#'+value).appendTo(portlet);
            });
          }

        }
      }

    }

})();
 
(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: 
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{width: loadCounter + \'%\'}"></div>' +
              '</div>'
            ,
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

            scope.loadCounter = parseInt(counter, 10);

            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {

            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded 
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();
/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider)
        ;

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

      /* jshint validthis:true */
      return {
        // provider access level
        basepath: basepath,
        resolveFor: resolveFor,
        // controller access level
        $get: function() {
          return {
            basepath: basepath,
            resolveFor: resolveFor
          };
        }
      };

      // Set here the base of the relative path
      // for all app views
      function basepath(uri) {
        return 'app/views/' + uri;
      }

      // Generates a resolve object by passing script names
      // previously configured in constant.APP_REQUIRES
      function resolveFor() {
        var _args = arguments;
        return {
          deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // Creates a promise chain for each argument
            var promise = $q.when(1); // empty promise
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            // creates promise to chain dynamically
            function andThen(_arg) {
              // also support a function that returns a promise
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // if is a module, pass the name. If not, pass the array
                    var whatToLoad = getRequired(_arg);
                    // simple error check
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // finally, return a promise
                    return $ocLL.load( whatToLoad );
                  });
            }
            // check and returns required data
            // analyze module items with the form [name: '', files: []]
            // and also simple array of script files (for not angular js)
            function getRequired(name) {
              if (APP_REQUIRES.modules)
                  for(var m in APP_REQUIRES.modules)
                      if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                          return APP_REQUIRES.modules[m];
              return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
            }

          }]};
      } // resolveFor

    }


})();


/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];

    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);


        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/dashboard');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: helper.basepath('app.html'),
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
            })
            .state('app.dashboard', {
                url: '/dashboard',
                title: 'Dashboard',
                templateUrl: helper.basepath('dashboard.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'weather-icons')
            })
            .state('app.dashboard_v2', {
                url: '/dashboard_v2',
                title: 'Dashboard v2',
                templateUrl: helper.basepath('dashboard_v2.html'),
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.dashboard_v3', {
                url: '/dashboard_v3',
                title: 'Dashboard v3',
                controller: 'DashboardV3Controller',
                controllerAs: 'dash3',
                templateUrl: helper.basepath('dashboard_v3.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'vector-map', 'vector-map-maps')
            })
            .state('app.widgets', {
                url: '/widgets',
                title: 'Widgets',
                templateUrl: helper.basepath('widgets.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.buttons', {
                url: '/buttons',
                title: 'Buttons',
                templateUrl: helper.basepath('buttons.html')
            })
            .state('app.colors', {
                url: '/colors',
                title: 'Colors',
                templateUrl: helper.basepath('colors.html')
            })
            .state('app.localization', {
                url: '/localization',
                title: 'Localization',
                templateUrl: helper.basepath('localization.html')
            })
            .state('app.infinite-scroll', {
                url: '/infinite-scroll',
                title: 'Infinite Scroll',
                templateUrl: helper.basepath('infinite-scroll.html'),
                resolve: helper.resolveFor('infinite-scroll')
            })
            .state('app.navtree', {
                url: '/navtree',
                title: 'Nav Tree',
                templateUrl: helper.basepath('nav-tree.html'),
                resolve: helper.resolveFor('angularBootstrapNavTree')
            })
            .state('app.nestable', {
                url: '/nestable',
                title: 'Nestable',
                templateUrl: helper.basepath('nestable.html'),
                resolve: helper.resolveFor('ng-nestable')
            })
            .state('app.sortable', {
                url: '/sortable',
                title: 'Sortable',
                templateUrl: helper.basepath('sortable.html'),
                resolve: helper.resolveFor('htmlSortable')
            })
            .state('app.notifications', {
                url: '/notifications',
                title: 'Notifications',
                templateUrl: helper.basepath('notifications.html')
            })
            .state('app.carousel', {
                url: '/carousel',
                title: 'Carousel',
                templateUrl: helper.basepath('carousel.html'),
                resolve: helper.resolveFor('angular-carousel')
            })
            .state('app.ngdialog', {
                url: '/ngdialog',
                title: 'ngDialog',
                templateUrl: helper.basepath('ngdialog.html'),
                resolve: angular.extend(helper.resolveFor('ngDialog'), {
                    tpl: function() {
                        return {
                            path: helper.basepath('ngdialog-template.html')
                        };
                    }
                }),
                controller: 'DialogIntroCtrl'
            })
            .state('app.sweetalert', {
                url: '/sweetalert',
                title: 'SweetAlert',
                templateUrl: helper.basepath('sweetalert.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.tour', {
                url: '/tour',
                title: 'Tour',
                templateUrl: helper.basepath('tour.html'),
                resolve: helper.resolveFor('bm.bsTour')
            })
            .state('app.interaction', {
                url: '/interaction',
                title: 'Interaction',
                templateUrl: helper.basepath('interaction.html')
            })
            .state('app.spinners', {
                url: '/spinners',
                title: 'Spinners',
                templateUrl: helper.basepath('spinners.html'),
                resolve: helper.resolveFor('loaders.css', 'spinkit')
            })
            .state('app.dropdown-animations', {
                url: '/dropdown-animations',
                title: 'Dropdown Animations',
                templateUrl: helper.basepath('dropdown-animations.html')
            })
            .state('app.panels', {
                url: '/panels',
                title: 'Panels',
                templateUrl: helper.basepath('panels.html')
            })
            .state('app.portlets', {
                url: '/portlets',
                title: 'Portlets',
                templateUrl: helper.basepath('portlets.html'),
                resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets')
            })
            .state('app.maps-google', {
                url: '/maps-google',
                title: 'Maps Google',
                templateUrl: helper.basepath('maps-google.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.maps-vector', {
                url: '/maps-vector',
                title: 'Maps Vector',
                templateUrl: helper.basepath('maps-vector.html'),
                controller: 'VectorMapController',
                controllerAs: 'vmap',
                resolve: helper.resolveFor('vector-map', 'vector-map-maps')
            })
            .state('app.grid', {
                url: '/grid',
                title: 'Grid',
                templateUrl: helper.basepath('grid.html')
            })
            .state('app.grid-masonry', {
                url: '/grid-masonry',
                title: 'Grid Masonry',
                templateUrl: helper.basepath('grid-masonry.html')
            })
            .state('app.grid-masonry-deck', {
                url: '/grid-masonry-deck',
                title: 'Grid Masonry',
                templateUrl: helper.basepath('grid-masonry-deck.html'),
                resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
            })
            .state('app.typo', {
                url: '/typo',
                title: 'Typo',
                templateUrl: helper.basepath('typo.html')
            })
            .state('app.icons-font', {
                url: '/icons-font',
                title: 'Icons Font',
                templateUrl: helper.basepath('icons-font.html'),
                resolve: helper.resolveFor('icons')
            })
            .state('app.icons-weather', {
                url: '/icons-weather',
                title: 'Icons Weather',
                templateUrl: helper.basepath('icons-weather.html'),
                resolve: helper.resolveFor('weather-icons', 'skycons')
            })
            .state('app.form-standard', {
                url: '/form-standard',
                title: 'Form Standard',
                templateUrl: helper.basepath('form-standard.html')
            })
            .state('app.form-extended', {
                url: '/form-extended',
                title: 'Form Extended',
                templateUrl: helper.basepath('form-extended.html'),
                resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput', 'inputmask', 'localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'textAngular')
            })
            .state('app.form-validation', {
                url: '/form-validation',
                title: 'Form Validation',
                templateUrl: helper.basepath('form-validation.html'),
                resolve: helper.resolveFor('ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            .state('app.form-parsley', {
                url: '/form-parsley',
                title: 'Form Validation - Parsley',
                templateUrl: helper.basepath('form-parsley.html'),
                resolve: helper.resolveFor('parsley')
            })
            .state('app.form-wizard', {
                url: '/form-wizard',
                title: 'Form Wizard',
                templateUrl: helper.basepath('form-wizard.html'),
                resolve: helper.resolveFor('parsley')
            })
            .state('app.form-upload', {
                url: '/form-upload',
                title: 'Form upload',
                templateUrl: helper.basepath('form-upload.html'),
                resolve: helper.resolveFor('angularFileUpload', 'filestyle')
            })
            .state('app.form-xeditable', {
                url: '/form-xeditable',
                templateUrl: helper.basepath('form-xeditable.html'),
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.form-imagecrop', {
                url: '/form-imagecrop',
                templateUrl: helper.basepath('form-imagecrop.html'),
                resolve: helper.resolveFor('ngImgCrop', 'filestyle')
            })
            .state('app.form-uiselect', {
                url: '/form-uiselect',
                templateUrl: helper.basepath('form-uiselect.html'),
                controller: 'uiSelectController',
                controllerAs: 'uisel',
                resolve: helper.resolveFor('ui.select')
            })
            .state('app.chart-flot', {
                url: '/chart-flot',
                title: 'Chart Flot',
                templateUrl: helper.basepath('chart-flot.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.chart-radial', {
                url: '/chart-radial',
                title: 'Chart Radial',
                templateUrl: helper.basepath('chart-radial.html'),
                resolve: helper.resolveFor('classyloader', 'ui.knob', 'easypiechart')
            })
            .state('app.chart-js', {
                url: '/chart-js',
                title: 'Chart JS',
                templateUrl: helper.basepath('chart-js.html'),
                resolve: helper.resolveFor('chartjs')
            })
            .state('app.chart-rickshaw', {
                url: '/chart-rickshaw',
                title: 'Chart Rickshaw',
                templateUrl: helper.basepath('chart-rickshaw.html'),
                resolve: helper.resolveFor('angular-rickshaw')
            })
            .state('app.chart-morris', {
                url: '/chart-morris',
                title: 'Chart Morris',
                templateUrl: helper.basepath('chart-morris.html'),
                resolve: helper.resolveFor('morris')
            })
            .state('app.chart-chartist', {
                url: '/chart-chartist',
                title: 'Chart Chartist',
                templateUrl: helper.basepath('chart-chartist.html'),
                resolve: helper.resolveFor('angular-chartist')
            })
            .state('app.table-standard', {
                url: '/table-standard',
                title: 'Table Standard',
                templateUrl: helper.basepath('table-standard.html')
            })
            .state('app.table-extended', {
                url: '/table-extended',
                title: 'Table Extended',
                templateUrl: helper.basepath('table-extended.html')
            })
            .state('app.table-datatable', {
                url: '/table-datatable',
                title: 'Table Datatable',
                templateUrl: helper.basepath('table-datatable.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.table-xeditable', {
                url: '/table-xeditable',
                templateUrl: helper.basepath('table-xeditable.html'),
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.table-ngtable', {
                url: '/table-ngtable',
                templateUrl: helper.basepath('table-ngtable.html'),
                resolve: helper.resolveFor('ngTable', 'ngTableExport')
            })
            .state('app.table-uigrid', {
                url: '/table-uigrid',
                templateUrl: helper.basepath('table-uigrid.html'),
                resolve: helper.resolveFor('ui.grid')
            })
            .state('app.table-angulargrid', {
                url: '/table-angulargrid',
                templateUrl: helper.basepath('table-angulargrid.html'),
                resolve: helper.resolveFor('angularGrid')
            })
            .state('app.timeline', {
                url: '/timeline',
                title: 'Timeline',
                templateUrl: helper.basepath('timeline.html')
            })
            .state('app.calendar', {
                url: '/calendar',
                title: 'Calendar',
                templateUrl: helper.basepath('calendar.html'),
                resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets', 'moment', 'fullcalendar')
            })
            .state('app.invoice', {
                url: '/invoice',
                title: 'Invoice',
                templateUrl: helper.basepath('invoice.html')
            })
            .state('app.search', {
                url: '/search',
                title: 'Search',
                templateUrl: helper.basepath('search.html'),
                resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
            })
            .state('app.todo', {
                url: '/todo',
                title: 'Todo List',
                templateUrl: helper.basepath('todo.html'),
                controller: 'TodoController',
                controllerAs: 'todo'
            })
            .state('app.profile', {
                url: '/profile',
                title: 'Profile',
                templateUrl: helper.basepath('profile.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.code-editor', {
                url: '/code-editor',
                templateUrl: helper.basepath('code-editor.html'),
                controller: 'CodeEditorController',
                controllerAs: 'coder',
                resolve: {
                    deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                    filetree: ['LoadTreeService', function(LoadTreeService) {
                        return LoadTreeService.get().$promise.then(function(res) {
                            return res.data;
                        });
                    }]
                }
            })
            .state('app.template', {
                url: '/template',
                title: 'Blank Template',
                templateUrl: helper.basepath('template.html')
            })
            .state('app.documentation', {
                url: '/documentation',
                title: 'Documentation',
                templateUrl: helper.basepath('documentation.html'),
                resolve: helper.resolveFor('flatdoc')
            })
            // Forum
            // -----------------------------------
            .state('app.forum', {
                url: '/forum',
                title: 'Forum',
                templateUrl: helper.basepath('forum.html')
            })
            .state('app.forum-topics', {
                url: '/forum/topics/:catid',
                title: 'Forum Topics',
                templateUrl: helper.basepath('forum-topics.html')
            })
            .state('app.forum-discussion', {
                url: '/forum/discussion/:topid',
                title: 'Forum Discussion',
                templateUrl: helper.basepath('forum-discussion.html')
            })
            // Blog
            // -----------------------------------
            .state('app.blog', {
                url: '/blog',
                title: 'Blog',
                templateUrl: helper.basepath('blog.html'),
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.blog-post', {
                url: '/post',
                title: 'Post',
                templateUrl: helper.basepath('blog-post.html'),
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.articles', {
                url: '/articles',
                title: 'Articles',
                templateUrl: helper.basepath('blog-articles.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.article-view', {
                url: '/article/:id',
                title: 'Article View',
                templateUrl: helper.basepath('blog-article-view.html'),
                resolve: helper.resolveFor('ui.select', 'textAngular')
            })
            // eCommerce
            // -----------------------------------
            .state('app.orders', {
                url: '/orders',
                title: 'Orders',
                templateUrl: helper.basepath('ecommerce-orders.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.order-view', {
                url: '/order-view',
                title: 'Order View',
                templateUrl: helper.basepath('ecommerce-order-view.html')
            })
            .state('app.products', {
                url: '/products',
                title: 'Products',
                templateUrl: helper.basepath('ecommerce-products.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.product-view', {
                url: '/product/:id',
                title: 'Product View',
                templateUrl: helper.basepath('ecommerce-product-view.html')
            })
            // Mailbox
            // -----------------------------------
            .state('app.mailbox', {
                url: '/mailbox',
                title: 'Mailbox',
                abstract: true,
                templateUrl: helper.basepath('mailbox.html')
            })
            .state('app.mailbox.folder', {
                url: '/folder/:folder',
                title: 'Mailbox',
                templateUrl: helper.basepath('mailbox-inbox.html')
            })
            .state('app.mailbox.view', {
                url: '/{mid:[0-9]{1,4}}',
                title: 'View mail',
                templateUrl: helper.basepath('mailbox-view.html'),
                resolve: helper.resolveFor('ngWig')
            })
            .state('app.mailbox.compose', {
                url: '/compose',
                title: 'Mailbox',
                templateUrl: helper.basepath('mailbox-compose.html'),
                resolve: helper.resolveFor('ngWig')
            })
            //
            // Multiple level example
            // -----------------------------------
            .state('app.multilevel', {
                url: '/multilevel',
                title: 'Multilevel',
                template: '<h3>Multilevel Views</h3>' + '<div class="lead ba p">View @ Top Level ' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1', {
                url: '/level1',
                title: 'Multilevel - Level1',
                template: '<div class="lead ba p">View @ Level 1' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1.item', {
                url: '/item',
                title: 'Multilevel - Level1',
                template: '<div class="lead ba p"> Menu item @ Level 1</div>'
            })
            .state('app.multilevel.level1.level2', {
                url: '/level2',
                title: 'Multilevel - Level2',
                template: '<div class="lead ba p">View @ Level 2' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1.level2.level3', {
                url: '/level3',
                title: 'Multilevel - Level3',
                template: '<div class="lead ba p">View @ Level 3' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1.level2.level3.item', {
                url: '/item',
                title: 'Multilevel - Level3 Item',
                template: '<div class="lead ba p"> Menu item @ Level 3</div>'
            })
            //
            // Single Page Routes
            // -----------------------------------
            .state('page', {
                url: '/page',
                templateUrl: 'app/pages/page.html',
                resolve: helper.resolveFor('modernizr', 'icons'),
                controller: ['$rootScope', function($rootScope) {
                    $rootScope.app.layout.isBoxed = false;
                }]
            })
            // .state('page.login', {
            //   url: '/login',
            //   title: 'Login',
            //   templateUrl: 'app/pages/login.html'
            // })
            .state('page.register', {
                url: '/register',
                title: 'Register',
                templateUrl: 'app/pages/register.html'
            })
            .state('page.recover', {
                url: '/recover',
                title: 'Recover',
                templateUrl: 'app/pages/recover.html'
            })
            .state('page.lock', {
                url: '/lock',
                title: 'Lock',
                templateUrl: 'app/pages/lock.html'
            })
            .state('page.404', {
                url: '/404',
                title: 'Not Found',
                templateUrl: 'app/pages/404.html'
            })
            //
            // Horizontal layout
            // -----------------------------------
            .state('app-h', {
                url: '/app-h',
                abstract: true,
                templateUrl: helper.basepath('app-h.html'),
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
            })
            .state('app-h.dashboard_v2', {
                url: '/dashboard_v2',
                title: 'Dashboard v2',
                templateUrl: helper.basepath('dashboard_v2.html'),
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            //
            // CUSTOM RESOLVES
            //   Add your own resolves properties
            //   following this object extend
            //   method
            // -----------------------------------
            // .state('app.someroute', {
            //   url: '/some_url',
            //   templateUrl: 'path_to_template.html',
            //   controller: 'someController',
            //   resolve: angular.extend(
            //     helper.resolveFor(), {
            //     // YOUR RESOLVES GO HERE
            //     }
            //   )
            // })
            .state('app.tipoproducto', {
                url: '/tipoproducto',
                templateUrl: helper.basepath('tipoproducto/lista.html'),
                controller: 'TipoProductoController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.tipopersona', {
                url: '/tipopersona',
                templateUrl: helper.basepath('tipopersona/lista.html'),
                controller: 'TipoPersonaController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.presentacion', {
                url: '/presentacion',
                templateUrl: helper.basepath('presentacion/lista.html'),
                controller: 'PresentacionController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            //Rutas para personas
            .state('app.persona', {
                url: '/persona',
                abstract: true,
                templateUrl: helper.basepath('persona/persona.template.html')
            })
            .state('app.persona.lista', {
                url: '/lista',
                templateUrl: helper.basepath('persona/persona.lista.html'),
                controller: 'PersonaController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.persona.nuevo', {
                url: '/nuevo',
                templateUrl: helper.basepath('persona/persona.nuevo.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'moment')
            })
            .state('app.persona.editar', {
                url: '/:id/editar',
                templateUrl: helper.basepath('persona/persona.editar.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'moment')
            })
            //Rutas para Productos
            .state('app.producto', {
                url: '/producto',
                abstract: true,
                templateUrl: helper.basepath('producto/producto.template.html')
            })
            .state('app.producto.lista', {
                url: '/lista',
                templateUrl: helper.basepath('producto/producto.lista.html'),
                controller: 'ProductoController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.producto.nuevo', {
                url: '/nuevo',
                abstract: true,
                templateUrl: helper.basepath('producto/producto.nuevo.html')
            })
            .state('app.producto.nuevo.normal', {
                url: '/normal',
                templateUrl: helper.basepath('producto/producto.normal.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.producto.nuevo.combo', {
                url: '/combo',
                templateUrl: helper.basepath('producto/producto.combo.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.producto.nuevo.mixto', {
                url: '/mixto',
                templateUrl: helper.basepath('producto/producto.mixto.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            // Edicion de PRODUCTO
            .state('app.producto.editar', {
                url: '/:id/editar',
                templateUrl: helper.basepath('producto/producto.editar.html'),
                controller: 'ProductoEditarController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.producto.editarcombo', {
                url: '/:id/editarcombo',
                controller: 'ProductoEditarComboController',
                templateUrl: helper.basepath('producto/producto.editarcombo.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.producto.editarmixto', {
                url: '/:id/editarmixto',
                controller: 'ProductoEditarMixtoController',
                templateUrl: helper.basepath('producto/producto.editarmixto.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            // Vista de Productos
            .state('app.producto.ver', {
                url: '/:id/ver',
                templateUrl: helper.basepath('producto/producto.ver.html'),
                controller: 'ProductoEditarController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            //Rutas de Movimientos de Productos
            .state('app.movimiento', {
                url: '/movimiento',
                abstract: true,
                templateUrl: helper.basepath('ingreso/ingreso.template.html')
            })
            .state('app.movimiento.listaingreso', {
                url: '/listaingreso',
                controller: 'IngresoListaController',
                templateUrl: helper.basepath('ingreso/ingreso.lista.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'ngDialog', 'toaster', 'parsley', 'datatables', 'ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            .state('app.movimiento.ver', {
                url: '/:id/veringreso',
                templateUrl: helper.basepath('ingreso/ingreso.ver.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.movimiento.listasalida', {
                url: '/listasalida',
                controller: 'SalidaListaController',
                templateUrl: helper.basepath('salida/salida.lista.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'ngDialog', 'toaster', 'parsley', 'datatables', 'ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            .state('app.movimiento.ingreso', {
                url: '/ingreso',
                templateUrl: helper.basepath('ingreso/ingreso.nuevo.html'),
                controller: 'IngresoController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.movimiento.salida', {
                url: '/salida',
                templateUrl: helper.basepath('salida/salida.nuevo.html'),
                controller: 'SalidaController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'ngDialog', 'toaster', 'parsley', 'datatables', 'ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            //Rutas para usuario
            .state('page.login', {
                url: '/login',
                title: 'Login',
                templateUrl: 'app/pages/login.html',
                controller: 'LoginController',
                resolve: helper.resolveFor('toaster', 'oitozero.ngSweetAlert')
            })
            .state('app.usuario', {
                url: '/usuario',
                abstract: true,
                templateUrl: helper.basepath('usuario/usuario.template.html')
            })
            .state('app.usuario.lista', {
                url: '/lista',
                templateUrl: helper.basepath('usuario/usuario.lista.html'),
                controller: 'UsuarioController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'datatables', 'toaster', 'ngDialog')
            })
            .state('app.usuario.editar', {
                url: '/:id/editar',
                templateUrl: helper.basepath('usuario/usuario.editar.html'),
                controller: 'UsuarioEditarController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'ngDialog', 'toaster', 'parsley', 'datatables', 'ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            //Rutas para pedidos y ventas
            .state('app.venta', {
                url: '/venta',
                abstract: true,
                templateUrl: helper.basepath('venta/venta.template.html')
            })
            .state('app.venta.pedidos', {
                url: '/pedidos',
                templateUrl: helper.basepath('venta/venta.pedidos.html'),
                controller: 'PedidosListaController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.venta.pago', {
                url: '/:id/pago',
                templateUrl: helper.basepath('venta/venta.pago.html'),
                controller: 'PedidoPagoController',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            //Rutas para caja
            .state('app.caja', {
                url: '/caja',
                abstract: true,
                templateUrl: helper.basepath('caja/caja.template.html')
            })
            .state('app.autorizacion', {
                url: '/autorizacion',
                templateUrl: helper.basepath('caja/autorizacion.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.caja.activas', {
                url: '/activas',
                templateUrl: helper.basepath('caja/lista.activas.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.caja.pendientes', {
                url: '/pendientes',
                templateUrl: helper.basepath('caja/lista.pendientes.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.caja.pagadas', {
                url: '/pagadas',
                templateUrl: helper.basepath('caja/lista.pagadas.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.caja.mesas', {
                url: '/mesas',
                templateUrl: helper.basepath('caja/mesas.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.cajas', {
                url: '/cajas',
                templateUrl: helper.basepath('caja/caja.lista.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            // Ruta Configuracion del Sistema
            .state('app.configuracion', {
                url: '/configuracion',
                templateUrl: helper.basepath('configuracion/configuracion.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            // Ruta para Pagos
            .state('app.pago', {
                url: '/pago',
                templateUrl: helper.basepath('pago/lista.pago.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.pagoempleado', {
                url: '/pagoempleado',
                templateUrl: helper.basepath('pago/lista.pago.empleado.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.impresion_chica', {
                url: '/impresionchica',
                templateUrl: helper.basepath('pago/vista_impresion_chicas.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.impresion_empleado', {
                url: '/impresionempleado',
                templateUrl: helper.basepath('pago/vista_impresion_empleados.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.empleado', {
                url: '/:id/empleado',
                templateUrl: helper.basepath('pago/empleado.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.personal', {
                url: '/:id/personal',
                templateUrl: helper.basepath('pago/personal.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert', 'moment')
            })
            // Rutas para Ingreso y Egreso
            .state('app.retiro', {
                url: '/egreso',
                templateUrl: helper.basepath('depositoretiro/egreso.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            // Ruta para Reportes
            .state('app.reporteventa', {
                url: '/reporteventa',
                templateUrl: helper.basepath('reportes/reporteventa.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.cierre_cajas', {
                url: '/cierre_cajas',
                templateUrl: helper.basepath('reportes/cierre_caja.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.reporteventachica', {
                url: '/reporteventachica',
                templateUrl: helper.basepath('reportes/reporteventachica.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.productos_vendidos', {
                url: '/productos_vendidos',
                templateUrl: helper.basepath('reportes/productos_vendidos.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.presentaciones_vendidas', {
                url: '/presentaciones_vendidas',
                templateUrl: helper.basepath('reportes/presentaciones_vendidas.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.reportebailes', {
                url: '/reportebailes',
                templateUrl: helper.basepath('reportes/reportebailes.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.reportepagos', {
                url: '/reportepagos',
                templateUrl: helper.basepath('reportes/reportepagos.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.detalle_chica', {
               url: '/:id/detalle_chica',
               templateUrl: helper.basepath('reportes/detalle_chica.html'),
               resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.produccion_personal', {
                url: '/produccion_personal',
                templateUrl: helper.basepath('reportes/produccion_personal.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            //  Rutas para pedidos de cocina
            .state('app.pedidococina', {
                url: '/pedidococina',
                abstract: true,
                templateUrl: helper.basepath('pedidococina/pedidococina.template.html')
            }).state('app.pedidococina.pendiente', {
            url: '/pendientes',
            templateUrl: helper.basepath('pedidococina/pedidococina.pendiente.html'),
            resolve: helper.resolveFor('oitozero.ngSweetAlert', 'moment')
            }).state('app.pedidococina.servido', {
                url: '/servidos',
                templateUrl: helper.basepath('pedidococina/pedidococina.terminado.html'),
                resolve: helper.resolveFor('moment')
            }).state('app.baile', {
                url: '/bailes',
                templateUrl: helper.basepath('baile/baile.lista.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            });
    } // routesConfig

})();

(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage){

      // Global Settings
      // -----------------------------------
      $rootScope.app = {
        name: 'Ciancoders',
        description: 'Angular Bootstrap Admin Template',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: true,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false,
          horizontal: false,
          isFloat: false,
          asideHover: false,
          theme: null,
          asideScrollbar: false
        },
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
      };

      // Setup the layout mode
      $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h') ;

      // Restore layout settings
      if( angular.isDefined($localStorage.layout) )
        $rootScope.app.layout = $localStorage.layout;
      else
        $localStorage.layout = $rootScope.app.layout;

      $rootScope.$watch('app.layout', function () {
        $localStorage.layout = $rootScope.app.layout;
      }, true);

      // Close submenu when sidebar change from collapsed to normal
      $rootScope.$watch('app.layout.isCollapsed', function(newValue) {
        if( newValue === false )
          $rootScope.$broadcast('closeSidebarMenu');
      });

    }

})();

/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils'];
    function SidebarController($rootScope, $scope, $state, SidebarLoader,  Utils) {

        activate();

        ////////////////

        function activate() {
          var collapseList = [];

          // demo: when switch from collapse to hover, close all items
          $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
            if ( newVal === false && oldVal === true) {
              closeAllBut(-1);
            }
          });


          // Load menu from json file
          // ----------------------------------- 

          SidebarLoader.getMenu(sidebarReady);
          
          function sidebarReady(items) {
            $scope.menuItems = items;
          }

          // Handle sidebar and collapse items
          // ----------------------------------
          
          $scope.getMenuItemPropClasses = function(item) {
            return (item.heading ? 'nav-heading' : '') +
                   (isActive(item) ? ' active' : '') ;
          };

          $scope.addCollapse = function($index, item) {
            collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
          };

          $scope.isCollapse = function($index) {
            return (collapseList[$index]);
          };

          $scope.toggleCollapse = function($index, isParentItem) {

            // collapsed sidebar doesn't toggle drodopwn
            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

            // make sure the item index exists
            if( angular.isDefined( collapseList[$index] ) ) {
              if ( ! $scope.lastEventFromChild ) {
                collapseList[$index] = !collapseList[$index];
                closeAllBut($index);
              }
            }
            else if ( isParentItem ) {
              closeAllBut(-1);
            }
            
            $scope.lastEventFromChild = isChild($index);

            return true;
          
          };

          // Controller helpers
          // ----------------------------------- 

            // Check item and children active state
            function isActive(item) {

              if(!item) return;

              if( !item.sref || item.sref === '#') {
                var foundActive = false;
                angular.forEach(item.submenu, function(value) {
                  if(isActive(value)) foundActive = true;
                });
                return foundActive;
              }
              else
                return $state.is(item.sref) || $state.includes(item.sref);
            }

            function closeAllBut(index) {
              index += '';
              for(var i in collapseList) {
                if(index < 0 || index.indexOf(i) < 0)
                  collapseList[i] = true;
              }
            }

            function isChild($index) {
              /*jshint -W018*/
              return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }
        
        } // activate
    }

})();

/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];
    function sidebar ($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            template: '<nav class="sidebar" ng-transclude></nav>',
            transclude: true,
            replace: true
            // scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

          var currentState = $rootScope.$state.current.name;
          var $sidebar = element;

          var eventName = Utils.isTouch() ? 'click' : 'mouseenter' ;
          var subNav = $();

          $sidebar.on( eventName, '.nav > li', function() {

            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) {

              subNav.trigger('mouseleave');
              subNav = toggleMenuItem( $(this), $sidebar);

              // Used to detect click and touch events outside the sidebar          
              sidebarAddBackdrop();

            }

          });

          scope.$on('closeSidebarMenu', function() {
            removeFloatingNav();
          });

          // Normalize state when resize to mobile
          $win.on('resize', function() {
            if( ! Utils.isMobile() )
          	asideToggleOff();
          });

          // Adjustment on route changes
          $rootScope.$on('$stateChangeStart', function(event, toState) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            asideToggleOff();

            $rootScope.$broadcast('closeSidebarMenu');
          });

      	  // Autoclose when click outside the sidebar
          if ( angular.isDefined(attrs.sidebarAnyclickClose) ) {
            
            var wrapper = $('.wrapper');
            var sbclickEvent = 'click.sidebar';
            
            $rootScope.$watch('app.asideToggled', watchExternalClicks);

          }

          //////

          function watchExternalClicks(newVal) {
            // if sidebar becomes visible
            if ( newVal === true ) {
              $timeout(function(){ // render after current digest cycle
                wrapper.on(sbclickEvent, function(e){
                  // if not child of sidebar
                  if( ! $(e.target).parents('.aside').length ) {
                    asideToggleOff();
                  }
                });
              });
            }
            else {
              // dettach event
              wrapper.off(sbclickEvent);
            }
          }

          function asideToggleOff() {
            $rootScope.app.asideToggled = false;
            if(!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
      	  }
        }
        
        ///////

        function sidebarAddBackdrop() {
          var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
          $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
            removeFloatingNav();
          });
        }

        // Open the collapse sidebar submenu items when on touch devices 
        // - desktop only opens on hover
        function toggleTouchItem($element){
          $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
        }

        // Handles hover to open items under collapsed menu
        // ----------------------------------- 
        function toggleMenuItem($listItem, $sidebar) {

          removeFloatingNav();

          var ul = $listItem.children('ul');
          
          if( !ul.length ) return $();
          if( $listItem.hasClass('open') ) {
            toggleTouchItem($listItem);
            return $();
          }

          var $aside = $('.aside');
          var $asideInner = $('.aside-inner'); // for top offset calculation
          // float aside uses extra padding on aside
          var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);
          var subNav = ul.clone().appendTo( $aside );
          
          toggleTouchItem($listItem);

          var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
          var vwHeight = $win.height();

          subNav
            .addClass('nav-floating')
            .css({
              position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
              top:      itemTop,
              bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

          subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
          });

          return subNav;
        }

        function removeFloatingNav() {
          $('.dropdown-backdrop').remove();
          $('.sidebar-subnav.nav-floating').remove();
          $('.sidebar li.open').removeClass('open');
        }
    }


})();


(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http', '$window', '$state'];
    function SidebarLoader($http, $window, $state) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
          var grupo = $window.sessionStorage.getItem('usergroup');
          if (grupo == 1){
            var menuJson = 'server/sidebar-menu-bodeguero.json',
            menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else if (grupo == 2){
              $state.go('page.404')
          }else if (grupo == 3){
              var menuJson = 'server/sidebar-menu-cajero.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else if (grupo == 4){
              var menuJson = 'server/sidebar-menu.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else if (grupo == 5){
              var menuJson = 'server/sidebar-menu-cocina.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
          }else {
              $state.go('page.404')
          }

          onError = onError || function() { console.log(''); };
          // onError = onError || function() { alert('Failure loading menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$window', '$rootScope', '$scope'];
    function UserBlockController($window, $rootScope, $scope) {
        var vm = this;
        activate();

        ////////////////

        function activate() {
          vm.usuario = {};
          vm.usuario.ide = parseInt($window.sessionStorage.getItem('userid'));
          vm.usuario.nombre = $window.sessionStorage.getItem('username');
          $rootScope.user = {
            name:     vm.usuario.nombre,
            job:      'Usuario',
            picture:  'app/img/user/13.jpg'
          };

          // Hides/show user avatar on sidebar
          $rootScope.toggleUserBlock = function(){
            $rootScope.$broadcast('toggleUserBlock');
          };

          $rootScope.userBlockVisible = true;

          var detach = $rootScope.$on('toggleUserBlock', function(/*event, args*/) {

            $rootScope.userBlockVisible = ! $rootScope.userBlockVisible;

          });

          $scope.$on('$destroy', detach);
        }
    }
})();

/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$http'];
    function AngularGridController($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic
            var columnDefs = [
                {headerName: 'Athlete', field: 'athlete', width: 150},
                {headerName: 'Age', field: 'age', width: 90},
                {headerName: 'Country', field: 'country', width: 120},
                {headerName: 'Year', field: 'year', width: 90},
                {headerName: 'Date', field: 'date', width: 110},
                {headerName: 'Sport', field: 'sport', width: 110},
                {headerName: 'Gold', field: 'gold', width: 100},
                {headerName: 'Silver', field: 'silver', width: 100},
                {headerName: 'Bronze', field: 'bronze', width: 100},
                {headerName: 'Total', field: 'total', width: 100}
            ];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                ready: function(api){
                  api.sizeColumnsToFit();
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin','Katie Taylor','Paddy Barnes','Kenny Egan','Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [
                {headerName: 'Athlete', field: 'athlete', width: 150, filter: 'set',
                    filterParams: { cellHeight: 20, values: irishAthletes} },
                {headerName: 'Age', field: 'age', width: 90, filter: 'number'},
                {headerName: 'Country', field: 'country', width: 120},
                {headerName: 'Year', field: 'year', width: 90},
                {headerName: 'Date', field: 'date', width: 110},
                {headerName: 'Sport', field: 'sport', width: 110},
                {headerName: 'Gold', field: 'gold', width: 100, filter: 'number'},
                {headerName: 'Silver', field: 'silver', width: 100, filter: 'number'},
                {headerName: 'Bronze', field: 'bronze', width: 100, filter: 'number'},
                {headerName: 'Total', field: 'total', width: 100, filter: 'number'}
            ];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                ready: function(api){
                  api.sizeColumnsToFit();
                }

            };


            // Pinning Example

            vm.gridOptions2 = {
                columnDefs: columnDefs,
                rowData: null,
                pinnedColumnCount: 2,
                ready: function(api){
                  api.sizeColumnsToFit();
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function(res){
                    // basic
                    vm.gridOptions.api.setRowData(res.data);
                    vm.gridOptions.api.sizeColumnsToFit();
                    // filter
                    vm.gridOptions1.api.setRowData(res.data);
                    vm.gridOptions1.api.sizeColumnsToFit();

                    // pinning
                    vm.gridOptions2.api.setRowData(res.data);
                    vm.gridOptions2.api.sizeColumnsToFit();
                });

        }
    }
})();

/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];
    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Ajax

          $resource('server/datatable.json').query().$promise.then(function(persons) {
             vm.persons = persons;
          });

          // Changing data

          vm.heroes = [{
              'id': 860,
              'firstName': 'Superman',
              'lastName': 'Yoda'
            }, {
              'id': 870,
              'firstName': 'Ace',
              'lastName': 'Ventura'
            }, {
              'id': 590,
              'firstName': 'Flash',
              'lastName': 'Gordon'
            }, {
              'id': 803,
              'firstName': 'Luke',
              'lastName': 'Skywalker'
            }
          ];

          vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
          vm.dtColumnDefs = [
              DTColumnDefBuilder.newColumnDef(0),
              DTColumnDefBuilder.newColumnDef(1),
              DTColumnDefBuilder.newColumnDef(2),
              DTColumnDefBuilder.newColumnDef(3).notSortable()
          ];
          vm.person2Add = _buildPerson2Add(1);
          vm.addPerson = addPerson;
          vm.modifyPerson = modifyPerson;
          vm.removePerson = removePerson;

          function _buildPerson2Add(id) {
              return {
                  id: id,
                  firstName: 'Foo' + id,
                  lastName: 'Bar' + id
              };
          }
          function addPerson() {
              vm.heroes.push(angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function modifyPerson(index) {
              vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function removePerson(index) {
              vm.heroes.splice(index, 1);
          }

        }
    }
})();

/**=========================================================
 * Module: ng-grid.js
 * ngGrid demo
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGGridController', NGGridController);

    NGGridController.$inject = ['$scope', '$http', '$timeout'];
    function NGGridController($scope, $http, $timeout) {

        activate();

        ////////////////

        function activate() {

          $scope.filterOptions = {
              filterText: '',
              useExternalFilter: true
          };
          $scope.totalServerItems = 0;
          $scope.pagingOptions = {
              pageSizes:   [250, 500, 1000],  // page size options
              pageSize:    250,              // default page size
              currentPage: 1                 // initial page
          };

          $scope.gridOptions = {
              data:             'myData',
              enablePaging:     true,
              showFooter:       true,
              rowHeight:        36,
              headerRowHeight:  38,
              totalServerItems: 'totalServerItems',
              pagingOptions:    $scope.pagingOptions,
              filterOptions:    $scope.filterOptions
          };

          $scope.setPagingData = function(data, page, pageSize){
              // calc for pager
              var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
              // Store data from server
              $scope.myData = pagedData;
              // Update server side data length
              $scope.totalServerItems = data.length;

              if (!$scope.$$phase) {
                  $scope.$apply();
              }

          };

          $scope.getPagedDataAsync = function (pageSize, page, searchText) {
            var ngGridResourcePath = 'server/ng-grid-data.json';

            $timeout(function () {

                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.get(ngGridResourcePath).success(function (largeLoad) {
                        var data = largeLoad.filter(function(item) {
                            return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
                        });
                        $scope.setPagingData(data,page,pageSize);
                    });
                } else {
                    $http.get(ngGridResourcePath).success(function (largeLoad) {
                        $scope.setPagingData(largeLoad,page,pageSize);
                    });
                }
            }, 100);
          };


          $scope.$watch('pagingOptions', function (newVal, oldVal) {
              if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);
          $scope.$watch('filterOptions', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);

          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .service('ngTableDataService', ngTableDataService);

    function ngTableDataService() {
        /* jshint validthis:true */
        var self = this;
        this.cache = null;
        this.getData = getData;

        ////////////////

        function getData($defer, params, api) {
          // if no cache, request data and filter
          if ( ! self.cache ) {
            if ( api ) {
              api.get(function(data){
                self.cache = data;
                filterdata($defer, params);
              });
            }
          }
          else {
            filterdata($defer, params);
          }
          
          function filterdata($defer, params) {
            var from = (params.page() - 1) * params.count();
            var to = params.page() * params.count();
            var filteredData = self.cache.result.slice(from, to);

            params.total(self.cache.total);
            $defer.resolve(filteredData);
          }

        }
    }
})();

/**=========================================================
 * Module: NGTableCtrl.js
 * Controller for ngTables
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGTableCtrl', NGTableCtrl);
    /*jshint -W055 */
    NGTableCtrl.$inject = ['$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService'];
    function NGTableCtrl($filter, ngTableParams, $resource, $timeout, ngTableDataService) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
          var data = [
              {name: 'Moroni',  age: 50, money: -10   },
              {name: 'Tiancum', age: 43, money: 120   },
              {name: 'Jacob',   age: 27, money: 5.5   },
              {name: 'Nephi',   age: 29, money: -54   },
              {name: 'Enos',    age: 34, money: 110   },
              {name: 'Tiancum', age: 43, money: 1000  },
              {name: 'Jacob',   age: 27, money: -201  },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -52.5 },
              {name: 'Tiancum', age: 43, money: 52.1  },
              {name: 'Jacob',   age: 27, money: 110   },
              {name: 'Nephi',   age: 29, money: -55   },
              {name: 'Enos',    age: 34, money: 551   },
              {name: 'Tiancum', age: 43, money: -1410 },
              {name: 'Jacob',   age: 27, money: 410   },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -100  }
          ];

          // SELECT ROWS
          // ----------------------------------- 

          vm.data = data;

          vm.tableParams3 = new ngTableParams({
              page: 1,            // show first page
              count: 10          // count per page
          }, {
              total: data.length, // length of data
              getData: function ($defer, params) {
                  // use build-in angular filter
                  var filteredData = params.filter() ?
                          $filter('filter')(data, params.filter()) :
                          data;
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(filteredData, params.orderBy()) :
                          data;

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          vm.changeSelection = function(user) {
            console.info(user);
          };

          // EXPORT CSV
          // -----------------------------------  

          var data4 = [{name: 'Moroni', age: 50},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34}];

          vm.tableParams4 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: data4.length, // length of data4
              getData: function($defer, params) {
                  $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });


          // SORTING
          // ----------------------------------- 



          vm.tableParams = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              sorting: {
                  name: 'asc'     // initial sorting
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(data, params.orderBy()) :
                          data;
          
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          // FILTERS
          // ----------------------------------- 

          vm.tableParams2 = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              filter: {
                  name: '',
                  age: ''
                  // name: 'M'       // initial filter
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.filter() ?
                         $filter('filter')(data, params.filter()) :
                         data;

                  vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(vm.users);
              }
          });

          // AJAX
          
          var Api = $resource('server/table-data.json');

          vm.tableParams5 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: 0,           // length of data
              counts: [],         // hide page counts control
              getData: function($defer, params) {
                  
                  // Service using cache to avoid mutiple requests
                  ngTableDataService.getData( $defer, params, Api);
                  
                  /* direct ajax request to api (perform result pagination on the server)
                  Api.get(params.url(), function(data) {
                      $timeout(function() {
                          // update table params
                          params.total(data.total);
                          // set new data
                          $defer.resolve(data.result);
                      }, 500);
                  });
                  */
              }
          });
        }
    }
})();



/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('TablexEditableController', TablexEditableController);

    TablexEditableController.$inject = ['$filter', '$http', 'editableOptions', 'editableThemes','$q'];
    function TablexEditableController($filter, $http, editableOptions, editableThemes, $q) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // editable row
          // ----------------------------------- 
          vm.users = [
            {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
            {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
            {id: 3, name: 'awesome user3', status: 2, group: null}
          ];

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.groups = [];
          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          vm.showGroup = function(user) {
            if(user.group && vm.groups.length) {
              var selected = $filter('filter')(vm.groups, {id: user.group});
              return selected.length ? selected[0].text : 'Not set';
            } else {
              return user.groupName || 'Not set';
            }
          };

          vm.showStatus = function(user) {
            var selected = [];
            if(user.status) {
              selected = $filter('filter')(vm.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
          };

          vm.checkName = function(data, id) {
            if (id === 2 && data !== 'awesome') {
              return 'Username 2 should be `awesome`';
            }
          };

          vm.saveUser = function(data, id) {
            //vm.user not updated yet
            angular.extend(data, {id: id});
            console.log('Saving user: ' + id);
            // return $http.post('/saveUser', data);
          };

          // remove user
          vm.removeUser = function(index) {
            vm.users.splice(index, 1);
          };

          // add user
          vm.addUser = function() {
            vm.inserted = {
              id: vm.users.length+1,
              name: '',
              status: null,
              group: null,
              isNew: true
            };
            vm.users.push(vm.inserted);
          };

          // editable column
          // ----------------------------------- 


          vm.saveColumn = function(column) {
            var results = [];
            angular.forEach(vm.users, function(/*user*/) {
              // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
              console.log('Saving column: ' + column);
            });
            return $q.all(results);
          };

          // editable table
          // ----------------------------------- 

          // filter users to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.users, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          // cancel all changes
          vm.cancel = function() {
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // undelete
              if (user.isDeleted) {
                delete user.isDeleted;
              }
              // remove new 
              if (user.isNew) {
                vm.users.splice(i, 1);
              }
            }
          };

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // actually delete user
              if (user.isDeleted) {
                vm.users.splice(i, 1);
              }
              // mark as not new 
              if (user.isNew) {
                user.isNew = false;
              }

              // send on server
              // results.push($http.post('/saveUser', user));
              console.log('Saving Table...');
            }

            return $q.all(results);
          };

        }
    }
})();

/**=========================================================
 * Module: UIGridController
  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];
    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Basic example
          // ----------------------------------- 

          vm.gridOptions = {
            rowHeight: 34,
            data: [
              {
                  'name': 'Wilder Gonzales',
                  'gender': 'male',
                  'company': 'Geekko'
              },
              {
                  'name': 'Georgina Schultz',
                  'gender': 'female',
                  'company': 'Suretech'
              },
              {
                  'name': 'Carroll Buchanan',
                  'gender': 'male',
                  'company': 'Ecosys'
              },
              {
                  'name': 'Valarie Atkinson',
                  'gender': 'female',
                  'company': 'Hopeli'
              },
              {
                  'name': 'Schroeder Mathews',
                  'gender': 'male',
                  'company': 'Polarium'
              },
              {
                  'name': 'Ethel Price',
                  'gender': 'female',
                  'company': 'Enersol'
              },
              {
                  'name': 'Claudine Neal',
                  'gender': 'female',
                  'company': 'Sealoud'
              },
              {
                  'name': 'Beryl Rice',
                  'gender': 'female',
                  'company': 'Velity'
              },
              {
                  'name': 'Lynda Mendoza',
                  'gender': 'female',
                  'company': 'Dogspa'
              },
              {
                  'name': 'Sarah Massey',
                  'gender': 'female',
                  'company': 'Bisba'
              },
              {
                  'name': 'Robles Boyle',
                  'gender': 'male',
                  'company': 'Comtract'
              },
              {
                  'name': 'Evans Hickman',
                  'gender': 'male',
                  'company': 'Parleynet'
              },
              {
                  'name': 'Dawson Barber',
                  'gender': 'male',
                  'company': 'Dymi'
              },
              {
                  'name': 'Bruce Strong',
                  'gender': 'male',
                  'company': 'Xyqag'
              },
              {
                  'name': 'Nellie Whitfield',
                  'gender': 'female',
                  'company': 'Exospace'
              },
              {
                  'name': 'Jackson Macias',
                  'gender': 'male',
                  'company': 'Aquamate'
              },
              {
                  'name': 'Pena Pena',
                  'gender': 'male',
                  'company': 'Quarx'
              },
              {
                  'name': 'Lelia Gates',
                  'gender': 'female',
                  'company': 'Proxsoft'
              },
              {
                  'name': 'Letitia Vasquez',
                  'gender': 'female',
                  'company': 'Slumberia'
              },
              {
                  'name': 'Trevino Moreno',
                  'gender': 'male',
                  'company': 'Conjurica'
              }
            ]
          };
          
          // Complex example
          // ----------------------------------- 

          var data = [];
           
          vm.gridOptionsComplex = {
              showGridFooter: true,
              showColumnFooter: true,
              enableFiltering: true,
              columnDefs: [
                  { field: 'name', width: '13%' },
                  { field: 'address.street',aggregationType: uiGridConstants.aggregationTypes.sum, width: '13%' },
                  { field: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, aggregationHideLabel: true, width: '13%' },
                  { name: 'ageMin', field: 'age', aggregationType: uiGridConstants.aggregationTypes.min, width: '13%', displayName: 'Age for min' },
                  { name: 'ageMax', field: 'age', aggregationType: uiGridConstants.aggregationTypes.max, width: '13%', displayName: 'Age for max' },
                  { name: 'customCellTemplate', 
                    field: 'age', 
                    width: '14%', 
                    footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>' 
                  },
                  { name: 'registered', field: 'registered', width: '20%', cellFilter: 'date', footerCellFilter: 'date', aggregationType: uiGridConstants.aggregationTypes.max }
              ],
              data: data,
              onRegisterApi: function(gridApi) {
                vm.gridApi = gridApi;
              }
          };
           
          $http.get('server/uigrid-complex.json')
            .success(function(data) {
              data.forEach( function(row) {
                row.registered = Date.parse(row.registered);
              });
              vm.gridOptionsComplex.data = data;
            });


           vm.gridOptions1 = {
              paginationPageSizes: [25, 50, 75],
              paginationPageSize: 25,
              columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' }
              ]
            };
           
            $http.get('server/uigrid-100.json')
            .success(function (data) {
              vm.gridOptions1.data = data;
            });

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix : 'app/i18n/',
          suffix : '.json'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];
    
    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
          'en':       'English',
          'es_AR':    'Español'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();
/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {
                  
                  screenfull.toggle();
                  
                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }
        
        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('click', function(){
            $timeout(function(){
              // all IE friendly dispatchEvent
              var evt = document.createEvent('UIEvents');
              evt.initUIEvent('resize', true, false, $window, 0);
              $window.dispatchEvent(evt);
              // modern dispatchEvent way
              // $window.dispatchEvent(new Event('resize'));
            });
          });
        }
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },
          
          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();

/**=========================================================
 * Module: chartist.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartistController', ChartistController);

    function ChartistController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Line chart
          // ----------------------------------- 

          vm.lineData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
              [12, 9, 7, 8, 5],
              [2, 1, 3.5, 7, 3],
              [1, 3, 4, 5, 6]
            ]
          };

          vm.lineOptions = {
            fullWidth: true,
            height: 220,
            chartPadding: {
              right: 40
            }
          };

          // Bar bipolar
          // ----------------------------------- 

          vm.barBipolarOptions = {
            high: 10,
            low: -10,
            height: 220,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          };

          vm.barBipolarData = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
          };


          // Bar horizontal
          // ----------------------------------- 

          vm.barHorizontalData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
              [5, 4, 3, 7, 5, 10, 3],
              [3, 2, 9, 5, 4, 6, 4]
            ]
          };

          vm.barHorizontalOptions = {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            height: 220,
            axisY: {
              offset: 70
            }
          };

          // Smil Animations
          // ----------------------------------- 

          // Let's put a sequence number aside so we can use it in the event callbacks
          var seq = 0,
            delays = 80,
            durations = 500;

          vm.smilData = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
              [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
              [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
              [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
          };

          vm.smilOptions = {
            low: 0,
            height: 260
          };

          vm.smilEvents = {
            created: function() {
              seq = 0;
            },
            draw: function(data) {
              seq++;

              if(data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                  opacity: {
                    // The delay when we like to start the animation
                    begin: seq * delays + 1000,
                    // Duration of the animation
                    dur: durations,
                    // The value where the animation should start
                    from: 0,
                    // The value where it should end
                    to: 1
                  }
                });
              } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                  y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    // We can specify an easing function from Chartist.Svg.Easing
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                  x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'point') {
                data.element.animate({
                  x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                  }
                });
              } 
            }
          };


          // SVG PATH animation
          // ----------------------------------- 

          vm.pathData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
              [1, 5, 2, 5, 4, 3],
              [2, 3, 4, 8, 1, 2],
              [5, 4, 3, 2, 1, 0.5]
            ]
          };

          vm.pathOptions = {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            height: 260
          };

          vm.pathEvents = {
            draw: function(data) {
              if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                  d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                  }
                });
              }
            }
          };

        }
    }
})();


/**=========================================================
 * Module: chart.controller.js
 * Controller for ChartJs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartJSController', ChartJSController);

    ChartJSController.$inject = ['Colors'];
    function ChartJSController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // random values for demo
          var rFactor = function(){ return Math.round(Math.random()*100); };

          // Line chart
          // ----------------------------------- 

          vm.lineData = {
              labels : ['January','February','March','April','May','June','July'],
              datasets : [
                {
                  label: 'My First dataset',
                  fillColor : 'rgba(114,102,186,0.2)',
                  strokeColor : 'rgba(114,102,186,1)',
                  pointColor : 'rgba(114,102,186,1)',
                  pointStrokeColor : '#fff',
                  pointHighlightFill : '#fff',
                  pointHighlightStroke : 'rgba(114,102,186,1)',
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                },
                {
                  label: 'My Second dataset',
                  fillColor : 'rgba(35,183,229,0.2)',
                  strokeColor : 'rgba(35,183,229,1)',
                  pointColor : 'rgba(35,183,229,1)',
                  pointStrokeColor : '#fff',
                  pointHighlightFill : '#fff',
                  pointHighlightStroke : 'rgba(35,183,229,1)',
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                }
              ]
            };


          vm.lineOptions = {
            scaleShowGridLines : true,
            scaleGridLineColor : 'rgba(0,0,0,.05)',
            scaleGridLineWidth : 1,
            bezierCurve : true,
            bezierCurveTension : 0.4,
            pointDot : true,
            pointDotRadius : 4,
            pointDotStrokeWidth : 1,
            pointHitDetectionRadius : 20,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            datasetFill : true,
          };


          // Bar chart
          // ----------------------------------- 

          vm.barData = {
              labels : ['January','February','March','April','May','June','July'],
              datasets : [
                {
                  fillColor : Colors.byName('info'),
                  strokeColor : Colors.byName('info'),
                  highlightFill: Colors.byName('info'),
                  highlightStroke: Colors.byName('info'),
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                },
                {
                  fillColor : Colors.byName('primary'),
                  strokeColor : Colors.byName('primary'),
                  highlightFill : Colors.byName('primary'),
                  highlightStroke : Colors.byName('primary'),
                  data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
                }
              ]
          };
          
          vm.barOptions = {
            scaleBeginAtZero : true,
            scaleShowGridLines : true,
            scaleGridLineColor : 'rgba(0,0,0,.05)',
            scaleGridLineWidth : 1,
            barShowStroke : true,
            barStrokeWidth : 2,
            barValueSpacing : 5,
            barDatasetSpacing : 1,
          };


          //  Doughnut chart
          // ----------------------------------- 
          
          vm.doughnutData = [
                {
                  value: 300,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Purple'
                },
                {
                  value: 50,
                  color: Colors.byName('info'),
                  highlight: Colors.byName('info'),
                  label: 'Info'
                },
                {
                  value: 100,
                  color: Colors.byName('yellow'),
                  highlight: Colors.byName('yellow'),
                  label: 'Yellow'
                }
              ];

          vm.doughnutOptions = {
            segmentShowStroke : true,
            segmentStrokeColor : '#fff',
            segmentStrokeWidth : 2,
            percentageInnerCutout : 85,
            animationSteps : 100,
            animationEasing : 'easeOutBounce',
            animateRotate : true,
            animateScale : false
          };

          // Pie chart
          // ----------------------------------- 

          vm.pieData =[
                {
                  value: 300,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Purple'
                },
                {
                  value: 40,
                  color: Colors.byName('yellow'),
                  highlight: Colors.byName('yellow'),
                  label: 'Yellow'
                },
                {
                  value: 120,
                  color: Colors.byName('info'),
                  highlight: Colors.byName('info'),
                  label: 'Info'
                }
              ];

          vm.pieOptions = {
            segmentShowStroke : true,
            segmentStrokeColor : '#fff',
            segmentStrokeWidth : 2,
            percentageInnerCutout : 0, // Setting this to zero convert a doughnut into a Pie
            animationSteps : 100,
            animationEasing : 'easeOutBounce',
            animateRotate : true,
            animateScale : false
          };

          // Polar chart
          // ----------------------------------- 
          
          vm.polarData = [
                {
                  value: 300,
                  color: Colors.byName('pink'),
                  highlight: Colors.byName('pink'),
                  label: 'Red'
                },
                {
                  value: 50,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Green'
                },
                {
                  value: 100,
                  color: Colors.byName('pink'),
                  highlight: Colors.byName('pink'),
                  label: 'Yellow'
                },
                {
                  value: 140,
                  color: Colors.byName('purple'),
                  highlight: Colors.byName('purple'),
                  label: 'Grey'
                },
              ];

          vm.polarOptions = {
            scaleShowLabelBackdrop : true,
            scaleBackdropColor : 'rgba(255,255,255,0.75)',
            scaleBeginAtZero : true,
            scaleBackdropPaddingY : 1,
            scaleBackdropPaddingX : 1,
            scaleShowLine : true,
            segmentShowStroke : true,
            segmentStrokeColor : '#fff',
            segmentStrokeWidth : 2,
            animationSteps : 100,
            animationEasing : 'easeOutBounce',
            animateRotate : true,
            animateScale : false
          };


          // Radar chart
          // ----------------------------------- 

          vm.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
              {
                label: 'My First dataset',
                fillColor: 'rgba(114,102,186,0.2)',
                strokeColor: 'rgba(114,102,186,1)',
                pointColor: 'rgba(114,102,186,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(114,102,186,1)',
                data: [65,59,90,81,56,55,40]
              },
              {
                label: 'My Second dataset',
                fillColor: 'rgba(151,187,205,0.2)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151,187,205,1)',
                data: [28,48,40,19,96,27,100]
              }
            ]
          };

          vm.radarOptions = {
            scaleShowLine : true,
            angleShowLineOut : true,
            scaleShowLabels : false,
            scaleBeginAtZero : true,
            angleLineColor : 'rgba(0,0,0,.1)',
            angleLineWidth : 1,
            /*jshint -W109*/
            pointLabelFontFamily : "'Arial'",
            pointLabelFontStyle : 'bold',
            pointLabelFontSize : 10,
            pointLabelFontColor : '#565656',
            pointDot : true,
            pointDotRadius : 3,
            pointDotStrokeWidth : 1,
            pointHitDetectionRadius : 20,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            datasetFill : true
          };
        }
    }
})();

/**=========================================================
 * Module: chart.js
 * Wrapper directive for chartJS. 
 * Based on https://gist.github.com/AndreasHeiberg/9837868
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        /* Aliases for various chart types */
        .directive('linechart',     chartJS('Line')      )
        .directive('barchart',      chartJS('Bar')       )
        .directive('radarchart',    chartJS('Radar')     )
        .directive('polarchart',    chartJS('PolarArea') )
        .directive('piechart',      chartJS('Pie')       )
        .directive('doughnutchart', chartJS('Doughnut')  )
        .directive('donutchart',    chartJS('Doughnut')  )
        ;

    function chartJS(type) {
        return function() {
            return {
                restrict: 'A',
                scope: {
                    data: '=',
                    options: '=',
                    id: '@',
                    width: '=',
                    height: '=',
                    resize: '=',
                    chart: '@',
                    segments: '@',
                    responsive: '=',
                    tooltip: '=',
                    legend: '='
                },
                link: function ($scope, $elem) {
                    var ctx = $elem[0].getContext('2d');
                    var autosize = false;

                    $scope.size = function () {
                        if ($scope.width <= 0) {
                            $elem.width($elem.parent().width());
                            ctx.canvas.width = $elem.width();
                        } else {
                            ctx.canvas.width = $scope.width || ctx.canvas.width;
                            autosize = true;
                        }

                        if($scope.height <= 0){
                            $elem.height($elem.parent().height());
                            ctx.canvas.height = ctx.canvas.width / 2;
                        } else {
                            ctx.canvas.height = $scope.height || ctx.canvas.height;
                            autosize = true;
                        }
                    };

                    $scope.$watch('data', function (newVal) {
                        if(chartCreated)
                            chartCreated.destroy();

                        // if data not defined, exit
                        if (!newVal) {
                            return;
                        }
                        if ($scope.chart) { type = $scope.chart; }

                        if(autosize){
                            $scope.size();
                            chart = new Chart(ctx);
                        }

                        if($scope.responsive || $scope.resize)
                            $scope.options.responsive = true;

                        if($scope.responsive !== undefined)
                            $scope.options.responsive = $scope.responsive;

                        chartCreated = chart[type]($scope.data, $scope.options);
                        chartCreated.update();
                        if($scope.legend)
                            angular.element($elem[0]).parent().after( chartCreated.generateLegend() );
                    }, true);

                    $scope.$watch('tooltip', function (newVal) {
                        if (chartCreated)
                            chartCreated.draw();
                        if(newVal===undefined || !chartCreated.segments)
                            return;
                        if(!isFinite(newVal) || newVal >= chartCreated.segments.length || newVal < 0)
                            return;
                        var activeSegment = chartCreated.segments[newVal];
                        activeSegment.save();
                        activeSegment.fillColor = activeSegment.highlightColor;
                        chartCreated.showTooltip([activeSegment]);
                        activeSegment.restore();
                    }, true);

                    $scope.size();
                    var chart = new Chart(ctx);
                    var chartCreated;
                }
            };
        };
    }
})();





/**=========================================================
 * Module: classy-loader.js
 * Enable use of classyloader directly from data attributes
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('classyloader', classyloader);

    classyloader.$inject = ['$timeout', 'Utils', '$window'];
    function classyloader ($timeout, Utils, $window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $scroller       = $($window),
              inViewFlagClass = 'js-is-in-view'; // a classname to detect when a chart has been triggered after scroll

          // run after interpolation  
          $timeout(function(){
      
            var $element = $(element),
                options  = $element.data();
            
            // At lease we need a data-percentage attribute
            if(options) {
              if( options.triggerInView ) {

                $scroller.scroll(function() {
                  checkLoaderInVIew($element, options);
                });
                // if the element starts already in view
                checkLoaderInVIew($element, options);
              }
              else
                startLoader($element, options);
            }

          }, 0);

          function checkLoaderInVIew(element, options) {
            var offset = -20;
            if( ! element.hasClass(inViewFlagClass) &&
                Utils.isInView(element, {topoffset: offset}) ) {
              startLoader(element, options);
            }
          }
          function startLoader(element, options) {
            element.ClassyLoader(options).addClass(inViewFlagClass);
          }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.charts')
        .service('ChartData', ChartData);

    ChartData.$inject = ['$resource'];
    function ChartData($resource) {
        this.load = load;

        ////////////////
      
        var opts = {
            get: { method: 'GET', isArray: true }
          };
        function load(source) {
          return $resource(source, {}, opts).get();
        }
    }
})();

/**=========================================================
 * Module: flot-chart.js
 * Setup options and data for flot chart directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('FlotChartController', FlotChartController);

    FlotChartController.$inject = ['$scope', 'ChartData', '$timeout'];
    function FlotChartController($scope, ChartData, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // BAR
          // -----------------------------------
          vm.barData = ChartData.load('server/chart/bar.json');
          vm.barOptions = {
              series: {
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // BAR STACKED
          // -----------------------------------
          vm.barStackeData = ChartData.load('server/chart/barstacked.json');
          vm.barStackedOptions = {
              series: {
                  stack: true,
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 200, // optional: use it for a clear represetation
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // SPLINE
          // -----------------------------------
          vm.splineData = ChartData.load('server/chart/spline.json');
          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };

          // AREA
          // -----------------------------------
          vm.areaData = ChartData.load('server/chart/area.json');
          vm.areaOptions = {
              series: {
                  lines: {
                      show: true,
                      fill: 0.8
                  },
                  points: {
                      show: true,
                      radius: 4
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v + ' visitors';
                  }
              },
              shadowSize: 0
          };

          // LINE
          // -----------------------------------
          vm.lineData = ChartData.load('server/chart/line.json');
          vm.lineOptions = {
              series: {
                  lines: {
                      show: true,
                      fill: 0.01
                  },
                  points: {
                      show: true,
                      radius: 4
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#eee',
                  mode: 'categories'
              },
              yaxis: {
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // PIE
          // -----------------------------------
          vm.pieData = [{
              "label": "jQuery",
              "color": "#4acab4",
              "data": 30
            }, {
              "label": "CSS",
              "color": "#ffea88",
              "data": 40
            }, {
              "label": "LESS",
              "color": "#ff8153",
              "data": 90
            }, {
              "label": "SASS",
              "color": "#878bb6",
              "data": 75
            }, {
              "label": "Jade",
              "color": "#b2d767",
              "data": 120
            }];
          // Direct data temporarily added until fix: https://github.com/flot/flot/pull/1462
          // ChartData.load('server/chart/pie.json');

          vm.pieOptions = {
              series: {
                  pie: {
                      show: true,
                      innerRadius: 0,
                      label: {
                          show: true,
                          radius: 0.8,
                          formatter: function (label, series) {
                              return '<div class="flot-pie-label">' +
                              //label + ' : ' +
                              Math.round(series.percent) +
                              '%</div>';
                          },
                          background: {
                              opacity: 0.8,
                              color: '#222'
                          }
                      }
                  }
              }
          };

          // DONUT
          // -----------------------------------
          vm.donutData = [ { "color" : "#39C558",
                "data" : 60,
                "label" : "Coffee"
              },
              { "color" : "#00b4ff",
                "data" : 90,
                "label" : "CSS"
              },
              { "color" : "#FFBE41",
                "data" : 50,
                "label" : "LESS"
              },
              { "color" : "#ff3e43",
                "data" : 80,
                "label" : "Jade"
              },
              { "color" : "#937fc7",
                "data" : 116,
                "label" : "AngularJS"
              }
            ];
          // Direct data temporarily added until fix: https://github.com/flot/flot/pull/1462
          // ChartData.load('server/chart/donut.json');

          vm.donutOptions = {
              series: {
                  pie: {
                      show: true,
                      innerRadius: 0.5 // This makes the donut shape
                  }
              }
          };

          // REALTIME
          // -----------------------------------
          vm.realTimeOptions = {
              series: {
                lines: { show: true, fill: true, fillColor:  { colors: ['#a0e0f3', '#23b7e5'] } },
                shadowSize: 0 // Drawing is faster without shadows
              },
              grid: {
                  show:false,
                  borderWidth: 0,
                  minBorderMargin: 20,
                  labelMargin: 10
              },
              xaxis: {
                tickFormatter: function() {
                    return '';
                }
              },
              yaxis: {
                  min: 0,
                  max: 110
              },
              legend: {
                  show: true
              },
              colors: ['#23b7e5']
          };

          // Generate random data for realtime demo
          var data = [], totalPoints = 300;

          update();

          function getRandomData() {
            if (data.length > 0)
              data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
              var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
              if (y < 0) {
                y = 0;
              } else if (y > 100) {
                y = 100;
              }
              data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
              res.push([i, data[i]]);
            }
            return [res];
          }
          function update() {
            vm.realTimeData = getRandomData();
            $timeout(update, 30);
          }
          // end random data generation


          // PANEL REFRESH EVENTS
          // -----------------------------------

          $scope.$on('panel-refresh', function(event, id) {

            console.log('Simulating chart refresh during 3s on #'+id);

            // Instead of timeout you can request a chart data
            $timeout(function(){

              // directive listen for to remove the spinner
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);

              console.log('Refreshed #' + id);

            }, 3000);

          });


          // PANEL DISMISS EVENTS
          // -----------------------------------

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){

            console.log('Panel #' + id + ' removing');

            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();

          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

        }
    }
})();

/**=========================================================
 * Module: flot.js
 * Initializes the Flot chart plugin and handles data refresh
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('flot', flot);

    flot.$inject = ['$http', '$timeout'];
    function flot ($http, $timeout) {

        var directive = {
          restrict: 'EA',
          template: '<div></div>',
          scope: {
            dataset: '=?',
            options: '=',
            series: '=',
            callback: '=',
            src: '='
          },
          link: link
        };
        return directive;

        function link(scope, element, attrs) {
          var height, plot, plotArea, width;
          var heightDefault = 220;

          plot = null;

          width = attrs.width || '100%';
          height = attrs.height || heightDefault;

          plotArea = $(element.children()[0]);
          plotArea.css({
            width: width,
            height: height
          });

          function init() {
            var plotObj;
            if(!scope.dataset || !scope.options) return;
            plotObj = $.plot(plotArea, scope.dataset, scope.options);
            scope.$emit('plotReady', plotObj);
            if (scope.callback) {
              scope.callback(plotObj, scope);
            }

            return plotObj;
          }

          function onDatasetChanged(dataset) {
            if (plot) {
              plot.setData(dataset);
              plot.setupGrid();
              return plot.draw();
            } else {
              plot = init();
              onSerieToggled(scope.series);
              return plot;
            }
          }
          scope.$watchCollection('dataset', onDatasetChanged, true);

          function onSerieToggled (series) {
            if( !plot || !series ) return;
            var someData = plot.getData();
            for(var sName in series) {
              angular.forEach(series[sName], toggleFor(sName));
            }
            
            plot.setData(someData);
            plot.draw();
            
            function toggleFor(sName) {
              return function (s, i){
                if(someData[i] && someData[i][sName])
                  someData[i][sName].show = s;
              };
            }
          }
          scope.$watch('series', onSerieToggled, true);
          
          function onSrcChanged(src) {

            if( src ) {

              $http.get(src)
                .success(function (data) {

                  $timeout(function(){
                    scope.dataset = data;
                  });

              }).error(function(){
                $.error('Flot chart: Bad request.');
              });
              
            }
          }
          scope.$watch('src', onSrcChanged);

        }
    }


})();

/**=========================================================
 * Module: morris.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartMorrisController', ChartMorrisController);

    ChartMorrisController.$inject = ['$timeout', 'Colors'];
    function ChartMorrisController($timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
         vm.chartdata = [
              { y: '2006', a: 100, b: 90 },
              { y: '2007', a: 75,  b: 65 },
              { y: '2008', a: 50,  b: 40 },
              { y: '2009', a: 75,  b: 65 },
              { y: '2010', a: 50,  b: 40 },
              { y: '2011', a: 75,  b: 65 },
              { y: '2012', a: 100, b: 90 }
          ];

          /* test data update
          $timeout(function(){
            vm.chartdata[0].a = 50;
            vm.chartdata[0].b = 50;
          }, 3000); */

          vm.donutdata = [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales',value: 30},
            {label: 'Mail-Order Sales', value: 20}
          ];

          vm.donutOptions = {
            Colors: [ Colors.byName('danger'), Colors.byName('yellow'), Colors.byName('warning') ],
            resize: true
          };

          vm.barOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            xLabelMargin: 2,
            barColors: [ Colors.byName('info'), Colors.byName('danger') ],
            resize: true
          };

          vm.lineOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: ['#31C0BE', '#7a92a3'],
            resize: true
          };

          vm.areaOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: [ Colors.byName('purple'), Colors.byName('info') ],
            resize: true
          };

        }
    }
})();

/**=========================================================
 * Module: morris.js
 * AngularJS Directives for Morris Charts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('morrisBar',   morrisChart('Bar')   )
        .directive('morrisDonut', morrisChart('Donut') )
        .directive('morrisLine',  morrisChart('Line')  )
        .directive('morrisArea',  morrisChart('Area')  );

    function morrisChart(type) {
      return function () {
        return {
          restrict: 'EA',
          scope: {
            morrisData: '=',
            morrisOptions: '='
          },
          link: function($scope, element) {
            // start ready to watch for changes in data
            $scope.$watch('morrisData', function(newVal) {
              if (newVal) {
                $scope.morrisInstance.setData(newVal);
                $scope.morrisInstance.redraw();
              }
            }, true);
            // the element that contains the chart
            $scope.morrisOptions.element = element;
            // If data defined copy to options
            if($scope.morrisData)
              $scope.morrisOptions.data = $scope.morrisData;
            // Init chart
            $scope.morrisInstance = new Morris[type]($scope.morrisOptions);

          }
        };
      };
    }

})();

/**=========================================================
 * Module: PieChartsController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('PieChartsController', PieChartsController);

    /*jshint -W069*/
    PieChartsController.$inject = ['Colors'];

    function PieChartsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // KNOB Charts

          vm.knobLoaderData1 = 80;
          vm.knobLoaderOptions1 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('info')
            };

          vm.knobLoaderData2 = 45;
          vm.knobLoaderOptions2 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('purple'),
              readOnly : true
            };

          vm.knobLoaderData3 = 30;
          vm.knobLoaderOptions3 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('pink'),
              displayPrevious : true,
              thickness : 0.1,
              lineCap : 'round'
            };

          vm.knobLoaderData4 = 20;
          vm.knobLoaderOptions4 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('info'),
              bgColor: Colors.byName('gray'),
              angleOffset: -125,
              angleArc: 250
            };

          // Easy Pie Charts

          vm.piePercent1 = 85;
          vm.piePercent2 = 45;
          vm.piePercent3 = 25;
          vm.piePercent4 = 60;

          vm.pieOptions1 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('success'),
              trackColor: false,
              scaleColor: false,
              lineWidth: 10,
              lineCap: 'circle'
          };

          vm.pieOptions2= {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('warning'),
              trackColor: false,
              scaleColor: false,
              lineWidth: 4,
              lineCap: 'circle'
          };

          vm.pieOptions3 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('danger'),
              trackColor: false,
              scaleColor: Colors.byName('gray'),
              lineWidth: 15,
              lineCap: 'circle'
          };

          vm.pieOptions4 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('danger'),
              trackColor: Colors.byName('yellow'),
              scaleColor: Colors.byName('gray-dark'),
              lineWidth: 15,
              lineCap: 'circle'
          };

          vm.randomize = function(type) {
            if ( type === 'easy') {
              vm.piePercent1 = random();
              vm.piePercent2 = random();
              vm.piePercent3 = random();
              vm.piePercent4 = random();
            }
            if ( type === 'knob') {
              vm.knobLoaderData1 = random();
              vm.knobLoaderData2 = random();
              vm.knobLoaderData3 = random();
              vm.knobLoaderData4 = random();
            }
          }

          function random() { return Math.floor((Math.random() * 100) + 1); }

        }
    }
})();

/**=========================================================
 * Module: rickshaw.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartRickshawController', ChartRickshawController);

    function ChartRickshawController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.renderers = [{
                  id: 'area',
                  name: 'Area'
              }, {
                  id: 'line',
                  name: 'Line'
              }, {
                  id: 'bar',
                  name: 'Bar'
              }, {
                  id: 'scatterplot',
                  name: 'Scatterplot'
              }];

          vm.palettes = [
              'spectrum14',
              'spectrum2000',
              'spectrum2001',
              'colorwheel',
              'cool',
              'classic9',
              'munin'
          ];

          vm.rendererChanged = function(id) {
              vm['options' + id] = {
                  renderer: vm['renderer' + id].id
              };
          };

          vm.paletteChanged = function(id) {
              vm['features' + id] = {
                  palette: vm['palette' + id]
              };
          };

          vm.changeSeriesData = function(id) {
              var seriesList = [];
              for (var i = 0; i < 3; i++) {
                  var series = {
                      name: 'Series ' + (i + 1),
                      data: []
                  };
                  for (var j = 0; j < 10; j++) {
                      series.data.push({x: j, y: Math.random() * 20});
                  }
                  seriesList.push(series);
                  vm['series' + id][i] = series;
              }
              //vm['series' + id] = seriesList;
          };

          vm.series0 = [];

          vm.options0 = {
            renderer: 'area'
          };

          vm.renderer0 = vm.renderers[0];
          vm.palette0 = vm.palettes[0];

          vm.rendererChanged(0);
          vm.paletteChanged(0);
          vm.changeSeriesData(0);  

          // Graph 2

          var seriesData = [ [], [], [] ];
          var random = new Rickshaw.Fixtures.RandomData(150);

          for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
          }

          vm.series2 = [
            {
              color: '#c05020',
              data: seriesData[0],
              name: 'New York'
            }, {
              color: '#30c020',
              data: seriesData[1],
              name: 'London'
            }, {
              color: '#6060c0',
              data: seriesData[2],
              name: 'Tokyo'
            }
          ];

          vm.options2 = {
            renderer: 'area'
          };

        }
    }
})();

/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/
 
(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    function sparkline () {
        var directive = {
            restrict: 'EA',
            scope: {
              'sparkline': '='
            },
            controller: Controller
        };
        return directive;

    }
    Controller.$inject = ['$scope', '$element', '$timeout', '$window'];
    function Controller($scope, $element, $timeout, $window) {
      var runSL = function(){
        initSparLine();
      };

      $timeout(runSL);
  
      function initSparLine() {
        var options = $scope.sparkline,
            data = $element.data();
        
        if(!options) // if no scope options, try with data attributes
          options = data;
        else
          if(data) // data attributes overrides scope options
            options = angular.extend({}, options, data);

        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;

        $element.sparkline('html', options);

        if(options.resize) {
          $($window).resize(function(){
            $element.sparkline('html', options);
          });
        }
      }

    }
    

})();

(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'angle',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();

// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function() {
    'use strict';

    angular
        .module('custom')
        .controller('Controller', Controller);

    Controller.$inject = ['$log'];
    function Controller($log) {
        // for controllerAs syntax
        // var vm = this;

        activate();

        ////////////////

        function activate() {
          $log.log('I\'m a line from custom.js');
        }
    }
})();

(function() {
    'use strict';
    angular
        .module('app.baile', []);
})();

(function() {
    'use strict';

    angular
        .module('app.configuracion', []);
})();

(function() {
  'use strict';

  angular
      .module('app.caja', []);
})();

(function() {
    'use strict';

    angular
        .module('app.cuenta', []);
})();

(function() {
    'use strict';

    angular
        .module('app.depositoretiro', []);
})();

(function() {
    'use strict';

    angular
        .module('app.empresacuenta', []);
})();

(function() {
    'use strict';
    angular
        .module('app.detallemovimiento', []);
})();

(function() {
    'use strict';

    angular
        .module('app.formapago', []);
})();

(function() {
  'use strict';

  angular
    .module('app.login', []);
})();

(function() {
    'use strict';
    angular
        .module('app.movimiento', []);
})();

(function() {
    'use strict';

    angular
        .module('app.pago', []);
})();

(function() {
    'use strict';

    angular
        .module('app.pedidococina', []);
})();

(function() {
  'use strict';

  angular
    .module('app.perfilusuario', []);
})();

(function() {
    'use strict';

    angular
        .module('app.persona', []);
})();

(function() {
    'use strict';

    angular
        .module('app.personacuenta', []);
})();

(function() {
    'use strict';
    angular
        .module('app.presentacion', []);
})();
(function() {
    'use strict';
    angular
        .module('app.producto', []);
})();
(function() {
    'use strict';

    angular
        .module('app.productopresentacion', []);
})();

(function() {
    'use strict';

    angular
        .module('app.reporteventa', []);
})();

(function() {
    'use strict';

    angular
        .module('app.tipopersona', []);
})();
(function() {
    'use strict';

    angular
        .module('app.tipoproducto', []);
})();
(function() {
    'use strict';

    angular
        .module('app.tipodepositoretiro', []);
})();

(function() {
    'use strict';

    angular
        .module('app.usuario', []);
})();

(function() {
    'use strict';

    angular
        .module('app.venta', []);
})();

(function() {
    'use strict';

    angular
        .module('app.baile')
        .controller('BaileController', BaileController);

    BaileController.$inject = ['$window', 'BaileService', 'SweetAlert', 'Notify'];

    function BaileController($window, BaileService, SweetAlert, Notify) {
        var vm = this;
        activate();

        function activate() {
            vm.show = false;
            vm.baile = {
                id: 0,
                parent: null
            };

            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'nombre_baile',
                reverse: false,
                search: '',
                totalItems: 0
            };

            /**
             * Carga todas las bailes desde el backend
             */
            vm.load = function() {
                vm.bailes = null;
                vm.listaTree = [];
                BaileService.list({
                    page: vm.pagingInfo.page,
                    limit: vm.pagingInfo.itemsPerPage,
                    order: vm.pagingInfo.sortBy,
                    query: vm.pagingInfo.search
                }, function(data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.load(); // Cargamos la lista

            /**
             * Determina la ordenacion a aplicar en la lista en base al campo indicado
             * @param sortBy: campo a ordenar
             */
            vm.sort = function (sortBy) {
                if (sortBy === vm.pagingInfo.sortBy)
                    vm.pagingInfo.sortBy = '-' + sortBy;
                else
                    vm.pagingInfo.sortBy = sortBy;

                vm.pagingInfo.page = 1;
                vm.load();
            };

            /**
             * Muestra el dialogo para agregar nuevos elementos a la BD
             * @param show: booleano que determina si se muestra u oculta
             */
            vm.showAdd = function(show) {
                vm.show = show;
                if (!vm.show) {
                    vm.baileForm.$setPristine();
                    vm.baile = {
                        id: 0
                    };
                }
            };

            /**
             * Actualiza la pagina seleccionada
             * @para page: numero de pagina a mostrar
             */
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.load();
            };

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.create = function() {
                var baile = {
                    nombre_baile: vm.baile.nombre_baile,
                    costo: vm.baile.costo
                };
                BaileService.create(baile, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    vm.baile = {
                        id: 0,
                        parent: null
                    };
                    vm.show = false;
                    vm.load();
                    vm.baileForm.$setPristine();
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            /**
             * Actualiza un elemento en la BD validando que no exista
             */
            vm.update = function() {
                var item_respaldo = vm.baile;
                BaileService.edit({
                    id: vm.baile.id
                }, vm.baile, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento actualizado..', {
                            status: 'success'
                        }
                    );
                    vm.baileForm.$setPristine();
                    vm.baile = {
                        id: 0
                    };
                    vm.show = false;
                    vm.load();
                    vm.baileForm.$setPristine();
                }, function(error) {
                    vm.item = item_respaldo;
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                            status: 'danger'
                        }
                    );
                    vm.load();
                });
            };

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.addBaile = function() {
                if (vm.baile.id < 1) {
                    vm.create();
                } else {
                    vm.update();
                }
            };

            vm.edit = function(item) {
                vm.show = true;
                vm.baile = item;
                vm.baile.costo = parseFloat(vm.baile.costo);
                $window.scrollTo(0, 0);
            };

            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.disable = function(item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara la baile!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.activo = false;
                        BaileService.destroy({"id": item.id}, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..', {
                                    status: 'success'
                                }
                            );
                            vm.baile = {
                                id: 0,
                                parent: null
                            };
                            vm.show = false;
                            vm.load();
                            vm.baileForm.$setPristine();
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Baile ya tiene tiene partidas registradas', {
                                    status: 'danger'
                                }
                            );
                        });
                    }
                });
            };
        }
    }
})();

(function() {
    'use strict';
    angular.module('app.baile')
        .factory('BaileService', BaileService);
    BaileService.$inject = ['$resource'];

    function BaileService($resource) {
        return $resource('/api/bailes/:id/', {}, {
            list: {
                method: 'GET',
                params: { query: '@query',
                    order: '@order',
                    page: '@page',
                    limit: '@limit'
                }
            },
            details: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            },
            create: {
                method: 'POST'
            },
            edit: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            },
            destroy: {
                method: 'DELETE',
                params: {
                    id: '@id'
                }
            },
            get_dances:{
                method: 'GET',
                params: { id: '@id' },
                url: '/api/bailespersona/get_dances/',
                isArray: true
            }
        });
    }
}());

(function() {
  'use strict';

  angular
    .module('app.configuracion')
    .controller('ConfiguracionController', ConfiguracionController);

  ConfiguracionController.$inject = ['$window', 'Notify', 'SweetAlert', 'ConfiguracionService', '$resource'];

  function ConfiguracionController($window, Notify, SweetAlert, ConfiguracionService, $resource) {
    var vm = this;
    activate();

    function activate() {
      vm.configuracion = {
          id: 0,
          nombre_empresa: null,
          inicio_jornada: null,
          finalizacion_jornada: null
      }
      //Cargamos la configuracion
      cargaConfiguracion();
      vm.configuracion.inicio_jornada = new Date();
      vm.configuracion.finalizacion_jornada = new Date();

      //Cargamos los datos de la configuracion, si hay un resistro solo lo modificamos de lo contrario
      //solo lo editamos
      function cargaConfiguracion() {
        ConfiguracionService.busca_configuracion({
        }, function(data) {
          if(data.id != null){
            vm.configuracion = {
                id: data.id,
                nombre_empresa: data.nombre_empresa,
                inicio_jornada: data.inicio_jornada,
                finalizacion_jornada: data.finalizacion_jornada
            }
          }
        });
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.create = function() {
          ConfiguracionService.create({
            nombre_empresa: vm.configuracion.nombre_empresa,
            inicio_jornada: vm.configuracion.inicio_jornada,
            finalizacion_jornada: vm.configuracion.finalizacion_jornada
          }, function(data) {
              Notify.alert(
                  '<em class="fa fa-check"></em> Elemento creado..', {
                      status: 'success'
                  }
              );
              vm.form.$setPristine();
              cargaConfiguracion();
          }, function(error) {
              Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                      status: 'danger'
                  }
              );
          });
      }

      /**
       * Actualiza un elemento en la BD validando que no exista
       */
      vm.update = function() {
          ConfiguracionService.update({
              id: vm.configuracion.id
          }, vm.configuracion, function(data) {
              Notify.alert(
                  '<em class="fa fa-check"></em> Elemento actualizado..', {
                      status: 'success'
                  }
              );
              vm.form.$setPristine();
              cargaConfiguracion();
          }, function(error) {
              Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                      status: 'danger'
                  }
              );
          });
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.add = function() {
        if (vm.configuracion.id < 1) {
            vm.create();
        } else {
            vm.update();
        }
      }
    }
  }
})();

(function() {
  'use strict';
  angular.module('app.tipoproducto')
    .factory('ConfiguracionService', ConfiguracionService);
  ConfiguracionService.$inject = ['$resource'];

  function ConfiguracionService($resource) {
    var url = '/api';
    return $resource(url + '/configuracion/:id/', {}, {
      create: {
        method: 'POST'
      },
      busca_configuracion: {
        url: url + '/configuracion/busca_configuracion/',
        method: 'GET'
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('AutorizacionController', AutorizacionController);

    AutorizacionController.$inject = ['$window', 'Notify', '$resource', '$rootScope', '$uibModal', '$location', 'LoginService'];

    function AutorizacionController($window, Notify, $resource, $rootScope, $uibModal, $location, LoginService) {
        var vm = this;
        activate();

        function activate() {
            // Caja
            $rootScope.autenticacion_cortesia = false;

            // Usuario
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');

            vm.pagos = [];

            // Cierra Ventana Modal
            vm.cancelogin = function() {
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
                            LoginService.hace_cortesias({id:vm.account.username},function (data) {
                               if (data.cortesias == true){
                                   LoginService.busca_usuario({
                                       nick: vm.account.username
                                   }, function(dat) {

                                       $rootScope.persona_autenticacion = dat.persona.nombre;
                                       console.log("LOG EXITOSO AUTEN");
                                       $rootScope.autenticacion_cortesia = true;
                                       // vm.cancelogin();
                                   });
                                   $rootScope.modalInstance.close();
                                   vm.cancelogin();
                               }else{
                                   vm.authMsg = 'Datos Incorrectos';
                               }
                            },function (error) {
                                vm.authMsg = 'Datos Incorrectos';
                            });

                            // $state.go('app.dashboard');
                        },
                        function(error) {
                            vm.authMsg = 'Datos Incorrectos';
                        });
                } else {
                    vm.loginForm.username.$dirty = true;
                    vm.loginForm.account_password.$dirty = true;
                }
            }


        }
    }
})();

(function() {
  'use strict';

  angular
    .module('app.caja')
    .controller('CajaAccionController', CajaAccionController);

  CajaAccionController.$inject = ['$window', 'Notify', 'SweetAlert', 'CajaService', 'CajaAccionService', 'MovimientoService', '$resource', '$uibModalInstance', '$log', 'caja', 'estado', 'cierre', '$rootScope', '$state'];

  function CajaAccionController($window, Notify, SweetAlert, CajaService, CajaAccionService, MovimientoService, $resource, $uibModalInstance, $log, caja, estado, cierre, $rootScope, $state) {
    var vm = this;
    activate();

    function activate() {
      vm.cajero = {};
      vm.cajero.ide = parseInt($window.sessionStorage.getItem('userid'));
      vm.cajero.nombre = $window.sessionStorage.getItem('username');
      vm.imprimir = false;
      vm.caja = caja;
      $rootScope.caja = caja;
      vm.estadoCaja = estado;
      vm.cierre = cierre;
      vm.denominaciones = [{id:'1', nombre: 'Q. 0.50', valor: 0.50},
                           {id:'2', nombre: 'Q. 1', valor: 1},
                           {id:'3', nombre: 'Q. 5', valor: 5},
                           {id:'4', nombre: 'Q. 10', valor: 10},
                           {id:'5', nombre: 'Q. 20', valor: 20},
                           {id:'6', nombre: 'Q. 50', valor: 50},
                           {id:'7', nombre: 'Q. 100', valor: 100},
                           {id:'8', nombre: 'Q. 200', valor: 200},
                           {id:'9', nombre: 'Voucher', valor: 'Voucher'}
                         ];
      vm.denominacion = {};
      vm.detalle = [];
      vm.total = 0;
      vm.totales = {};
      vm.ventas = {};
      vm.ventas.totales = 0;
      vm.ventas.pagos = 0;
      vm.ventas.cortesias = 0;
      vm.ventas.tdia = 0;
      vm.ventas.diferencia = 0;
      vm.errMsg = '';
      vm.agregarMsg = '';
      // $rootScope.cierreCaja = [];

      console.log('caja');
      console.log($rootScope.caja);

      // vm.cierre_actual = function(){
      //   // Service para buscar buscar y mandar la fecha en la cual se creo la caja y desde esa fecha y hr que busque las ventas por dia
      //   CajaAccionService.compruebaCaja({
      //     id: $rootScope.caja.id
      //   },function(data){
      //     $rootScope.cierreCaja = data
      //     console.log('cierre_actual');
      //     console.log(data);
      //   },function(error){
      //     console.log(error);
      //   });
      // }
      // vm.cierre_actual();

      vm.ventas_dia = function(tipo) {
        console.log(tipo);
        console.log(vm.cajero.ide);
        console.log($rootScope.caja.id);
        MovimientoService.ventas_dia({
          tipo: tipo,
          user: vm.cajero.ide,
          caja: $rootScope.caja.id
        },function(data) {
          console.log('ventas dia');
          console.log(data);
            if(tipo == 1){
              vm.ventas.efectivo = data.movimientos.formas_pago__monto__sum;
              vm.ventas.pagos = data.pagos.monto__sum;
              vm.ventas.cortesias = data.cortesias.formas_pago__monto__sum;
              vm.ventas.totales += vm.ventas.efectivo;
              vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
              vm.ventas.tdia -= data.pagos.monto__sum;
            }else{
              vm.ventas.tarjeta = data.movimientos.formas_pago__monto__sum;
              vm.ventas.totales += vm.ventas.tarjeta;
              vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
            }
        },function(error) {
            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
        });
      }

      if(!vm.estadoCaja){
        var apertura = parseFloat(vm.cierre[0].apertura);
        vm.ventas.tdia += apertura;
        vm.ventas_dia(1);
        vm.ventas_dia(2);
      }

      vm.addDetalle = function addDetalle() {
        var item = 0;
        if(vm.denominacion.denominacion.nombre == 'Voucher')
          item = vm.denominacion.monto * vm.denominacion.cantidad;
        else
          item = vm.denominacion.denominacion.valor * vm.denominacion.cantidad;

        vm.detalle.push({
          denominacion: vm.denominacion.denominacion.valor,
          cantidad: vm.denominacion.cantidad,
          total: item,
          tipo: vm.estadoCaja
        });
        vm.total += item;
        vm.denominacion = {};
        vm.ventas.diferencia = vm.total - vm.ventas.tdia;
        vm.formAdd.$setPristine();
      };

      vm.remove = function(item) {
        vm.total -= item.total;
        vm.ventas.diferencia = vm.total - vm.ventas.tdia;
        _.remove(vm.detalle, function(n) {
          return n === item;
        });
      };

      vm.cancel = function() {
        // Recarga de pagina y cierre de Modal
        $state.reload();
        $uibModalInstance.close();
      };

      vm.valida = function() {
        if (vm.ventas.pagos==null){
          vm.ventas.pagos = 0;
        }
        if (vm.ventas.efectivo==null){
          vm.ventas.efectivo = 0;
        }
        if (vm.ventas.tarjeta==null){
          vm.ventas.tarjeta = 0;
        }
          if (vm.detalle.length > 0 && vm.total != 0 && vm.imprimir === false) {
            return false;
          } else {
            return true;
          }
      }

      vm.submit = function(){
        if(vm.estadoCaja)
          vm.create();
        else
          vm.update();
      }

      vm.create = function() {
        var apertura = ({
          caja: vm.caja.id,
          usuario: vm.cajero.ide,
          apertura: vm.total,
          cierre: 0,
          vendido: 0,
          diferencia: 0,
          vendido_costo: 0,
          detalle: vm.detalle
        });
        CajaAccionService.create({
        }, apertura,
          function(data) {
            Notify.alert(
              '<em class="fa fa-check"></em> Accion realizada con éxito..', {
                status: 'success'
              }
            );
            vm.imprimir = true;
            $uibModalInstance.close(true);
            $state.reload();
          },
          function(error) {
            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
            $state.reload();
        });
      }

      // console.log($rootScope.mesaspendientes);
      /**
       * Actualiza un elemento en la BD validando que no exista
       */
      vm.update = function() {

        // Validacion para que no haya ninguna Cuenta Pendiente de Pago
        if ( $rootScope.mesaspendientes > 0 ){
          // Validacion con Mesas Pendientes de Pago
          Notify.alert(
            '<em class="fa fa-info-circle"></em> Debe Pagar todas las cuentas', {
              status: 'info'
            }
          );
          $state.reload();
          $uibModalInstance.close();
        } else if ( $rootScope.mesaspendientes == 0) {
          // Ninguna Mesa pendiente, se puede pagar
          MovimientoService.ordenes_tablet({},function (data) {
            if (data.disponible == false){
              $uibModalInstance.close();
              Notify.alert(
                  '<em class="fa fa-info-circle"></em> La caja no se puede cerrar aún. Existen ordenes pendientes en las tablets, espere a que esas sean procesadas.', {
                    status: 'danger'
                  }
              );
            }else{
              MovimientoService.ordenes_caja({},function (data) {
                if (data.disponible == false){
                  $uibModalInstance.close();
                  Notify.alert(
                      '<em class="fa fa-info-circle"></em> La caja no se puede cerrar aún. Existen ordenes pendientes, haga click en Refrescar para atenderlas.', {
                        status: 'danger'
                      }
                  );
                }else{
                  var cierre = ({
                    caja: vm.caja.id,
                    usuario: vm.cajero.ide,
                    cierre: vm.total,
                    vendido: vm.ventas.totales,
                    diferencia: vm.ventas.diferencia,
                    vendido_costo: 0,
                    detalle: vm.detalle,
                    activo: false
                  });
                  CajaAccionService.update({
                    id: vm.cierre[0].id
                  }, cierre, function(data) {
                    vm.agregarMsg = 'Caja cerrada exitosamente, puede imprimir ahora.';
                    Notify.alert(
                        '<em class="fa fa-check"></em> Caja cerrada exitosamente..', {
                          status: 'success'
                        }
                    );
                    // vm.formAdd.$setPristine();
                    // $uibModalInstance.close(true);
                    vm.cierre[0].modificado = new Date();
                    vm.imprimir = true;
                    $state.reload();
                  }, function(error) {
                    vm.errMsg = 'Ocurrio un error: ' + error.data.detail;
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                          status: 'danger'
                        }
                    );
                    $state.reload();
                    vm.imprimir = false;
                  });
                }
              });
            }
          },function (error) {
            vm.errMsg = 'Ocurrio un error: ' + error.data.detail;
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'danger'
              }
            );
            $state.reload();
            vm.imprimir = false;
          });
          

        }

      }
    }
  }
})();

(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('CajaActivaController', CajaActivaController);

    CajaActivaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource'];

    function CajaActivaController(Notify, SweetAlert, MovimientoService, $resource) {
      var vm = this;
      activate();

      function activate() {
        vm.destroy = destroy;
        vm.query = "";
        vm.loadPedidos = loadPedidos;

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

        loadPedidos();

        //Busqueda de Pedidos
        function loadPedidos() {
            MovimientoService.pedidos({
                page: vm.pagingInfo.page,
                query: vm.query
            }, function(data) {
                vm.pagingInfo.totalItems = data.count;
                vm.pedidos = data.results;
            });
        }


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
            loadPedidos();
        };

        function destroy(item) {
            vm.pedidos = [];
            SweetAlert.swal({
                title: '¿Esta Seguro?',
                text: '¡Se eliminara el movimiento!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: '¡Sí, eliminarlo!',
                cancelButtonText: 'Cancelar',
                closeOnConfirm: true
            }, function(isConfirm) {
                if (isConfirm) {
                    item.motivo = 'Cancelacion de pedido';
                    item.transacciones.push({
                        'id': null,
                        'tipo_transaccion': 2,
                        'usuario': 1
                    });
                    item.mesa = item.mesa.id;
                    _(item.detalle).forEach(function(value) {
                        delete value.movimiento
                        value.producto = value.producto.id;
                        value.persona = value.persona.id;
                    });
                    _(item.transacciones).forEach(function(value) {
                        delete value.movimiento
                        value.usuario = 1;
                    });
                    MovimientoService.update({
                            id: item.id
                        }, item,
                        function(data) {
                            MovimientoService.destroy({
                                    id: item.id
                                },
                                function(data) {
                                    Notify.alert(
                                        '<em class="fa fa-check"></em> Pedido Cancelado..', {
                                            status: 'success'
                                        }
                                    );
                                    loadPedidos();
                                },
                                function(error) {
                                    Notify.alert(
                                        '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                            status: 'error'
                                        }
                                    );
                                    loadPedidos();
                                });

                        },
                        function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                    status: 'error'
                                }
                            );
                            loadPedidos();
                        });
                } else {
                    loadPedidos();
                }
            });
        }
      }
    }
})();

(function() {
  'use strict';

  angular
    .module('app.caja')
    .controller('CajaController', CajaController);

  CajaController.$inject = ['$window', 'Notify', 'SweetAlert', 'CajaService', '$resource'];

  function CajaController($window, Notify, SweetAlert, CajaService, $resource) {
    var vm = this;
    activate();

    function activate() {
      vm.show = false;
      vm.query = '';
      vm.caja = {
        id: 0,
        nombre: null,
        activo: true
      }

      //Cargamos los datos de tipo de Producto
      function cargaCajas() {
        vm.caja = {
          id: 0,
          nombre: null,
          activo: true
        }
      }

      //Cargamos el tipo de Producto
      cargaCajas();

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

      /**
       * Carga todos los tipos de personas desde el backend
       */
      vm.load = function() {
        vm.lista = [];
        //Comprobamos si query no esta vacio
        if (vm.query.length > 0) {
          CajaService.buscar_cajas({
            query: vm.query,
            page: vm.pagingInfo.page
          }, function(data) {
            console.log(data);
            vm.lista = data;
            vm.pagingInfo.totalItems = data.length;
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'warning'
              }
            );
          });
        } else {
          CajaService.list({
            page: vm.pagingInfo.page
          }, function(data) {
            vm.lista = data.results;
            vm.pagingInfo.totalItems = data.count;
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'danger'
              }
            );
          });
        }

      }

      vm.load(); //Cargamos la lista

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
      }

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

      /**
       * Muestra el dialogo para agregar nuevos elementos a la BD
       * @param show: booleano que determina si se muestra u oculta
       */
      vm.showAdd = function(show) {
        vm.show = show;
        if (!vm.show) {
          vm.form.$setPristine();
          vm.caja = {
            id: 0,
            nombre: null,
            activo: true
          };
        }
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.create = function() {
        vm.caja = {
          nombre: vm.caja.nombre,
          activo: true
        };
        CajaService.create(vm.caja, function(data) {
          Notify.alert(
            '<em class="fa fa-check"></em> Elemento creado..', {
              status: 'success'
            }
          );
          vm.form.$setPristine();
          cargaCajas();
          vm.show = false;
          vm.load();
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      /**
       * Actualiza un elemento en la BD validando que no exista
       */
      vm.update = function() {
        CajaService.update({
          id: vm.caja.id
        }, vm.caja, function(data) {
          Notify.alert(
            '<em class="fa fa-check"></em> Elemento actualizado..', {
              status: 'success'
            }
          );
          vm.form.$setPristine();
          cargaCajas();
          vm.show = false;
          vm.load();
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
          vm.load();
        });
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.add = function() {
        // Verificamos si se hace add o update
        if (vm.caja.id < 1) {
          vm.create();
        } else {
          vm.update();
        }
      }

      vm.edit = function(item) {
        vm.show = true;
        vm.caja = item;
        $window.scrollTo(0, 0);
      }

      /**
       * Realiza un soft delete al elemento indicado
       * @param item: elemento a desactivar
       */
      vm.disable = function(item) {
        SweetAlert.swal({
          title: '¿Esta Seguro?',
          text: '¡Se eliminara esta caja!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: '¡Sí, eliminarlo!',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: true
        }, function(isConfirm) {
          if (isConfirm) {
            item.activo = false;
            CajaService.destroy({
              id: item.id
            }, item, function(data) {
              Notify.alert(
                '<em class="fa fa-check"></em> Elemento eliminado..', {
                  status: 'success'
                }
              );
              cargaCajas();
              vm.show = false;
              vm.load();
            }, function(error) {
              Notify.alert(
                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                  status: 'danger'
                }
              );
            });
          }
        });
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('app.caja')
    .controller('CajaModalController', CajaModalController);

  CajaModalController.$inject = ['$window', 'Notify', 'SweetAlert', 'CajaService', 'CajaAccionService', '$resource', '$uibModal', '$log', '$location', '$rootScope'];

  function CajaModalController($window, Notify, SweetAlert, CajaService, CajaAccionService, $resource, $uibModal, $log, $location, $rootScope) {
    var vm = this;
    activate();

    function activate() {
      vm.lista = [];
      vm.cajaSelect = {};
      vm.estadoCaja = true;
      vm.cierrecaja = [];
      vm.cajaSelect.id = 0;
      vm.usuario = {};
      vm.usuario.id = $window.sessionStorage.getItem('userid');
      vm.activaBoton = false;
      vm.activaPago = false;

      vm.caja_abierta = function(){
        vm.lista = [];
        CajaService.comprueba_caja_usuario({
          user: vm.usuario.id
        }, function(data){

          CajaService.show({
            id: data.caja
          }, function(datac){
            vm.lista.push(datac);
            vm.cajaSelect = vm.lista[0];
            vm.estadoCaja = vm.cajaSelect.estado;
            vm.activaPago = vm.cajaSelect.estado;
            // Variable Global para caja que se utilza en Realizar Pago
            $rootScope.cajaAbierta=vm.lista[0];
            // console.log(vm.lista[0].id);
            // console.log(vm.lista[0]);
            // console.log(vm.lista);
            CajaAccionService.compruebaCaja({
              id: vm.cajaSelect.id
            },function(dataci) {
                if(dataci.length > 0)
                {
                  vm.estadoCaja = false;
                  vm.cierrecaja = dataci;
                }else{
                  vm.estadoCaja = true;
                }
              },
              function(error) {
                vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
            });
          })

        }, function(error){
          vm.listaCombo();
        });
      }

      vm.cajaUsuario = function(){
        vm.cajaU = {};
        CajaService.comprueba_caja_usuario({
          user: vm.usuario.id
        }, function(data){
          vm.cajaU = data
          Notify.alert(
            '<em class="fa fa-check"></em> Caja abierta', {
              status: 'success'
            }
          );
        }, function(error){
          Notify.alert(
            '<em class="fa fa-times"></em> Ninguna caja abierta', {
              status: 'warning'
            }
          );
        })
      }
      vm.cajaUsuario();

      vm.listaCombo = function(){
        CajaService.filtro_no_paginate({
        },function(data) {
          vm.lista = data;
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      vm.caja_abierta();

      vm.compruebaCaja = function(){
        vm.activaBoton = true;
        vm.activaPago = true;
        CajaAccionService.compruebaCaja({
          id: vm.lista.id
        },function(data) {
            if(data.length > 0)
            {
              vm.estadoCaja = false;
              vm.cierrecaja = data;
              vm.activaPago = true;
              // console.log(vm.activaBoton);
              console.log(data);
            }else{
              vm.estadoCaja = true;
              vm.activaPago = false;
              // console.log(vm.activaBoton);
            }
            console.log(vm.cierrecaja);
          },
          function(error) {
            vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
        });
      }

      vm.accionCaja = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            size: 'lg',
            templateUrl: 'accionesCaja.html',
            controller: 'CajaAccionController as accion',
            resolve: {
                caja: function() {
                    return vm.cajaSelect;
                },
                estado: function(){
                  return vm.estadoCaja;
                },
                cierre: function(){
                  return vm.cierrecaja;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            if (selectedItem) {
              vm.activaBoton = false;
              $location.path('/app/caja/pendientes');
              vm.listaCombo();
            } else {
                $log.info('Modal dismissed at: ' + new Date());
            }
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
      };

      // Pago desde Caja
      vm.openPagos = function() {
          var modalInstance = $uibModal.open({
              animation: true,
              size: 'lg',
              templateUrl: 'accionesPago.html',
              controller: 'RetiroCajaController as accion',
              resolve: {
                  caja: function() {
                    return vm.cajaSelect;
                  },
                  estado: function(){
                    return vm.estadoCaja;
                  },
                  cierre: function(){
                    return vm.cierrecaja;
                  }
              }
          });
      };
    }
  }
})();

(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('CajaPagadaController', CajaPagadaController);

    CajaPagadaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource', '$uibModal', '$rootScope'];

    function CajaPagadaController(Notify, SweetAlert, MovimientoService, $resource, $uibModal, $rootScope) {
      var vm = this;
      activate();

      function activate() {
        vm.query = "";
        // vm.loadPagados = loadPagados;

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

        //Busqueda de Pedidos
        vm.filtro_pagadas = function(){
          var i = new Date(vm.iniDate);
          var f = new Date(vm.finDate);
          MovimientoService.pedidos_pagados({
            ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
            fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
            page: vm.pagingInfo.page,
            query: vm.query
          }, function(data) {
              vm.pagingInfo.totalItems = data.count;
              vm.pedidospagados = data.results;
          });
        }

        vm.filtro_pagadas();
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
            // loadPagados();
            vm.filtro_pagadas();
        };

        // Abre modal para Impresion de Datos
        vm.openOrder = function(id) {
            // Guardamos el id en rootScope para usarla en PedidoImpresionController
            $rootScope.id = id;
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'md',
                templateUrl: 'order.html',
                controller: 'PedidoImpresionController as impr',
                resolve: {
                    item: function() {
                        return id;
                    }
                }
            });
        };

        // Abre modal para Impresion de Ficha
        vm.openFicha = function(id) {
            // Guardamos el id en rootScope para usarla en PedidoImpresionController
            $rootScope.id = id;
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'md',
                templateUrl: 'ficha.html',
                controller: 'PedidoImpresionController as impr',
                resolve: {
                    item: function() {
                        return id;
                    }
                }
            });
        };


      }
    }
})();

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

(function() {
  'use strict';
  angular.module('app.caja')
    .factory('CajaService', CajaService);
  CajaService.$inject = ['$resource'];

  function CajaService($resource) {
    var url = '/api';
    return $resource(url + '/cajas/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/cajas/',
      },
      buscar_cajas: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        isArray: true,
        url: url + '/cajas/buscar_cajas',
      },
      filtro_no_paginate: {
        method: 'GET',
        isArray: true,
        url: url + '/cajas/filtro_no_paginate/',
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      proveedores: {
        url: url + '/personas/proveedores/',
        method: 'GET',
        isArray: true
      },
      clientes: {
        url: url + '/personas/clientes/',
        method: 'GET',
        isArray: true
      },
      comprueba_caja_usuario: {
        url: url + '/cierrecaja/busca_caja_usuario/',
        method: 'GET',
        params: {
          user: '@user'
        }
      },
    });
  }
}());

(function() {
  'use strict';
  angular.module('app.caja')
    .factory('CajaAccionService', CajaAccionService);
  CajaAccionService.$inject = ['$resource'];

  function CajaAccionService($resource) {
    var url = '/api';
    return $resource(url + '/cierrecaja/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/cajas/',
      },
      filtro_no_paginate: {
        method: 'GET',
        isArray: true,
        url: url + '/cajas/filtro_no_paginate/',
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      compruebaCaja: {
        url: url + '/cierrecaja/comprueba_caja/',
        method: 'GET',
        isArray: true,
        params: {
          id: '@id'
        }
      },
      clientes: {
        url: url + '/personas/clientes/',
        method: 'GET',
        isArray: true
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('MesasController', MesasController);

    MesasController.$inject = ['Notify', 'SweetAlert', 'MesasService', '$resource', '$uibModal', '$rootScope'];

    function MesasController(Notify, SweetAlert, MesasService, $resource, $uibModal, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            /** Paginacion del frontend expresado en paginas **/
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            /** Refresca el listado de las mesas y regresa a la primera pagina de la paginacion**/
            vm.refrescar = function () {
                MesasService.comprobar_mesas({},function (data) {
                    vm.mesas = data.mesas;
                    vm.pagingInfo.totalItems = data.total_mesas;
                    vm.pagingInfo.page = data.pagina;
                },function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'warning'
                        }
                    );
                });
            };
            vm.refrescar();
            /** Opciones de radio button **/
            vm.tipo = 1;
            vm.tipo_seleccionado = 1;
            vm.selectTipo = function(tipo) {
                if (tipo==1){
                    vm.tipo = 1
                } else if (tipo==2){
                    vm.tipo = 2
                } else if (tipo==3){
                    vm.tipo = 3
                }
            };
            /** Buscar mesa específica **/
            vm.query ="";
            vm.buscar = function () {
                MesasService.get_mesa({mesa:vm.query},function (data) {
                    vm.mesas = data;
                    vm.pagingInfo.page = 1;
                    vm.pagingInfo.totalItems = data.length;
                    vm.query ="";
                },function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'warning'
                        }
                    );
                });
            };
            /** Funcion para filtrar por tablet o caja **/
            vm.filtrar = function (tipo, pagina) {
                vm.tipo_seleccionado = tipo;
                var lim_i = (pagina - 1) * 10;
                var lim_s = pagina * 10;
                MesasService.comprobar_mesas({tipo:vm.tipo_seleccionado, lim_i: lim_i, lim_s: lim_s},function (data) {
                    vm.mesas = data.mesas;
                    vm.pagingInfo.totalItems = data.total_mesas;
                    vm.pagingInfo.page = data.pagina;
                },function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'warning'
                        }
                    );
                });
            };
            
            /** Funcion para cambio de pagina **/
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.filtrar(vm.tipo_seleccionado, page);
            }
        }
    }
})();

(function() {
    'use strict';
    angular.module('app.caja')
        .factory('MesasService', MesasService);
    MesasService.$inject = ['$resource'];

    function MesasService($resource) {
        var url = '/api';
        return $resource(url + '/mesas/:id/', {}, {
            comprobar_mesas: {
                method: 'GET',
                url: url + '/mesas/comprobar_mesas/',
                params: {tipo: '@tipo', lim_i: '@lim_i', lim_s: '@lim_s'}
            },
            get_mesa: {
                method: 'GET',
                url: url + '/mesas/get_mesa/',
                isArray: true,
                params: {mesa: '@mesa'}
            }
        });
    }
}());

(function() {
  'use strict';
  angular.module('app.cuenta')
    .factory('CuentaService', CuentaService);
  CuentaService.$inject = ['$resource'];

  function CuentaService($resource) {
    var url = '/api';
    return $resource(url + '/cuenta/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
  'use strict';
  angular.module('app.depositoretiro')
    .factory('DepositoRetiroService', DepositoRetiroService);
  DepositoRetiroService.$inject = ['$resource'];

  function DepositoRetiroService($resource) {
    var url = '/api';
    return $resource(url + '/depositoretiro/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          page: '@page'
        },
        url: url + '/depositoretiro/filtro_pagos/'
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.depositoretiro')
        .controller('RetiroCajaController', RetiroCajaController);

    RetiroCajaController.$inject = ['$window', 'Notify', 'SweetAlert', '$resource', 'ConfiguracionService', 'TipoPersonaService', 'PersonaService',
        'DepositoRetiroService', 'TipoDepositoRetiroService', 'CuentaService', 'PersonaCuentaService', 'EmpresaCuentaService', '$uibModalInstance',
        'caja', 'estado', 'cierre', 'CajaAccionService'
    ];

    function RetiroCajaController($window, Notify, SweetAlert, $resource, ConfiguracionService, TipoPersonaService, PersonaService,
        DepositoRetiroService, TipoDepositoRetiroService, CuentaService, PersonaCuentaService, EmpresaCuentaService, $uibModalInstance,
        caja, estado, cierre, CajaAccionService) {
        var vm = this;
        activate();

        function activate() {
            vm.caja = caja;
            vm.validaGuardar = false;
            // vm.estadoCaja = estado;
            // vm.cierre = cierre;
            console.log(vm.caja.id);

            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');
            console.log(vm.usuario.id);

            vm.tipopersonaSelect = {};
            vm.tipopersonaSelect.id = 0;

            vm.motivoSelect = {};
            vm.motivoSelect.id = 0;

            // vm.personaSelect = {};
            // vm.personaSelect.id = 0;

            vm.monto = 0;
            vm.descripcion = null;

            vm.egresoSelect = {};
            vm.egresoSelect.id = 0;

            // Inicializa Retiro
            vm.cargaRetiro = function() {
                vm.tipoRetiro = {
                    motivo: null,
                    monto: null,
                    cuenta_entrada: null,
                    cuenta_salida: null,
                    caja: null,
                    descripcion: null,
                    usuario: null,
                }
            }
            vm.cargaRetiro();

            // Busca los nombres con cuenta desde la api
            vm.persona = [];
            vm.personacuenta = function(val) {
                return PersonaCuentaService.list({
                    query: val,
                    tipo: vm.tipopersonaSelect.id
                }).$promise.then(function(data) {
                    vm.persona = data.results;
                    return data.results;
                });
            };

            vm.nocuenta = [];
            vm.cuenta = function(val) {
                return PersonaService.cuenta_persona({
                    id: val
                }, function(data) {
                    vm.tipo
                    vm.cancelar();
                    return data.results;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    )
                });
            };

            // Busca las empresas con cuentas desde la api
            vm.empresacuenta = function(val) {
                return EmpresaCuentaService.list({
                    query: val
                }).$promise.then(function(data) {
                    return data.results;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    vm.listaTipopersona = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

            // Lista Motivo (Tipo Egresos) VALIDOS
            vm.listaTipoegreso = function() {
                return TipoDepositoRetiroService.filtro_egreso({
                    query: ''
                }, function(data) {
                    vm.listaTipoegreso = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipoegreso();

            // Alerta de advertencia donde el monto tiene qu ser mayor a 0
            vm.advertencia = function() {
              SweetAlert.swal('Información', 'Ingrese un monto mayor a 0');
            };

            // Crea un Nuevo Retiro desde Caja
            vm.createFromCaja = function() {
                // Validacion de checkbox semanal
                if (vm.semanal == null)
                    vm.semanal = false;

                if ( vm.caja.id > 0){
                    vm.tipoRetiro = {
                        motivo: vm.motivoSelect.id,
                        monto: vm.monto,
                        caja: vm.caja.id,
                        semanal: vm.semanal,
                        cuenta_entrada: vm.personaSelect.cuenta.id,
                        descripcion: vm.descripcion,
                        usuario: vm.usuario.id
                    };
                    // Validacion para un monto mayor a 0
                    if (vm.monto > 0) {
                        DepositoRetiroService.create(vm.tipoRetiro, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento creado..', {
                                    status: 'success'
                                }
                            );
                            vm.cargaRetiro();vm.persona[0].id
                            $uibModalInstance.close(true);

                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                    } else {
                        vm.advertencia();
                    }
                } else {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Apertura una caja para pagos', {
                            status: 'danger'
                        }
                    );
                }
            };

            // Cierra Ventana Modal
            vm.cancel = function() {
                $uibModalInstance.close();
            };

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.depositoretiro')
        .controller('RetiroController', RetiroController);

    RetiroController.$inject = ['$window', '$uibModal', 'Notify', 'SweetAlert', '$resource', 'ConfiguracionService', 'TipoPersonaService',
        'DepositoRetiroService', 'TipoDepositoRetiroService', 'CuentaService', 'PersonaCuentaService', 'EmpresaCuentaService', '$uibModalInstance'
    ];

    function RetiroController($window, $uibModal, Notify, SweetAlert, $resource, ConfiguracionService, TipoPersonaService,
        DepositoRetiroService, TipoDepositoRetiroService, CuentaService, PersonaCuentaService, EmpresaCuentaService, $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            vm.tipopersonaSelect = {};
            vm.tipopersonaSelect.id = 0;

            vm.motivoSelect = {};
            vm.motivoSelect.id = 0;

            vm.tipopagoSelect = {};
            vm.tipopagoSelect.id = 0;

            vm.monto = 0;
            vm.descripcion = null;

            vm.egresoSelect = {};
            vm.egresoSelect.id = 0;

            // Set de Formas de Pago
            vm.listaFormaPago = [{
                id: 1,
                tipo: 'Efectivo'
            }, {
                id: 2,
                tipo: 'Tarjeta de Credito'
            }, {
                id: 3,
                tipo: 'Cheque'
            }];

            // Usuario
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.usuario.nombre = $window.sessionStorage.getItem('username');


            // Agrega Nuevo Proveedor
            vm.openPersona = function() {
            // function openPersona() {
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'lg',
                templateUrl: 'addPersona.html',
                controller: 'PersonaAddController as tipos'
                });
            }


            // Inicializa Retiro
            vm.cargaRetiro = function() {
                vm.tipoRetiro = {
                    motivo: null,
                    monto: null,
                    cuenta_entrada: null,
                    cuenta_salida: null,
                    forma_pago: null,
                    descripcion: null,
                }
            }
            vm.cargaRetiro();

            // Busca los nombres con cuenta desde la api
            vm.personacuenta = function(val) {
                return PersonaCuentaService.list({
                    query: val,
                    tipo: vm.tipopersonaSelect.id
                }).$promise.then(function(data) {
                    return data.results;
                });
            };

            // Busca las empresas con cuentas desde la api
            vm.empresacuenta = function(val) {
                return EmpresaCuentaService.list({
                    query: val
                }).$promise.then(function(data) {
                    return data.results;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    // PARA QUE NO LISTE A LOS PROVEEDORES DENTRO DE LOS PAGOS
                    // for (var i = 0; i < data.length; i++) {
                    //     if (data[x].nombre == 'Proveedor' || data[x].nombre == 'proveedor'){
                    //         vm.listaTipopersona = data[x].p
                    //     }
                    // }
                    vm.listaTipopersona = data;
                    console.log(data);
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

            // Lista Motivo (Tipo Egresos) VALIDOS
            vm.listaTipoegreso = function() {
                return TipoDepositoRetiroService.filtro_egreso({
                    query: ''
                }, function(data) {
                    vm.listaTipoegreso = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipoegreso();

            // Alerta de advertencia donde el monto tiene qu ser mayor a 0
            vm.advertencia = function() {
              SweetAlert.swal('Información', 'Ingrese un monto mayor a 0');
            };

            // Crea un nuevo Retiro
            vm.create = function() {
                // Validacion de checkbox semanal
                if (vm.semanal == null)
                    vm.semanal = false;

                vm.tipoRetiro = {
                    motivo: vm.motivoSelect.id,
                    monto: vm.monto,
                    semanal: vm.semanal,
                    cuenta_entrada: vm.personaSelect.cuenta.id,
                    cuenta_salida: vm.empresaSelect.cuentas.id,
                    descripcion: vm.descripcion,
                };
                // Validacion el monto a ingresar tiene que ser mayor a 0
                if (vm.monto > 0) {
                    DepositoRetiroService.create(vm.tipoRetiro, function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Elemento creado..', {
                                status: 'success'
                            }
                        );
                        vm.cargaRetiro();
                        $uibModalInstance.close(true);

                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'danger'
                            }
                        );
                    });
                } else {
                    vm.advertencia();
                }
            };

            // Cierra Ventana Modal
            vm.cancel = function() {
                $uibModalInstance.close();
            };

        }
    }
})();

(function() {
  'use strict';
  angular.module('app.empresacuenta')
    .factory('EmpresaCuentaService', EmpresaCuentaService);
  EmpresaCuentaService.$inject = ['$resource'];

  function EmpresaCuentaService($resource) {
    var url = '/api';
    return $resource(url + '/empresacuenta/', {}, {
      list: {
        method: 'GET',
        params: {
          query: '@query'
        },
        url: url + '/empresacuenta/',
      }
    });
  }
}());

(function() {
  'use strict';
  angular.module('app.detallemovimiento')
    .factory('DetalleMovimientoService', DetalleMovimientoService);
  DetalleMovimientoService.$inject = ['$resource'];

  function DetalleMovimientoService($resource) {
    var url = '/api';
    return $resource(url + '/detallemovimiento/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
  'use strict';
  angular.module('app.formapago')
    .factory('FormaPagoService', FormaPagoService);
  FormaPagoService.$inject = ['$resource'];

  function FormaPagoService($resource) {
    var url = '/api';
    return $resource(url + '/formapago/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/formapago/filtro_no_paginate/',
        isArray: true
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService', '$http', '$state', '$window', '$location'];

  function LoginController(LoginService, $http, $state, $window) {
    var vm = this;
    activate();

    ////////////////

    function activate() {
      // bind here all data from the form
      vm.account = {};
      // place the message if something goes wrong
      vm.authMsg = '';

      vm.login = function() {
        vm.authMsg = '';

        if (vm.loginForm.$valid) {

          LoginService.login({
              username: vm.account.username,
              password: vm.account.password
            },
            function(data) {
              //Save the token in session
              $window.sessionStorage.setItem('token', data.token);
              LoginService.busca_usuario({
                nick: vm.account.username
              }, function(dat){
                $window.sessionStorage.setItem('userid', dat.usuario.id);
                $window.sessionStorage.setItem('usergroup', dat.persona.grupo);
                $window.sessionStorage.setItem('username', dat.persona.nombre);
                $state.go('app.dashboard')
              });

            },
            function(error) {
              // Erase the token if the user fails to log in
              $window.sessionStorage.removeItem('token');
              $window.sessionStorage.removeItem('user');
              vm.authMsg = 'Server Request Error';
            }
          );
        } else {
          // set as dirty if the user click directly to login so we show the validation messages
          /*jshint -W106*/
          vm.loginForm.username.$dirty = true;
          vm.loginForm.account_password.$dirty = true;
        }
      };

      vm.logout = function(){
        swal({
          title: '¿Salir del sistema?',
          text: '¡Esta seguro de querer salir del sistema!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: '¡Sí, salir!',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: true
        }, function(isConfirm) {
          if (isConfirm) {
            vm.account = {};
            $window.sessionStorage.removeItem('token');
            $window.sessionStorage.removeItem('user');
            $state.go('page.login');
          }
        });
      }

    }
  }
})();

(function() {
  'use strict';
  angular.module('app.login')
    .factory('LoginService', LoginService);
  LoginService.$inject = ['$resource'];

  function LoginService($resource) {
    var url = 'http://localhost:8000/api';
    return $resource('http://localhost:8000/api/token/:id', {}, {
      login: {
        method: 'POST',
        //url: 'api-auth/'
      },
      busca_usuario: {
        url: url + '/users/busca_usuario/',
        method: 'GET',
        params: {
          nick: '@nick'
        }
      },
      hace_cortesias: {
        url: url + '/users/hace_cortesias/',
        method: 'GET',
        params: {
          nick: '@nick'
        }
      },
      cancela_ordenes: {
        url: url + '/users/cancela_ordenes/',
        method: 'GET',
        params: {
          nick: '@nick'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('IngresoVerController', IngresoVerController);

    IngresoVerController.$inject = ['$stateParams', '$uibModal', 'Notify', 'SweetAlert', 'MovimientoService', 'TipoProductoService', 'ProductoService', '$resource', '$state'];

    function IngresoVerController($stateParams, $uibModal, Notify, SweetAlert, MovimientoService, TipoProductoService, ProductoService, $resource, $state) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.movimiento = {};
        activate();

        function activate() {
            function iniciaMovimiento() {
                MovimientoService.show({
                    id: vm.id
                }, function(data) {
                    vm.movimiento = data;

                    switch (vm.movimiento.documento) {
                      case 1:
                        vm.movimiento.documento = "Factura";
                        break;
                      case 2:
                        vm.movimiento.documento = "Recibo";
                        break;
                      case 3:
                        vm.movimiento.documento = "Vale";
                        break;
                      break;
                      default:
                    }

                    switch (vm.movimiento.tipo) {
                      case 1:
                        vm.movimiento.tipo = "Contado";
                        break;
                      case 2:
                        vm.movimiento.tipo = "Credito";
                        break;
                      break;
                      default:
                    }
                })
            }

            iniciaMovimiento();
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.movimiento')
        .controller('IngresoListaController', IngresoListaController);

    IngresoListaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource'];

    function IngresoListaController(Notify, SweetAlert, MovimientoService, $resource) {
        var vm = this;
        activate();
        vm.ingresos = [];

        function activate() {
            vm.destroy = destroy;
            vm.query = "";
            vm.loadIngresos = loadIngresos;

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

            loadIngresos();

            function loadIngresos() {
                MovimientoService.ingresos({
                    page: vm.pagingInfo.page,
                    query: vm.query
                }, function(data) {
                    vm.pagingInfo.totalItems = data.count;
                    vm.ingresos = data.results;
                });
            }

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
                loadIngresos();
            };

            function destroy(data) {
                vm.ingresos = [];
                vm.salidas = [];
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara el movimiento!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        MovimientoService.destroy({
                                id: data.id
                            },
                            function(data) {
                                Notify.alert(
                                    '<em class="fa fa-check"></em> Salida eliminada..', {
                                        status: 'success'
                                    }
                                );
                                loadIngresos();
                            },
                            function(error) {
                                Notify.alert(
                                    '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                        status: 'error'
                                    }
                                );
                                loadIngresos();
                            });
                    } else {
                        loadIngresos();
                    }
                });
            }
        }
    }
})();

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

(function() {
    'use strict';

    angular
        .module('app.movimiento')
        .controller('SalidaController', SalidaController);

    SalidaController.$inject = ['Notify', 'ProductoService', 'PersonaService', 'MovimientoService', '$resource'];

    function SalidaController(Notify, ProductoService, PersonaService, MovimientoService, $resource) {
        var vm = this;
        activate();

        function cargaDatos() {
            vm.movimiento = {};
            vm.movimiento.total_costo = 0;
            vm.movimiento.total = 0;
            vm.movimiento.tipo = 3;
            vm.movimiento.detalle = [];
            vm.detalle = {};
            vm.detalle.cantidad = 0;
            vm.detalle.precio_costo = 0;
            vm.detalle.precio_venta = 0;
            vm.cantidadetalle = true;
        }

        cargaDatos();

        function activate() {
            var prodMod;

            vm.tipos_baja = [{
                'id': 1,
                'nombre': 'Perdida'
            }, {
                'id': 2,
                'nombre': 'Robo'
            }, {
                'id': 3,
                'nombre': 'Devolución'
            }, {
                'id': 4,
                'nombre': 'Caducidad'
            }, {
                'id': 5,
                'nombre': 'Daño'
            }]

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

            //Asignacion de Variables para la vista
            vm.addProd = addProd;
            vm.removeProd = removeProd;
            vm.submit = submit;

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
                        if (vm.detalle.producto.existencia >= vm.detalle.cantidad) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Movimiento agregado a la lista..', {
                                    status: 'success'
                                }
                            );
                            vm.movimiento.detalle.push(vm.detalle);
                            vm.movimiento.total_costo = vm.movimiento.total_costo + (vm.movimiento.detalle[i].producto.precio_costo * vm.movimiento.detalle[i].cantidad);
                            // En dado caso se da el cambio de Baja en el total se trae el precio_venta del modelo ProductoPresentacion
                            // vm.movimiento.total = vm.movimiento.total + (vm.movimiento.detalle[i].producto.precio_venta * vm.movimiento.detalle[i].cantidad);
                            // console.log(vm.movimiento.detalle[i].precio_venta);
                            // console.log(vm.movimiento.detalle[i].cantidad);
                            // console.log(vm.movimiento.total);
                            vm.detalle = {};
                            vm.cantidadetalle = true;
                        } else {
                            Notify.alert(
                                    '<em class="fa fa-times"></em> Existencia menor al ingresado', {
                                        status: 'warning'
                                    }
                                );
                            vm.detalle = {};
                        }
                    } else {
                        vm.detalle = {};
                        Notify.alert(
                            '<em class="fa fa-times"></em> Producto ya existe dentro de la lista', {
                                status: 'warning'
                            }
                        );
                    }; console.log(vm.movimiento);
                }
            }

            function detalleCompleto() {
                var completo = false;
                if (vm.detalle.producto != null && vm.detalle.producto.id > 0 && vm.detalle.cantidad > 0) {
                    completo = true;
                } else {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Datos Incompletos del detalle..', {
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
                        vm.movimiento.total_costo = vm.movimiento.total_costo - (vm.movimiento.detalle[i].producto.precio_costo * vm.movimiento.detalle[i].cantidad);
                        // En dado caso se da el cambio de Baja en el total se trae el precio_venta del modelo ProductoPresentacion
                        // vm.movimiento.total = vm.movimiento.total - (vm.movimiento.detalle[i].producto.precio_venta * vm.movimiento.detalle[i].cantidad);
                        vm.movimiento.detalle.splice(i, 1);
                        Notify.alert(
                            '<em class="fa fa-times"></em> Producto eliminado del detalle..', {
                                status: 'warning'
                            }
                        );
                        break;
                    }
                }
                if (vm.movimiento.detalle.length == 0) {
                    vm.cantidadetalle = false;
                }
            }

            //Guardado de movimiento/combo
            function submit() {
                if (vm.movimiento.detalle.length > 0) {
                    vm.movimiento.tipo_baja = vm.movimiento.tipo_baja.id;
                    for (var i = 0; i < vm.movimiento.detalle.length; i++) {
                        vm.movimiento.detalle[i].producto = vm.movimiento.detalle[i].producto.id;
                    }
                    MovimientoService.create(vm.movimiento, function(data) {
                        cargaDatos();
                        Notify.alert(
                            '<em class="fa fa-check"></em> Baja de Producto exitosa', {
                                status: 'success'
                            }
                        );
                        vm.formValidate.$setPristine();
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Error:' + error.data.detail, {
                                status: 'error'
                            }
                        );
                    });
                } else {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Lista vacia de Detalle', {
                            status: 'warning'
                        }
                    );
                }
            }
        }
    }
})();

(function() {
  'use strict';
  angular.module('app.movimiento')
    .factory('MovimientoService', MovimientoService);
  MovimientoService.$inject = ['$resource'];

  function MovimientoService($resource) {
    var url = '/api';
    return $resource(url + '/movimientos/:id/', {}, {
      list: {
        method: 'GET'
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      tiene_impresora: {
        method: 'GET',
        params: {
          id: '@id'
        },
        url: '/api/impresoras/tiene_impresora/'
      },
      imprimir: {
        method: 'GET',
        params: {
          id: '@id'
        },
        url: '/api/impresoras/imprimir_ficha/'
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      ingresos: {
        url: url + '/movimientos/ingresos/',
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        }
      },
      bajas: {
        url: url + '/movimientos/bajas/',
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        }
      },
      pedidos: {
        url: url + '/movimientos/pedidos/',
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        }
      },
      pedidos_pendientes: {
        url: url + '/movimientos/pedidos_pendientes_pago/',
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          user: '@user',
          page: '@page',
          query: '@query'
        }
      },
      ordenes_tablet: {
        url: url + '/movimientos/ordenes_tablet/',
        method: 'GET'
      },
      ordenes_caja: {
        url: url + '/movimientos/ordenes_caja/',
        method: 'GET'
      },
      pedidos_pagados: {
        url: url + '/movimientos/pedidos_pagados/',
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        }
      },
      ventas_dia: {
        url: url + '/movimientos/ventas_dia/',
        method: 'GET',
        params: {
          user: '@user',
          caja: '@caja',
          tipo: '@tipo'
        }
      },
      ventas_cierre: {
        url: url + '/movimientos/ventas_cierre/',
        method: 'GET',
        params: {
          cierre: '@cierre',
          tipo: '@tipo'
        }
      },
      reporte_ventas: {
        url: url + '/movimientos/reporte_ventas/',
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          page: '@page'
        }
      },
      reporte_ventas_empleado: {
        url: url + '/movimientos/reporte_ventas_empleado/',
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          page: '@page'
        }
      },
      ventas_filtro: {
        url: url + '/movimientos/ventas_filtro/',
        method: 'GET',
        params: {
          fecha: '@ini'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.movimiento')
        .controller('SalidaListaController', SalidaListaController);

    SalidaListaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource'];

    function SalidaListaController(Notify, SweetAlert, MovimientoService, $resource) {
        var vm = this;
        activate();
        vm.ingresos = [];
        vm.salidas = [];

        function activate() {
            vm.query = "";
            // vm.destroy = destroy;
            vm.loadSalidas = loadSalidas;

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

            loadSalidas();

            function loadSalidas() {
                MovimientoService.bajas({
                    page: vm.pagingInfo.page,
                    query: vm.query
                }, function(data) {
                    vm.pagingInfo.totalItems = data.count;
                    vm.salidas = data.results;
                });
            }

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
                loadSalidas();
            };

            // Funcion de eliminar la baja se ha quitado esta comentada abajo por si se necesitara

            // function destroy(data) {
            //     vm.ingresos = [];
            //     vm.salidas = [];
            //     SweetAlert.swal({
            //         title: '¿Esta Seguro?',
            //         text: '¡Se eliminara el movimiento!',
            //         type: 'warning',
            //         showCancelButton: true,
            //         confirmButtonColor: '#DD6B55',
            //         confirmButtonText: '¡Sí, eliminarlo!',
            //         cancelButtonText: 'Cancelar',
            //         closeOnConfirm: true
            //     }, function(isConfirm) {
            //         if (isConfirm) {
            //             MovimientoService.destroy({
            //                     id: data.id
            //                 },
            //                 function(data) {
            //                     Notify.alert(
            //                         '<em class="fa fa-check"></em> Salida eliminada..', {
            //                             status: 'success'
            //                         }
            //                     );
            //                     loadSalidas();
            //                 },
            //                 function(error) {
            //                     Notify.alert(
            //                         '<em class="fa fa-times"></em> Error..' + error, {
            //                             status: 'error'
            //                         }
            //                     );
            //                     loadSalidas();
            //                 });
            //         } else {
            //             loadSalidas();
            //         }
            //     });
            // }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ChicaImpresionController', ChicaImpresionController);

    ChicaImpresionController.$inject = ['$window', '$state',
        'PagoService','$rootScope'];

    function ChicaImpresionController($window, $state,
                                    PagoService, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            vm.fin = $rootScope.fin;
            vm.datefin = new Date(vm.fin);
            vm.ini = $rootScope.ini;
            vm.dateini = new Date(vm.ini);
            vm.pagado = false;
            vm.total_servicios = $rootScope.total_servicios;
            vm.total_comisiones = $rootScope.detalles_comisiones;
            vm.total_bailes = $rootScope.detalles_bailes;
            vm.total_gastos = $rootScope.gastos_personal;
            vm.pagado = $rootScope.pagado;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.hoy = new Date();
            // model.total_servicios - ctrl.model.total_adelantos - ctrl.model.total_gastos + ctrl.model.total_comisiones + ctrl.model.total_bailes
            vm.model = $rootScope.model;
            if (!vm.model.total_adelantos){vm.model.total_adelantos = 0}
            if (!vm.model.total_bailes){vm.model.total_bailes = 0}
            if (!vm.model.total_comisiones){vm.model.total_comisiones = 0}
            if (!vm.model.total_gastos){vm.model.total_gastos = 0}
            if (!vm.model.total_servicios){vm.model.total_servicios = 0}
            vm.total = $rootScope.total;
            vm.pago = $rootScope.pago;

            vm.saldar = function () {
                if (vm.pago > (vm.total + vm.saldo)){
                    vm.pago = vm.total + vm.saldo;
                }
                try {
                    vm.pago = parseFloat(vm.pago.toFixed(2));
                }catch(err){
                    vm.pago = 0;
                }
                if (!vm.total){
                    vm.total=0;
                }
                vm.new_saldo = vm.total + vm.saldo - vm.pago;
                vm.new_saldo = parseFloat(vm.new_saldo.toFixed(2));
            };
            vm.saldar();
            PagoService.me({id:vm.model.id}, function (data) {
                vm.saldo = parseFloat(data.saldo);
                vm.saldar();
            },function (error) {
                vm.saldo = 0;
            });
            vm.pagar = function () {
                vm.user_id = $window.sessionStorage.getItem('userid');
                vm.modelo = {
                    'comision_venta':vm.model.total_comisiones,
                    'comision_servicio':vm.model.total_servicios,
                    'bailes':vm.model.total_bailes,
                    'adelanto':vm.model.total_adelantos,
                    'gastos_personal':vm.model.total_gastos,
                    'a_pagar':vm.pago,
                    'saldo_anterior':vm.saldo,
                    'saldo_actual':vm.new_saldo,
                    'persona':vm.model.id
                };
                PagoService.new_payment({fin: vm.fin, ini: vm.ini , total: vm.total, user:vm.user_id},vm.modelo,function (data) {
                    swal("Pago realizado","Ya puede imprimir");
                    vm.pagado = true;
                },function (error) {

                })
            };
            vm.cancel = function () {
                $state.go('app.empleado',{id: vm.model.id});
            };
            vm.cerrar = function () {
                $state.go('app.pagoempleado');
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('EmpleadoController', EmpleadoController);

    EmpleadoController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PagoService',
        '$resource', 'SweetAlert', 'DepositoRetiroService', 'PersonaService', '$rootScope'];

    function EmpleadoController($location, $log, $uibModal, $stateParams, Notify, PagoService,
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
                var i = new Date(vm.model.fecha_pago);
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
                    $rootScope.detalles_comisiones = data.total;
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
                var i = new Date(vm.model.fecha_pago);
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
                    $rootScope.total_servicios = data.total;
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

            // GRID Comision Servicios
            vm.bailes = [];
            vm.bai = [];
            vm.comisionbailes = function() {
                var i = new Date(vm.model.fecha_pago);
                var f = new Date(vm.finDate);
                PersonaService.empleado_bailes({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    per: $stateParams.id,
                    ant: vm.paginationBA.skip,
                    sig: vm.paginationBA.skip + 5
                }, function(data) {
                    vm.bailes = data;
                    vm.bai = data.datos;
                    vm.model.total_bailes = 0;
                    $rootScope.detalles_bailes = data.total;
                    for (var i = 0; i < vm.bailes.total.length; i++){
                        vm.model.total_bailes = vm.model.total_bailes + (vm.bailes.total[i].cantidad * vm.bailes.total[i].precio);
                    }
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
                    vm.minutesfin = f.getMinutes();
                    vm.hoursfin = vm.hoursini;
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
            /*Modal de Pago*/
            vm.openPagos = function() {
                var f = new Date(vm.finDate);
                var i = new Date(vm.model.fecha_pago);
                $rootScope.model = vm.model;
                $rootScope.ini = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00";
                $rootScope.fin = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00";
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: "app/views/pago/realiza_pago_empleado.html",
                    controller: 'PagoRealizarController as ctrl'
                });
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('EmpleadoImpresionController', EmpleadoImpresionController);

    EmpleadoImpresionController.$inject = ['$window', '$state',
        'PagoService','$rootScope'];

    function EmpleadoImpresionController($window, $state,
                                    PagoService, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            vm.fin = $rootScope.fin;
            vm.datefin = new Date(vm.fin);
            vm.ini = $rootScope.ini;
            vm.dateini = new Date(vm.ini);
            vm.pagado = false;
            vm.pagado = $rootScope.pagado;
            vm.total_servicios = $rootScope.total_servicios;
            vm.total_comisiones = $rootScope.detalles_comisiones;
            vm.total_bailes = $rootScope.detalles_bailes;
            vm.total_gastos = $rootScope.gastos_personal;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.hoy = new Date();
            // model.total_servicios - ctrl.model.total_adelantos - ctrl.model.total_gastos + ctrl.model.total_comisiones + ctrl.model.total_bailes
            vm.model = $rootScope.model;
            if (!vm.model.total_adelantos){vm.model.total_adelantos = 0}
            if (!vm.model.total_bailes){vm.model.total_bailes = 0}
            if (!vm.model.total_comisiones){vm.model.total_comisiones = 0}
            if (!vm.model.total_gastos){vm.model.total_gastos = 0}
            if (!vm.model.total_servicios){vm.model.total_servicios = 0}
            vm.total = $rootScope.total;
            vm.pago = $rootScope.pago;

            vm.saldar = function () {
                if (vm.pago > (vm.total + vm.saldo)){
                    vm.pago = vm.total + vm.saldo;
                }
                try {
                    vm.pago = parseFloat(vm.pago.toFixed(2));
                }catch(err){
                    vm.pago = 0;
                }
                if (!vm.total){
                    vm.total=0;
                }
                vm.new_saldo = vm.total + vm.saldo - vm.pago;
                vm.new_saldo = parseFloat(vm.new_saldo.toFixed(2));
            };
            vm.saldar();
            PagoService.me({id:vm.model.id}, function (data) {
                vm.saldo = parseFloat(data.saldo);
                vm.saldar();
            },function (error) {
                vm.saldo = 0;
            });
            vm.pagar = function () {
                vm.user_id = $window.sessionStorage.getItem('userid');
                vm.modelo = {
                    'comision_venta':vm.model.total_comisiones,
                    'comision_servicio':vm.model.total_servicios,
                    'bailes':vm.model.total_bailes,
                    'adelanto':vm.model.total_adelantos,
                    'gastos_personal':vm.model.total_gastos,
                    'a_pagar':vm.pago,
                    'saldo_anterior':vm.saldo,
                    'saldo_actual':vm.new_saldo,
                    'persona':vm.model.id
                };
                PagoService.new_payment({fin: vm.fin, ini: vm.ini , total: vm.total, user:vm.user_id},vm.modelo,function (data) {
                    swal("Pago realizado","Ya puede imprimir");
                    vm.pagado = true;
                },function (error) {

                })
            };
            vm.cancel = function () {
                $state.go('app.personal',{id: vm.model.id});
            };
            vm.cerrar = function () {
                $state.go('app.pagoempleado');
            }
        }
    }
})();

(function() {
  'use strict';

  angular
    .module('app.pago')
    .controller('PagoController', PagoController);

  PagoController.$inject = ['$window', 'Notify', 'SweetAlert', 'PagoService', '$resource', 'PersonaService', '$uibModalInstance', 'pago'];

  function PagoController($window, Notify, SweetAlert, PagoService, $resource, PersonaService, $uibModalInstance, pago) {
    var vm = this;
    activate();

    function activate() {
      vm.show = false;
      vm.query = '';
      vm.pago = {};
      vm.motivos = [{id:1, nombre: 'Pago Servicio'},
                    {id:2, nombre: 'Adelanto'},
                    {id:3, nombre: 'Mantenimiento'},
                    {id:4, nombre: 'Seguridad'},
                    {id:5, nombre: 'Deuda'},
                    {id:6, nombre: 'Gastos Varios'}
                  ];
      vm.listaEmpleados = [];
      vm.usuario = {};
      vm.usuario.id = $window.sessionStorage.getItem('userid');



      //Cargamos los datos de tipo de Producto
      // function cargaTipoProducto() {
      //   vm.tipoProducto = {
      //     id: 0,
      //     nombre: null
      //   }
      // }
      //
      // //Cargamos el tipo de Producto
      // cargaTipoProducto();

      vm.empleados = function(){
        PersonaService.empleados({
        }, function(data) {
          vm.listaEmpleados = data;
          if(pago.id != 0){
            vm.pago = pago;
            var motivo = _.find(vm.motivos, function(n){return n.nombre === vm.pago.motivo});
            vm.pago.monto = parseFloat(pago.monto);
            vm.pago.motivo = motivo;
          }
          else {
            vm.pago = {};
            vm.pago.id = 0;
          }
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      vm.empleados();

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.create = function() {
        vm.envio_pago = {
          monto: vm.pago.monto,
          motivo: vm.pago.motivo.nombre,
          observacion: vm.pago.observacion,
          persona: vm.pago.persona,
          usuario: vm.usuario.id,
        };
        PagoService.create(vm.envio_pago, function(data) {
          Notify.alert(
            '<em class="fa fa-check"></em> Pago creado..', {
              status: 'success'
            }
          );
          vm.formAdd.$setPristine();
          $uibModalInstance.close(true);
          //cargaTipoProducto();
          // vm.load();
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      /**
       * Actualiza un elemento en la BD validando que no exista
       */
      vm.update = function() {
        console.log(vm.envio_pago);
        vm.update_pago = {
          monto: vm.pago.monto,
          motivo: vm.pago.motivo.nombre,
          observacion: vm.pago.observacion,
          persona: vm.pago.persona.id,
          usuario: vm.usuario.id,
        };
        PagoService.update({
          id: vm.pago.id
        }, vm.update_pago, function(data) {
          Notify.alert(
            '<em class="fa fa-check"></em> Elemento actualizado..', {
              status: 'success'
            }
          );
          vm.formAdd.$setPristine();
          $uibModalInstance.close(true);
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }

      /**
       * Crea un nuevo elemento en la BD
       */
      vm.add = function() {
        // Verificamos si se hace add o update
        if (vm.pago.id == 0) {
          vm.create();
        } else {
          vm.update();
        }
      }

      vm.cancel = function() {
        $uibModalInstance.close();
      };
    }
  }
})();

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

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PagoModalController', PagoModalController);

    PagoModalController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService'];

    function PagoModalController($location, $log, $uibModal, $stateParams, Notify, PersonaService, PagoService, $resource, SweetAlert, DepositoRetiroService) {
        var vm = this;
        activate();

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
                var f = new Date();
                vm.iniDate = new Date(f.getFullYear(), f.getMonth(), 1);
                vm.finDate = new Date(f.getFullYear(), f.getMonth() + 1, 0);
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
            }

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

            }

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
            }

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

            vm.filtro_pagos = function() {
                var dif = Math.abs(vm.finDate.getTime() - vm.iniDate.getTime());
                vm.daysWorked = Math.ceil(dif / (1000 * 3600 * 24));
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                DepositoRetiroService.filtro({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate(),
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
                    page: vm.pagingInfo.page
                }, function(data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                    for (var i = 0; i < vm.lista.length; i++){
                        if (vm.lista[i].usuario == null){
                            vm.lista[i].usuario = {
                                id: 0,
                                username: 'Desde pagos'
                            };
                        }
                    }
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            }
            vm.filtro_pagos();
            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.disable = function(item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara este pago!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.persona = item.persona.id;
                        item.usuario = item.usuario.id;
                        item.activo = false;
                        PagoService.update({
                            id: item.id
                        }, item, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..', {
                                    status: 'success'
                                }
                            );
                            vm.load();
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                    }
                });
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PagoPersonalController', PagoPersonalController);

    PagoPersonalController.$inject = ['$window', '$state', '$uibModal', '$stateParams', 'Notify',
        'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService', '$rootScope',
        '$uibModalInstance'];

    function PagoPersonalController($window, $state, $uibModal, $stateParams, Notify, PersonaService,
                                    PagoService, $resource, SweetAlert, DepositoRetiroService, $rootScope,
                                    $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            vm.fin = $rootScope.fin;
            vm.datefin = new Date(vm.fin);
            vm.ini = $rootScope.ini;
            vm.dateini = new Date(vm.ini);
            vm.hoy = new Date();
            vm.model = $rootScope.model;
            vm.total_comisiones = $rootScope.detalles_comisiones;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.pago = $rootScope.pago;
            vm.model.sueldo_cuenta = parseInt(vm.model.sueldo_cuenta);
            vm.pagado = false;
            vm.total = vm.pago - vm.model.total_adelantos - vm.model.total_gastos + vm.model.total_comisiones;
            vm.pago = vm.total;
            vm.saldar = function () {
                if (vm.pago > (vm.total + vm.saldo)){
                    vm.pago = vm.total + vm.saldo;
                }
                try {
                    vm.pago = parseFloat(vm.pago.toFixed(2));
                }catch(err){
                    vm.pago = 0;
                }
                if (!vm.total){
                    vm.total=0;
                }
                vm.new_saldo = vm.total + vm.saldo - vm.pago;
                vm.new_saldo = parseFloat(vm.new_saldo.toFixed(2));
            };
            PagoService.me({id:vm.model.id}, function (data) {
                vm.saldo = parseFloat(data.saldo);
                vm.saldar();
            },function (error) {
                vm.saldo = 0;
            });
            vm.cancel = function() {
                $uibModalInstance.close();
            };
            vm.pagar = function () {
                vm.user_id = $window.sessionStorage.getItem('userid');
                vm.modelo = {
                    'comision_venta':vm.model.total_comisiones,
                    'comision_servicio':0,
                    'bailes':0,
                    'adelanto':vm.model.total_adelantos,
                    'gastos_personal':vm.model.total_gastos,
                    'a_pagar':vm.pago,
                    'saldo_anterior':vm.saldo,
                    'saldo_actual':vm.new_saldo,
                    'persona':vm.model.id
                };
                PagoService.new_payment({fin: vm.fin, total: vm.total, user:vm.user_id},vm.modelo,function (data) {
                    swal("Pago realizado","Ya puede imprimir");
                    vm.pagado = true;
                    $state.go('app.pagoempleado');
                },function (error) {

                })
            };
            /**Funcion para ver la vista previa de impresion*/
            vm.vista_impresion = function () {
                $uibModalInstance.close();
                $rootScope.fin = vm.fin;
                $rootScope.ini = vm.ini;
                $rootScope.detalles_comisiones = vm.total_comisiones;
                $rootScope.gastos_personal = vm.total_gastos;
                $rootScope.adelantos_sueldos = vm.total_adelantos;
                $rootScope.model = vm.model;
                $rootScope.total = vm.total;
                $rootScope.pago = vm.pago;
                $rootScope.pagado = vm.pagado;
                $rootScope.new_saldo = vm.new_saldo;
                $state.go('app.impresion_empleado');
            }

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('PagoRealizarController', PagoRealizarController);

    PagoRealizarController.$inject = ['$window', '$state', '$uibModal', '$stateParams', 'Notify',
        'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService', '$rootScope',
        '$uibModalInstance'];

    function PagoRealizarController($window, $state, $uibModal, $stateParams, Notify, PersonaService,
                                    PagoService, $resource, SweetAlert, DepositoRetiroService, $rootScope,
                                    $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {
            vm.fin = $rootScope.fin;
            vm.datefin = new Date(vm.fin);
            vm.ini = $rootScope.ini;
            vm.dateini = new Date(vm.ini);
            vm.pagado = false;
            vm.total_servicios = $rootScope.total_servicios;
            vm.total_comisiones = $rootScope.detalles_comisiones;
            vm.total_bailes = $rootScope.detalles_bailes;
            vm.total_gastos = $rootScope.gastos_personal;
            vm.total_adelantos = $rootScope.adelantos_sueldos;
            vm.hoy = new Date();
            // model.total_servicios - ctrl.model.total_adelantos - ctrl.model.total_gastos + ctrl.model.total_comisiones + ctrl.model.total_bailes
            vm.model = $rootScope.model;
            if (!vm.model.total_adelantos){vm.model.total_adelantos = 0}
            if (!vm.model.total_bailes){vm.model.total_bailes = 0}
            if (!vm.model.total_comisiones){vm.model.total_comisiones = 0}
            if (!vm.model.total_gastos){vm.model.total_gastos = 0}
            if (!vm.model.total_servicios){vm.model.total_servicios = 0}
            vm.total = vm.model.total_servicios - vm.model.total_adelantos - vm.model.total_gastos + vm.model.total_comisiones + vm.model.total_bailes;

            vm.pago = vm.total;
            vm.saldar = function () {
                if (vm.pago > (vm.total + vm.saldo)){
                    vm.pago = vm.total + vm.saldo;
                }
                try {
                    vm.pago = parseFloat(vm.pago.toFixed(2));
                }catch(err){
                    vm.pago = 0;
                }
                if (!vm.total){
                    vm.total=0;
                }
                vm.new_saldo = vm.total + vm.saldo - vm.pago;
                vm.new_saldo = parseFloat(vm.new_saldo.toFixed(2));
            };
            PagoService.me({id:vm.model.id}, function (data) {
                vm.saldo = parseFloat(data.saldo);
                vm.saldar();
            },function (error) {
                vm.saldo = 0;
            });
            vm.cancel = function() {
                $uibModalInstance.close();
            };
            vm.pagar = function () {
                vm.user_id = $window.sessionStorage.getItem('userid');
                vm.modelo = {
                    'comision_venta':vm.model.total_comisiones,
                    'comision_servicio':vm.model.total_servicios,
                    'bailes':vm.model.total_bailes,
                    'adelanto':vm.model.total_adelantos,
                    'gastos_personal':vm.model.total_gastos,
                    'a_pagar':vm.pago,
                    'saldo_anterior':vm.saldo,
                    'saldo_actual':vm.new_saldo,
                    'persona':vm.model.id
                };
                PagoService.new_payment({fin: vm.fin, ini: vm.ini , total: vm.total, user:vm.user_id},vm.modelo,function (data) {
                    swal("Pago realizado","Ya puede imprimir");
                    vm.pagado = true;
                    $state.go('app.pagoempleado');
                },function (error) {

                })
            };
            /**Funcion para ver la vista previa de impresion*/
            vm.vista_impresion = function () {
                $uibModalInstance.close();
                $rootScope.fin = vm.fin;
                $rootScope.ini = vm.ini;
                $rootScope.total_servicios = vm.total_servicios;
                $rootScope.detalles_comisiones = vm.total_comisiones;
                $rootScope.detalles_bailes = vm.total_bailes;
                $rootScope.gastos_personal = vm.total_gastos;
                $rootScope.adelantos_sueldos = vm.total_adelantos;
                $rootScope.model = vm.model;
                $rootScope.total = vm.total;
                $rootScope.pago = vm.pago;
                $rootScope.pagado = vm.pagado;
                $rootScope.new_saldo = vm.new_saldo;
                $state.go('app.impresion_chica');
            }

        }
    }
})();

(function() {
  'use strict';
  angular.module('app.pago')
    .factory('PagoService', PagoService);
  PagoService.$inject = ['$resource'];

  function PagoService($resource) {
    var url = '/api';
    return $resource(url + '/pagos/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin'
        },
        url: url + '/pagos/filtro_pagos/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true,
        // url: url + '/tiposproductos/filtro_no_paginate/'
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      me: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/cuenta/me/'
      },
      new_payment: {
        method: 'POST',
        url: '/api/pagos_personal/new_payment/'
      }
    });
  }
}());

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

(function() {
    'use strict';

    angular
        .module('app.pedidococina')
        .controller('PedidoCocinaController', PedidoCocinaController);

    PedidoCocinaController.$inject = ['Notify', 'SweetAlert', 'PedidoCocinaService', 'DetalleMovimientoService'];

    function PedidoCocinaController(Notify, SweetAlert, PedidoCocinaService, DetalleMovimientoService) {
        var vm = this;
        activate();

        function activate() {
            var inicio;
            var fin;
            //Inicializamos los datos de la busqueda
            vm.busqueda = {
                desde: new Date(),
                hasta: new Date()
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

            /**
             * Carga todos los empleados de personas desde el backend
             */
            vm.load = function () {
                vm.lista = null;
                //Seteamos las horas de la fecha para ingresarlas a la busqueda
                inicio = moment(vm.busqueda.desde).format('YYYY-MM-DD');
                fin = moment(vm.busqueda.hasta).format('YYYY-MM-DD');
                PedidoCocinaService.list({
                    page: vm.pagingInfo.page,
                    limit: vm.pagingInfo.itemsPerPage,
                    order: vm.pagingInfo.sortBy,
                    query: vm.pagingInfo.search,
                    ini: inicio,
                    fin: fin,
                    tipo: 1
                }, function (data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail,
                        { status: 'danger' }
                    );
                });
            };

            vm.load(); // Cargamos la lista

            /**
             * Reinicia la pagina y recarga la lista con la busqueda ingresada
             */
            vm.search  = function () {
                vm.pagingInfo.page = 1;
                vm.load();
            };

            /**
             * Determina la ordenacion a aplicar en la lista en base al campo indicado
             * @param sortBy: campo a ordenar
             */
            vm.sort = function (sortBy) {
                if (sortBy === vm.pagingInfo.sortBy)
                    vm.pagingInfo.sortBy = '-' + sortBy;
                else
                    vm.pagingInfo.sortBy = sortBy;

                vm.pagingInfo.page = 1;
                vm.load();
            };

            /**
             * Actualiza la pagina seleccionada
             * @para page: numero de pagina a mostrar
             */
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.load();
            };

            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.terminado = function (item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Terminar el Pedido!',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#27C24C',
                    confirmButtonText: '¡Sí, terminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        // FINALIZAR PEDIDDO
                        DetalleMovimientoService.destroy({ id: item.id }, item, function () {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..',
                                { status: 'success' }
                            );
                            vm.load();
                        }, function (error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail,
                                { status: 'danger' }
                            );
                        });
                    }
                });
            };

            /// Carga de eventos de datepicker
            vm.desdeDP = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.desdeOpened = true;
            };

            /// Carga de eventos de datepicker
            vm.hastaDP = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.hastaOpened = true;
            };

        }
    }
})();

(function () {
    'use strict';
    angular.module('app.pedidococina')
        .factory('PedidoCocinaService',PedidoCocinaService);
    PedidoCocinaService.$inject = ['$resource'];
    function PedidoCocinaService($resource) {
        var url = '/api';
        return $resource(url + '/pedidoscocina/', {}, {
            list: { method: 'GET',
                params: { ini:'@ini',
                    fin:'@fin',
                    query: '@query',
                    order: '@order',
                    page: '@page',
                    limit: '@limit',
                    tipo: '@tipo'
                }
            }
        });
    }
}());

(function() {
    'use strict';

    angular
        .module('app.pedidococina')
        .controller('PedidoCocinaServicoController', PedidoCocinaServicoController);

    PedidoCocinaServicoController.$inject = ['Notify', 'PedidoCocinaService'];

    function PedidoCocinaServicoController(Notify, PedidoCocinaService) {
        var vm = this;
        activate();

        function activate() {
            var inicio;
            var fin;
            //Inicializamos los datos de la busqueda
            vm.busqueda = {
                desde: new Date(),
                hasta: new Date()
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

            /**
             * Carga todos los empleados de personas desde el backend
             */
            vm.load = function () {
                vm.lista = null;
                //Seteamos las horas de la fecha para ingresarlas a la busqueda
                inicio = moment(vm.busqueda.desde).format('YYYY-MM-DD');
                fin = moment(vm.busqueda.hasta).format('YYYY-MM-DD');
                PedidoCocinaService.list({
                    page: vm.pagingInfo.page,
                    limit: vm.pagingInfo.itemsPerPage,
                    order: vm.pagingInfo.sortBy,
                    query: vm.pagingInfo.search,
                    ini: inicio,
                    fin: fin,
                    tipo: 2
                }, function (data) {
                    vm.lista = data.results;
                    vm.pagingInfo.totalItems = data.count;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail,
                        { status: 'danger' }
                    );
                });
            };

            vm.load(); // Cargamos la lista

            /**
             * Reinicia la pagina y recarga la lista con la busqueda ingresada
             */
            vm.search  = function () {
                vm.pagingInfo.page = 1;
                vm.load();
            };

            /**
             * Determina la ordenacion a aplicar en la lista en base al campo indicado
             * @param sortBy: campo a ordenar
             */
            vm.sort = function (sortBy) {
                if (sortBy === vm.pagingInfo.sortBy)
                    vm.pagingInfo.sortBy = '-' + sortBy;
                else
                    vm.pagingInfo.sortBy = sortBy;

                vm.pagingInfo.page = 1;
                vm.load();
            };

            /**
             * Actualiza la pagina seleccionada
             * @para page: numero de pagina a mostrar
             */
            vm.selectPage = function (page) {
                vm.pagingInfo.page = page;
                vm.load();
            };

            /// Carga de eventos de datepicker
            vm.desdeDP = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.desdeOpened = true;
            };

            /// Carga de eventos de datepicker
            vm.hastaDP = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.hastaOpened = true;
            };

        }
    }
})();

(function () {
    'use strict';
    angular.module('app.perfilusuario')
        .factory('PerfilUsuarioService',PerfilUsuarioService);
    PerfilUsuarioService.$inject = ['$resource'];
    function PerfilUsuarioService($resource) {
        var url = '/api';
        return $resource(url + '/perfilesusuarios/:id/', {}, {
            list: { method: 'GET'},
            create: { method: 'POST' },
            show: { method: 'GET', params: { id: '@id' } },
            destroy: { method: 'DELETE', params: { id: '@id' } },
            update: { method: 'PUT', params: { id: '@id' } }
        });
    }
}());

(function() {
  'use strict';

  //Controlador de agregar, listar y eliminar personas
  angular
    .module('app.persona')
    .controller('PersonaController', PersonaController);

  PersonaController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PersonaService', 'TipoPersonaService', '$resource', '$state'];

  function PersonaController($uibModal, Notify, SweetAlert, PersonaService, TipoPersonaService, $resource, $state) {
    var vm = this;

    activate();

    function activate() {
      vm.query = '';
      vm.removePersona = removePersona;

      function modifyPersona(data) {
        vm.model = data;
      }

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

      function loadPersonas() {
        vm.persona = [];
        //Comprobamos si query no esta vacio
        if (vm.query.length > 0) {
          PersonaService.filtro({
            query: vm.query,
            page: vm.pagingInfo.page
          }, function(data) {
            vm.persona = data.results;
            vm.pagingInfo.totalItems = data.count;
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'warning'
              }
            );
          });

        } else {
          PersonaService.list({
            page: vm.pagingInfo.page
          }, function(data) {
            vm.pagingInfo.totalItems = data.count;
            vm.persona = data.results;
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'warning'
              }
            );
          });
        }
      }

      loadPersonas();

      // Lista tipos de personas
      vm.listaTipopersona = function() {
          return TipoPersonaService.filtro_no_paginate({
              query: ''
          }, function(data) {
              vm.listaTipopersona = data;
          }, function(error) {
              Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                      status: 'danger'
                  }
              );
          });
      };

      vm.listaTipopersona();

      // Filtro por Persona
      vm.filtro_tipo_persona = function() {
          PersonaService.filtro_tipo_persona({
              tipo: vm.tipopersonaSelect.id
          }, function(data) {
              vm.persona = data.results
              console.log(data);;
              vm.pagingInfo.totalItems = data.count;
          }, function(error) {
              Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                      status: 'danger'
                  }
              );
          });
      }

      /**
       * Buscamos un elemento enviando parametros a el backend
       */
      vm.search = loadPersonas;

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
        loadPersonas();
      };

      vm.openBarcode = function (id){
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'barcode.html',
          controller: 'PersonaBarCodeController as ctrl',
          resolve: {
            persona: function() {
              return id;
            }
          }
        });
      }

      function removePersona(index) {
        SweetAlert.swal({
          title: '¿Esta Seguro?',
          text: '¡Se eliminara a la persona!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: '¡Sí, eliminarlo!',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: true
        }, function(isConfirm) {
          if (isConfirm) {
            PersonaService.destroy({
                id: index
              },
              function(data) {
                Notify.alert(
                  '<em class="fa fa-check"></em> Persona eliminada..', {
                    status: 'success'
                  }
                );
                loadPersonas();
                $state.go('app.persona.lista');
              },
              function(error) {
                Notify.alert(
                  '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                    status: 'warning'
                  }
                );
                loadPersonas();
              });
          } else {
            loadPersonas();
          }
        });
      }

      vm.cancel = function() {
        loadPersonas();
      }
    }
  }
})();

(function() {
    'use strict';
    angular
        .module('app.persona')
        .controller('PersonaBarCodeController', PersonaBarCodeController);

    PersonaBarCodeController.$inject = ['persona', '$uibModalInstance', 'PersonaService', 'Notify', 'md5'];

    function PersonaBarCodeController(persona, $uibModalInstance, PersonaService, Notify, md5) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            PersonaService.show({
                id: persona
            }, function(data) {
                vm.persona = data
            }, function(error) {
                vm.errMsg = error.detail;
            });

            vm.options = {
                width: 1,
                height: 100,
                quite: 1,
                displayValue: false,
                font: "monospace",
                textAlign: "center",
                fontSize: 12,
                backgroundColor: "",
                lineColor: "#000"
            };

            vm.ok = function(divName) {
                $uibModalInstance.close();
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();

(function() {
    'use strict';
    //Controlador de edicion de personas
    angular
        .module('app.persona')
        .controller('PersonaEditController', PersonaEditController);

    PersonaEditController.$inject = ['$uibModal', 'Notify', '$stateParams', 'TipoPersonaService', 'PersonaService', '$state', 'UsuarioService'];

    function PersonaEditController($uibModal, Notify, $stateParams, TipoPersonaService, PersonaService, $state, UsuarioService) {
        var vm = this;

        activate();

        function activate() {
            vm.usuario = {};
            vm.isUsuario = false;
            vm.password1 = "";
            vm.password2 = "";
            vm.tipopersona = {};
            vm.tipopersona.id = 0;
            vm.isChica = false;

            function modelHistorial() {
                vm.historial = {
                    fecha : new Date()
                }
            }
            PersonaService.impresoras({},function (data) {
                vm.impresoras = data.results;
            },function (error) {

            });

            vm.tipos_historial = [
                {id:1, nombre:"Contratado"},
                {id:2, nombre:"Re-Contratado"},
                {id:3, nombre:"Despido"},
                {id:4, nombre:"Renuncia"}
            ];

            vm.clasificaciones= [
                {
                    "id":1, "nombre":"Bajo Rendimiento"
                },{
                    "id":2, "nombre":"Rendimiento Medio"
                },{
                    "id":1, "nombre":"Alto Rendimiento"
                }
            ];
            vm.grupos = [
                {value:1, text:"Bodeguero"},
                {value:2, text:"Mesero"},
                {value:3, text:"Cajero"},
                {value:4, text:"Administrador"},
                {value:5, text:"Cocina"}
            ];
            modelHistorial();
            vm.change = function () {
                // console.log(vm.model.grupo);
            };
            PersonaService.show({
                id: $stateParams.id
            }, function(data) {
                console.log(data);
                data.sueldo_cuenta = (data.sueldo_cuenta == null) ? 0 : parseFloat(data.sueldo_cuenta);
                data.porcentaje_chica = (data.porcentaje_chica == null) ? 0 : parseFloat(data.porcentaje_chica);
                vm.model = data;
                if (vm.model.grupo == null) {
                    vm.model.grupo = ''
                }
                switch (vm.model.grupo) {
                    case 1:
                        vm.model.grupo = vm.grupos[0];
                        break;
                    case 2:
                        vm.model.grupo = vm.grupos[1];
                        break;
                    case 3:
                        vm.model.grupo = vm.grupos[2];
                        break;
                    case 4:
                        vm.model.grupo = vm.grupos[3];
                }
                vm.verifica_empleado();

                for (var i = 0; i < vm.listaTipopersona.length; i++){
                    if (vm.listaTipopersona[i].id == vm.model.tipo_persona.id){
                        vm.tipopersona = vm.listaTipopersona[i];
                        break;
                    }
                }
                // console.log(vm.tipopersona);

                if(vm.model.codigo_barra==true)
                    vm.isChica = !vm.isChica;
            });

            PersonaService.usuario_persona({
                id: $stateParams.id
            }, function(data) {
                vm.usuario = data;
                vm.usuario.username = data.usuario.username;
                if(vm.usuario)
                    vm.isUsuario = true;
            }, function (error) {
                vm.usuario = null;
            });

            /*
             *Buscamos los tipos de personas
             */
            vm.tipos = function(val) {
                return TipoPersonaService.filtro({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    vm.listaTipopersona = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

            vm.submitPerson = function submitPerson() {
                console.log("MODEL", vm.model);
                vm.model.grupo = vm.model.grupo.value;
                vm.model.tipo_persona = vm.model.tipo_persona.id;
                if (vm.isEmpleado){
                    vm.model.clasificacion_empleado = vm.model.clasificacion_empleado.id;
                }
                PersonaService.update({
                        id: vm.model.id
                    },
                    vm.model,
                    function(data) {
                        vm.model = data;
                        // console.log(vm.usuario);
                        if(vm.usuario){
                            vm.setUser = ({
                                id: vm.usuario.usuario.id,
                                is_staff: true,
                                password: null,
                                username: vm.usuario.username
                            });
                            if(vm.password1 != "" && vm.password2 != "" && vm.password1 == vm.password2){
                                vm.setUser.password = vm.password1;
                                UsuarioService.cambiar_usuario_password({
                                        id: vm.setUser.id
                                    },
                                    vm.setUser
                                );
                            }else{
                                vm.usuario.username = vm.usuario.usuario.username;
                                // console.log(vm.usuario.u);
                                UsuarioService.cambiar_usuario_password({
                                        id: vm.setUser.id
                                    },
                                    vm.setUser
                                );
                            }
                        }
                        Notify.alert(
                            '<em class="fa fa-check"></em> Persona Editada..', {
                                status: 'success'
                            }
                        );
                        $state.go('app.persona.lista');
                    },
                    function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.detail, {
                                status: 'danger'
                            }
                        );
                    }
                );
            };

            vm.verifica_empleado = function() {
                if (vm.model.tipo_persona != null) {
                    if (vm.model.tipo_persona.id > 0) {
                        if(vm.model.tipo_persona.nombre == 'empleado' || vm.model.tipo_persona.nombre == 'Empleado'){
                            vm.isEmpleado = true;
                        } else {
                            vm.isEmpleado = false;
                        }
                    } else {
                        vm.isEmpleado = false;
                    }
                } else {
                    vm.isEmpleado = false;
                }
                return vm.isEmpleado;
            };

            vm.esUsuario = function() {
                vm.isUsuario = !vm.isUsuario;
            };

            vm.agregar_historial = function () {
                vm.historial.id = null;
                vm.historial.tipo = vm.historial.tipo.id;
                vm.historial.fecha = moment(vm.historial.fecha).format('YYYY-MM-DD');
                vm.model.historial_contratacion.push(vm.historial);
                vm.formHistorial.$setPristine();
                modelHistorial();
            };

            vm.retirar = function (item) {
                _.remove(vm.model.historial_contratacion, function(n) {
                    return n == item;
                });
            };

            vm.open = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoPersonaAddController as tipos'
                });
            };

            /// Carga de eventos de datepicker
            vm.openDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.dateOpened = true;
            };
            vm.openDate2 = function($event) {
                // $event.preventDefault();
                // $event.stopPropagation();
                vm.dateOpened2 = true;
            };
        }
    }
})();

(function() {
    'use strict';
    angular
        .module('app.persona')
        .controller('PersonaAddController', PersonaAddController);

    PersonaAddController.$inject = [
        '$uibModalInstance', 'PersonaService', 'Notify', 'TipoPersonaService'
    ];

    function PersonaAddController($uibModalInstance, PersonaService, Notify, TipoPersonaService) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            vm.Persona = {
                id: 0,
                nombre: null
            }

            /*
             *Buscamos los tipos de personas
             */
            vm.tipos = function(val) {
                return TipoPersonaService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.proveedor = {
                id: 2,
                nombre: 'Proveedor'
            }

            vm.ok = function() {
                vm.errMsg = '';
                vm.model.tipo_persona = vm.proveedor.id;
                PersonaService.create(vm.model, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    $uibModalInstance.close();
                }, function(error) {
                    vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
                });
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();

(function() {
    'use strict';
    //Controlador de edicion de personas
    angular
        .module('app.persona')
        .controller('PersonaNuevoController', PersonaNuevoController);

    PersonaNuevoController.$inject = ['$uibModal', 'Notify', 'TipoPersonaService', 'PersonaService', 'PerfilUsuarioService'];

    function PersonaNuevoController($uibModal, Notify, TipoPersonaService, PersonaService, PerfilUsuarioService) {
        var vm = this;

        activate();

        function activate() {
            vm.isUsuario = false;
            vm.isEmpleado = false;
            vm.isChica = false;


            /**Get de impresoras*/
            PersonaService.impresoras({},function (data) {
                vm.impresoras = data.results;
            },function (error) {

            });
            //Funcion para inicializar los datos
            function constructModel() {
                vm.model = {
                    id: 0,
                    nombre: '',
                    tipo_persona: null,
                    historial_contratacion: [],
                    sueldo_cuenta: 0,
                    porcentaje_chica: 0,
                    fecha_labores: new Date()
                };
                vm.usuario = {
                    password: '',
                    nick: ''
                };
                vm.perfil = {

                }
            }

            function modelHistorial() {
                vm.historial = {
                    fecha : new Date()
                }
            }

            //Inicializamos los datos de persona
            constructModel();
            modelHistorial();
            /*
             *Buscamos los tipos de personas
             */
            vm.tipos = function(val) {
                return TipoPersonaService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    vm.listaTipopersona = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

            vm.verifica_empleado = function() {
                if (vm.model.tipo_persona != null) {
                    if (vm.model.tipo_persona.id > 0) {
                        if(vm.model.tipo_persona.nombre == 'empleado' || vm.model.tipo_persona.nombre == 'Empleado'){
                            vm.isEmpleado = true;
                        } else {
                            vm.isEmpleado = false;
                        }
                    } else {
                        vm.isEmpleado = false;
                    }
                } else {
                    vm.isEmpleado = false;
                }
                return vm.isEmpleado;
            };

            vm.esUsuario = function() {
                vm.isUsuario = !vm.isUsuario;
            };

            vm.esChica = function(){
                vm.isChica = !vm.isChica;
            }

            vm.agregar_historial = function () {
                vm.historial.fecha = moment(vm.historial.fecha).format('YYYY-MM-DD');
                vm.model.historial_contratacion.push(vm.historial);
                vm.formHistorial.$setPristine();
                modelHistorial();
            };

            vm.retirar = function (item) {
                _.remove(vm.model.historial_contratacion, function(n) {
                    return n == item;
                });
            };

            vm.open = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoPersonaAddController as tipos'
                });
            };

            //Enviamos a guardar los datos del la nueva persona backend
            vm.submitPerson = function() {
                vm.model.tipo_persona = vm.model.tipo_persona.id;
                //Verificamos si el usuario es un usuario
                if (vm.isUsuario) {
                    vm.usuario.is_staff = true;
                    vm.perfil.usuario = vm.usuario;
                    vm.perfil.persona = vm.model;
                    //Si la persona es un usuario creamos un perfil de la misma
                    PerfilUsuarioService.create(vm.perfil, function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Persona creada..', {
                                status: 'success'
                            }
                        );
                        console.log(data);
                        constructModel();
                        vm.formValidate.$setPristine();
                    }, function(error) {
                        //Volvemos a cargar a el tipo de persona
                        TipoPersonaService.show({
                            id: vm.model.tipo_persona
                        }, function(data) {
                            vm.model.tipo_persona = data;
                        });
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: Nick de usuario ya existe o campos no se han ingresado adecuadamente', {
                                status: 'danger'
                            }
                        );
                    });
                    // Reinicio de Variables para condiciones
                    vm.isUsuario = false;
                    vm.isUsuario2 = false;
                    vm.isEmpleado = false;
                    vm.isChica = false;
                } else {
                    //Si la persona no es usuarios creamos a la persona
                    PersonaService.create(vm.model, function(data) {
                        Notify.alert(
                            '<em class="fa fa-check"></em> Persona creada..', {
                                status: 'success'
                            }
                        );
                        if (data.codigo_barra) {
                            var modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'barcode.html',
                                controller: 'PersonaBarCodeController as ctrl',
                                resolve: {
                                    persona: function() {
                                        return data.id;
                                    }
                                }
                            });
                        }
                        constructModel();
                        vm.formValidate.$setPristine();
                    }, function(error) {
                        //Volvemos a cargar el tipo de persona
                        TipoPersonaService.show({
                            id: vm.model.tipo_persona
                        }, function(data) {
                            vm.model.tipo_persona = data;
                        });
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data, {
                                status: 'danger'
                            }
                        );
                    });
                }
                // Reinicio de Variables para condiciones
                vm.isUsuario = false;
                vm.isEmpleado = false;
                vm.isChica = false;
            };

            /// Carga de eventos de datepicker
            vm.openDate = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.dateOpened = true;
            };
            vm.openDate2 = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.dateOpened2 = true;
            };
        }
    }
})();

(function() {
  'use strict';
  angular.module('app.persona')
    .factory('PersonaService', PersonaService);
  PersonaService.$inject = ['$resource'];

  function PersonaService($resource) {
    var url = '/api';
    return $resource(url + '/personas/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      impresoras: {
        url: '/api/impresoras/',
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/personas/filtro/',
      },
      filtro_tipo_persona: {
        method: 'GET',
        params: {
          tipo: '@tipo',
        },
        url: url + '/personas/filtro_tipo_persona/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/personas/filtro_no_paginate/',
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      cuenta_persona: {
        method: 'GET',
        params: {
          id: '@id'
        },
        url: url + '/personas/cuenta_persona'
      },
      // Comisiones de Ventas
      empleado_comisionventas: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          ant: '@ant',
          sig: '@sig'
        },
        url: url + '/personas/empleado_comisionventas/',
      },
      // Comisiones de Servicios
      empleado_comisionservicios: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          ant: '@ant',
          sig: '@sig'
        },
        url: url + '/personas/empleado_comisionservicios/',
      },
      // Adelantos de sueldos en caja
      empleado_adelantosueldos: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          page: '@page'
        },
        url: url + '/personas/empleado_adelantosueldos/',
      },
      // Adelantos de sueldos administracion pago
      empleado_gastospersonal: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          page: '@page'
        },
        url: url + '/personas/empleado_gastospersonal/',
      },
      // Bailes
      empleado_bailes: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          ant: '@ant',
          sig: '@sig'
        },
        url: url + '/personas/empleado_bailes/',
      },
      // Comision de Ventas por dia
      personal_comisionventas: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          per: '@per',
          ant: '@ant',
          sig: '@sig'
        },
        url: url + '/personas/personal_comisionventas/',
      },
      // Lista de Pagos a Empleados entre fechas de ULTIMO PAGO
      lista_empleados: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin',
          tipo: '@tipo',
          ant: '@ant',
          sig: '@sig'
        },
        url: url + '/personas/filtro_pagos_empleados/',
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      proveedores: {
        url: url + '/personas/proveedores/',
        method: 'GET',
        isArray: true
      },
      clientes: {
        url: url + '/personas/clientes/',
        method: 'GET',
        isArray: true
      },
      empleados: {
        url: url + '/personas/empleados/',
        method: 'GET',
        isArray: true
      },
      usuario_persona: {
        url: url + '/perfilesusuarios/busca_perfil_persona/',
        method: 'GET',
        params: {
          id: '@id'
        }
        // isArray: true
      }
    });
  }
}());

(function() {
  'use strict';
  angular.module('app.personacuenta')
    .factory('PersonaCuentaService', PersonaCuentaService);
  PersonaCuentaService.$inject = ['$resource'];

  function PersonaCuentaService($resource) {
    var url = '/api';
    return $resource(url + '/personacuenta/', {}, {
      list_chica: {
        method: 'GET',
        params: {
          query: '@query',
          tipo: '@tipo'
        },
        url: url + '/personacuenta/',
      },
      lista: {
        url: url + '/personacuenta/busca_usuario/',
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true
      },
      list: {
        method: 'GET',
        params: {
          query: '@query',
          tipo: '@tipo'
        },
        url: url + '/personaquery/',
      }
    });
  }
}());

(function() {
'use strict';

angular
  .module('app.tipopersona')
  .controller('PresentacionController', PresentacionController);

PresentacionController.$inject = ['$window', 'Notify', 'SweetAlert', 'PresentacionService', '$resource'];

function PresentacionController($window, Notify, SweetAlert, PresentacionService, $resource) {
  var vm = this;
  activate();

  function activate() {
    vm.show = false;
    vm.query = '';
    //Cargamos los datos de tipo de Persona
    function cargaPresentacion() {
      vm.presentacion = {
        id: 0,
        nombre: null
      }
    }

    //Cargamos el tipo de Persona
    cargaPresentacion();

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

    /**
     * Carga todos los tipos de personas desde el backend
     */
    vm.load = function() {
      vm.lista = [];
      if (vm.query.length>0) {
        PresentacionService.filtro({
          query: vm.query,
          page: vm.pagingInfo.page
        }, function(data) {
          vm.lista = data.results;
          vm.pagingInfo.totalItems = data.count;
        }, function(error) {
          console.log(error);
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'warning'
            }
          );
        });
      } else {
        PresentacionService.list({
          page: vm.pagingInfo.page
        }, function(data) {
          vm.lista = data.results;
          vm.pagingInfo.totalItems = data.count;
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }
    }

    vm.load(); //Cargamos la lista

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
    }

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

    /**
     * Muestra el dialogo para agregar nuevos elementos a la BD
     * @param show: booleano que determina si se muestra u oculta
     */
    vm.showAdd = function(show) {
      vm.show = show;
      if (!vm.show) {
        vm.form.$setPristine();
        vm.presentacion = {
          id: 0
        };
      }
    }

    /**
     * Crea un nuevo elemento en la BD
     */
    vm.create = function() {
      vm.presentacion = {
        nombre: vm.presentacion.nombre,
        activo: true
      };
      PresentacionService.create(vm.presentacion, function(data) {
        Notify.alert(
          '<em class="fa fa-check"></em> Elemento creado..', {
            status: 'success'
          }
        );
        vm.form.$setPristine();
        cargaPresentacion();
        vm.show = false;
        vm.load();
      }, function(error) {
        Notify.alert(
          '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
            status: 'danger'
          }
        );
      });
    }

    /**
     * Actualiza un elemento en la BD validando que no exista
     */
    vm.update = function() {
      PresentacionService.update({
        id: vm.presentacion.id
      }, vm.presentacion, function(data) {
        Notify.alert(
          '<em class="fa fa-check"></em> Elemento actualizado..', {
            status: 'success'
          }
        );
        vm.form.$setPristine();
        cargaPresentacion();
        vm.show = false;
        vm.load();
      }, function(error) {
        Notify.alert(
          '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
            status: 'danger'
          }
        );
        vm.load();
      });
    }

    /**
     * Crea un nuevo elemento en la BD
     */
    vm.add = function() {
      // Verificamos si se hace add o update
      if (vm.presentacion.id < 1) {
        vm.create();
      } else {
        vm.update();
      }
    }

    vm.edit = function(item) {
      vm.show = true;
      vm.presentacion = item;
      $window.scrollTo(0, 0);
    }

    /**
     * Realiza un soft delete al elemento indicado
     * @param item: elemento a desactivar
     */
    vm.disable = function(item) {      
      SweetAlert.swal({
        title: '¿Esta Seguro?',
        text: '¡Se eliminara este Tipo de Persona!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: '¡Sí, eliminarlo!',
        cancelButtonText: 'Cancelar',
        closeOnConfirm: true
      }, function(isConfirm) {
        if (isConfirm) {
          item.activo = false;
          PresentacionService.update({
            id: item.id
          }, item, function(data) {
            Notify.alert(
              '<em class="fa fa-check"></em> Elemento eliminado..', {
                status: 'success'
              }
            );
            vm.show = false;
            vm.load();
          }, function(error) {
            Notify.alert(
              '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                status: 'danger'
              }
            );
          });
        }
      });
    }
  }
}
})();

(function() {
    'use strict';
    angular
      .module('app.presentacion')
      .controller('PresentacionAddController', PresentacionAddController);

    PresentacionAddController.$inject = [
      '$uibModalInstance', 'PresentacionService', 'Notify'
    ];

    function PresentacionAddController($uibModalInstance, PresentacionService, Notify) {
      var vm = this;
      activate();

      function activate() {
        vm.errMsg = '';
        vm.presentacion = {
          id: 0,
          nombre: null
        }

        vm.ok = function() {
          vm.errMsg = '';
          vm.presentacion = {
            nombre: vm.model.nombre,
            activo: true
          };
          PresentacionService.create(vm.presentacion, function(data) {
            Notify.alert(
              '<em class="fa fa-check"></em> Elemento creado..', {
                status: 'success'
              }
            );
            $uibModalInstance.close();
          }, function(error) {
            vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
          });
        };

        vm.cancel = function() {
          $uibModalInstance.close();
        };
      }
    }
})();

(function() {
  'use strict';
  angular.module('app.tipopersona')
    .factory('PresentacionService', PresentacionService);
  PresentacionService.$inject = ['$resource'];

  function PresentacionService($resource) {
    var url = '/api';
    return $resource(url + '/presentaciones/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/presentaciones/filtro/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true,
        url: url + '/presentaciones/filtro_no_paginate/'
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoComboController', ProductoComboController);

    ProductoComboController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService', 'ProductoService', '$state'];

    function ProductoComboController($uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService, ProductoService, $state) {
        var vm = this;
        activate();

        function activate() {
            function inicializa_producto() {
                vm.producto = {
                    es_combo: true,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
                vm.totalcostocombo = 0.00;
                TipoProductoService.combo({}, function (data) {
                    vm.producto.tipo_producto = data;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> El tipo de producto combo no se encuentra creado', {
                            status: 'danger'
                        }
                    );
                });
            }

            function inicializa_presentacion() {
                vm.presentacion = {};
            }

            function inicializa_producto_combo() {
                vm.producto_combo = {
                    cantidad : 0
                }
            }

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

            inicializa_presentacion();
            inicializa_producto();
            inicializa_producto_combo();

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

            vm.validaCombo = function validaCombo() {
                if (!vm.formValidate.$invalid && vm.producto.productos.length > 0 ||
                    vm.producto.productos_presentacion.length <= 0) {
                    return false;
                } else {
                    return true;
                }
            };

            vm.openTipo = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoProductoAddController as tipos'
                });
            };

            vm.openPresentacion = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addPresentacion.html',
                    controller: 'PresentacionAddController as tipos'
                });
            };

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
            };

            //Guardado de producto/combo
            vm.submit = function submit() {
                vm.producto.productos_presentacion=[];
                vm.presentacion.presentacion = vm.presentacion.presentacion.id;
                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                vm.producto.productos_presentacion.push(vm.presentacion);
                vm.producto.existencia = 0;
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    vm.producto.productos[i].tipo_producto_combo = null;
                    vm.producto.productos[i].producto_combo = vm.producto.productos[i].producto_combo.id;
                }
                save();
            };

            function save() {
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                vm.producto.precio_costo = vm.totalcostocombo;
                // console.log(vm.producto);
                ProductoService.create(vm.producto, function() {
                    vm.producto = {
                        es_combo: true,
                        combo_mixto: false,
                        productos: []
                    };
                    vm.formValidate.$setPristine();
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto creado..', {
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
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoEditarComboController', ProductoEditarComboController);

    ProductoEditarComboController.$inject = ['$stateParams', '$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService',
        'ProductoService', '$resource', '$state', 'ProductoPresentacionService'
    ];

    function ProductoEditarComboController($stateParams, $uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService,
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
                vm.producto = {
                    es_combo: false,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
            }
            inicializa_producto();

            function inicializa_producto_combo() {
                vm.producto_combo = {
                    cantidad: 0
                }
            }
            inicializa_producto_combo();


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

            // Inicializa el Producto con todos los datos necesarios
            function iniciaProducto() {
                ProductoService.show({
                    id: vm.id
                }, function(data) {
                    data.costo_minimo_producto = (data.costo_minimo_producto == null) ? 0 : parseFloat(data.costo_minimo_producto);
                    data.precio_costo = (data.precio_costo == null) ? 0 : parseFloat(data.precio_costo);
                    data.precio_venta = (data.precio_venta == null) ? 0 : parseFloat(data.precio_venta);
                    data.precio_fichas = (data.precio_fichas == null) ? 0 : parseFloat(data.precio_fichas);
                    data.comision_mesero = (data.comision_mesero == null) ? 0 : parseFloat(data.comision_mesero);
                    // console.log("PRODUCTO", data);
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

            // !vm.formValidate.$invalid &&
            // Agrega únicamente si hay más de un Producto agregados al Combo
            vm.validaCombo = function validaCombo() {
                if (!vm.formValidate.$invalid && vm.producto.es_combo) {
                    if (vm.producto.productos.length > 0) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    if (!vm.formValidate.$invalid) {
                        return false;
                    } else {
                        return true;
                    }
                }
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

            vm.validacion = function() {
                if (vm.producto.productos_presentacion.length <= 0) {
                    return true;
                } else {
                    if (vm.formValidate.$invalid) {
                        return true;
                    }
                    return false;
                }
            };


            //Eliminamos un producto seleccionado dentro de la lista de productos de combo
            vm.removeProdCombo = function removeProdCombo(data) {
                // console.log(data);
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
                        if (data.cantidad != 0) {
                            vm.totalcostocombo = vm.totalcostocombo - (data.cantidad * data.producto_combo.precio_costo);
                            // console.log(vm.totalcostocombo);
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
                vm.producto.precio_costo = vm.totalcostocombo;
                ProductoService.update(vm.producto, function(data) {
                    vm.producto = {
                        es_combo: true,
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
            };


        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoEditarController', ProductoEditarController);

    ProductoEditarController.$inject = ['$stateParams', '$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService',
        'ProductoService', '$resource', '$state', 'ProductoPresentacionService'];

    function ProductoEditarController($stateParams, $uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService,
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
                    // for (var i = 0; i < vm.producto.productos.length; i++) {
                    //     if (vm.producto.productos[i].producto_combo != null) {
                    //         vm.totalcostocombo = vm.totalcostocombo + (vm.producto.productos[i].producto_combo.precio_costo * vm.producto.productos[i].cantidad)
                    //     }
                    // }
                    // vm.esCombo();
                })
            }

            iniciaProducto();

            // vm.validacion = function () {
            //     if (vm.producto.productos_presentacion.length <= 0){
            //         return true;
            //     }  else {
            //         if (vm.formValidate.$invalid){
            //             return true;
            //         }
            //         return false;
            //     }
            // };
            //

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
                vm.producto.productos_presentacion=[];
                // vm.presentacion.presentacion = vm.presentacion.presentacion.id;
                // vm.producto.productos_presentacion.push(vm.presentacion);
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

            vm.addPresentacion = function addPresentacion() {
                // vm.productoVacio.productos_presentacion.push(vm.presentacion);
                // vm.presentacion.presentacion = vm.presentacion.presentacion.id;

                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                if (vm.presentacion.porcentaje_completo == null)
                    vm.presentacion.porcentaje_completo = false
                vm.listapresentaciones.push(vm.presentacion);
                vm.presentacion = {};
                vm.presentacionForm.$setPristine();
                Notify.alert(
                    '<em class="fa fa-check"></em> Presentacion agredada a la lista', {
                        status: 'success'
                    }
                );
            };

            // Filtro de Presentaciones del Producto ya existentes
            vm.filtro_presentaciones = function() {
                ProductoService.presentacion_producto({
                    pro: vm.id
                }, function(data) {
                    vm.listapresentaciones = data;
                    vm.producto.presentacion = vm.listapresentaciones.id;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.filtro_presentaciones();

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

            function save() {

                if (vm.listapresentaciones != 0){
                    vm.producto.tipo_producto = vm.producto.tipo_producto.id;
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
                else if (vm.listapresentaciones == 0) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> El producto debe tener al menos una Presentación', {
                                status: 'warning'
                            }
                        );

                };

            };


        }
    }
})();

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

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('InventarioController', InventarioController);

    InventarioController.$inject = ['SweetAlert', 'ProductoService', 'Notify', '$state', '$uibModalInstance'];

    function InventarioController(SweetAlert, ProductoService, Notify, $state, $uibModalInstance) {
        var vm = this;
        activate();

        function activate() {

            vm.hoy = new Date();
            vm.hoy = vm.hoy.getDate() + "/" + (vm.hoy.getMonth() +1) + "/" + vm.hoy.getFullYear() + " " + vm.hoy.getHours() + ":" + vm.hoy.getMinutes() + ":" + vm.hoy.getSeconds();

            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 15,
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
                limit: 15
            }
            // selectPage
            vm.selectPage = function(page) {
                vm.pagingInfo.page = page;
                // siempre se debe reiniciar a 0 el salto por si escogen la pagina 1
                vm.pagination.skip = 0;
                if (vm.pagingInfo.page > 1)
                    vm.pagination.skip = (vm.pagingInfo.page - 1) * vm.pagingInfo.itemsPerPage;
                vm.listado();
            };

            vm.listado = function (){
                ProductoService.impresion_productos({
                    ant: vm.pagination.skip,
                    sig: vm.pagination.skip + 15
                }, function(data) {
                    console.log(data);
                    vm.producto = data.productos
                    vm.pagingInfo.totalItems = data.filas;
                    // console.log(vm.producto);
                }, function(error) {
                    console.log("ERROR",error);
                });
            }

            vm.listado();


            // Cierra Ventana Modal
            vm.cancel = function() {
                $uibModalInstance.close();
            };


        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoController', ProductoController);

    ProductoController.$inject = ['SweetAlert', 'ProductoService', 'Notify', '$state', '$uibModal'];

    function ProductoController(SweetAlert, ProductoService, Notify, $state, $uibModal) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            vm.open_menu = false;
            vm.busqueda = "";
            // Paginacion para el backend expresado con saltos y limites
            vm.pagination = {
                skip: 0,
                sort: 'id',
                where: {
                    "activo": true
                },
                limit: 10
            };

            // Advertencia que productos inexistentes
            vm.advertencia = function() {
              SweetAlert.swal('Información', 'No existe el Producto que se esta buscando', 'info');
            };

            function loadProductos() {
                if (vm.query.length > 0) {
                    if (vm.busqueda != vm.query){
                        vm.pagingInfo.page = 1;
                        vm.busqueda = vm.query;
                    }
                    ProductoService.filtro({
                        query: vm.query,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.producto = data.results;
                        // console.log(data);
                        if (data.count == 0){
                            vm.advertencia();
                        }
                        vm.pagingInfo.totalItems = data.count;
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'warning'
                            }
                        );
                    });
                } else {
                    ProductoService.list({
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.pagingInfo.totalItems = data.count;
                        vm.producto = data.results;
                        // console.log(vm.producto);
                    });
                }
            }

            loadProductos();

            vm.search = loadProductos;

            // Elimina Producto
            vm.removeProducto = function(item) {
                if(item.existencia == 0){
                    SweetAlert.swal({
                        title: '¿Esta Seguro?',
                        text: '¡Se eliminara al Producto!',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: '¡Sí, eliminarlo!',
                        cancelButtonText: 'Cancelar',
                        closeOnConfirm: true
                    }, function(isConfirm) {
                        if (isConfirm) {
                            ProductoService.destroy({
                                    id: item.id
                                },
                                function(data) {
                                    Notify.alert(
                                        '<em class="fa fa-check"></em> Producto eliminado..', {
                                            status: 'success'
                                        }
                                    );
                                    loadProductos();
                                    $state.go('app.producto.lista');
                                },
                                function(error) {
                                    Notify.alert(
                                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                            status: 'warning'
                                        }
                                    );
                                    loadProductos();
                                });
                        }
                    });
                }else{
                    SweetAlert.swal({
                        title: '¡No se puede Eliminar!',
                        text: 'El producto tiene existencia en bodega para poder eliminarlo deberá realizar una baja de producto',
                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#DD6B55',
                        closeOnConfirm: true
                    })
                }
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
                loadProductos();
            };

            // Modal para Impresión de Inventario
            vm.openInventario = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: 'impresionInventario.html',
                    controller: 'InventarioController as impr'
                });
            };

        }
    }
})();

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

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoMixtoController', ProductoMixtoController);

    ProductoMixtoController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService', 'ProductoService', '$state'];

    function ProductoMixtoController($uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService, ProductoService, $state) {
        var vm = this;
        activate();

        function activate() {
            function inicializa_producto() {
                vm.producto = {
                    es_combo: true,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
                vm.totalcostocombo = 0.00;
                TipoProductoService.combo({}, function (data) {
                    vm.producto.tipo_producto = data;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> El tipo de producto combo no se encuentra creado', {
                            status: 'danger'
                        }
                    );
                });
            }

            function inicializa_presentacion() {
                vm.presentacion = {};
            }

            function inicializa_producto_combo() {
                vm.producto_combo = {
                    cantidad : 0
                }
            }

            inicializa_presentacion();
            inicializa_producto();
            inicializa_producto_combo();

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

            vm.validaCombo = function validaCombo() {
                if (!vm.formValidate.$invalid && vm.producto.productos.length > 0 ||
                    vm.producto.productos_presentacion.length <= 0) {
                    return false;
                } else {
                    return true;
                }
            };

            /*
             *Buscamos los tipos de productos desde la api
             */
            vm.tipos = function(val) {
                return TipoProductoService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.openTipo = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoProductoAddController as tipos'
                });
            };

            vm.openPresentacion = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addPresentacion.html',
                    controller: 'PresentacionAddController as tipos'
                });
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
            };

            vm.mixtoid = {};
            vm.idcombo = function idcombo() {
                ProductoService.combo_mixto({}, function(data) {
                    vm.mixtoid = data;
                }, function (error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> No existe "Combo Mixto", creelo en Tipo de Producto', {
                            status: 'danger'
                        }
                    );
                });
            }
            vm.idcombo();

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
                vm.producto.combo_mixto = true;
            }

            //Guardado de producto/combo
            vm.submit = function submit() {
                vm.producto.productos_presentacion=[];
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                vm.presentacion.presentacion = vm.presentacion.presentacion.id;
                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                vm.producto.productos_presentacion.push(vm.presentacion);
                vm.producto.existencia = 0;
                for (var i = 0; i < vm.producto.productos.length; i++) {
                    vm.producto.productos[i].tipo_producto_combo =  vm.producto.productos[i].tipo_producto_combo.id;
                    vm.producto.productos[i].producto_combo = null;
                }
                save();
            };

            function save() {
                // Cuando el id de 'Combo Mixto' estaba seteado (linea de abajo)
                // vm.producto.tipo_producto = vm.mixtoid.id;
                
                // console.log(vm.producto);
                ProductoService.create(vm.producto, function() {
                    vm.producto = {
                        es_combo: false,
                        combo_mixto: true,
                        productos: []
                    };
                    vm.formValidate.$setPristine();
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto creado..', {
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
        }
    }
})();

(function() {
    'use strict';
    angular
        .module('app.producto')
        .controller('ProductoAddController', ProductoAddController);

    ProductoAddController.$inject = [
        '$uibModalInstance', 'ProductoService', 'Notify', 'PresentacionService', 'TipoProductoService'
    ];

    function ProductoAddController($uibModalInstance, ProductoService, Notify, PresentacionService, TipoProductoService) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            vm.producto = {
                id: 0,
                nombre: null
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
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.ok = function() {
                vm.errMsg = '';
                vm.producto.productos = [];
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                vm.producto.presentacion = vm.producto.presentacion.id;
                ProductoService.create(vm.producto, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    $uibModalInstance.close();
                }, function(error) {
                    vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
                });
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoNormalController', ProductoNormalController);

    ProductoNormalController.$inject = ['$uibModal', 'Notify', 'PresentacionService', 'TipoProductoService', 'ProductoService', 'SweetAlert'];

    function ProductoNormalController($uibModal, Notify, PresentacionService, TipoProductoService, ProductoService, SweetAlert) {
        var vm = this;
        activate();

        function activate() {
            function inicializa_producto() {
                vm.producto = {
                    es_combo: false,
                    combo_mixto: false,
                    comestible: false,
                    productos: [],
                    productos_presentacion: []
                };
            }

            function inicializa_presentacion() {
                vm.presentacion = {};
            }

            inicializa_presentacion();
            inicializa_producto();

            /*
             *Buscamos los tipos de productos desde la api
             */
            vm.tipos = function(val) {
                return TipoProductoService.filtro_no_paginate({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            /*
             *Buscamos las presentaciones desde la api
             */
            vm.presentaciones = function(val) {
                return PresentacionService.filtro_no_paginate({
                    query: val,
                    page: 1
                }).$promise.then(function(data) {
                    return data;
                });
            };

            vm.openTipo = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addTipo.html',
                    controller: 'TipoProductoAddController as tipos'
                });
            };

            vm.openPresentacion = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addPresentacion.html',
                    controller: 'PresentacionAddController as tipos'
                });
            };

            vm.addPresentacion = function addPresentacion() {
                if (vm.presentacion.se_imprime_ticket == null)
                    vm.presentacion.se_imprime_ticket = false
                if (vm.presentacion.se_carga_a_empleada == null)
                    vm.presentacion.se_carga_a_empleada = false
                if (vm.presentacion.mostrar == null)
                    vm.presentacion.mostrar = false
                vm.producto.productos_presentacion.push(vm.presentacion);
                inicializa_presentacion();
                vm.presentacionForm.$setPristine();
                Notify.alert(
                    '<em class="fa fa-check"></em> Presentacion agredada a la lista', {
                        status: 'success'
                    }
                );
            };

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
            vm.removePresentacion = function removePresentacion(data) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara la presentacion de la lista!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        _.remove(vm.producto.productos_presentacion, function(n) {
                            return n == data;
                        });
                        Notify.alert(
                            '<em class="fa fa-check"></em> Tipo de Producto eliminada de la lista', {
                                status: 'success'
                            }
                        );
                    }
                });
            };

            //Guardado de producto/combo
            vm.submit = function submit() {
                vm.producto.existencia = 0;
                vm.producto.productos = [];
                save();
            };

            function save() {
                var carga = vm.producto;
                // Seteamos los datos a campos que se necesitan ser validados
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                _(vm.producto.productos_presentacion).forEach(function(item) {
                    item.presentacion = item.presentacion.id;
                });
                console.log(vm.producto);
                // Enviamos a crear un nuevo producto
                ProductoService.create(vm.producto, function() {
                    inicializa_producto();
                    vm.formValidate.$setPristine();
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto creado..', {
                            status: 'success'
                        }
                    );
                    // $state.go('app.producto.lista');
                }, function(error) {
                    vm.producto = carga;
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data, {
                            status: 'danger'
                        }
                    );
                });
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.producto')
        .controller('ProductoNuevoController', ProductoNuevoController);

    ProductoNuevoController.$inject = ['$uibModal', 'Notify', 'SweetAlert', 'PresentacionService', 'TipoProductoService', 'ProductoService', '$resource', '$state'];

    function ProductoNuevoController($uibModal, Notify, SweetAlert, PresentacionService, TipoProductoService, ProductoService, $resource, $state) {
        var vm = this;
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

            vm.validaCombo = function validaCombo() {
                if (vm.producto.es_combo) {
                    if (!vm.formValidate.$invalid && vm.producto.productos.length > 0 || vm.lista_presentaciones.length <= 0) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    if (!vm.formValidate.$invalid || vm.lista_presentaciones.length <= 0) {
                        return false;
                    } else {
                        return true;
                    }
                }
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
                vm.comboForm.$setPristine();
            }

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

            //Agregamos un nuevo elemento a lista de productos de combo
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
                console.log(vm.producto.productos);
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
                    vm.producto_combo = {};
                    vm.comboForm.$setPristine();
                } else {
                    vm.producto_combo = {};
                    Notify.alert(
                        '<em class="fa fa-times"></em> Producto ya existe dentro de la lista', {
                            status: 'danger'
                        }
                    );
                }
            }

            vm.addPresentacion = function addPresentacion() {
              vm.presentacion.presentacion = vm.presentacion.presentacion.id;
              vm.lista_presentaciones.push(vm.presentacion);
              console.log(vm.lista_presentaciones);
              vm.presentacion = {};
              Notify.alert(
                  '<em class="fa fa-check"></em> Presentacion agredada a la lista', {
                      status: 'success'
                  }
              );
            }

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

            function save() {
                vm.producto.tipo_producto = vm.producto.tipo_producto.id;
                // vm.producto.presentacion = vm.producto.presentacion.id;
                vm.producto.producto_presentacion = vm.lista_presentaciones;

                ProductoService.create(vm.producto, function(data) {
                    vm.producto = {
                        es_combo: false,
                        combo_mixto: false,
                        productos: []
                    };
                    vm.formValidate.$setPristine();
                    Notify.alert(
                        '<em class="fa fa-check"></em> Producto creado..', {
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
        }
    }
})();

(function() {
  'use strict';
  angular.module('app.producto')
    .factory('ProductoService', ProductoService);
  ProductoService.$inject = ['$resource'];

  function ProductoService($resource) {
    var url = 'http://localhost:8000/api';
    return $resource(url + '/productos/:id/', {}, {
      list: {
        method: 'GET'
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      combo_mixto: {
        method: 'GET',
        url: url + '/productos/busca_combo_mixto'
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      filtro_no_combo: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/productos/filtro_no_combo/',
        isArray: true
      },
      existencia_minima: {
        url: url + '/productos/existencia_minima/',
        method: 'GET'
      },
      impresion_productos: {
        method: 'GET',
        params : {
          ant: '@ant',
          sig: '@sig',
        },
        url: url + '/productos/lista_impresion_productos/'
      },
      no_combo: {
        url: url + '/productos/no_combo/',
        method: 'GET',
        isArray: true
      },
      filtro: {
        url: url + '/productos/filtro/',
        method: 'GET',
        params: {
          query: '@query',
          page: '@page'
        }
      },
      presentacion_producto: {
        method: 'GET',
        params: {
          pro: '@id'
        },
        url: url + '/presentacionesproducto/presentacion_producto/',
        isArray: true
      },
      tipo: {
        url: url + '/productos/tipos/',
        method: 'GET',
        params: {
          tipo: '@tipo'
        },
        isArray: true
      }
    });
  }
}());

(function() {
  'use strict';
  angular.module('app.productopresentacion')
    .factory('ProductoPresentacionService', ProductoPresentacionService);
  ProductoPresentacionService.$inject = ['$resource'];

  function ProductoPresentacionService($resource) {
    var url = '/api';
    return $resource(url + '/presentacionesproducto/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('CierreCajasController', CierreCajasController);

    CierreCajasController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'PagoService',
        '$resource', 'SweetAlert', 'ReporteVentaService', '$rootScope'];

    function CierreCajasController($location, $log, $uibModal, $stateParams, Notify, PagoService,
        $resource, SweetAlert, ReporteVentaService, $rootScope) {
        var vm = this;
        // Trae el id del DepositoRetiro
        activate();

        function activate() {
            // Paginacion del frontend expresado en paginas
            vm.pagingInfo = {
                page: 1,
                itemsPerPage: 10,
                sortBy: 'id',
                reverse: false,
                search: '',
                totalItems: 0
            };
            vm.loadData = function (pageInfo) {
                var ant = (pageInfo.page-1)*10;
                var sig = (pageInfo.page)*10;
                ReporteVentaService.lista_cierre_caja({ant:ant,sig:sig},function (data) {
                    vm.lista = data.data;
                    var lista = [];
                    vm.lista.forEach(function (l1) {
                        var costo_vendido = 0;
                        var creado1 = new Date(l1.creado);
                        vm.lista.forEach(function (l2) {
                            var creado2 = new Date(l2.creado);
                            if (creado1.getDate() == creado2.getDate())
                                costo_vendido = costo_vendido + parseFloat(l2.vendido);
                        });
                        lista.push({'id': l1.id,
                            'apertura': l1.apertura,
                            'cierre': l1.cierre,
                            'diferencia': l1.diferencia,
                            'creado': l1.creado,
                            'modificado': l1.modificado,
                            'vendido': l1.vendido,
                            'caja': l1.caja,
                            'usuario': l1.user,
                            'costo_vendido': costo_vendido
                        });
                    });
                    if(data.siguiente != null){
                        var creado1 = new Date(data.siguiente.creado);
                        var creado2 = new Date(lista[lista.length-1].creado);
                        if (creado1.getDate() == creado2.getDate())
                            lista[lista.length-1].costo_vendido = lista[lista.length-1].costo_vendido + parseFloat(data.siguiente.vendido);
                    }
                    if(data.anterior != null){
                        var cread1 = new Date(data.anterior.creado);
                        var cread2 = new Date(lista[0].creado);
                        if (cread1.getDate() == cread2.getDate())
                            lista[0].costo_vendido = lista[0].costo_vendido + parseFloat(data.anterior.vendido);
                    }
                    vm.lista = lista;
                    pageInfo.totalItems = data.total;
                })
            };
            vm.loadData(vm.pagingInfo);
        }
        /**funcion para ver abrir los datos del cierre*/
        vm.datosCierre = function (id) {
            $rootScope.cierre = id;
            $uibModal.open({
                animation: true,
                size: 'lg',
                templateUrl: "app/views/reportes/detalle_cierre.html",
                controller: 'DetalleCierreController as accion'
            });
        };
    }
})();

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

(function() {
  'use strict';

  angular
      .module('app.reporteventa')
      .controller('DetalleVentasReporteController', DetalleVentasReporteController);

  DetalleVentasReporteController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$resource', 'SweetAlert', 'Fecha', '$uibModalInstance'];

  function DetalleVentasReporteController($location, $log, $uibModal, $stateParams, Notify, MovimientoService, $resource, SweetAlert, Fecha, $uibModalInstance) {
    var vm = this;
    activate();

    function activate() {
      vm.listaDetalle = [];

      vm.detalle_venta = function(){
        var fecha = new Date(Fecha);
        MovimientoService.ventas_filtro({
          fecha: fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + (fecha.getDate() + 1)
        }, function(data) {
          vm.listaDetalle = data.results;
          console.log(data);
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }
      vm.detalle_venta();

      vm.cancel = function() {
        $uibModalInstance.close();
      };
    }
  }
})();


(function() {
    'use strict';

    angular
        .module('app.caja')
        .controller('DetalleCierreController', DetalleCierreController);

    DetalleCierreController.$inject = ['MovimientoService', '$uibModalInstance', '$rootScope'];

    function DetalleCierreController(MovimientoService, $uibModalInstance, $rootScope) {
        var vm = this;
        vm.ventas = {};
        vm.ventas.totales = 0;
        vm.ventas.pagos = 0;
        vm.ventas.cortesias = 0;
        vm.ventas.tdia = 0;
        vm.ventas.diferencia = 0;
        vm.ventas_dia = function(tipo) {
            MovimientoService.ventas_cierre({
                tipo: tipo,
                cierre: $rootScope.cierre
            },function(data) {
                if(tipo == 1){
                    vm.ventas.efectivo = data.movimientos.formas_pago__monto__sum;
                    vm.ventas.pagos = data.pagos.monto__sum;
                    vm.ventas.cortesias = data.cortesias.formas_pago__monto__sum;
                    vm.ventas.totales += vm.ventas.efectivo;
                    vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
                    vm.ventas.tdia -= data.pagos.monto__sum;
                    vm.total = data.cierre;
                    vm.apertura = data.apertura;
                    vm.ventas.diferencia = data.diferencia;
                }else{
                    vm.ventas.tarjeta = data.movimientos.formas_pago__monto__sum;
                    vm.ventas.totales += vm.ventas.tarjeta;
                    vm.ventas.tdia += data.movimientos.formas_pago__monto__sum;
                }
            },function(error) {
                vm.errMsg = "Ha ocurrido un error al intentar guardar los datos"
            });
        };
        vm.cancel = function() {
            $uibModalInstance.close();
        };

        activate();

        function activate() {
            vm.ventas_dia(1);
            vm.ventas_dia(2);
        }
    }
})();

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


(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ProduccionPersonalController', ProduccionPersonalController);

    ProduccionPersonalController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', '$rootScope',
        'PersonaService', 'PagoService', '$resource', 'SweetAlert', 'DepositoRetiroService'];

    function ProduccionPersonalController($location, $log, $uibModal, $stateParams, Notify, $rootScope, PersonaService,
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
                    templateUrl: 'app/views/pago/detalle_chicas.html',
                    controller: 'ProductoEditarController'
                });
            };

            // Agrega Pago
            vm.openPagos = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: 'accionesPago.html',
                    controller: 'DetalleChicasController as accion',
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
                    nombre: vm.nombre,
                    sinpago: true
                }, function(data) {
                    // vm.lista = data;
                    vm.pagingInfo.totalItems = data.filas;
                    vm.items = [];
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
                            for(var c = 0; c < data.datosba[b][0].length; c++){
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

(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ReporteBailesController', ReporteBailesController);

    ReporteBailesController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', '$rootScope',
        'PersonaService', 'BaileService', '$resource', 'SweetAlert', 'DepositoRetiroService'];

    function ReporteBailesController($location, $log, $uibModal, $stateParams, Notify, $rootScope, PersonaService,
                                 BaileService, $resource, SweetAlert, DepositoRetiroService) {
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
                BaileService.get_dances({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
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
            }
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ReportePresentacionesController', ReportePresentacionesController);

    ReportePresentacionesController.$inject = ['Notify',
        'ReporteVentaService'];

    function ReportePresentacionesController(Notify, 
                                 ReporteVentaService) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            vm.pago = {};
            vm.pago.id = 0;
            vm.hoursfin = 1;
            vm.hoursini = 1;
            vm.minutesfin = 0;
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
                itemsPerPage: 20,
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
                ReporteVentaService.get_presentations({
                    ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " " + vm.hoursi + ":"+ vm.minutesini + ":00",
                    fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " " + vm.hoursf + ":"+ vm.minutesfin + ":00",
                    tipo: vm.tipo,
                    nombre: vm.nombre,
                    presentacion: vm.presentacion
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
            }
        }
    }
})();




(function() {
    'use strict';

    angular
        .module('app.pago')
        .controller('ReporteProductosController', ReporteProductosController);

    ReporteProductosController.$inject = ['Notify',
        'ReporteVentaService'];

    function ReporteProductosController(Notify,
                                 ReporteVentaService) {
        var vm = this;
        activate();

        function activate() {
            vm.query = '';
            vm.pago = {};
            vm.pago.id = 0;
            vm.hoursfin = 1;
            vm.hoursini = 1;
            vm.minutesfin = 0;
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
                ReporteVentaService.get_products({
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
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.reporteventa')
        .controller('ReporteVentaController', ReporteVentaController);

    ReporteVentaController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$resource', 'SweetAlert',
        'TipoPersonaService', 'PersonaCuentaService'
    ];

    function ReporteVentaController($location, $log, $uibModal, $stateParams, Notify, MovimientoService, $resource, SweetAlert,
        TipoPersonaService, PersonaCuentaService) {
        var vm = this;
        activate();

        function activate() {
            vm.lista = [];
            vm.query = '';
            vm.pago = {};
            vm.fecha = [];
            vm.total = 0;
            vm.activaBoton = false;
            vm.personaNickname = ''

            // vm.listaAreas = [{
            //     id: 1,
            //     area: 'Barra'
            // }, {
            //     id: 2,
            //     area: 'Mesas'
            // }, {
            //     id: 3,
            //     area: 'Pista'
            // }, {
            //     id: 4,
            //     area: 'Servicio'
            // }, {
            //     id: 5,
            //     area: 'VIP'
            // }];

            vm.listaDocs = [{
                id: 1,
                doc: 'Comanda'
                // Originalmente es Factura dentro del Modelo
            }, {
                id: 2,
                doc: 'Recibo'
            }, {
                id: 3,
                doc: 'Vale'
            }];


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

            // Busca los nombres con cuenta desde la api
            vm.personacuenta = function(val) {
                return PersonaCuentaService.lista({
                    query: val
                }).$promise.then(function(data) {
                    return data;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    vm.listaTipopersona = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

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

            }

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
                vm.filtro_reporte();
            };

            vm.calcula_total = function() {
                vm.totalT = 0;
                _.each(vm.lista, function(total, item) {
                    vm.totalT += item.total;
                    // console.log(total);
                    // debugger
                });
            }

            // Filtro por Persona
            vm.filtro_reporte = function() {
                vm.personaUser = vm.personaNickname.username
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                if (vm.personaNickname == '' || vm.personaNickname == null) {
                    Notify.alert(
                        '<em class="fa fa-exclamation-triangle"></em>&nbsp;&nbsp;&nbsp; Introduzca el Nick de un Empleado', {
                            status: 'warning'
                        }
                    );
                } else {
                    MovimientoService.reporte_ventas_empleado({
                        ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " 0:0:00",
                        fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " 23:59:59",
                        per: vm.personaNickname.id,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        // Tipo de Documento
                        vm.lista.forEach(function(item) {
                            vm.lista.tipo_doc = _.filter(
                                vm.listaDocs, {
                                    'id': item.documento
                                })[0].doc
                            });

                            vm.calcula_total();
                            vm.pagingInfo.totalItems = data.count;
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                }
            }
        }
    }
})();

(function() {
  'use strict';
  angular.module('app.reporteventa')
    .factory('ReporteVentaService', ReporteVentaService);
  ReporteVentaService.$inject = ['$resource'];

  function ReporteVentaService($resource) {
    var url = '/api';
    return $resource(url + '/pagos/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          ini: '@ini',
          fin: '@fin'
        },
        url: url + '/pagos/filtro_pagos/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          query: '@query'
        },
        isArray: true,
        url: url + '/tiposproductos/filtro_no_paginate/'
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      payments: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/pagos_personal/payments/',
        isArray: true
      },
      get_products: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/productos/get_products/',
        isArray: true
      },
      get_presentations: {
        method: 'GET',
        params: { id: '@id' },
        url: '/api/productos/get_presentations/',
        isArray: true
      },
      lista_cierre_caja: {
        method: 'GET',
        params: { ant: '@ant', sig: '@sig' },
        url: '/api/cierrecaja/listado/'
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.reporteventa')
        .controller('ReporteVentaChicaController', ReporteVentaChicaController);

    ReporteVentaChicaController.$inject = ['$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$resource', 'SweetAlert',
        'TipoPersonaService', 'PersonaCuentaService'
    ];

    function ReporteVentaChicaController($location, $log, $uibModal, $stateParams, Notify, MovimientoService, $resource, SweetAlert,
        TipoPersonaService, PersonaCuentaService) {
        var vm = this;
        activate();

        function activate() {
            vm.lista = [];
            vm.query = '';
            vm.pago = {};
            vm.fecha = [];
            vm.total = 0;
            vm.activaBoton = false;
            vm.personaNombre = ''

            // vm.listaAreas = [{
            //     id: 1,
            //     area: 'Barra'
            // }, {
            //     id: 2,
            //     area: 'Mesas'
            // }, {
            //     id: 3,
            //     area: 'Pista'
            // }, {
            //     id: 4,
            //     area: 'Servicio'
            // }, {
            //     id: 5,
            //     area: 'VIP'
            // }];

            vm.listaDocs = [{
                id: 1,
                doc: 'Comanda'
                // Originalmente es Factura dentro del Modelo
            }, {
                id: 2,
                doc: 'Recibo'
            }, {
                id: 3,
                doc: 'Vale'
            }];


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

            // Busca los nombres con cuenta desde la api
            vm.personacuenta = function(val) {
                return PersonaCuentaService.list_chica({
                    query: val,
                    tipo: 'True'
                }).$promise.then(function(data) {;
                    return data.results;
                });
            };

            // Lista tipos de personas
            vm.listaTipopersona = function() {
                return TipoPersonaService.filtro_no_paginate({
                    query: ''
                }, function(data) {
                    vm.listaTipopersona = data;
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            vm.listaTipopersona();

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

            }

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
                vm.filtro_reporte();
            };

            vm.calcula_total = function() {
                vm.totalT = 0;
                _.each(vm.lista, function(total, item) {
                    vm.totalT += item.total;
                    // console.log(total);
                    // debugger
                });
            }

            // Filtro por Persona
            vm.filtro_reporte = function() {
                var i = new Date(vm.iniDate);
                var f = new Date(vm.finDate);
                if (vm.personaNombre == '' || vm.personaNombre == null) {
                    Notify.alert(
                        '<em class="fa fa-exclamation-triangle"></em>&nbsp;&nbsp;&nbsp; Introduzca el nombre de una Chica', {
                            status: 'warning'
                        }
                    );
                } else {
                    MovimientoService.reporte_ventas({
                        ini: i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate() + " 0:0:00",
                        fin: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate() + " 23:59:59",
                        per: vm.personaNombre.id,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        // // Areas
                        // vm.lista.forEach(function(item) {
                        // vm.lista.tipo_area = _.filter(
                        //     vm.listaAreas, {
                        //         'id': item.persona.area
                        //     })[0].area
                        // });
                        // Tipo de Documento
                        vm.lista.forEach(function(item) {
                            vm.lista.tipo_doc = _.filter(
                                vm.listaDocs, {
                                    'id': item.documento
                                })[0].doc
                            });

                            vm.calcula_total();
                            vm.pagingInfo.totalItems = data.count;
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                }
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.reporteventa')
        .controller('ResumenPagoController', ResumenPagoController);
    
    ResumenPagoController.$inject = ['Notify', '$uibModalInstance', '$rootScope'];

    function ResumenPagoController(Notify, $uibModalInstance, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            vm.hoy = new Date();
            vm.model = $rootScope.item;
            vm.eschica = vm.model.persona.codigo_barra;
            vm.total = parseFloat(vm.model.comision_servicio) + parseFloat(vm.model.comision_venta) + parseFloat(vm.model.bailes) + parseFloat(vm.model.persona.sueldo_cuenta) - parseFloat(vm.model.adelanto) - parseFloat(vm.model.gastos_personal);
            console.log(vm.total);
            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }

    }
})();

(function() {
    'use strict';

    angular
        .module('app.tipopersona')
        .controller('TipoPersonaController', TipoPersonaController);

    TipoPersonaController.$inject = ['$window', 'Notify', 'SweetAlert', 'TipoPersonaService', '$resource'];

    function TipoPersonaController($window, Notify, SweetAlert, TipoPersonaService, $resource) {
        var vm = this;
        activate();

        function activate() {
            vm.show = false;
            vm.query = '';
            //Cargamos los datos de tipo de Persona
            function cargaTipoPersona() {
                vm.tipoPersona = {
                    id: 0,
                    nombre: null
                }
            }

            //Cargamos el tipo de Persona
            cargaTipoPersona();

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

            /**
             * Carga todos los tipos de personas desde el backend
             */
            vm.load = function() {
                vm.lista = [];
                //Comprobamos si query no esta vacio
                if (vm.query.length > 0) {
                    TipoPersonaService.filtro({
                        query: vm.query,
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        vm.pagingInfo.totalItems = data.count;
                    }, function(error) {
                        console.log(error);
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'warning'
                            }
                        );
                    });
                } else {
                    TipoPersonaService.list({
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        vm.pagingInfo.totalItems = data.count;
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'danger'
                            }
                        );
                    });
                }
            }

            vm.load(); //Cargamos la lista

            /*
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
            }

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

            /**
             * Muestra el dialogo para agregar nuevos elementos a la BD
             * @param show: booleano que determina si se muestra u oculta
             */
            vm.showAdd = function(show) {
                vm.show = show;
                if (!vm.show) {
                    vm.form.$setPristine();
                    vm.tipoPersona = {
                        id: 0
                    };
                }
            }

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.create = function() {
                vm.tipoPersona = {
                    nombre: vm.tipoPersona.nombre,
                    activo: true
                };
                TipoPersonaService.create(vm.tipoPersona, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    vm.form.$setPristine();
                    cargaTipoPersona();
                    vm.show = false;
                    vm.load();
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            }

            /**
             * Actualiza un elemento en la BD validando que no exista
             */
            vm.update = function() {
                TipoPersonaService.update({
                    id: vm.tipoPersona.id
                }, vm.tipoPersona, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento actualizado..', {
                            status: 'success'
                        }
                    );
                    vm.form.$setPristine();
                    cargaTipoPersona();
                    vm.show = false;
                    vm.load();
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                    vm.load();
                });
            }

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.add = function() {
                // Verificamos si se hace add o update
                if (vm.tipoPersona.id < 1) {
                    vm.create();
                } else {
                    vm.update();
                }
            }

            vm.edit = function(item) {
                vm.show = true;
                vm.tipoPersona = item;
                $window.scrollTo(0, 0);
            }

            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.disable = function(item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara este Tipo de Persona!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.activo = false;
                        TipoPersonaService.update({
                            id: item.id
                        }, item, function(data) {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..', {
                                    status: 'success'
                                }
                            );
                            vm.show = false;
                            vm.load();
                        }, function(error) {
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                    }
                });
            }
        }
    }
})();

(function() {
    'use strict';
    angular
      .module('app.persona')
      .controller('TipoPersonaAddController', TipoPersonaAddController);

    TipoPersonaAddController.$inject = [
      '$uibModalInstance', 'TipoPersonaService', 'Notify'
    ];

    function TipoPersonaAddController($uibModalInstance, TipoPersonaService, Notify) {
      var vm = this;
      activate();

      function activate() {
        vm.errMsg = '';
        vm.tipoPersona = {
          id: 0,
          nombre: null
        }

        vm.ok = function() {
          vm.errMsg = '';
          vm.tipoPersona = {
            nombre: vm.model.nombre,
            activo: true
          };
          TipoPersonaService.create(vm.tipoPersona, function(data) {
            Notify.alert(
              '<em class="fa fa-check"></em> Elemento creado..', {
                status: 'success'
              }
            );
            $uibModalInstance.close();
          }, function(error) {
            vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
          });
        };

        vm.cancel = function() {
          $uibModalInstance.close();
        };
      }
    }
})();

(function() {
  'use strict';
  angular.module('app.tipopersona')
    .factory('TipoPersonaService', TipoPersonaService);
  TipoPersonaService.$inject = ['$resource'];

  function TipoPersonaService($resource) {
    var url = '/api';
    return $resource(url + '/tipospersonas/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/tipospersonas/filtro/'
      },
      filtro_no_paginate: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/tipospersonas/filtro_no_paginate/',
        isArray: true
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.tipoproducto')
        .controller('TipoProductoController', TipoProductoController);

    TipoProductoController.$inject = ['$window', 'Notify', 'SweetAlert', 'TipoProductoService'];

    function TipoProductoController($window, Notify, SweetAlert, TipoProductoService) {
        var vm = this;
        activate();

        function activate() {
            vm.show = false;
            vm.query = '';
            //Cargamos los datos de tipo de Producto
            function cargaTipoProducto() {
                vm.tipoProducto = {
                    id: 0,
                    nombre: null,
                    mostrar: null
                }
            }

            //Cargamos el tipo de Producto
            cargaTipoProducto();

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
                    TipoProductoService.filtro({
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
                    TipoProductoService.list({
                        page: vm.pagingInfo.page
                    }, function(data) {
                        vm.lista = data.results;
                        vm.pagingInfo.totalItems = data.count;
                    }, function(error) {
                        Notify.alert(
                            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                status: 'danger'
                            }
                        );
                    });
                }

            };

            vm.load(); //Cargamos la lista

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

            /**
             * Muestra el dialogo para agregar nuevos elementos a la BD
             * @param show: booleano que determina si se muestra u oculta
             */
            vm.showAdd = function(show) {
                vm.show = show;
                if (!vm.show) {
                    vm.form.$setPristine();
                    vm.tipoProducto = {
                        id: 0
                    };
                }
            };

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.create = function() {
                // Valida el checkbox en dado caso que no lo haya selecionado envia falso
                if (vm.tipoProducto.mostrar == null)
                    vm.tipoProducto.mostrar = false
                vm.tipoProducto = {
                    nombre: vm.tipoProducto.nombre,
                    activo: true,
                    mostrar: vm.tipoProducto.mostrar
                };
                TipoProductoService.create(vm.tipoProducto, function() {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    vm.form.$setPristine();
                    cargaTipoProducto();
                    vm.show = false;
                    vm.load();
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                });
            };

            /**
             * Actualiza un elemento en la BD validando que no exista
             */
            vm.update = function() {
                TipoProductoService.update({
                    id: vm.tipoProducto.id
                }, vm.tipoProducto, function() {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento actualizado..', {
                            status: 'success'
                        }
                    );
                    vm.form.$setPristine();
                    cargaTipoProducto();
                    vm.show = false;
                    vm.load();
                }, function(error) {
                    Notify.alert(
                        '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                            status: 'danger'
                        }
                    );
                    vm.load();
                });
            };

            /**
             * Crea un nuevo elemento en la BD
             */
            vm.add = function() {
                // Verificamos si se hace add o update
                if (vm.tipoProducto.id < 1) {
                    vm.create();
                } else {
                    vm.update();
                }
            };

            vm.edit = function(item) {
                vm.show = true;
                vm.tipoProducto = item;
                $window.scrollTo(0, 0);
            };

            /**
             * Realiza un soft delete al elemento indicado
             * @param item: elemento a desactivar
             */
            vm.disable = function(item) {
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara este Tipo de Producto!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.activo = false;
                        TipoProductoService.destroy({
                            id: item.id
                        }, function() {
                            Notify.alert(
                                '<em class="fa fa-check"></em> Elemento eliminado..', {
                                    status: 'success'
                                }
                            );
                            vm.show = false;
                            vm.load();
                        }, function(error) {
                            console.log(error);
                            Notify.alert(
                                '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
                                    status: 'danger'
                                }
                            );
                        });
                    }
                });
            }
        }
    }
})();

(function() {
    'use strict';
    angular
        .module('app.tipoproducto')
        .controller('TipoProductoAddController', TipoProductoAddController);

    TipoProductoAddController.$inject = [
        '$uibModalInstance', 'TipoProductoService', 'Notify'
    ];

    function TipoProductoAddController($uibModalInstance, TipoProductoService, Notify) {
        var vm = this;
        activate();

        function activate() {
            vm.errMsg = '';
            vm.tipoProducto = {
                id: 0,
                nombre: null
            }

            vm.ok = function() {
                vm.errMsg = '';
                vm.tipoProducto = {
                    nombre: vm.model.nombre,
                    activo: true
                };
                TipoProductoService.create(vm.tipoProducto, function(data) {
                    Notify.alert(
                        '<em class="fa fa-check"></em> Elemento creado..', {
                            status: 'success'
                        }
                    );
                    $uibModalInstance.close();
                }, function(error) {
                    vm.errMsg = "Ocurrio un error inesperado: " + error.data.detail;
                });
            };

            vm.cancel = function() {
                $uibModalInstance.close();
            };
        }
    }
})();

(function() {
    'use strict';
    angular.module('app.tipoproducto')
        .factory('TipoProductoService', TipoProductoService);
    TipoProductoService.$inject = ['$resource'];

    function TipoProductoService($resource) {
        var url = '/api';
        return $resource(url + '/tiposproductos/:id/', {}, {
            list: {
                method: 'GET',
                params: {
                    page: '@page'
                }
            },
            filtro: {
                method: 'GET',
                params: {
                    page: '@page',
                    query: '@query'
                },
                url: url + '/tiposproductos/filtro/'
            },
            combo: {
                method: 'GET',
                url: url + '/tiposproductos/combo/'
            },
            combo_mixto: {
                method: 'GET',
                url: url + '/tiposproductos/combo_mixto/'
            },
            filtro_no_paginate: {
                method: 'GET',
                params: {
                    query: '@query'
                },
                isArray: true,
                url: url + '/tiposproductos/filtro_no_paginate/'
            },
            create: {
                method: 'POST'
            },
            show: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            },
            destroy: {
                method: 'DELETE',
                params: {
                    id: '@id'
                }
            },
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            }
        });
    }
}());

(function() {
  'use strict';

  angular
    .module('app.tipodepositoretiro')
    .controller('IngresoEgresoController', IngresoEgresoController);

  IngresoEgresoController.$inject = ['$window', 'Notify', 'SweetAlert', '$resource', 'ConfiguracionService', 'TipoPersonaService', 'TipoDepositoRetiroService'];

  function IngresoEgresoController($window, Notify, SweetAlert, $resource, ConfiguracionService, TipoPersonaService, TipoDepositoRetiroService) {
    var vm = this;
    activate();

    function activate() {
      vm.usuario = {};

      vm.ingreso = false;
      vm.egreso = false;
      vm.tipopersona = false;
      vm.empresa = false;

      vm.listaTipopersona = [];
      vm.tipopersonaSelect = {};
      vm.tipopersonaSelect.id = 0;

      vm.empresa = {
          id: 0,
          nombre_empresa: null,
      };

      /**
      * Inicia TipoDepositoRetiro
      */
      vm.cargaTipoDepositoRetiro = function(){
        vm.tipoDepositoRetiro = {
          id: 0,
          nombre: null,
          activo: true,
          tipo_ingreso_egreso: false,
          tipo_persona: null,
          empresa: null,

        }
      }
      vm.cargaTipoDepositoRetiro();

      vm.usuario.id = $window.sessionStorage.getItem('userid');

      /**
      * Lista Tipo Persona
      */
      vm.listaTipopersona = function(){
        return TipoPersonaService.filtro_no_paginate({
          query: ''
        },function(data) {
          vm.listaTipopersona = data;
        }, function(error) {
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      };

      vm.listaTipopersona();

      /**
      * Lista Empresa
      */
      cargaConfiguracion();

      function cargaConfiguracion() {
        ConfiguracionService.busca_configuracion({
        }, function(data) {
          if(data.id != null){
            vm.empresa = {
                id: data.id,
                nombre_empresa: data.nombre_empresa,
            }
          }
          // debugger
        });
      }

      /**
      * Crea un nuevo Tipo Deposito Retiro
      */

      vm.create = function(){
        vm.tipoDepositoRetiro = {
          id: vm.tipoDepositoRetiro.id,
          nombre: vm.tipoDepositoRetiro.nombre,
          tipo_ingreso_egreso: vm.tipoDepositoRetiro.RadioEgresoIngreso,
          tipo_persona: vm.tipopersonaSelect.id,
          empresa: vm.empresa.id
        };
        console.log(vm.tipoDepositoRetiro);
        TipoDepositoRetiroService.create(vm.tipoDepositoRetiro, function(data){
          Notify.alert(
            '<em class="fa fa-check"></em> Elemento creado..', {
              status: 'success'
            }
          );
          vm.form.$setPristine();
          vm.cargaTipoDepositoRetiro();

        }, function(error){
          Notify.alert(
            '<em class="fa fa-times"></em> Ocurrio un error: ' + error.data.detail, {
              status: 'danger'
            }
          );
        });
      }


    }
  }
})();

(function() {
  'use strict';
  angular.module('app.tipodepositoretiro')
    .factory('TipoDepositoRetiroService', TipoDepositoRetiroService);
  TipoDepositoRetiroService.$inject = ['$resource'];

  function TipoDepositoRetiroService($resource) {
    var url = '/api';
    return $resource(url + '/tiposdepositosretiros/:id/', {}, {
      list: {
        method: 'GET',
        params: {
          page: '@page'
        }
      },
      filtro_egreso: {
        method: 'GET',
        params: {
          page: '@page',
          query: '@query'
        },
        url: url + '/tiposdepositosretiros/filtro_egreso/',
        isArray: true
      },
      create: {
        method: 'POST'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        }
      },
      destroy: {
        method: 'DELETE',
        params: {
          id: '@id'
        }
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    });
  }
}());

(function() {
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioEditarController', UsuarioEditarController);

    UsuarioEditarController.$inject = ['$stateParams', 'ngDialog', 'toaster', '$route', 'PresentacionService', '$location', 'UsuarioService', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];

    function UsuarioEditarController($stateParams, ngDialog, toaster, $route, PresentacionService, $location, UsuarioService, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;
        vm.id = $stateParams.id;
        activate();
        vm.usuariosEdit = [];

        function activate() {
            UsuarioService.show({
                id: vm.id
            }, function(data) {
                vm.usuario = data;

            }).$promise.then(function(data) {
                vm.usuario = data;
            });

            var prodMod;

            //Propiedades de datatable
            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withPaginationType('full_numbers')
                .withDisplayLength(5);

            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3),
                DTColumnDefBuilder.newColumnDef(4).notSortable()
            ];

            //Busquedas para la api
            UsuarioService.list({}, function(data) {
                vm.usuarios = data.results;
            });

            //Asignacion de Variables para la vista
            vm.esCombo = esCombo;
            vm.addProdCombo = addProdCombo;
            vm.modifyProdCombo = modifyProdCombo;
            vm.saveModiProdCombo = saveModiProdCombo;
            vm.removeProdCombo = removeProdCombo;
            vm.submit = submit;

            function addPresentacion() {
                var dialog = ngDialog.open({
                    template: 'app/views/presentacion/nuevo.html',
                    controller: 'PresentacionController'
                });
                dialog.closePromise.then(function(data) {
                    if (data.value === true) {
                        toaster.success('Se ha ingresado una nueva presentacion');
                    }
                });
            }

            //Funciones que nos serviran para los usuarios del combo
            function esCombo() {
                vm.combo = !vm.combo;
            }

            //Agregamos un nuevo elemento a lista de usuarios de combo
            function addProdCombo() {
                var existe = false;
                for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                    if (vm.combo_usuario.usuario_combo.id == vm.usuario.usuarios[i].usuario_combo.id) {
                        existe = true;
                        break;
                    }
                }
                if (existe == false) {
                    toaster.pop('success', 'Agregado', 'Usuario agregado a lista');
                    vm.usuario.usuarios.push(vm.combo_usuario);
                    vm.combo_usuario = {};
                } else {
                    vm.combo_usuario = {};
                    toaster.pop('error', 'Usuario ya existente', 'Usuario ya existe dentro de la lista');
                }
            }

            //Modificamos un usuario existente dentro de la lista
            function saveModiProdCombo() {
                if (vm.usuario.usuarios.length > 0 && prodMod.usuario_combo.id > 0) {
                    for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                        if (vm.usuario.usuarios[i].usuario_combo.id === prodMod.usuario_combo.id) {
                            vm.usuario.usuarios[i].cantidad = vm.cantidad;
                            vm.cantidad = 0;
                            prodMod = {};
                            toaster.pop('info', 'Usuario Modificado', 'Usuario Modificado de la lista');
                            break;
                        }
                    }
                }
            }

            //Cargamos los datos del usuario a modificar
            function modifyProdCombo(data) {
                vm.cantidad = data.cantidad;
                prodMod = data;
            }

            //Eliminamos un usuario seleccionado dentro de la lista de usuarios de combo
            function removeProdCombo(data) {
                for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                    if (vm.usuario.usuarios[i] == data) {
                        vm.usuario.usuarios.splice(i, 1);
                        toaster.pop('warning', 'Usuario Eliminado', 'Usuario Eliminado de la lista');
                        break;
                    }
                }
            }

            //Guardado de usuario/combo
            function submit() {
                if (vm.combo) {
                    for (var i = 0; i < vm.usuario.usuarios.length; i++) {
                        vm.usuario.usuarios[i].usuario_combo = vm.usuario.usuarios[i].usuario_combo.id;
                    };
                    if (vm.usuario.usuarios.length > 0) {
                        save();
                    } else {
                        toaster.pop('warning', 'Lista Vacia', 'No hay elementos dentro de la lista');
                    }
                } else {
                    vm.usuario.usuarios = [];
                    save();
                }
            }

            function save() {
                vm.usuario.tipo_usuario = vm.usuario.tipo_usuario.id;
                vm.usuario.presentacion = vm.usuario.presentacion.id;
                UsuarioService.update(vm.usuario, function(data) {
                    vm.usuario = {};
                    toaster.pop('success', 'Agregado con exito', 'Editar usuario agregado con exito');
                }, function(error) {
                    toaster.pop('error', 'Error de Guardado', 'Error al intentar guardar los datos');
                });
            }

            //Funcion para cargar los datos de usuario
            function cargaUsuarios() {

            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.usuario')
        .controller('UsuarioController', UsuarioController);

    UsuarioController.$inject = ['ngDialog', 'toaster', '$location', 'UsuarioService', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];

    function UsuarioController(ngDialog, toaster, $location, UsuarioService, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;
        activate();

        function activate() {

            UsuarioService.list({}, function(data) {
                vm.usuario = data.results;
            });

            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withPaginationType('full_numbers')
                .withDisplayLength(5);

            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1).notSortable()
            ];
            vm.removeUsuario = removeUsuario;
            vm.nuevo = nuevo;
            vm.saveDialog = saveDialog;

            function nuevo() {
                var dialog = ngDialog.open({
                    template: 'app/views/usuario/usuario.nuevo.html',
                    controller: 'UsuarioController'
                });
                dialog.closePromise.then(function(data) {
                    if (data.value === true) {
                        UsuarioService.list({}, function(data) {
                            vm.usuario = data.results;
                        });
                        toaster.success('Se ha ingresado un nuevo usuario');
                    }
                });
            }

            function saveDialog() {
                vm.model.is_staff = true;
                if (vm.formValidate.$valid) {
                    UsuarioService.create(vm.model, function(data) {
                        vm.model = {};
                        ngDialog.closeAll(true);
                    }, function(error) {

                    });
                }
            }

            function removeUsuario(index) {
                UsuarioService.destroy({
                        id: index
                    },
                    function(data) {
                        toaster.pop('warning', 'Usuario Eliminado', 'Usuario Eliminado');
                        UsuarioService.list({}, function(data) {
                            vm.usuario = data.results;
                        });
                    },
                    function(error) {
                        toaster.pop('error', 'Error', 'Error al intentar eliminar el usuario');
                        UsuarioService.list({}, function(data) {
                            vm.usuario = data.results;
                        });
                    });
            }
        }
    }
})();

(function() {
    'use strict';
    angular.module('app.usuario')
        .factory('UsuarioService', UsuarioService);
    UsuarioService.$inject = ['$resource'];

    function UsuarioService($resource) {
        var url = '/api';
        return $resource(url + '/users/:id/', {}, {
            list: {
                method: 'GET'
            },
            create: {
                method: 'POST'
            },
            show: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            },
            destroy: {
                method: 'DELETE',
                params: {
                    id: '@id'
                }
            },
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            },
            cambiar_usuario_password: {
                url: '/api/users/:id/cambiar_usuario_password/',
                method: 'PUT',
                params: {
                    id: '@id'
                }
            }
        });
    }
}());

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

(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('PedidosListaController', PedidosListaController);

    PedidosListaController.$inject = ['Notify', 'SweetAlert', 'MovimientoService', '$resource'];

    function PedidosListaController(Notify, SweetAlert, MovimientoService, $resource) {
        var vm = this;
        activate();

        function activate() {
            vm.destroy = destroy;
            vm.query = "";
            vm.loadPedidos = loadPedidos;

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

            loadPedidos();

            //Busqueda de Pedidos
            function loadPedidos() {
                MovimientoService.pedidos({
                    page: vm.pagingInfo.page,
                    query: vm.query
                }, function(data) {
                    vm.pagingInfo.totalItems = data.count;
                    vm.pedidos = data.results;
                });
            }

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
                loadPedidos();
            };

            function destroy(item) {
                vm.pedidos = [];
                SweetAlert.swal({
                    title: '¿Esta Seguro?',
                    text: '¡Se eliminara el movimiento!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: '¡Sí, eliminarlo!',
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        item.motivo = 'Cancelacion de pedido';
                        item.transacciones.push({
                            'id': null,
                            'tipo_transaccion': 2,
                            'usuario': 1
                        });
                        item.mesa = item.mesa.id;
                        _(item.detalle).forEach(function(value) {
                            delete value.movimiento
                            value.producto = value.producto.id
                        });
                        MovimientoService.update({
                                id: item.id
                            }, item,
                            function(data) {
                                MovimientoService.destroy({
                                        id: item.id
                                    },
                                    function(data) {
                                        Notify.alert(
                                            '<em class="fa fa-check"></em> Pedido Cancelado..', {
                                                status: 'success'
                                            }
                                        );
                                        loadPedidos();
                                    },
                                    function(error) {
                                        Notify.alert(
                                            '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                                status: 'error'
                                            }
                                        );
                                        loadPedidos();
                                    });

                            },
                            function(error) {
                                Notify.alert(
                                    '<em class="fa fa-times"></em> Error ' + error.data.detail, {
                                        status: 'error'
                                    }
                                );
                                loadPedidos();
                            });
                    } else {
                        loadPedidos();
                    }
                });
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.venta')
        .controller('PedidoPagoController', PedidoPagoController);

    PedidoPagoController.$inject = ['$window', '$location', '$log', '$uibModal', '$stateParams', 'Notify', 'MovimientoService', '$state', 'CajaService', '$rootScope'];

    function PedidoPagoController($window, $location, $log, $uibModal, $stateParams, Notify, MovimientoService, $state, CajaService, $rootScope) {
        var vm = this;
        activate();


        MovimientoService.tiene_impresora({id:vm.usuario.id},function (data) {
            if (!data.tiene_impresora){
                swal({
                        title: "Error?",
                        text: "No cuentas con una impresora asignada. Solicita una para poder realizar el cobro.!",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Aceptar!",
                        closeOnConfirm: true
                    },
                    function(){
                        $state.go('app.caja.pendientes')
                    });
            }
        },function (error) {

        });

        function activate() {
            vm.usuario = {};
            vm.usuario.id = $window.sessionStorage.getItem('userid');
            vm.estadoCaja = false;
            vm.cajaA = $rootScope.cajaAbierta;
            //   console.log(vm.cajaA);

            vm.comprobarCaja = function(){
                CajaService.comprueba_caja_usuario({
                    user: vm.usuario.id
                }, function(data){
                    if(data.id > 0)
                        vm.estadoCaja = true;
                }, function(error){
                    vm.estadoCaja = false;
                    Notify.alert(
                        '<em class="fa fa-times">  No tiene una caja<br/> abierta para recibir el pago</em>', {
                            status: 'danger'
                        }
                    );
                });
            };



            MovimientoService.show({
                id: $stateParams.id
            }, function(data) {
                vm.pedido = data;
                $rootScope.orden = data;
            }, function(error) {
                Notify.alert(
                    '<em class="fa fa-times"></em>', {
                        status: 'warning'
                    }
                );
            });

            vm.openPagos = function() {
                CajaService.comprueba_caja_usuario({
                    user: vm.usuario.id
                }, function(data){
                    if(data.id > 0){
                        vm.estadoCaja = true;
                        if(vm.estadoCaja){
                            var modalInstance = $uibModal.open({
                                animation: true,
                                size: 'lg',
                                templateUrl: 'addPago.html',
                                controller: 'CobroController as nuevo',
                                // resolve: {
                                //     orden: function() {
                                //         return vm.pedido;
                                //     }
                                // }
                            });
                            modalInstance.result.then(function(selectedItem) {
                                if (selectedItem) {
                                    $location.path('/app/caja/pendientes');
                                } else {
                                    $log.info('Modal dismissed at: ' + new Date());
                                }
                            }, function() {
                                $log.info('Modal dismissed at: ' + new Date());
                            });
                        }
                    }
                }, function(error){
                    vm.estadoCaja = false;
                    Notify.alert(
                        '<em class="fa fa-times">  No tiene una caja<br/> abierta para recibir el pago</em>', {
                            status: 'danger'
                        }
                    );
                });

            }
        }
    }
})();

(function() {
  'use strict';

  angular
    .module('app.auth', []);
})();

(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(authConfig);

  authConfig.$inject = ['$httpProvider'];

  function authConfig($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }
  
})();

(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location', '$window'];
    function authInterceptor($q, $location, $window) {
      return {
          request: function (config) {
              config.headers = config.headers || {};
              if ($window.sessionStorage.getItem('token')) {
                  config.headers.Authorization = 'Token ' + $window.sessionStorage.getItem('token');
              }
              return config || $q.when(config);
          },
          responseError: function (response) {
              if (response.status === 401) {
                  $window.sessionStorage.removeItem('token');
                  $location.path('/page/login');
              }
              return $q.reject(response);
          }
      };
    }
})();
