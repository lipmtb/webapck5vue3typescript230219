import { onMounted, ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import io from "socket.io-client";
import { ServerBaseUrl } from "@/service/serviceBase/serviceBase";
export type TChatContent = {
    userId: string;
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
    // 后台返回响应
    const handleNewMsg = () => {

    }
    // 发送聊天
    const onSubmitChat = async (reqText: string) => {
        state.loading = true;
        state.chatList.push({
            userId: userId?.value,
            time: new Date().toLocaleDateString(),
            content: reqText
        })
        try {
            // 发送给后台服务处理
        } catch (err) {
            console.error("发送失败", err);
        } finally {
            state.loading = false;
        }
    };
    socketRef.value = io(ServerBaseUrl);
    if (userId) {
        socketRef.value?.on?.(userId?.value, handleNewMsg); //监听自己发送的消息是否成功
    }

    return {
        ...(state || {}),
        socketRef,
        onSubmitChat
    }
}
export default useChatHook;