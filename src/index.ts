import {Throttle}                    from './lib/Throttle';
import {Threshold}                   from './lib/Threshold';
import { sThrottleThresholdOptions } from './meta/structs';
import { IRequestable }              from './meta/interfaces';

export function throttleSession(session:IRequestable,
                  thresholdOptions:sThrottleThresholdOptions):any{
    return new Throttle(session,
                        new Threshold(thresholdOptions));
}