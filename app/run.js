angular
    .module('app')
    .run(run);

run.$inject = ['$rootScope', '$state', 'APP'];

function run($rootScope, $state, APP) {
    // $rootScope.$on('$routeChangeStart', function (event) {

    //     if (!Auth.isLoggedIn()) {
    //         console.log('DENY');
    //         event.preventDefault();
    //         $state.go('home');
    //     }
    //     else {
    //         console.log('ALLOW');
    //         $state.go('home');
    //     }
    // });
}
