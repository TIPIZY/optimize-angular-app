System.register(["@angular/core", "@angular/forms", "@angular/router", "./subscribe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, router_1, subscribe_1, routes, SubscribeModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (subscribe_1_1) {
                subscribe_1 = subscribe_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: subscribe_1.Subscribe },
            ];
            SubscribeModule = (function () {
                function SubscribeModule() {
                }
                return SubscribeModule;
            }());
            SubscribeModule = __decorate([
                core_1.NgModule({
                    imports: [forms_1.FormsModule, router_1.RouterModule.forChild(routes)],
                    declarations: [subscribe_1.Subscribe]
                })
            ], SubscribeModule);
            exports_1("SubscribeModule", SubscribeModule);
        }
    };
});
//# sourceMappingURL=subscribe.module.js.map