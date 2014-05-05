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

var fnParsingSimpleApp = angular.module('fnParsingSimpleApp', []);

fnParsingSimpleApp.service('MyService', function(){})

function fn($scope, $window, $location, $http, MyService){
    $scope.paramList = getParamsForFn(fn);
    $scope.input = fn.toString();
};
var ctrl = fnParsingSimpleApp.controller('ctrl', fn);
