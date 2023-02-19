<template>
    <div id="app">
        <section>
            <router-view class="content-show"></router-view>
        </section>
        <header class="welcome-page">
            <div class="center-nav">
                <button class="open-link" v-on:click="routerHandle('/base64')">to base64 page</button>
                <button class="open-link" v-on:click="routerHandle('/canvas')">to canvas page</button>
                <button class="open-link" v-on:click="routerHandle('/code')">打开健康码</button>
            </div>

        </header>

        <Modal v-if="modalVisible" :onClose="onClose">
            <template v-slot:modal-content>
                <div class="confirm-name">
                    <input type="text" placeholder="请输入姓名" v-model="nameRef" />
                </div>
            </template>

            <template v-slot:modal-bottom>
                <button @click="onConfirm">确定</button>
                <button @click="reset">重置</button>
            </template>
        </Modal>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Modal from "./views/common/util/Modal.vue";

export default defineComponent({
    setup(this, props, ctx) {
        const router = useRouter();
        const store = useStore();
        const modalVisible = ref(false);
        const nameRef = ref();
        const onClose = () => {
            modalVisible.value = false;
        }

        const routerHandle = (path: string) => {
            if (path !== '/code') {
                router.push(path);
                return;
            }
            modalVisible.value = true;

        }
        const onConfirm = () => {
            // 将数据存入vuex保存全局使用
            if (!nameRef.value) {
                return;
            }
            store.dispatch("userArea/saveUserAction", {
                userName: nameRef.value
            })
            setTimeout(() => {
                router.push("/code");

                onClose();
            }, 1000);


        }
        const reset = () => {
            nameRef.value = "";
        }
        return {
            routerHandle,
            modalVisible,
            onClose,
            nameRef,
            onConfirm,
            reset
        }

    },
    components: {
        Modal
    }
})

</script>
  
<style lang="less" scoped>
.welcome-page {
    height: 100vh;

    div.center-nav {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 200px;
        margin: auto;

        button.open-link {
            margin: 8px 0;
            height: 44px;
            background-color: #3990f1;
            border-radius: 4px;
            outline: none;
            border: 0;
            color: #fff;
        }
    }

}

.confirm-name {
    input {
        display: block;
        width: 80%;
        outline: none;
        border: 1px solid #ccc;
        height: 34px;
        margin: 8px auto;
    }
}

.modal-bottom {
    margin-top: 4px;
    text-align: right;

    button {
        padding: 4px 12px;
        border: none;
        background-color: #3990f1;
        color: #fff;
        border-radius: 4px;
        margin: 0 8px;
    }
}
</style>
  