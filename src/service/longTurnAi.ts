import { TChatParamReq } from "./chatai";
import serviceBaseAxios from "./serviceBase/serviceBase";


export type TLongTurnChoicesItem = {
    "text": string;
    "index": number;
    "logprobs": null;
    "finish_reason": string;
}
export type TLongTurnTesponse = {
    choices: TLongTurnChoicesItem[];
    errCode: string;
    message: string;
}

const longTurnAi = (chatParam: TChatParamReq) => {
    return serviceBaseAxios.post<TChatParamReq, TLongTurnTesponse>(
        '/chatai/longTurnAi', {
        ...chatParam
    })
}

export default longTurnAi;

