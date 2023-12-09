<template>
  <div class="treeShowStage">
    <div class="tree-data">{{ treeRoot.data }}</div>
    <div class="child-list">
      <div
        v-if="treeRoot.left"
        class="child-item child-left"
        :class="[`child-left-${deepCount}`]"
      >
        <TreeShow :treeRoot="treeRoot.left" :deepCount="deepCount + 1" />
      </div>
      <div
      v-if="treeRoot.right"
      class="child-item child-right"
       :class="[`child-right-${deepCount}`]"
      >
        <TreeShow :treeRoot="treeRoot.right" :deepCount="deepCount + 1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["treeRoot", "deepCount"],
  name: "TreeShow",
  setup(this) {
    console.log("this.props", this);

    return {};
  },
});
</script>

<style lang="less">
@perWidth: -30px;

.treeShowStage {
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  color: blue;
  text-align: center;
  line-height: 20px;

  .tree-data {
    width: 100%;
  }
  .child-list {
    position: relative;
    min-height: 2em;
    .child-item {
      position: absolute;
      top:0;
    }

    .loop(@i) when (@i < 6) {
      // 执行某个需要循环的方法
      .child-left-@{i}{
        left:calc((@perWidth * (6 - @i)));
      }
      // 递归调用循环体
      .loop((@i + 1));
    }

    .loopRight(@i) when (@i < 6) {
      // 执行某个需要循环的方法
      .child-right-@{i}{
        right:calc((@perWidth * (6 - @i)));
      }
      // 递归调用循环体
      .loopRight((@i + 1));
    }

    .loop(0);
    .loopRight(0);
  }
}
</style>
