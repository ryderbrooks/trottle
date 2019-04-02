import * as http2 from "http2";


export type sThrottleThresholdOptions = {
    minReqPause: number;
    maxReqPause: number;
    minSleepMS: number;
    maxSleepMS: number;
    minReqsPerSleep: number;
    maxReqsPerSleep: number;
    maxTotalReqs: number;
};


export type sRequestConstructorArgs = {
    headers: http2.OutgoingHttpHeaders;
    options: http2.ClientSessionRequestOptions;
    responseTimeout: number;
    transferTimeout: number;
};


export type sInHeaders =
    http2.IncomingHttpHeaders
    & http2.IncomingHttpStatusHeader;

export type sResponse = {
    responseHeaders: sInHeaders | undefined;
    stats: {
        utc_startTime: Date | undefined;
        status: number;
        bytes: number;
        response_micro_duration: number | undefined;
        transfer_micro_duration: number | undefined;
    };
};
export type sTransfer =
    {body: Buffer}
    & sResponse;
