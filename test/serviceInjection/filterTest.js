describe('otherInjection ctrl', function(){
    var fixture,
        mockExpertService;

    beforeEach(module('otherInjectionApp', function($provide){
    }));

    beforeEach(inject(function($filter, expertService){
        mockExpertService = expertService;

        fixture = $filter('checkExpert', {
            expertService: expertService
        });
    }));

    it('should return checkmark if expertService says true', function(){
        var commit = {
            commit : {
                author: {name: 'John Smith'}
            }
        };

        spyOn(mockExpertService, 'checkExpert').andReturn(true);

        var result = fixture(commit);

        expect(mockExpertService.checkExpert).toHaveBeenCalledWith('John Smith');
        expect(result).toBe('\u2713');
    });

    it('should return x if expertService says false', function(){
        var commit = {
            commit : {
                author: {name: 'John Smith'}
            }
        };

        spyOn(mockExpertService, 'checkExpert').andReturn(false);

        var result = fixture(commit);

        expect(mockExpertService.checkExpert).toHaveBeenCalledWith('John Smith');
        expect(result).toBe('\u2718');
    });
});