<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { initError } from "./util/showError";
import testLogin from "@/service/testLogin";

export default defineComponent({
  setup(this) {
    const router = useRouter();
    const store = useStore();
    onMounted(async () => {
      try {
        await testLogin();
        const userInfoString = localStorage.getItem("userInfo");
        if (userInfoString) {
          const userInfoObj = JSON.parse(userInfoString);
          store.dispatch("userArea/saveUserAction", {
            userName: userInfoObj?.userName,
            userId: userInfoObj?.userId,
          });
        }
      } catch (error) {
        console.log("登录信息过期", error);
      } finally {
        initError();
        router.push("/helloAlgo");
      }
    });
  },
  method() {},
});
</script>

<style lang="less">
.errorTop {
  position: fixed;
  left: 0;
  right: 0;
  top: -100px;
  margin: auto;
  text-align: center;
  color: #f00;
  z-index: 1000;
  opacity: 0;
  transition: opacity 1s, top 1s linear;

  &.movingDown {
    opacity: 1;
    top: 4px;
  }
}
</style>
