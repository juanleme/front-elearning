(function() {
    'use strict'

    angular.module('ge.header', [])

    .directive('uiHeader', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/shared/header/header.view.html',
            controller: ['$scope', '$filter', function ($scope, $filter) {

            }]
        }
    });
})();
