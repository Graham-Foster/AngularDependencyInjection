var otherInjectionApp = angular.module('otherInjectionApp', []);

//CONTROLLER
otherInjectionApp.controller('ctrl', ['$scope', '$http', 'expertService', function($scope, $http, expertService){

    $http.get('https://api.github.com/repos/angular/angular.js/commits').then(function(resp){
        $scope.commits = resp.data;
        expertService.findExperts(resp);
    },
    function(){
        $scope.error = true;
    });
}]);


//FILTER
otherInjectionApp.filter('checkExpert', ['expertService', function(expertService){
    return function(commit) {
        return expertService.checkExpert(commit.commit.author.name) ? '\u2713' : '\u2718';
    }
}]);

//SERVICE
otherInjectionApp.service('expertService', ['$http', function($http){
    var expertList = [],
        expertRequirement = 5;

    return {
        findExperts: function(resp){
            resp.data.forEach(function(commit){
                $http.get('https://api.github.com/users/'+commit.author.login+'/followers').then(function(followers){
                    if(followers.data.length > expertRequirement) {
                        expertList.push(commit.commit.author.name);
                    }
                })
            })
        },
        checkExpert: function(author){
            return expertList.indexOf(author) >= 0;
        }
    };
}]);