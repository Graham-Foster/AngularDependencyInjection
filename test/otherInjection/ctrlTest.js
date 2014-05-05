describe('otherInjection ctrl', function(){
    var fixture,
        scope,
        deferral,
        mockExpertService;

    var expectedCommits = {data:[
        {
            author: 'someone',
            msg: 'something'
        }
    ]};

    beforeEach(module('otherInjectionApp', function($provide){

    }));

    beforeEach(inject(function($rootScope, $controller, $http, $q, expertService){
        scope = $rootScope.$new();
        deferral = $q.defer();
        mockExpertService = expertService;

        spyOn($http, 'get').andReturn(deferral.promise);
        spyOn(expertService, 'findExperts');

        fixture = $controller('ctrl', {
            $scope: scope,
            expertService: expertService
        });
    }));

    it('should call off for commits', function(){
        deferral.resolve(expectedCommits);
        scope.$digest();

        expect(scope.commits).toBe(expectedCommits.data);
        expect(mockExpertService.findExperts).toHaveBeenCalledWith(expectedCommits);
    });
});