(function(){
	'use strict';

	angular.module('el.login')
    .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$log', 'SERVER_URL'];

    function LoginService ($http, $log, SERVER_URL) {
        return {
            login: login,
            logout: logout
        };

        function login (credentials) {
            return $http.post(SERVER_URL + 'api/users/auth', credentials)
                .then(getCompleted)
                .catch(getFailed);
        }
        
        function logout () {
            return $http.post(SERVER_URL + 'api/users/auth', credentials)
                .then(getCompleted)
                .catch(getFailed);
        }

        function getCompleted (response) {
            return response.data;
        }
        function getFailed (error) {
            return $log.error(error);
        }
    }


})();