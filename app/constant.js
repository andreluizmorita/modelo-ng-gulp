(function() {
    'use strict';

	angular
		.module('app')
		.constant('APP', {
			url: 'http://localhost/api',
			timeout: 100000
		});
})();
