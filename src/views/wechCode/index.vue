<template>
    <div class="code-layout">
        <PopupLayout>
            <template v-slot:children>
                <MobileCode />
            </template>

        </PopupLayout>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import PopupLayout from "@/views/common/layout/PopupLayout.vue";
import MobileCode from "@/views/wechCode/components/MobileCode.vue"


export default defineComponent({
    setup(this, props, ctx) {
    },
    components: { PopupLayout, MobileCode }
})

</script>
  
<style lang="less">

</style>
  