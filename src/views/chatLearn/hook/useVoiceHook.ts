import { base64ToBlob } from "@/util/base64ToBlob";
import { reactive, ref } from "vue";
import voiceMock from "../../../mock/music.json";

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
  const tempRecordBase64 = ref<string>("");

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
      const audioBlob = base64ToBlob(voiceMock, "audio/mpeg");
      voiceList.value = [
        {
          time: new Date().toLocaleTimeString(),
          voiceUrl: `data:audio/mpeg;base64,${voiceMock}`,
          originFile: audioBlob,
        },
      ];
      return;
    }
    if (
      window.postWithCallback &&
      typeof window.utilWeb?.postNative === "function"
    ) {
      window.postWithCallback(
        "recordVoice",
        { type: "end" },
        async (response) => {
          console.log("结束录音response");
          if (typeof response === "object") {
            console.log("获取到录音数据", response);

            if (!response || !response.audioBase64) {
              console.log("录音异常");
            }
            console.log("录音成功", response.audioBase64);
            const audioUrl = "data:audio/aac;base64," + response.audioBase64;
            const audioBlob = base64ToBlob(response.audioBase64, "audio/aac");
            voiceList.value = [
              {
                time: new Date().toLocaleTimeString(),
                voiceUrl: audioUrl,
                originFile: audioBlob,
              },
            ];
          }
        }
      );
    }
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
