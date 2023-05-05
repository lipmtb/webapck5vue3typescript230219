<template>
    <div class="chat-wrapper">
        <p class="page-welcome" v-if="userName">你好！{{ userName }}</p>
        <div class="default-page" ref="defaultPageRef">
            <div ref="scrollLine" class="chat-scroll-list" :style="{ height: calcScrollHeight + 'px' }">
                <div ref="firstEle" style="{opacity:0,height:0}"></div>
                <ChatDetail v-for="chatItem in chatList" :chat-item="chatItem" :user-id="userId" :key="chatItem.time" />
            </div>
            <div class="chat-send-footer" ref="footerSendRef">
                <textarea v-model="userInText" class="input-area" placeholder="请输入您的问题" cols="2" @submit="handleSubmit" />
                <button class="chat-submit-btn" :class="btnDisabled ? 'disalbed-btn' : ''" @click="handleSubmit"
                    v-bind:disabled="btnDisabled">发送</button>
            </div>
        </div>
        <Modal v-if="apiKeyVisible" :on-close="closeApiModal">
            <template v-slot:modal-content>
                <div class="confirm-name">
                    <input type="text" placeholder="请输入apiKey" v-model="apiKey" />
                </div>
            </template>

            <template v-slot:modal-bottom>
                <button @click="onApiConfirm">确定</button>
                <button @click="onApiReset">重置</button>
            </template>
        </Modal>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed, toRef, Ref, watchEffect, nextTick } from "vue";
import { useStore } from "vuex";
import Modal from "../common/util/Modal.vue";
import ChatDetail from "./component/ChatDetail.vue";
import useApiKeyHook from "./hook/useApiKeyHook";
import useChatHook from "./hook/useChatHook";
import useScrollHeight from "./hook/useScrollHeight";
export default defineComponent({
    name: "ChatMain",
    props: {
        userName: String
    },
    setup(this, props) {

        const store = useStore();
        const { userId, loading, chatList, onSubmitChat } = useChatHook();
        const { openApiModal, closeApiModal, apiKeyVisible, apiKey, onApiConfirm, onApiReset } = useApiKeyHook();
        const footerSendRef = ref<HTMLDivElement | undefined>();
        const defaultPageRef = ref<HTMLDivElement | undefined>();
        const scrollLine = ref<HTMLDivElement | undefined>();
        const firstEle = ref<HTMLDivElement | undefined>();
        const { calcScrollHeight } = useScrollHeight(footerSendRef, defaultPageRef);
        const apiKeyStore = computed(() => {
            return store.getters["apiKeyArea/getApiKey"];
        })
        const userInText = ref();
        const handleSubmit = async () => {
            if (!userId?.value) {
                alert("请先登录");
                return;
            }
            if (loading) {
                alert("请稍等");
                return;
            }
            if (!userInText?.value) {
                alert("请先输入问题");
                return;
            }
            if (!apiKeyStore?.value) {
                openApiModal();
                return;
            }
            await onSubmitChat(userInText?.value, apiKeyStore?.value);
            userInText.value = "";
        }
        const btnDisabled = computed(() => {
            return !userInText?.value || loading || !userId?.value;
        });
        const userName: Ref<string | undefined> = toRef(props, "userName");

        watchEffect(() => {
            const hasBotResponse = chatList.find(chatItem => chatItem?.userId === "assistant");
            nextTick(() => {
                const scrollBox = scrollLine?.value;
                const firstEleDom = firstEle?.value;
                if (!scrollBox || !hasBotResponse) {
                    return;
                }
                const botArr = scrollBox.querySelectorAll(".assistant");
                const lastBotDom = botArr?.[botArr.length - 1];
                if (!lastBotDom || !firstEleDom) {
                    return;
                }
                const distance = lastBotDom.getBoundingClientRect?.()?.top - firstEleDom?.getBoundingClientRect?.()?.top;
                scrollBox.scrollTo({
                    top: distance
                })
            })


        })
        return {
            userName,
            userInText,
            handleSubmit,
            btnDisabled,
            chatList,
            userId,
            apiKey,
            apiKeyVisible,
            onApiConfirm,
            closeApiModal,
            onApiReset,
            footerSendRef,
            defaultPageRef,
            calcScrollHeight,
            scrollLine,
            firstEle
        };
    },
    components: { ChatDetail, Modal }
})

</script>
  
<style lang="less" scoped>
.default-page {
    margin-top: 4px;
}

p.page-welcome {
    margin: 10px 4px;
}

.chat-scroll-list {
    scroll-behavior: smooth;
    overflow-y: scroll;
    font-family: "Microsoft Yahei,Arial", "KaiTi", "宋体", Helvetica, sans-serif;
    margin-bottom: 8px;
    box-shadow: 1px 3px 10px 3px #ccc;
    padding: 4px 0 20px 0;
    box-sizing: border-box;
}

.chat-send-footer {
    position: fixed;
    display: flex;
    left: 12px;
    right: 12px;
    bottom: 2px;
    flex-direction: column;

    .input-area {
        outline: none;
        border-radius: 4px 0 0 4px;
        line-height: 22px;
        padding: 8px 6px;
        border: 1px solid #ddd;

        &:focus {
            border: 1px slateblue solid;
        }
    }

    .chat-submit-btn {
        height: 48px;
        border: 0;
        background-color: rgb(38, 78, 255);
        color: #fff;
        border-radius: 0 4px 4px 0;

        &.disalbed-btn {
            background-color: skyblue;
        }
    }
}
</style>
  