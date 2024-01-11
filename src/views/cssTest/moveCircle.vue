<template>
  <div class="moveCicleWrapper">
    <div class="circle" ref="circleRef"></div>
    <div class="menu" ref="selectDownRef">
      <h2>下拉菜单</h2>
      <ul class="menuList">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
      </ul>
    </div>

    <div class="violinWrapper" ref="violinRef">
      <div class="menuArea" v-for="item in [1, 2, 3, 4]" key="item">
        <h2 class="menu-title" :data-index="item">小菜单{{ item }}</h2>
        <ul class="menuList" :data-is-collapse="1">
          <li class="item">{{ item }}-A</li>
          <li class="item">{{ item }}-B</li>
          <li class="item">{{ item }}-C</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/// <reference types="vue" />
import { defineComponent, onMounted, ref } from "vue";
import { useCircleMoveHook, useSelectDownHook, useViolinHook } from "./hook";
export default defineComponent({
  setup(this) {
    const circleRef = ref<HTMLDivElement>();
    const selectDownRef = ref<HTMLDivElement>();
    const violinRef = ref<HTMLDivElement>();
    onMounted(() => {
      // useCircleMoveHook(circleRef);
      // useSelectDownHook(selectDownRef);
      useViolinHook(violinRef);
    });

    return {
      circleRef,
      selectDownRef,
      violinRef,
    };
  },
  method() {},
});
</script>

<style lang="less">
ul,
li {
  list-style: none;
  padding: 0;
}
.moveCicleWrapper {
  position: fixed;
  inset: 0;
  background-color: #000;
  .circle {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 1s linear;
    --x: 0;
    --y: 0;
    transform: translate(var(--x), var(--y));
  }

  .menu {
    width: 200px;
    margin: 0 auto;
    background-color: #00f;
    color: #fff;
    text-align: center;
    height: 31px;
    font-size: 14px;

    h2 {
      height: 31px;
      line-height: 31px;
      margin: 0;
    }
    .menuList {
      padding: 0;
      margin: 0;
      list-style: none;
      background-color: rgb(125, 125, 252);
      border-radius: 6px;
      display: none;
      transition: height 0.5s linear;
      overflow: hidden;
      // max-height: 0;
      // overflow: hidden;
      // transition: max-height 1s linear;
    }

    // &:hover {
    //   .menuList {
    //     max-height: 600px;
    //   }
    // }
  }
  .violinWrapper {
    width: 200px;
    margin: 10px auto;
    .menuArea {
      color: #fff;
      .menu-title {
        font-size: 18px;
        background-color: #1d019c;
        margin:0;
        font-weight: 400;
        padding:4px 0 4px 4px;
        cursor: pointer;

        &:hover{
          color:#f00;
        }
      }
      .menuList {
        margin:0;
        background-color: #604ff8;
        height: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
