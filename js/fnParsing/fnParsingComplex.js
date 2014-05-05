function getParamsForFn(fn){
    var fnSignatureExp = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var $inject = [];
    var fnText = fn.toString();

    var fnSignature = fnText.match(fnSignatureExp);
    fnSignature[1].split(', ').forEach(function(arg){
        $inject.push(arg);
    });

    return $inject;
}

function getParams(input){
    var $inject = [];
    if (typeof input === 'function') {
        return getParamsForFn(input);
    } else if (Array.isArray(input)) {
        $inject = input.slice(0, input.length - 1);
        return $inject;
    }
}

var fnParsingComplexApp = angular.module('fnParsingComplexApp', []);

fnParsingComplexApp.service('MyService', function(){})

var f = ['$scope', '$window', '$location', '$http', 'MyService', function(a, b, c, d, e){
    a.paramList = getParams(f);

    a.input = f;
    a.input[a.input.length - 1] = f[f.length - 1].toString();
}];
var ctrl = fnParsingComplexApp.controller('ctrl', f);