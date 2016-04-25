(function() {
	'use strict';
	
	angular
	.module('app')
	.controller('HomeCtrl',HomeCtrl);

	HomeCtrl.$inject = ['$scope','AuthFactory'];

	function HomeCtrl($scope, AuthFactory){
		var vm = this;


		vm.titulo = 'TITLE USE VM';
	};
})();
