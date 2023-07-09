import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import longTurnAi from "@/service/longTurnAi";

export type TChatContent = {
    userId: string;
    userName: string;
    time: string;
    content: string;
}
export type TChatState = {
    loading: boolean;
    chatList: TChatContent[];
}
const useChatHook = () => {
    const store = useStore();
    const socketRef = ref();
    const state = reactive<TChatState>({ loading: false, chatList: [] });
    const userId = computed(() => {
        return store.getters["userArea/getUserId"];
    })
    const userName = computed(() => {
        return store.getters["userArea/getUserName"];
    })
    const promptText = computed(() => {
        return store.getters["longTextArea/getPromptText"];
    })
    const promptTurnLen = computed(() => {
        return store.getters["longTextArea/getTurnLen"];
    })
    const maxTurnCheck = async () => {
        if (promptTurnLen?.value < 100) {
            return true;
        }
        const isClear = confirm("是否清除回话");
        if (isClear) {
            store.dispatch("longTextArea/clearPromptAction")
            return false;
        } else {
            return true;
        }

    }
    // 发送聊天
    const onSubmitChat = async (reqText: string, apiKey: string) => {
        const isContinue = await maxTurnCheck();
        if (!isContinue) {
            return;
        }
        state.loading = true;
        const humanText = promptText?.value ? promptText?.value + "\nHuman: " + reqText : "Human: " + reqText;
        state.chatList.push({
            userId: userId?.value,
            userName: userName?.value,
            time: new Date().toLocaleTimeString(),
            content: reqText
        })
        try {
            // 发送给后台服务处理
            // const aiResponse = await chatai({ userId: userId?.value, content: reqText, apiKey });
            const aiResponse = await longTurnAi({ userId: userId?.value, content: humanText, apiKey });
            const message = aiResponse?.choices?.[0]?.text;
            // const message = require("@/mock/aiRes.json");// mock
            state.chatList.push({
                userId: "assistant",
                userName: "bot",
                time: new Date().toLocaleTimeString(),
                content: message?.replace(/^\n*.+：/, "")
            })
            // 记录多轮对话
            store.dispatch("longTextArea/setNewPromptAction", {
                text: humanText + message
            })
        } catch (err) {
            console.error("发送失败", err);
        } finally {
            state.loading = false;
        }
    };

    return {
        ...(state || {}),
        socketRef,
        onSubmitChat,
        userId
    }
}
export default useChatHook;