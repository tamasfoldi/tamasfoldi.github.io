/// <reference path="../references.ts" />
describe('End-To-End Specs', function () {
    describe('Menu End-To-End Specs', function () {
        var routeParams, location, scope, menuCtrl;
        beforeEach(function () {
            browser.get('http://localhost:5004/#/');
        });
        it('should have the title as "Select a Lesson"', function () {
            expect(element(by.id('MenuTitle')).getText()).toBe('Select a lesson');
        });
        it('should have the title as Lesson 1 after clicking on the first lesson button', function () {
            var button = element.all(by.repeater("lesson in MenuController.lessons | orderBy: 'id'").row(0).column('lesson.name'));
            button.click();
            expect(element(by.id('LessonTitle')).getText()).toBe('Lesson 1');
        });
    });
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
    });
});
//describe('angularjs homepage todo list', function () {
//    it('should add a todo', function () {
//        browser.get('https://angularjs.org');
//        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//        element(by.css('[value="add"]')).click();
//        var todoList = element.all(by.repeater('todo in todoList.todos'));
//        expect(todoList.count()).toEqual(3);
//        expect(todoList.get(2).getText()).toEqual('write first protractor test');
//        // You wrote your first test, cross it off the list
//        todoList.get(2).element(by.css('input')).click();
//        var completedAmount = element.all(by.css('.done-true'));
//        expect(completedAmount.count()).toEqual(2);
//    });
//});
//# sourceMappingURL=e2eSpecs.js.map