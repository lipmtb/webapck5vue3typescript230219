<template>
    <div class="mobile-code-page">
        <div class="my-code-wrapper">
            <MobileTimer />
            <BackHeader />
            <MyCode />
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import MobileTimer from "@/views/common/MobileTimer/index.vue";
import BackHeader from "@/views/common/header/BackHeader.vue";
import MyCode from "./MyCode.vue";



export default defineComponent({
    setup(this, props, ctx) {
    },
    components: {  MobileTimer, BackHeader, MyCode }
})

</script>
  
<style lang="less">
.my-code-wrapper {
    background-color: #358ff0;
    padding: 14px 14px 8px;
}
</style>
  