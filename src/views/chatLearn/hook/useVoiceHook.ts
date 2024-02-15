import { base64ToBlob } from "@/util/base64ToBlob";
import { reactive, ref } from "vue";

declare global {
  interface Window {
    postWithCallback: (
      commandName: string,
      param: Record<string, string>,
      callback: (res: any) => void
    ) => void;
  }
}

type TVoiceItem = {
  time: string;
  voiceUrl: string;
  originFile: Blob;
};

const useVoiceHook = () => {
  const voiceList = ref<TVoiceItem[]>([]);
  const tempRecordBase64 = ref<string>("");

  // 原生的录音
  const startVoice = () => {
    console.log("开始录音js");
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

  const endVoice = () => {
    if (window.postWithCallback) {
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
            const audioBlob = await base64ToBlob(
              response.audioBase64,
              "audio/aac"
            );
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
  };
};

export default useVoiceHook;
