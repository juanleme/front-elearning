(function() {
    'use strict'

      angular.module('el.routes', ['ui.router'])

      .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        
        $urlRouterProvider.otherwise('/cursos');

        $stateProvider
        .state('courses', {
          url: '/cursos',
          templateUrl: 'app/components/courses/courses.view.html',
          controller: 'CoursesController'
        })
        .state('videos', {
          url: '/cursos/:id/aulas',
          templateUrl: 'app/components/videos/videos.view.html',
          controller: 'VideosController'
        });
      });
})();
