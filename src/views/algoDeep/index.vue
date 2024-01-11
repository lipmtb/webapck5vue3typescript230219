<template>
  <div class="algoDeepWrapper">
    <button @click="execGetTrace">得分问题</button>
    <button @click="calcMinTrace">calcMinTrace</button>
    <button @click="traceMinPath">traceMinPath</button>
    <button @click="getMinSumTable">矩阵最小和</button>
    <button @click="testMaxStrDiff">最大不重复子串</button>

    <div class="stageWrapper">
      <div v-for="item in stageDataList" class="stageRowList" :key="item.key">
        <div
          v-for="subItem in item.subList"
          :class="{ stageRowItem: true, selected: subItem.isSelected }"
          :key="subItem.key"
        >
          {{ subItem.data }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  useGetMinTraceHook,
  useGetSumHundredHook,
  useGetMinMatricHook,
  useGetMaxDiffStringHook,
} from "./hook";

export default defineComponent({
  setup(this) {
    const { stageDataList, calcMinTrace, traceMinPath } = useGetMinTraceHook();
    const { execGetTrace } = useGetSumHundredHook();
    const { getMinSumTable } = useGetMinMatricHook(
      "['3 4','-3 5 -1 5','2 4 -2 4','-1 3 -1 3']"
    ); // to finish
    const { getMaxDiffString } = useGetMaxDiffStringHook();
    const testMaxStrDiff = () => {
      getMaxDiffString("pwwkew");
    };
    return {
      stageDataList,
      calcMinTrace,
      traceMinPath,
      execGetTrace,
      getMinSumTable,
      testMaxStrDiff,
    };
  },
  methods: {},
});
</script>

<style lang="less">
ul,
li {
  list-style: none;
  padding-left: 0;
}

.stageWrapper {
  width: 600px;
  margin: 10px auto;

  .stageRowList {
    display: flex;
    align-items: center;
    border-top: 1px solid #000;
    text-align: center;

    &:last-child {
      border-bottom: 1px solid #000;
    }
    .stageRowItem {
      width: 100px;
      height: 100px;
      line-height: 100px;
      flex: 1 0 auto;
      border-left: 1px solid #000;
      box-sizing: border-box;

      &:last-child {
        border-right: 1px solid #000;
      }
      &.selected {
        color: #f00;
        font-weight: bold;
      }
    }
  }
}
</style>
