(function(){
	'use strict';

	angular.module('el.cookies', ['ngCookies'])
    .factory('elCookies', elCookies);

    elCookies.$inject = ['$http', '$log', '$cookies', 'SERVER_URL'];

    function elCookies ($http, $log, $cookies, SERVER_URL) {
        return {
            isLoggedIn: isLoggedIn,
        };

        function isLoggedIn () {
            var user = $cookies.getObject('user');

            if(typeof user === "object"){
                return true;
            }
            return false;
        }
    }


})();