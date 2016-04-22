(function() {
    'use strict'

    angular.module('el.footer', [])

    .directive('uiFooter', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/shared/footer/footer.view.html'
        }
    });
})();
