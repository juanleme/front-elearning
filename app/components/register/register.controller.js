(function() {
    'use strict'

    angular.module('el.register', [])
	.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['RegisterService', '$log', '$cookies', '$state'];

	function RegisterController (RegisterService, $log, $cookies, $state) {
		var vm = this;

		function submit () {
		}
	}

})();
