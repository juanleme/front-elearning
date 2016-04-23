(function() {
    'use strict'

    angular.module('el.courses', [])
	.controller('CoursesController', CoursesController);

	CoursesController.$inject = ['CoursesService', '$log', 'elCookies'];

	function CoursesController (CoursesService, $log, elCookies) {
		var vm = this;
		vm.courses = [];
		vm.listCourses = listCourses;

		activate();

	    function activate() {
	    	return listCourses();
	    }
	    function listCourses() {
	    	var key = elCookies.getUser().key;

        	return CoursesService.listCourses(key).then(function(data) {
            	vm.courses = data;
            	return vm.courses;
        });
    }

	}

})();
