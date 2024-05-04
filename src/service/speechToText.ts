import serviceBaseAxios from "./serviceBase/serviceBase";

export type TSpeechToTextResponse = {
  transcription: string;
  errorCode: string;
  message: string;
};

export const speechToTextService = (reqData: FormData) => {
  return serviceBaseAxios.post<FormData, TSpeechToTextResponse>(
    "/chatai/speechToText",
    reqData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
