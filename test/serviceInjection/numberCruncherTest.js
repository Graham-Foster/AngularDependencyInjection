describe('serviceInjectionApp NumberCruncherSpec', function() {
    var fixture;

    beforeEach(module('serviceInjectionApp', function($provide){

    }));

    beforeEach(inject(function($injector, NumberCruncher) {
        fixture = NumberCruncher;
    }));

    it('should return the sum of two numbers', function(){
        expect(fixture.crunch(1, 2)).toBe(3);
    });

    it('should return undefined with bad input', function(){
        expect(fixture.crunch('a', undefined)).toBe(undefined);
    })
});