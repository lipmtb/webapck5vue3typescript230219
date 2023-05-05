<template>
    <teleport to="body">
        <div class="scroll-layout">

            <!-- <slot name="timer-header"></slot>
            <slot name="back-title"></slot> -->

            <slot name="children"></slot>



        </div>
    </teleport>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";


export default defineComponent({
    setup(this, props, ctx) {

    }

})

</script>
  
<style lang="less">
.scroll-layout {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    padding: 16px 12px 8px;
    background-color: #fff;
}
</style>
  