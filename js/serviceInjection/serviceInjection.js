var serviceInjectionApp = angular.module('serviceInjectionApp', []);

serviceInjectionApp.controller('ctrl', function($scope, NumberCruncher){
    $scope.errorString = "ERROR";

    $scope.crunchNumbers = function(){
        $scope.num3 = NumberCruncher.crunch($scope.num1, $scope.num2);

        $scope.error = $scope.num3 === undefined;
    }
});

serviceInjectionApp.service('NumberCruncher', function(){
    var numberCruncher = {
        crunch: function(num1, num2){
            if (typeof num1 !== 'number' || typeof num2 !== 'number') {
                return undefined;
            }

            return num1 + num2;
        }
    };

    return numberCruncher;
});