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
