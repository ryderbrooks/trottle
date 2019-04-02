import { sRequestConstructorArgs, sTransfer } from './structs';



export interface IThreshold {
    reqDelay: number;
    sleepDelay: number;
    maxTotalReqs: number;

    shouldDelayReq( lastReqTime: number ): boolean;

    shouldSleep( reqCnt: number ): boolean;
}



export interface IRequestable {
    request( { headers, options, responseTimeout, transferTimeout }: sRequestConstructorArgs ): Promise<sTransfer>;
}



export interface IThrottleAgent extends IRequestable {
    emit( event: THROTTLE_EVENTS.SLEEP | THROTTLE_EVENTS.DELAY, data: any ): boolean;

    emit( event: THROTTLE_EVENTS.AWAKE | THROTTLE_EVENTS.RESUME, data: any ): boolean;


    on( event: THROTTLE_EVENTS.SLEEP | THROTTLE_EVENTS.DELAY,
        listener: ( data: any ) => void ): this;

    on( event: THROTTLE_EVENTS.AWAKE | THROTTLE_EVENTS.RESUME,
        listener: ( data: any ) => void ): this;

}

