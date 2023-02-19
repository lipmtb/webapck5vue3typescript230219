

<template>
    <teleport to="body">
        <div class="modal-view-popup">
            <div class="pop-up-content">
                <div class="modal-header" @click="closeModal">x</div>
                <slot name="modal-content"></slot>
                <div class="modal-bottom">
                    <slot name="modal-bottom"></slot>
                </div>


            </div>
        </div>
    </teleport>

</template>
  
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    props: ["onClose"],
    setup(this, props, ctx) {

        const closeModal = () => {
            props.onClose?.();
        }
        return {
            closeModal
        }
    },
})

</script>
  
<style lang="less" scoped>
.modal-view-popup {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.315);

    .pop-up-content {
        position: absolute;
        left: 0;
        right: 0;
        top: 40%;
        margin: auto;
        background-color: #fff;
        padding: 16px;

        .modal-header {

            text-align: right;
            padding: 8px 16px;
        }

        .modal-bottom {
            margin-top: 4px;
            text-align: right;

        }


    }
}
</style>
  