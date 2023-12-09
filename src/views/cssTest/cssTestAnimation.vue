<template>
    <div class="cssAnimationWrapper">
        <div class="stage">
            <div class="imgCircle">
            <img src="../../assets/apple.jpg" />
            <img src="../../assets/flower.jpg" />
            <img src="../../assets/dream.jpg" />
            <img src="../../assets/lingdang.svg" />
            <img src="../../assets/naozhong.svg" />
            <img src="../../assets/night.jpg" />
        </div>
        </div>
      

    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    setup(this) {


    },
    method() {

    }
})

</script>
  
<style lang="less">
@radix: 100px;
@bigRadix: (@radix * 2);
@n: 6;
@stopTime: 3;
@runTime: 2;
@perDeg: (360deg / @n);
@perPercent: (100 / @n * 100);
@stopTimePercent: (@perPercent * @stopTime / (@stopTime + @runTime));

.circlePos(@count) when (@count > 0) {
    .circlePos((@count - 1));

    img {
        @tempCount: @count;

        &:nth-child(@{count}) {
            transform: rotate((@tempCount / @n) * 360deg);
        }
    }
}


.cssAnimationWrapper {
    position: relative;
    width: 600px;
    height: 100vh;
    margin: 0 auto;
    background-color: #000;
}

.stage {
    position:relative;
    width: @radix * 2;
    height: @radix * 2;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0px auto;
    overflow: hidden;
}


.mask(@temp) when (@temp =<@n) {

    @{temp}*@{perPercent}-@{stopTimePercent},
    @{temp}*@{perPercent} {
        transform: rotate((@temp / @n) * 360deg);
    }

    .mask(@temp+1);
}

@keyframes circleRun {
    0% {
        transform: rotate(0deg);
    }

    6.68%,
    16.7% {
        transform: rotate((1 / @n) * 360deg);
    }

    23.38%,
    33.4% {
        transform: rotate((2 / @n) * 360deg);
    }

    40.08%,
    50.1% {
        transform: rotate((3 / @n) * 360deg);
    }

    56.78%,
    66.8% {
        transform: rotate((4 / @n) * 360deg);
    }

    73.48%,
    83.5% {
        transform: rotate((5 / @n) * 360deg);
    }

    89.98%,
    100% {
        transform: rotate((6 / @n) * 360deg);
    }

}

.imgCircle {
    position: absolute;
    left: -100px;
    top: @radix;
    width: @bigRadix*2;
    height: @bigRadix*2;
    border-radius: 50%;
    animation: circleRun linear infinite;
    animation-fill-mode: forwards;
    animation-duration: ((@stopTime+@runTime)*@n)*1s;

    >img {
        position: absolute;
        left: 0;
        right: 0;
        top: -1*@radix;
        margin: auto;
        z-index: 1;
        width: @radix * 2;
        height: @radix * 2;
        border-radius: 50%;
        transform-origin: center @bigRadix+@radix;
    }

    .circlePos(@n);


}
</style>
  