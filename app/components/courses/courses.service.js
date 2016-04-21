(function() {
    'use strict';

    angular.module('el.courses')
    .factory('CoursesService', CoursesService);

	CoursesService.$inject = ['$http', '$log', 'SERVER_URL'];

    function CoursesService ($http, $log, SERVER_URL) {
    	return {
        	listCourses: getCourses
    	};

    	function getCourses() {
    		return $http.get(SERVER_URL + 'api/courses')
	    		.then(getCompleted)
    			.catch(getFailed);
    	}
    	function getCompleted(response) {
            return response.data;
    	}
    	function getFailed(error) {
    		$log.error('XHR Failed data: '+ error);
    	}
	}

})();
