<template>
    <div class="chat-wrapper">
        <h2 v-if="userName">你好！{{ userName }}</h2>
        <div class="default-page">
            <div class="chat-scroll-list">
                <ChatDetail v-for="chatItem in chatList" :chat-item="chatItem" :user-id="userId" />
            </div>
            <div class="chat-send-footer">
                <textarea v-model="userInText" class="input-area" placeholder="请输入" cols="2" />
            </div>
            <button class="chat-submit-btn" :class="btnDisabled ? 'disalbed-btn' : ''" @click="handleSubmit"
                v-bind:disabled="btnDisabled">发送</button>
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
import { defineComponent, ref, computed, toRef, onMounted, Ref } from "vue";
import { useStore } from "vuex";
import Modal from "../common/util/Modal.vue";
import ChatDetail from "./component/ChatDetail.vue";
import useApiKeyHook from "./hook/useApiKeyHook";
import useChatHook from "./hook/useChatHook";
export default defineComponent({
    name: "ChatMain",
    props: {
        userName: String
    },
    setup(this, props) {
        const store = useStore();
        const { userId, loading, chatList, onSubmitChat } = useChatHook();
        const { openApiModal, closeApiModal, apiKeyVisible, apiKey, onApiConfirm, onApiReset } = useApiKeyHook();
        const apiKeyStore = computed(() => {
            return store.getters["apiKeyArea/getApiKey"];
        })
        const userInText = ref();
        const handleSubmit = async () => {
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
            onApiReset
        };
    },
    components: { ChatDetail, Modal }
})

</script>
  
<style lang="less" scoped>
.default-page {
    display: flex;
    flex-direction: column;
    height: 88vh;
    margin-top: 4px;
}

.chat-scroll-list {
    flex-basis: 90%;
    overflow-y: scroll;
    font-family: cursive;
    margin-bottom: 8px;
    box-shadow: 1px 3px 10px 3px #ccc;
    padding: 4px;


}

.chat-send-footer {
    display: flex;

    .input-area {
        flex-grow: 1;
        outline: none;
        border-radius: 4px 0 0 4px;
        line-height: 22px;
        padding: 8px 6px;
        border: 1px solid #ddd;

        &:focus {
            border: 1px slateblue solid;

        }
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
</style>
  