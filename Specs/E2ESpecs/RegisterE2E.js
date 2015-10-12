/// <reference path="../../references.ts" />
describe('Register End-To-End Specs', function () {
    var routeParams, location, scope, menuCtrl;
    beforeEach(function () {
        browser.get('http://localhost:5004/#/');
    });
    it('should have the title as "Register"', function () {
        expect(element(by.css('.md-display-3')).getText()).toBe('Register');
    });
    it('should show any error message after a correct fill', function () {
        expect(element.all(by.css('[ng-message]')).count()).not.toBe(0);
        element(by.model('RegCtrl.userName')).sendKeys('Tomi');
        element(by.model('RegCtrl.mailAddr')).sendKeys('fo.tamas@gmail.com');
        element(by.model('RegCtrl.password')).sendKeys('QWert123');
        expect(element.all(by.css('[ng-message]')).count()).toBe(0);
    });
});
//# sourceMappingURL=RegisterE2E.js.map