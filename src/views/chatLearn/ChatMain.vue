<template>
    <div class="chat-wrapper">
        <h2 v-if="userName">你好！{{ userName }}</h2>
        <div class="default-page">
            <div class="chat-scroll-list">
                <ChatDetail v-for="chatItem in chatList" :chat-item="chatItem"/>
            </div>
            <div class="chat-send-footer">
                <textarea v-model="userInText" class="input-area" placeholder="请输入" cols="2" maxlength="9999" />
            </div>
            <button class="chat-submit-btn" :class="btnDisabled ? 'disalbed-btn' : ''" @click="onSubmitChat"
                v-bind:disabled="btnDisabled">发送</button>
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed, toRef, onMounted } from "vue";
import ChatDetail from "./component/ChatDetail.vue";
import useChatHook from "./hook/useChatHook";
export default defineComponent({
    data() {
        return () => {
            socket: null;
        };
    },
    name: "ChatMain",
    props: {
        userName: String
    },
    setup(this, props) {
        const userInText = ref();
        const { loading, chatList, onSubmitChat } = useChatHook();
        const btnDisabled = computed(() => {
            return !userInText?.value || loading;
        });
        const userName = toRef(props, "userName");
        return {
            userName,
            userInText,
            onSubmitChat,
            btnDisabled,
            chatList
        };
    },
    components: { ChatDetail }
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
  