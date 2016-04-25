(function() {
    'use strict';
    angular
    .module('app')
    .factory('AuthFactory', AuthFactory);

// =========================================================================
// AUTH
// =========================================================================
AuthFactory.$inject = ['$resource'];

function AuthFactory($resource){
    return function name(){
            
    };
} 

})();
