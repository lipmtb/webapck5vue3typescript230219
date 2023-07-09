import { reactive, ref } from "vue"

type TVoiceItem = {
    time: string;
    voiceUrl: string;
    originFile: Blob;
}
const useVoiceHook = () => {
    const voiceList = reactive<TVoiceItem[]>([]);
    const recorder = ref<MediaRecorder | null>(null);
    // 浏览器调试localhost可用(http  window.navigator.mediaDevices=undefined)
    const startVoiceOnlyHttp = () => {

        window.navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then((stream) => {
                // 创建录音对象
                recorder.value = new MediaRecorder(stream);
                // 开始录音
                recorder.value.start();
                console.log("录音开始", recorder.value);
                // 录音完成后的回调
                recorder.value.ondataavailable = (event) => {
                    // 通过Blob对象获取录音文件
                    var audioBlob = event.data;
                    // 创建录音文件的URL
                    var audioUrl = URL.createObjectURL(audioBlob);
                    // 在页面展示录音文件
                    console.log("录音完成后的回调blob", audioBlob, audioUrl);
                    voiceList.push({
                        time: new Date().toLocaleTimeString(),
                        voiceUrl: audioUrl,
                        originFile: audioBlob
                    })
                };
            })
            .catch(function (error) {
                console.log('访问麦克风失败', error);
            });
    }
    // 原生的录音
    const startVoice = () => {

    }

    const endVoice = () => {
        console.log("录音结束", recorder.value);

    }

    const removeVoice = (index: number) => {
        voiceList.splice(index, 0);
    }

    return {
        startVoice,
        startVoiceOnlyHttp,
        endVoice,
        voiceList,
        removeVoice
    }
}

export default useVoiceHook;