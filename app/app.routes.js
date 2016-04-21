(function() {
    'use strict'

      angular.module('el.routes', ['ui.router'])
      .config(configRoutes);

      function configRoutes ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/login');
        
        $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/components/login/login.view.html',
          controller: 'LoginController',
          controllerAs: 'vm',
          onEnter: function($state, elCookies){            
            if(elCookies.isLoggedIn()){
              $state.go('courses');
            }
          }
        })
        .state('courses', {
          url: '/cursos',
          templateUrl: 'app/components/courses/courses.view.html',
          controller: 'CoursesController',
          controllerAs: 'vm',
          onEnter: function($state, elCookies){
            if(!elCookies.isLoggedIn()){
              $state.go('login');
            }
          }
        })
        .state('videos', {
          url: '/cursos/:id/aulas',
          templateUrl: 'app/components/videos/videos.view.html',
          controller: 'VideosController',
          controllerAs: 'vm',
          onEnter: function($state, elCookies){
            if(!elCookies.isLoggedIn()){
              $state.go('login');
            }
          }
        });
      }
})();
