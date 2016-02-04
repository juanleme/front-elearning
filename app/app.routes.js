(function() {
    'use strict'

      angular.module('ge.routes', ['ui.router'])

      .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('panel', {
        url: '/',
        templateUrl: 'app/components/panel/panel.view.html',
        controller: 'PanelController'
      });

        if(window.history && window.history.pushState){
          $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }
      });
})();
