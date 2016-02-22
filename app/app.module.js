(function() {
    'use strict';

    angular.module('el', [
      // Core dependency Injection
      'el.routes',

      // Components dependency Injection
      'el.courses',
      'el.videos',

      //Shared dependency Injection
      'el.header',
      'el.footer',
      'ngSanitize'
    ]);

})();
