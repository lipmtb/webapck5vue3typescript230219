import {  ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import chatai from "@/service/chatai";

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
    // 发送聊天
    const onSubmitChat = async (reqText: string, apiKey: string) => {
        state.loading = true;
     
        state.chatList.push({
            userId: userId?.value,
            userName: userName?.value,
            time: new Date().toLocaleTimeString(),
            content: reqText
        })
        try {
            // 发送给后台服务处理
            const aiResponse = await chatai({ userId: userId?.value, content: reqText, apiKey });
            const message = aiResponse?.choices?.[0]?.message?.content;
            // const message = require("@/mock/aiRes.json");// mock
            state.chatList.push({
                userId: "assistant",
                userName: "bot",
                time: new Date().toLocaleTimeString(),
                content: message ?? ""
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
        userId,
    }
}
export default useChatHook;