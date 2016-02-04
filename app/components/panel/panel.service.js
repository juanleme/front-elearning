(function() {
    'use strict'

    angular.module('ge.panel')

    .factory('PanelService', function($http) {

      return {
        hello: function() {
          return "Hello, dude :)";
        }
      };
    });
})();
