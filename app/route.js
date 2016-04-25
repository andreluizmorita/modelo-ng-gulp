angular
	.module('app')
	.config(config);

function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("home");

	$stateProvider
		.state('404', {
			url: "/404",
			templateUrl: "404.html"
		})
		.state('home', {
			url: "/home",
			templateUrl: "views/home.html",
			controller: "HomeCtrl",
			controllerAs: "hctrl"
		});
}


