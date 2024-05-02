<template>
  <div class="voiceRunningWrapper">
    <div
      class="voiceItem"
      v-for="item in runingList"
      :style="{ 'animation-delay': `${item}ms` }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from "vue";

export default defineComponent({
  name: "voicingComponent",
  props: {
    runDuration: {
      type: Number,
      default: 40,
    },
    count: {
      type: Number,
      default: 300,
    },
  },
  setup(this, props) {
    const runingList: Ref<number[]> = ref(Array.from({ length: props.count }));

    onMounted(() => {
      runingList.value = runingList.value.map(
        (_item, index) => index * props.runDuration
      );
    });
    return {
      runDuration: props.runDuration,
      runingList,
    };
  },
});
</script>

<style lang="less" scoped>
@keyframes scaleAnimation {
  to {
    transform: scale(0.6, 1.8);
  }
}

.voiceRunningWrapper {
  margin: 14px auto;
  width: 300px;
  display: flex;
  align-items: center;

  .voiceItem {
    width: 10px;
    height: 20px;
    background-color: #fff;
    transform: scale(1, 1);
    border-radius: 4px;
    animation: scaleAnimation 200ms ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
}
</style>
