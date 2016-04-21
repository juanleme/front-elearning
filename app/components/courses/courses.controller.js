(function() {
    'use strict'

    angular.module('el.courses', [])
	.controller('CoursesController', CoursesController);

	CoursesController.$inject = ['CoursesService', '$log'];

	function CoursesController (CoursesService, $log) {
		var vm = this;
		vm.courses = [];
		vm.listCourses = listCourses;

		activate();

	    function activate() {
	    	return listCourses();
	    }
	    function listCourses() {
        	return CoursesService.listCourses().then(function(data) {
            	vm.courses = data;
            	return vm.courses;
        });
    }

	}

})();
