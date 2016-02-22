(function() {
    'use strict'

    angular.module('el.courses', [])

    .controller('CoursesController', ['$scope', 'CoursesService',
      function($scope, CoursesService) {
      	CoursesService.listCourse().then(function(response){
      		$scope.courses = response;
      	});
      }
    ]);
})();
