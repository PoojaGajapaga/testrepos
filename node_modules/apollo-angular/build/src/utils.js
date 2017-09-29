import { observeOn } from 'rxjs/operator/observeOn';
import { queue } from 'rxjs/scheduler/queue';
import { Observable } from 'rxjs/Observable';
/**
 * @template T
 * @param {?} promiseFn
 * @return {?}
 */
export function fromPromise(promiseFn) {
    return new Observable(function (subscriber) {
        promiseFn()
            .then(function (result) {
            if (!subscriber.closed) {
                subscriber.next(result);
                subscriber.complete();
            }
        }, function (error) {
            if (!subscriber.closed) {
                subscriber.error(error);
            }
        });
        return function () { return subscriber.unsubscribe(); };
    });
}
/**
 * @template T
 * @param {?} obs
 * @return {?}
 */
export function wrapWithZone(obs) {
    return observeOn.call(obs, new ZoneScheduler(Zone.current));
}
var ZoneScheduler = (function () {
    /**
     * @param {?} zone
     */
    function ZoneScheduler(zone) {
        this.zone = zone;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    ZoneScheduler.prototype.schedule = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.zone.run(function () { return queue.schedule.apply(queue, args); }));
    };
    return ZoneScheduler;
}());
export { ZoneScheduler };
function ZoneScheduler_tsickle_Closure_declarations() {
    /** @type {?} */
    ZoneScheduler.prototype.zone;
}
//# sourceMappingURL=utils.js.map