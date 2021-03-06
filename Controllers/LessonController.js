///// <reference path="../references.ts" />
//module App {
//    import LessonService = App.LessonService;
//    import Lesson = Model.ILesson;
//    export class TypewritingCtrl {
//        private location: ng.ILocationService;
//        private lessonService: LessonService;
//        private lessonId: number;
//        private lesson: Lesson;
//        private typedText: string;
//        private scope: any;
//        private isDisabled: boolean;
//        constructor(lessonService: LessonService, $location: ng.ILocationService, $scope: ng.IScope) {
//            this.location = $location;
//            this.lessonService = lessonService;
//            this.lessonId = this.location.search()["id"];
//            this.lesson = lessonService.getLesson(this.lessonId);
//            this.scope = $scope;
//            this.typedText = "";
//            this.scope.$on('timer-stopped', function (event, data) {
//                var scope: any = event.currentScope
//                scope.typewriting.lesson.getStatistic().calculateTypingSpeed(data.millis);
//                scope.typewriting.lesson.getStatistic().setTime(data.millis);
//            });
//        }
//        keypressHandling($event) {
//            var char: string = String.fromCharCode($event.which);
//            var tempTyped = this.typedText + char;
//            if (tempTyped != this.lesson.getText().substr(0, tempTyped.length)) {
//                $event.preventDefault();
//                this.lesson.getStatistic().increasNofMistakes();
//            }
//            else {
//                this.lesson.getStatistic().increaseNofCorrectKeyPresses();
//                if (tempTyped == this.lesson.getText()[0]) { //at the first character the timer starts
//                    this.scope.$broadcast('timer-start');
//                }
//                if (tempTyped == this.lesson.getText()) { //at the last character the timer stops and the textarea sets to disabled
//                    this.typedText = tempTyped;
//                    this.isDisabled = true;
//                    this.scope.$broadcast('timer-stop');
//                }
//            }
//        }
//        getIsDisabled(): boolean {
//            return this.isDisabled;
//        }
//    }
//}
var App;
(function (App) {
    var Statistic = Model.Statistic;
    var LessonCtrl = (function () {
        function LessonCtrl($location, $scope, LessonService) {
            var _this = this;
            this.location = $location;
            this.lesson = LessonService.get({ lessonId: "lesson" + this.location.search().id });
            this.lesson.$promise.then(function (data) {
                _this.textToBeType = data.text;
            });
            this.typedText = '';
            this.scope = $scope;
            this.statistic = new Statistic();
            this.resultIsHidden = true;
            this.textareaIsDisabled = false;
            this.scope.$on('timer-stopped', function (event, data) {
                var scope = event.currentScope;
                scope.LessonCtrl.statistic.calculateTypingSpeed(data.millis);
                scope.LessonCtrl.statistic.setTime(data.millis);
            });
        }
        LessonCtrl.prototype.keyPressHandler = function ($event) {
            var char = String.fromCharCode($event.which);
            var tempTyped = this.typedText + char;
            if (tempTyped != this.lesson.text.substr(0, tempTyped.length)) {
                $event.preventDefault();
                this.statistic.increasNofMistakes();
            }
            else {
                this.statistic.increaseNofCorrectKeyPresses();
                this.textToBeType = this.lesson.text.substr(this.typedText.length + 1, this.lesson.text.length);
                if (tempTyped == this.lesson.text[0]) {
                    this.scope.$broadcast('timer-start');
                }
                if (tempTyped == this.lesson.text) {
                    this.resultIsHidden = false;
                    this.textareaIsDisabled = true;
                    this.typedText = tempTyped;
                    this.scope.$broadcast('timer-stop');
                }
            }
        };
        return LessonCtrl;
    })();
    App.LessonCtrl = LessonCtrl;
})(App || (App = {}));
//# sourceMappingURL=LessonController.js.map