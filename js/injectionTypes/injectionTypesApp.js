var injectionTypesApp = angular.module('injectionTypesApp', []);

injectionTypesApp.controller('ctrl1', function($scope){
    $scope.msg = 'Controller1 Setup Success!';

    $scope.details = 'injectionTypesApp.controller(\'ctrl1\', function($scope){...});'
});


var ctrl2 = function(a){
    a.msg = 'Controller2 Setup Success!';

    a.details = 'var c = function(a){...}); \nc.$inject = [\'$scope\'];';
};
ctrl2.$inject = ['$scope'];


injectionTypesApp.controller('ctrl3', ['$scope', function(b){
    b.msg = 'Controller3 Setup Success!';

    b.details = 'injectionTypesApp.controller(\'ctrl3\', [\'$scope\', function(renamedScope){...});';
}]);