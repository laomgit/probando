(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core'], factory) :
    (factory((global['my-lib'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/my-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        /**
         * @return {?}
         */
        MyLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-my-lib',
                        template: "\n    <p>\n      my-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MyLibComponent.ctorParameters = function () { return []; };
        return MyLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/my-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        MyLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MyLibComponent],
                        imports: [],
                        exports: [MyLibComponent]
                    },] }
        ];
        return MyLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: my-lib.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MyLibModule = MyLibModule;
    exports.ɵa = MyLibComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-lib.umd.js.map