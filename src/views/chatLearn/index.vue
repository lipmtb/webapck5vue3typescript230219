<template>
    <div class="chat-learn-layout">
        <PopupLayout>
            <template v-slot:children>
                <LoginHeaderVue :user-name="userObj?.userName" @loginOpen="loginOpen" />
                <ChatMain :user-name="userObj?.userName" />
                <Login :visible="loginVisible" :on-close="onCloseLogin" />
            </template>
        </PopupLayout>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import { useStore } from "vuex";
import PopupLayout from "@/views/common/layout/PopupLayout.vue";
import LoginHeaderVue from "@/views/common/header/LoginHeader.vue";
import ChatMain from "./ChatMain.vue";
import Login from "../login/index.vue";


export default defineComponent({
    setup(this) {
        const store = useStore();
        const loginVisible = ref<boolean>(false);
        const userObj = computed(() => {
            return {
                userName: store.getters["userArea/getUserName"]
            }
        })
        const loginOpen = () => {
            loginVisible.value = true;
        }
        const onCloseLogin = () => {
            loginVisible.value = false;
        }
        return {
            userObj,
            loginOpen,
            loginVisible,
            onCloseLogin
        }

    },
    components: { PopupLayout, LoginHeaderVue, ChatMain, Login }
})

</script>
  
<style lang="less"></style>
  