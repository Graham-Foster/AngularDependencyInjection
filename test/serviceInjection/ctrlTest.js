//describe('serviceInjectionApp ctrl', function(){
//    var fixture,
//        scope,
//        mockNumberCruncher;
//
//    beforeEach(module('serviceInjectionApp', function($provide){
//
//    }));
//
//    beforeEach(inject(function($rootScope, $controller, _NumberCruncher_){
//        scope = $rootScope.$new();
//        mockNumberCruncher = _NumberCruncher_;
//
//        fixture = $controller('ctrl', {
//            $scope: scope,
//            NumberCruncher: _NumberCruncher_
//        });
//    }));
//
//    it('should provide and errorString', function(){
//        expect(scope.errorString).not.toBeNull();
//    });
//
//    it('crunchNumbers should delegate to service', function(){
//        //setup
//        scope.num1 = 1;
//        scope.num2 = 2;
//        var result = scope.num1 + scope.num2;
//
//        //expected
//        spyOn(mockNumberCruncher, 'crunch').andReturn(result);
//
//        //execute
//        scope.crunchNumbers();
//
//        //validate
//        expect(scope.num3).toBe(result);
//        expect(scope.error).toBeFalsy();
//        expect(mockNumberCruncher.crunch).toHaveBeenCalled();
//    });
//});