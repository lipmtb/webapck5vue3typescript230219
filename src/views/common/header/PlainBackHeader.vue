<template>
    <div class="back-header">
        <div class="left-back-icon">
            <img :src="backIconRef" alt="返回" @click="backHandle">
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import useGetBackIcon from "../../wechCode/hooks/useGetBackIcon";
import { useRouter } from "vue-router";
export default defineComponent({
    setup(this, props, ctx) {
        const { getIconByStroke,backIconRef } = useGetBackIcon?.();
        const routerControl = useRouter();

        // 获取返回图标
        const getBackHeader = async () => {
            const imgUrl = await getIconByStroke();
            backIconRef.value = imgUrl;
        }
        getBackHeader();

        const backHandle = () => {
            routerControl.back();
        }
        return {
            backIconRef,
            backHandle
        }
    },

})

</script>
  
<style lang="less" scoped>
.back-header {
    display: flex;
    position: relative;
    margin: 12px 0;
    color: #fff;
    height:44px;
    background-color: #a5a5a5;
    line-height: 44px;
}

.left-back-icon {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
}

</style>
  