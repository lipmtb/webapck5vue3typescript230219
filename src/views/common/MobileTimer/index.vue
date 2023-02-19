<template>
    <div class="mobile-timer">
        <div class="left-timer">
            <span>{{ timerDesc }}</span>
            <img class="mid-img" :src="lingdangImg" alt="" />
            <img class="small-img" :src="naozhongImg" alt="" />
        </div>
        <div class="right-network">
            <img class="small-img" :src="blueImg" alt="" />
            <span class="hd-text">HD</span>
            <div class="singnal-wrapper">
                <span class="singnal-upper-text">5G</span>
                <img class="small-img" :src="singnalImg" alt="" />
            </div>
            <div class="power-wrapper">
                <span class="power-count">86</span>
                <img class="long-img" :src="powerImg" alt="" />
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import useTimerShow from "../../wechCode/hooks/timerHooks/useTimerShow";
const lingdangImg = require("../../../assets/lingdang.svg");
const naozhongImg = require("../../../assets/naozhong.svg");
const blueImg = require("../../../assets/blueBlock.svg");
const singnalImg = require("../../../assets/singnal.svg");
const powerImg = require("../../../assets/power.svg");

export default defineComponent({
    setup(this, props, ctx) {
        const { timerDescShow } = useTimerShow();
        const { timerDesc } = timerDescShow();

        return {
            timerDesc,
            lingdangImg,
            naozhongImg,
            blueImg,
            singnalImg,
            powerImg
        }
    },

})

</script>
  
<style lang="less" scoped>
.mobile-timer {
    color: #fff;
    font-size: 12px;

    &::after {
        display: block;
        content: "";
        clear: both;
    }

    .left-timer {
        float: left;
        display: flex;
        align-items: center;
    }

    .right-network {
        float: right;
        display: flex;
        align-items: center;

        .hd-text {
            padding: 2px 2.4px;
            background-color: #fff;
            border-radius: 4px;
            color: #0808088a;
            font-family: cursive;
            font-size: 12px;
            line-height: 10px;
            transform: scale(0.6);
        }

        .singnal-wrapper {
            position: relative;
            margin: 0 4px;

            .singnal-upper-text {
                position: absolute;
                left: -8px;
                top: -6px;
                transform: scale(0.5);
            }
        }
    }

    .power-wrapper {
        position: relative;
        margin-top: 1.4px;

        .power-count {
            position: absolute;
            left: 0.5px;
            right: 0px;
            top: -1px;
            bottom: 0;
            margin: auto;
            font-size: 12px;
            transform: scale(0.54);
        }
    }

    .small-img {
        width: 14px;
        height: 14px;
    }

    .mid-img {
        width: 16px;
        height: 16px;
    }

    .long-img {
        width: 22px;
        height: 17px;
        transform: scale(1.3);
    }
}
</style>
  