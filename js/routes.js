angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/home',
	params: {
		header: "0"		
},
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('produtos', {
    url: '/produtos_lista',
    templateUrl: 'templates/produtos.html',
    controller: 'produtosCtrl'
  })

  .state('culturas', {
    url: '/culturas',
    templateUrl: 'templates/culturas.html',
    controller: 'culturasCtrl'
  })

  .state('nema', {
    url: '/page8',
    templateUrl: 'templates/nema.html',
    controller: 'nemaCtrl'
  })

  .state('page', {
    url: '/page9',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/home')


});