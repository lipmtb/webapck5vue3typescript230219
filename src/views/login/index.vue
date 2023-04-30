<template>
    <div class="login-view">
        <Modal v-if="modalVisible" :onClose="onClose">
            <template v-slot:modal-content>
                <div class="confirm-form">
                    <input type="text" placeholder="请输入姓名" v-model="nameRef" />
                    <input type="password" placeholder="请输入密码" v-model="pswRef" />
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
import login from "@/service/login";
import { showError } from "@/util/showError";
import { defineComponent, toRef, ref } from "vue";
import { useStore } from "vuex";
import Modal from "../../views/common/util/Modal.vue";

export default defineComponent({
    name: "login",
    props: {
        visible: {
            type: Boolean,
            required: true,
            default: false
        },
        onClose: Function
    },
    setup(this, props) {
        const modalVisible = toRef(props, "visible");
        const store = useStore();
        const nameRef = ref();
        const pswRef = ref();
        // 关闭
        const onClose = () => {
            props?.onClose?.();
        }
        const onConfirm = async () => {
            // 登录请求
            try {
                const loginRes = await login({
                    username: nameRef.value,
                    userpassword: pswRef.value
                })
                console.log("loginRes", loginRes);
                if (loginRes.errCode) {
                    return showError("用户名或密码错误", 5000);
                }
                // 将数据存入vuex保存全局使用
                store.dispatch("userArea/saveUserAction", {
                    userName: nameRef.value,
                    userId: loginRes?.userInfo?.userId
                })
                localStorage.setItem("userInfo", JSON.stringify({ userName: nameRef.value, userId: loginRes?.userInfo?.userId, ticket: loginRes?.jjccToken }));
                setTimeout(() => {
                    onClose();
                }, 1000);
            } catch (error) {
                console.error("登录失败", error);
            }
        }

        // 重置
        const reset = () => {
            nameRef.value = "";
            pswRef.value = "";
        }


        return {
            modalVisible,
            onClose,
            nameRef,
            pswRef,
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

.confirm-form {
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
  