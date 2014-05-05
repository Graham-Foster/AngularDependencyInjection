describe('otherInjection ctrl', function(){
    var fixture;

    beforeEach(module('otherInjectionApp', function($provide){
    }));

    beforeEach(inject(function($http, $q, expertService){
        fixture = expertService;
    }));

    it('should say users with many followers are experts', inject(function($rootScope, $q, $http){
        //setup
        var deferral = $q.defer();
        spyOn($http, 'get').andReturn(deferral.promise);
        var commits = {
            data: [
                {
                    author: {login: 'johnsmith'},
                    commit: {author: {name: 'John Smith'}}
                }
            ]
            },
            manyFollowers = {data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}

        fixture.findExperts(commits);
        deferral.resolve(manyFollowers);
        $rootScope.$digest();

        expect(fixture.checkExpert('John Smith')).toBe(true);
    }));

    it('should say users with few followers are not experts', inject(function($rootScope, $q, $http){
        //setup
        var deferral = $q.defer();
        spyOn($http, 'get').andReturn(deferral.promise);
        var commits = {
                data: [
                    {
                        author: {login: 'johnsmith'},
                        commit: {author: {name: 'John Smith'}}
                    }
                ]
            },
            fewFollowers = {data : [1, 2]};

        fixture.findExperts(commits);
        deferral.resolve(fewFollowers);
        $rootScope.$digest();

        expect(fixture.checkExpert('John Smith')).toBe(false);
    }));
});