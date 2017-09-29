import { NgModule } from '@angular/core';
import { provideApollo, provideClientMap } from './Apollo';
import { SelectPipe } from './SelectPipe';
export var /** @type {?} */ APOLLO_DIRECTIVES = [
    SelectPipe,
];
export var /** @type {?} */ APOLLO_PROVIDERS = [
    provideApollo,
];
/**
 * @param {?} clientFn
 * @return {?}
 */
export function defaultApolloClient(clientFn) {
    return provideClientMap(clientFn);
}
var ApolloModule = (function () {
    function ApolloModule() {
    }
    /**
     * @param {?} clientFn
     * @return {?}
     */
    ApolloModule.withClient = function (clientFn) {
        return {
            ngModule: ApolloModule,
            providers: [
                APOLLO_PROVIDERS,
                defaultApolloClient(clientFn),
            ],
        };
    };
    /**
     * Defines a map of ApolloClients or a single instance
     * @param {?} clientMapFn
     * @return {?}
     */
    ApolloModule.forRoot = function (clientMapFn) {
        return {
            ngModule: ApolloModule,
            providers: [
                APOLLO_PROVIDERS,
                provideClientMap(clientMapFn),
            ],
        };
    };
    ApolloModule.decorators = [
        { type: NgModule, args: [{
                    declarations: APOLLO_DIRECTIVES,
                    exports: APOLLO_DIRECTIVES,
                },] },
    ];
    /**
     * @nocollapse
     */
    ApolloModule.ctorParameters = function () { return []; };
    return ApolloModule;
}());
export { ApolloModule };
function ApolloModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ApolloModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ApolloModule.ctorParameters;
}
//# sourceMappingURL=ApolloModule.js.map