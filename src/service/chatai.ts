import { AxiosResponse } from "axios";
import serviceBaseAxios from "./serviceBase/serviceBase";

export type TChoiceItem = {
    finish_reason: string;
    index: number;
    message: {
        content: string;
        role: string;
    }
}
export type AiResponseData = {
    choices: TChoiceItem[];
    errCode: string;
    message: string;
}
export type TChatParamReq = {
    userId: string;
    content: string;
    apiKey?: string;
}
const chatai = (chatParam: TChatParamReq) => {
    return serviceBaseAxios.post<TChatParamReq, AiResponseData>(
        '/chatai/gptai', {
        ...chatParam
    }
    )
}

export default chatai;

