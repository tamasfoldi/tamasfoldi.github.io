/// <reference path="../../references.ts" />
describe('Lesson End-To-End Specs', function () {
    var routeParams, location, scope, menuCtrl;
    beforeEach(function () {
        browser.get('http://localhost:5004/#/lesson?id=1');
    });
    it('should have the title as "Lesson 1"', function () {
        expect(element(by.id('LessonTitle')).getText()).toBe('Lesson 1');
    });
    it('s lesson text should be "This text should be typed"', function () {
        expect(element(by.id('LessonText')).getText()).toBe('This text should be typed');
    });
    it('shouldnt enable invalid keypresses but should accept valid ones', function () {
        element(by.model('LessonCtrl.typedText')).sendKeys('AT');
        expect(element(by.model('LessonCtrl.typedText')).getAttribute('value')).toEqual('T');
    });
    it('should show the result the correct text was "inserted"', function () {
        expect(element(by.css('lesson-result')).isDisplayed()).toBeFalsy();
        element(by.model('LessonCtrl.typedText')).sendKeys('This text should be typed');
        expect(element(by.css('lesson-result')).isDisplayed()).toBeTruthy();
    });
    if ('should show the result after the correct text was "inserted"', function () {
        expect(element(by.css('textarea')).isEnabled()).toBeTruthy();
        element(by.model('LessonCtrl.typedText')).sendKeys('This text should be typed');
        expect(element(by.css('textarea')).isEnabled()).toBeFalsy();
    })
        ;
});
//# sourceMappingURL=LessonE2E.js.map