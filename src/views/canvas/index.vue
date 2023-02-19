<template>
    <div class="canvas-wrapper">
        <PopupLayout>
            <template v-slot:children>
                <PlainBackHeaderVue />
                <div class="canvas-links">
                    <!-- <button @click="routerHandle('/canvas/rect')">rect</button>
                  <button @click="routerHandle('/canvas/circle')">circle</button> -->
                    <button @click="routerHandle('/canvas/fire')">烟花</button>

                    <p>&#x1F602;&#x1F602;&#x1F602;&#x1F602;&#x1F602;&#x2661;&#x2764;&#xd7;</p>
                    <p ref="emoitImg"></p>

                </div>

                <router-view class="content-show"></router-view>

            </template>

        </PopupLayout>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PlainBackHeaderVue from "@/views/common/header/PlainBackHeader.vue";
import PopupLayout from "@/views/common/layout/PopupLayout.vue";
export default defineComponent({
    setup(this, props, ctx) {

        const router = useRouter();
        const routerHandle = ref();
        routerHandle.value = (path: string) => {
            if (location.pathname.includes(path)) {
                return;
            }
            router.replace(path);
        }
        const emoitImg = ref<HTMLParagraphElement | null>();
        onMounted(() => {
            const iconImgStr = "\ud83d\ude02";
            if(!emoitImg.value){
                return;
            }
            emoitImg.value.innerText = iconImgStr.repeat(300);
        })
        return {
            routerHandle,
            emoitImg
        }
    },
    components: {
        PlainBackHeaderVue,
        PopupLayout
    }
})

</script>

<style lang="less">
.canvas-wrapper {
    color: #333;
}
</style>
