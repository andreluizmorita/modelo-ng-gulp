angular
    .module('app')
    .filter('reverse', function() {
        return function(input, uppercase) {
            var out = '';
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        }
    })
    .filter('databr_hora', function(){
        return function(input){
            input = input || '';
            out = '';

            comhora = input.split(" ");
            sodata = comhora[0].split("-");
            hora =comhora[1].split(":");

            out = sodata[2]+'/'+sodata[1]+'/'+(sodata[0].substr(2, 3))+' '+hora[0]+':'+hora[1];

            return out;
        }
    });