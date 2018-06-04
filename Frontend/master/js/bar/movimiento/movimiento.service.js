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
