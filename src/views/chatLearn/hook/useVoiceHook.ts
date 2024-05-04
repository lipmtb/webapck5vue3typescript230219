import { base64ToBlob } from "@/util/base64ToBlob";
import { reactive, ref } from "vue";
import voiceMock from "../../../mock/music.json";
import { useSpeechToTextHook } from "./useSpeechToTextHook";

declare global {
  interface IUtilWeb {
    postNative: (commandName: string, param: string) => void;
  }
  interface Window {
    postWithCallback: (
      commandName: string,
      param: Record<string, string>,
      callback: (res: any) => void
    ) => void;
    utilWeb: IUtilWeb;
  }
}

type TVoiceItem = {
  time: string;
  voiceUrl: string;
  originFile: Blob;
};

const useVoiceHook = () => {
  const voiceList = ref<TVoiceItem[]>([]);
  const isVoicing = ref<boolean>(false);
  const { getTextFromSpeech } = useSpeechToTextHook();

  const speechToText = async (voiceBlob: Blob, dataUrl: string) => {
    const speechResultText = await getTextFromSpeech(voiceBlob);
    console.log("speechResultTextspeechResultText", speechResultText);
    return speechResultText;
  };

  // 原生的录音
  const startVoice = () => {
    console.log("开始录音js");
    isVoicing.value = true;
    if (
      window.origin.includes("localhost") ||
      window.origin.includes("127.0.0.1")
    ) {
      return;
    }
    if (window.postWithCallback) {
      window.postWithCallback("recordVoice", { type: "start" }, (response) => {
        console.log(
          "开始录音response",
          typeof response,
          JSON.stringify(response)
        );
      });
    }
  };

  const endVoice = async () => {
    isVoicing.value = false;
    // 本地调试
    if (
      window.origin.includes("localhost") ||
      window.origin.includes("127.0.0.1")
    ) {
      // const audioBlob = base64ToBlob(voiceMock, "audio/mpeg");
      const audioBlob = base64ToBlob(voiceMock, "audio/aac");
      // voiceList.value = [
      //   {
      //     time: new Date().toLocaleTimeString(),
      //     voiceUrl: `data:audio/mpeg;base64,${voiceMock}`,
      //     originFile: audioBlob,
      //   },
      // ];
      const textResult = await speechToText(
        audioBlob,
        `data:audio/mpeg;base64,${voiceMock}`
      );
      return textResult;
    }

    const realResult: string = await new Promise((resolve, reject) => {
      if (
        !window.postWithCallback ||
        typeof window.utilWeb?.postNative !== "function"
      ) {
        return reject("录音失败");
      }
      window.postWithCallback(
        "recordVoice",
        { type: "end" },
        async (response) => {
          console.log("结束录音response", response);
          if (typeof response !== "object") {
            return reject("录音失败");
          }
          if (!response || !response.audioBase64) {
            return reject("录音失败");
          }
          try {
            const audioUrl = "data:audio/aac;base64," + response.audioBase64;
            const audioBlob = base64ToBlob(response.audioBase64, "audio/aac");
            const textResult = await speechToText(audioBlob, audioUrl);
            resolve(textResult ?? "");
          } catch (error) {
            reject("录音失败" + (error as Error)?.message || error);
          }
        }
      );
    });
    return realResult;
  };

  const removeVoice = () => {
    voiceList.value = [];
  };

  return {
    startVoice,
    endVoice,
    voiceList,
    removeVoice,
    isVoicing,
  };
};

export default useVoiceHook;
