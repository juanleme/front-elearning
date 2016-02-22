(function() {
    'use strict'

    angular.module('el.courses')

    .factory('CoursesService', function($http) {
		var courses;

    	return {
        	listCourse: function() {       		

	          	if (!courses) {

	      			courses = $http.get('http://localhost:8080/api-elearning/public/api/courses').then(
	      				function(response) {
							return response.data;
			    		},
				    	function(error) {
				    		console.log("Failed: " + error); 
				    	}
				    );
	      		}else{
	      			console.log("Data: cache");
	      		}
	    		return courses;
    		}
    	};
	});
})();
