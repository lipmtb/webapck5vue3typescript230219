<template>
    <div class="login-header">
        <div class="login-btn" v-if="!userName">
            <button @click="openlogin" class="login-regist-btn">登录/注册</button>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
    props: {
        userName: {
            type: String,
            require: false
        }
    },
    setup(this, props, ctx) {
        const userName = toRef(props, "userName");
        return {
            userName
        }
    },
    methods: {
        openlogin() {
            this.$emit("loginOpen");
        }
    }
})

</script>
  
<style lang="less" scoped>
.login-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .login-regist-btn {
        border: 0;
        background-color: rgb(38, 78, 255);
        color: #fff;
        border-radius: 4px;
        line-height: 18px;
        padding: 6px;
    }
}
</style>
  