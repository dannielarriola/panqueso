angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.misGrupos', {
    url: '/misgrupos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/misGrupos.html',
        controller: 'misGruposCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.equiposGuardados', {
    url: '/equiposguardados',
    views: {
      'side-menu21': {
        templateUrl: 'templates/equiposGuardados.html',
        controller: 'equiposGuardadosCtrl'
      }
    }
  })

  .state('menu.agregarGrupo', {
    url: '/agregargrupo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agregarGrupo.html',
        controller: 'agregarGrupoCtrl'
      }
    }
  })

  .state('menu.jugadores', {
    url: '/jugadores',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jugadores.html',
        controller: 'jugadoresCtrl'
      }
    }
  })

  .state('menu.agregarJugador', {
    url: '/agregarjugador',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agregarJugador.html',
        controller: 'agregarJugadorCtrl'
      }
    }
  })

  .state('menu.editarJugador', {
    url: '/editarjugador',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editarJugador.html',
        controller: 'editarJugadorCtrl'
      }
    }
  })

  .state('menu.armarEquipos', {
    url: '/armarequipos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/armarEquipos.html',
        controller: 'armarEquiposCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/misgrupos')

  

});