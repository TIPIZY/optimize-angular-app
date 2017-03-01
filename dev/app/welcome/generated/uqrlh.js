System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Uqrlh;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Uqrlh = (function () {
                function Uqrlh() {
                    this.msg = 'nothing to say';
                }
                Uqrlh.prototype.doNothing = function (evt) { };
                return Uqrlh;
            }());
            Uqrlh = __decorate([
                core_1.Component({
                    selector: 'd-uqrlh',
                    template: "\n    <span [attr.aria-label]=\"msg\" [hidden]=\"false\">This is a dummy component for Uqrlh</span>\n    <div (click)=\"doNothing($event)\"></div>\n    ",
                })
            ], Uqrlh);
            exports_1("Uqrlh", Uqrlh);
        }
    };
});
//# sourceMappingURL=uqrlh.js.map