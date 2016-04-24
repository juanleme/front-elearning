(function() {
    'use strict';

    angular.module('el.videos')
    .factory('VideosService', VideosService);

	VideosService.$inject = ['$http', '$log', 'SERVER_URL'];

    function VideosService ($http, $log, SERVER_URL) {
    	return {
        	listVideos: listVideos
    	};

    	function listVideos(id, token) {
    		return $http.get(SERVER_URL + 'api/course/'+ id +'/videos?token=' + token)
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
