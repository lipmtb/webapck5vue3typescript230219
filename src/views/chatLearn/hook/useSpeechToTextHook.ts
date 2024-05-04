import { speechToTextService } from "@/service/speechToText";
import { ref } from "vue";

const getCurentDay = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
const getRandomFileName = () =>
  getCurentDay() + Math.floor(Math.random() * 10 ** 6);

export const useSpeechToTextHook = () => {
  const loading = ref<boolean>(false);

  const getTextFromSpeech = async (voiceBlob: Blob, fileName?: string) => {
    try {
      loading.value = true;
      const reqData = new FormData();
      reqData.append("speechList", voiceBlob, fileName ?? getRandomFileName());
      const response = await speechToTextService(reqData);
      return response?.transcription ?? "";
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };
  return {
    getTextFromSpeech,
    loading,
  };
};
