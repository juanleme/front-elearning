(function() {
    'use strict'

    angular.module('el.login', ['ngCookies'])
	.controller('LoginController', LoginController);

	LoginController.$inject = ['LoginService', '$log', '$cookies', '$state'];

	function LoginController (LoginService, $log, $cookies, $state) {
		var vm = this;

		vm.error = '';
		vm.credentials = {
			email: '',
			password: ''
		};
		vm.submit = submit;

		function submit () {
			login(vm.credentials);
		}

	    function login(credentials) {
        	return LoginService.login(credentials).then(function(data) {
        		if(typeof data === 'object'){
        			$cookies.putObject('user', data);
        			$state.go('courses');
            	}else if(data){
            		vm.error = data;
            	}
        	});
    	}
	}

})();
