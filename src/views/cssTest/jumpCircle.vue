<template>
  <div class="wrapper">
    <div class="box"></div>

    <div class="loadingDelay">
      <div class="loadingItem" v-for="item in [1, 2, 3, 4, 5]"></div>
    </div>

    <!-- <div class="container">
      <img :src="randomUrlRef" alt="测试图片" />
    </div> -->

    <div class="container">
      <div class="left-side"></div>
      <div class="main"></div>
      <div class="right-side"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { getRandomImg } from "@/util/getRandomImg";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup(this) {
    const randomImgUrl = getRandomImg();
    const randomUrlRef = ref();
    onMounted(() => {
      randomUrlRef.value = randomImgUrl;
    });

    return { randomUrlRef };
  },
});
</script>

<style lang="less">
@delayItemCount: 5;
ul,
li {
  list-style: none;
  padding: 0;
}

@keyframes jumpTest {
  0% {
    transform: translateY(0) scale(1.4, 0.6);
  }

  5% {
    transform: translateY(0) scale(1.4, 0.6);
  }

  95% {
    transform: translateY(-160px) scale(0.7, 1.4);
  }
  100% {
    transform: translateY(-160px) scale(0.7, 1.4);
  }
}

.wrapper {
  position: relative;
  width: 100vw;
  height: 100vw;

  .box {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f00;
    // animation: jumpTest 1000ms ease-in;
    // animation-iteration-count: infinite;
    // animation-fill-mode: forwards;
    // animation-direction: alternate;
  }

  @keyframes runHeight {
    from {
      transform: scale(1, 1);
    }

    to {
      transform: scale(1, 0.4);
    }
  }

  .loadingDelay {
    display: flex;
    position: absolute;
    width: 200px;
    top: 200px;
    left: 0;
    right: 0;
    margin: auto;

    .loadingItem {
      width: 10px;
      height: 40px;
      background-color: rgb(28, 253, 66);
      border-radius: 5px;
      margin-right: 1em;
      animation: runHeight 500ms linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-fill-mode: forwards;
    }

    .loadingCountDelay(@count) when (@count <= @delayItemCount) {
      .loadingItem:nth-child(@{count}) {
        animation-delay: @count * 500ms;
      }
      .loadingCountDelay((@count + 1));
    }
    .loadingCountDelay(1);
  }

  // .container {
  //   width: 300px;
  //   height: 400px;
  //   border: 1px solid #f00;
  // }

  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    border: 2px solid #000;
    background-color: #d7e8fe;
    .left-side {
      width: 300px;
    }
    .main {
      flex: 1 0 auto;
      background-color: #ffe5c9;
    }
    .right-side {
      width: 200px;
    }
  }
}
</style>
