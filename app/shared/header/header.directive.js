(function() {
    'use strict'

    angular.module('el.header', ['ui.router'])

    .directive('uiHeader', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/shared/header/header.view.html',
            controller: ['$scope', '$state', 'elCookies', 'LoginService', function ($scope, $state, elCookies, LoginService) {
                var cookie = elCookies.getUser();

                $scope.username = cookie.user.firstname + " " + cookie.user.lastname;
                $scope.logout = logout;

                function logout() {
                    LoginService.logout(cookie.user_id, cookie.key)
                    .then(function(status){
                        if(status === 200){
                            elCookies.removeUser();
                            $state.go('login');
                        }
                    })
                }
            }]
        }
    });
})();
