(function(){
	'use strict';

	angular.module('el.login')
    .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$http', '$log', 'SERVER_URL'];

    function RegisterService ($http, $log, SERVER_URL) {
        return {
            register: register
        };

        function register (data) {
            return $http.post(SERVER_URL + 'api/users', data)
                .then(getStatus)
                .catch(getFailed);
        }

        function getStatus (response) {
            return response.status;
        }
        function getFailed (error) {
            return $log.error(error);
        }
    }


})();