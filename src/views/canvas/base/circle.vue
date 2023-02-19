<template>
    <div class="circle-wrapper">
        <header>circle test</header>
        <section>
            <canvas width="400" height="400" class="circle-base" ref={cricleBase} />
        </section>
    </div>
</template>
  
<script lang="ts">
import vue,{ defineComponent, ref } from "vue";

export default defineComponent({
    setup(this, props, ctx) {
       const cricleBase=ref(null);
        return {
            cricleBase
        }
     
    },
    
})

</script>
  
<style lang="less">
.circle-wrapper{
    background-color: #f00;
}
</style>
  