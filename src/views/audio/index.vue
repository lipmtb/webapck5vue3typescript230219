<template>
    <div class="audioWrapper">

        <audio :src="qlixSource" controls ref="audioRef"></audio>

        <div class="lyric-wrapper" ref="relativeWrapperRef">
            <div class="scroll-content" ref="scrollRef">
                <li v-for="item in  lyricArr " :key="item.time" :data-time="item.time"
                    :class="{ active: currentActive === item.time }">{{ item.lyric }}</li>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watchEffect } from "vue";
import { useFormatLyricHook } from "./hook/useFormatLyricHook";
const qlixSource = require("./qilx.mp3");

export default defineComponent({
    setup(this) {
        const audioRef = ref<HTMLAudioElement>();
        const relativeWrapperRef = ref<HTMLDivElement>();
        const scrollRef = ref<HTMLDivElement>();
        const { initLyric, lyricArr, getAllLyricAndCreateMap, scrollToTime, currentActive } = useFormatLyricHook();
        onMounted(() => {
            // 歌词整理成数组
            initLyric();
            const audioElement = audioRef.value;
            if (audioElement) {
                audioElement.addEventListener('timeupdate', () => {
                    console.log("audioElementaudioElementaudioElement", audioElement.currentTime);
                    const innerTop = scrollToTime(Math.floor(audioElement.currentTime));
                    const scrollerContainerHeightHalf = (relativeWrapperRef.value?.clientHeight || 0) / 2;
                    if (!scrollRef.value) {
                        return;
                    }
                    console.log("scrollerContainerHeightHalf", scrollerContainerHeightHalf, innerTop);
                    scrollRef.value.style.top = `${scrollerContainerHeightHalf - innerTop}px`;
                });
            }
        });
        watchEffect(() => {
            console.log("watchEffectwatchEffectwatchEffect", lyricArr?.value, audioRef.value, relativeWrapperRef.value);
            if (!lyricArr?.value?.length) {
                return;
            }
            nextTick(() => {
                getAllLyricAndCreateMap();
            })
        })
        return {
            audioRef,
            relativeWrapperRef,
            scrollRef,
            lyricArr,
            qlixSource,
            currentActive
        }

    },
    methods: {

    }
})

</script>
  
<style lang="less">
ul,
li {
    list-style: none;
    padding-left: 0;
}

p {
    margin: 0;
}


.audioWrapper {
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
    background-color: #000;
    color: #fff;
}

.lyric-wrapper {
    position: relative;
    width: 90vw;
    height: calc(100vh - 60px);
    margin: 0 auto;

    .scroll-content {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        margin: 10px auto;
        text-align: center;
        transition: top 1s linear;

        li {
            line-height: 30px;
            opacity: 0.6;
            transition: transform 0.5s linear, opacity 0.4s;
        }

        li.active {
            transform: scale(1.2);
            opacity: 1;
        }
    }
}
</style>

  