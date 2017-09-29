import { Pipe } from '@angular/core';
var SelectPipe = (function () {
    function SelectPipe() {
    }
    /**
     * @param {?} obj
     * @param {?=} name
     * @return {?}
     */
    SelectPipe.prototype.transform = function (obj, name) {
        if (name === void 0) { name = ''; }
        if (obj && name !== '') {
            // for Apollo decorator
            if (obj[name]) {
                return obj[name];
            }
            // for Angular2Apollo.watchQuery
            if (obj.data && obj.data[name]) {
                return obj.data[name];
            }
        }
    };
    SelectPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'select',
                },] },
    ];
    /**
     * @nocollapse
     */
    SelectPipe.ctorParameters = function () { return []; };
    return SelectPipe;
}());
export { SelectPipe };
function SelectPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectPipe.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SelectPipe.ctorParameters;
}
//# sourceMappingURL=SelectPipe.js.map