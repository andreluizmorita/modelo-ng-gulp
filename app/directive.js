angular
	.module('app')
	.directive('modeloDirective', function(){
	    return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	            element.click(function(){

	            });
	        }
	    }
	});
