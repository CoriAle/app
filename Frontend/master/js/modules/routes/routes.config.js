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
