import { reactive, ref } from "vue"

/**
 * 
然后，您需要使用 getUserMedia() 方法来请求访问用户的麦克风权限，并创建一个 MediaRecorder 对象来记录音频数据
以下是一个基本的示例代码
html <!DOCTYPE html> <html> <head> <meta charset="utf-8"> <title>录音示例</title> </head>
 <body> <button id="record-button">按住 录音</button>
  <script> const recordButton = document.getElementById('record-button'); 
  let mediaRecorder; let audioChunks = [];
   // 按住按钮时开始录音
    recordButton.addEventListener('mousedown', e => 
    { e.preventDefault(); navigator.mediaDevices.getUserMedia({ audio: true })
     .then(stream => { mediaRecorder = new MediaRecorder(stream);
         mediaRecorder.start(); }); }); 
         // 松开按钮时停止录音，并记录音频数据
          recordButton.addEventListener('mouseup', e => 
          { e.preventDefault(); mediaRecorder.stop(); }); 
          // 监听录音数据，将其存储为二进制块 mediaRecorder.addEventListener("dataavailable", 
          event => { audioChunks.push(event.data); }); 
          // 监听停止事件，将音频数据组合成Blob对象，并输出到控制台 
          mediaRecorder.addEventListener("stop", () => { 
            const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg-3' });
             console.log(audioBlob); audioChunks = []; });
              </script>
               </body> 
               </html>
上面的代码中，我们首先为按住按钮和松开按钮注册了 mousedown 和 mouseup 事件
在 mousedown 事件处理程序中，我们请求访问用户的麦克风，并创建一个 MediaRecorder 对象来开始录音
在 mouseup 事件处理程序中，我们停止录音，并在 stop 事件监听器中将录制的音频数据组合成 Blob 对象并输出到控制台
您还可以使用音频标签或 WebSockets 将录制的音频数据发送到服务器进行处理
在这种情况下，您需要将音频数据转换为 base64 编码的字符串，并使用 Ajax 或 WebSocket 将其发送到服务器
 */
type TVoiceItem = {
    time: string;
    voiceUrl: string;
    originFile: Blob;
}
const useVoiceHook = () => {
    const voiceList = reactive<TVoiceItem[]>([]);
    const recorder = ref<MediaRecorder | null>(null);
    const startVoice = () => {

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
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

    const endVoice = () => {
        console.log("录音结束", recorder.value);
        if (!recorder.value) {
            return;
        }
        recorder.value?.stop();
    }

    const removeVoice = (index: number) => {
        voiceList.splice(index, 0);
    }

    return {
        startVoice,
        endVoice,
        voiceList,
        removeVoice
    }
}

export default useVoiceHook;