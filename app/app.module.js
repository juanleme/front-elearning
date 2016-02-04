(function() {
    'use strict';

    angular.module('ge', [
      // Core dependency Injection
      'ge.routes',

      // Components dependency Injection
      'ge.panel',

      //Shared dependency Injection
      'ge.header',
      'ge.footer'
    ]);

})();
