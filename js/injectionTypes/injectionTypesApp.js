var injectionTypesApp = angular.module('injectionTypesApp', []);

var ctrl1 = injectionTypesApp.controller('ctrl1', function($scope){
    $scope.msg = 'Controller1 Setup Success!';

    $scope.details = 'var ctrl1 = injectionTypesApp.controller(\'ctrl1\', function($scope){...});'
});


var ctrl2 = function(a){
    a.msg = 'Controller2 Setup Success!';

    a.details = 'var ctrl2 = function(renamedScope){...}); \nctrl2.$inject = [\'$scope\'];';
};
ctrl2.$inject = ['$scope'];


injectionTypesApp.controller('ctrl3', ['$scope', function(b){
    b.msg = 'Controller3 Setup Success!';

    b.details = 'injectionTypesApp.controller(\'ctrl3\', [\'$scope\', function(renamedScope){...});';
}]);