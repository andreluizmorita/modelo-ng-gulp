(function() {
	'use strict';
	
	angular
	.module('app')
	.service('modeloService');

	
// =========================================================================
//
// =========================================================================
modeloService.$inject = ['$state','$resource','$scope'];

function modeloService($state, $resource, $scope) {
  	this.logError = function(msg) {
    	
  	};
}


})();