<template>
    <PlainBackHeaderVue />
    <img :src="imgUrl" ref="imgDomRef" />
</template>

<script lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import Buffer from "vue-buffer";
import PlainBackHeaderVue from "@/views/common/header/PlainBackHeader.vue";
const naozhong = require("../../assets/baidu.gif");
export default {
    name: "base64test",
    setup() {
        const imgDomRef = ref<HTMLImageElement | null>(null);
        const imgUrl = ref("");
        onMounted(() => {
            imgUrl.value =naozhong;
        })
        watchEffect(() => {
            if (imgDomRef.value) {
                const imgDom = imgDomRef.value;
                console.log("watchEffect imgDom", imgDom);
                imgDom.onload = () => {
                    console.log("eeee", imgDom.width, imgDom.height);
                    const canvas = document.createElement("canvas");
                    canvas.width = 300;
                    canvas.height = 300;
                    const ctx = canvas.getContext("2d");
                    ctx?.drawImage(imgDom, 50, 50, imgDom.width, imgDom.height);
                    const base64Svg = canvas.toDataURL("image/png");
                    // const image = new Image();
                    // image.src = base64Svg;
                    // image.width = 200;
                    // image.height = 200;
                    // document.body.prepend(image);
                    const baseStr = base64Svg.replace(/^data:[\s\S]*;base64,/, "");
                    console.log("Buffer.from", Buffer.from(baseStr, "base64"));
                    const blob = new Blob([Buffer.from(baseStr, "base64")]);
                    const imgItem = document.createElement("img");
                    const tempblobUrl = window.URL.createObjectURL(blob);
                    imgItem.src = tempblobUrl;
                    imgItem.width = 300;
                    imgItem.height = 300;
                    document.body.prepend(imgItem);

                }
            }
        })
        return {
            imgUrl,
            imgDomRef
        }
    },
    components: {
        PlainBackHeaderVue
    }

};
</script>

<style lang="less">

</style>
