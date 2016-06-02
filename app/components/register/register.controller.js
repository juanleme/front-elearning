(function() {
    'use strict'

    angular.module('el.register', [])
	.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['RegisterService', '$log', '$cookies', '$state'];

	function RegisterController (RegisterService, $log, $cookies, $state) {
		var vm = this;
		vm.credentials = {};
		vm.suc = '';
		vm.err = '';

		vm.submit = submit;

		function submit () {
			RegisterService.register(vm.credentials)
			.then(function (data) {
				if(data == 200){
					vm.suc = "Cadastrado com sucesso!";
					vm.err = '';
				}else{
					vm.err = "Não foi possível cadastrar seu usuário.";
					vm.suc = '';
				}
			});
		}
	}

})();
