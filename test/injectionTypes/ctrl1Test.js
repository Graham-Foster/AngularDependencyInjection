describe('injectionTypesApp', function(){
    var fixture,
        scope;

    beforeEach(module('injectionTypesApp', function($provide){

    }));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();

        fixture = $controller('ctrl1', {
            $scope: scope
        });
    }));

    it('should have set success message', function(){
        expect(scope.msg).toBeTruthy();
    });

});