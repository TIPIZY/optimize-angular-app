System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, App;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            App = (function () {
                function App() {
                }
                return App;
            }());
            App = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n<nav class=\"navbar navbar-dark bg-primary\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\"  href=\"..\">&#8678;</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/list']\">List</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/subscribe']\">Subscribe</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/search']\">Search</a>\n    </li>\n  </ul>\n</nav>\n<router-outlet></router-outlet>\n  ",
                })
            ], App);
            exports_1("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map