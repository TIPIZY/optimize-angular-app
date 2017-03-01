/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./search", "@angular/common", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Search_1() {
        return import0.ɵviewDef(0, [
            import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
            import0.ɵtextDef(null, [
                '',
                ''
            ])
        ], null, function (check, view) {
            var comp = view.component;
            var currVal_0 = view.context.$implicit;
            check(view, 1, 0, currVal_0);
        });
    }
    function View_Search_0() {
        return import0.ɵviewDef(0, [
            import0.ɵtextDef(null, ['\n    ']),
            import0.ɵelementDef(0, null, null, 12, 'div', [], null, null, null, null, null),
            import0.ɵtextDef(null, ['\n      ']),
            import0.ɵelementDef(0, null, null, 1, 'h2', [], null, null, null, null, null),
            import0.ɵtextDef(null, ['Search']),
            import0.ɵtextDef(null, ['\n      ']),
            import0.ɵelementDef(0, [[
                    'foo',
                    1
                ]
            ], null, 0, 'input', [
                [
                    'placeholder',
                    'Search on Wikipedia'
                ],
                [
                    'type',
                    'text'
                ]
            ], null, null, null, null, null),
            import0.ɵtextDef(null, ['\n      ']),
            import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                    null,
                    'click'
                ]
            ], function (view, eventName, $event) {
                var allowDefault = true;
                var comp = view.component;
                if (('click' === eventName)) {
                    var pd_0 = (comp.search(import0.ɵnodeValue(view, 6).value) !== false);
                    allowDefault = (pd_0 && allowDefault);
                }
                return allowDefault;
            }, null, null),
            import0.ɵtextDef(null, ['Search']),
            import0.ɵtextDef(null, ['\n      ']),
            import0.ɵanchorDef(256, null, null, 1, null, View_Search_1),
            import0.ɵdirectiveDef(12, null, 0, import2.NgForOf, [
                import0.ViewContainerRef,
                import0.TemplateRef,
                import0.IterableDiffers
            ], { ngForOf: [
                    0,
                    'ngForOf'
                ]
            }, null),
            import0.ɵtextDef(null, ['\n    ']),
            import0.ɵtextDef(null, ['\n  '])
        ], function (check, view) {
            var comp = view.component;
            var currVal_0 = comp.pages;
            check(view, 12, 0, currVal_0);
        }, null);
    }
    exports_1("View_Search_0", View_Search_0);
    function View_Search_Host_0() {
        return import0.ɵviewDef(0, [
            import0.ɵelementDef(0, null, null, 1, 'search', [], null, null, null, View_Search_0, RenderType_Search),
            import0.ɵdirectiveDef(1024, null, 0, import1.Search, [import3.Http], null, null)
        ], null, null);
    }
    var import0, import1, import2, import3, styles_Search, RenderType_Search, RenderType_Search_Host, SearchNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            styles_Search = [];
            exports_1("RenderType_Search", RenderType_Search = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: styles_Search,
                data: { animation: [] }
            }));
            RenderType_Search_Host = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: [],
                data: { animation: [] }
            });
            exports_1("SearchNgFactory", SearchNgFactory = import0.ɵcreateComponentFactory('search', import1.Search, View_Search_Host_0));
        }
    };
});
//# sourceMappingURL=search.ngfactory.js.map