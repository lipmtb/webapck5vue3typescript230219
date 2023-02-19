<template>
    <div class="back-header">
        <div class="left-back-icon">
            <img :src="backIconRef" alt="返回" @click="backHandle">
        </div>
        <div class="title-center">粤康码 (广州)</div>
        <div class="right-close-dot">
            <div class="dotted">
                <span class="dotted-left"></span>
                <span class="dotted-center"></span>
                <span class="dotted-right"></span>
            </div>
            <i class="split-line" />
            <div class="circle-double">
                <span class="circle-inner"></span>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import useGetBackIcon from "../../wechCode/hooks/useGetBackIcon";
import { useRouter } from "vue-router";
export default defineComponent({
    setup(this, props, ctx) {
        const { getIconByStroke } = useGetBackIcon?.();
        const backIconRef = ref();
        const routerControl = useRouter();
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
    position: relative;
    margin: 12px 0;
    color: #fff;
}

.left-back-icon {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.title-center {
    font-size: 14px;
    text-align: center;
}

.right-close-dot {

    position: absolute;
    width: 32px;
    right: 2px;
    top: 0;
    bottom: 0;
    padding: 14px 12px;
    background-color: rgb(0 0 0 / 16%);

    .dotted {
        position: absolute;
        left: 2px;
        top: 0;
        bottom: 0;

        .dotted-left,
        .dotted-right {
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius: 50%;
        }

        .dotted-center {
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            margin: 0 2px;
            vertical-align: -1px;
        }
    }

    .split-line {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1px;
        height: 70%;
        background-color: rgba(255, 255, 255, 0.205);
    }

    .circle-double {
        position: absolute;
        right:2px;
        top:0;
        bottom:0;
        width: 12px;
        height: 12px;
        margin:auto;
        border-radius: 50%;
        border: 2px solid #fff;
        
        .circle-inner {
            position: absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            margin:auto;
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius: 50%;
        }
    }

    &::before {

        content: "";
        position: absolute;
        left: -20.4px;
        top: 7.7px;
        width: 27px;
        height: 12.5px;
        border-radius: 100px 100px 0 0;
        background-color: rgba(0, 0, 0, 0.16);
        transform: rotate(-90deg);

    }

    &::after {
        content: "";
        position: absolute;
        right: -20.4px;
        top: 7.7px;
        width: 27px;
        height: 12.5px;
        border-radius: 100px 100px 0 0;
        background-color: rgba(0, 0, 0, 0.16);
        transform: rotate(90deg);
    }
}
</style>
  