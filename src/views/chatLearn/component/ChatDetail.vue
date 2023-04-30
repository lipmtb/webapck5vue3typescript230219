<template>
    <div class="chat-detail-item">


    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed, toRef, onMounted } from "vue";
// import { TChatContent } from "../hook/useChatHook";
export default defineComponent({

    name: "chatDetail",
    props: {
        chatItem: {
            type: Object,
            default: {}
        }
    },
    setup(this, props) {
        const chatItemData = toRef(props, "chatItem");
        return {
            chatItemData
        }
    },
})

</script>
  
<style lang="less" scoped></style>
  