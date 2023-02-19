<template>
    <div class="my-qr-code">
        <div class="img-code">
            <div class="header-timer">
                <span class="date-detail">{{ daShow.date }}</span>
                <span class="time-detail">{{ daShow.time }}</span>
            </div>
            <div class="qrcode-center">
                <div class="person-name" v-wordFilter>
                    {{ userObj?.userName || "俩算法" }}
                </div>
                <div class="qrcode-img">
                    <div class="code-border">
                        <img class='code-content' v-if="qrcodeImg" :src="qrcodeImg" alt="二维码生成失败" />
                        <img :src="CodeCenter" alt="middle" class="code-center" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import useDateShow from "../hooks/timerHooks/useDateShow";
import useGetQrcodeImgHook from "../hooks/useGetQrcodeImgHook";
import CodeCenter from "@/assets/codeCenter.png";


export default defineComponent({
    setup(this, props, ctx) {
        const store = useStore();
        const { daShow } = useDateShow();

        const userObj = reactive({
            userName: store.getters["userArea/getUserName"]
        });

        const { qrcodeImg, createQrcodeImg } = useGetQrcodeImgHook();
        // 生成模拟的码23333
        onMounted(() => {
            createQrcodeImg(150, 150);
            console.log("dsadasdsad++++++")
        })

        return {
            daShow,
            userObj,
            qrcodeImg,
            CodeCenter
        }
    },
    directives: {
        wordFilter: {
            mounted(el) {
                const text = el.innerText;
                if (text) {
                    const newText = text.replace(/[^\w]/gi, (match: string, idx: number, str: string) => {
                        if (idx === Math.floor(str.length / 2)) {
                            return "*"
                        }
                        return match;
                    })
                    el && (el.innerText = newText);
                }
            }
        },
    },
})

</script>

<style lang="less" scoped>
.my-qr-code {
    height: 100vh;
}

.header-timer {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;

    .date-detail {
        margin-right: 4px;
    }
}

.qrcode-center {
    text-align: center;
    margin-top: 18px;

    .person-name {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
    }

    .qrcode-img {
        width: 158px;
        height: 178px;
        background-color: #fff;
        margin: 8px auto;
        padding: 4px;

        .code-border {
            position: relative;
            height: 150px;
            background-image: -webkit-linear-gradient(90deg, #0cbaa3, lighten(#0cbaa3, 40%), #0cbaa3);
            padding: 4px;
            .code-center {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin:auto;
            }
        }
    }
}
</style>
