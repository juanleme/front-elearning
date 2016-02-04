(function() {
    'use strict'

    angular.module('ge.footer', [])

    .directive('uiFooter', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/shared/footer/footer.view.html',
            controller: ['$scope', '$filter', function ($scope, $filter) {

            }]
        }
    });
})();
