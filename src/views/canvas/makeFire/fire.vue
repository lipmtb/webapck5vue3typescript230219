<template>
    <div class="fire-wrapper">
        <PopupLayout>
            <template v-slot:children>
                <canvas width="0" height="0" class="fire-background" ref="fireBackPlace" />
            </template>
        </PopupLayout>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import PopupLayout from "@/views/common/layout/PopupLayout.vue";
import {Fire} from "./fireClass/Fire";
export default defineComponent({
    setup() {
        const fireBackPlace = ref<HTMLCanvasElement | null>(null);
        const sendCanvasFire=()=>{
            const canvasDom = fireBackPlace?.value;
            if(!canvasDom){
                return;
            }
            const fire=new Fire(canvasDom);
            fire.randomStart();
        }
        const sendFire = (event: KeyboardEvent) => {
            if (event.code !== 'Space') {
                return;
            }
            // 发出一个烟花
            console.log("发出一个烟花");
            sendCanvasFire();

        }
        onMounted(() => {
            // 初始化黑色背景
            if (fireBackPlace?.value) {
                const canvasDom = fireBackPlace?.value;
                canvasDom.width = document.body.clientWidth + document.documentElement.clientWidth;
                canvasDom.height = document.defaultView?.innerHeight ? document.defaultView?.innerHeight : 0;
            }


            // 初始化键盘空格监听
            document.addEventListener("keyup", sendFire)
        })

        onUnmounted(() => {
            // 移除键盘空格监听
            document.removeEventListener("keyup", sendFire)
        })
        return {
            fireBackPlace
        }
    },
    components: {
        PopupLayout
    }
})

</script>

<style lang="less">
.fire-background {
    background-color: #000;
}
</style>
