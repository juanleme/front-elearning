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
        
        function logout (user_id, token) {
            return $http.post(SERVER_URL + 'api/users/'+ user_id + '/logout?token='+token)
                .then(getStatus)
                .catch(getFailed);
        }

        function getCompleted (response) {
            return response.data;
        }
        function getStatus (response) {
            console.log(response);
            return response.status;
        }
        function getFailed (error) {
            return $log.error(error);
        }
    }


})();