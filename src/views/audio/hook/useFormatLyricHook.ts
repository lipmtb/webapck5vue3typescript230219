import { ref } from "vue";
import { LYRIC_STR } from "../lyric";

type TAudioItem = {
    time: string;
    domOffsetTop: number;
}

type TLyricItem = {
    time: string;
    lyric: string;
}

const getTimeAllSecond = (time: string) => {
    if (!time) {
        return 0;
    }
    const arr = time.split(":");
    const fen = Number(arr[0]);
    const second = Number(arr[1]);
    return fen * 60 + second;

}

const getShowStr = (time: number, zero: number) => {
    const timeStr = String(time);
    let len = timeStr.length;
    let resultArray = [timeStr];
    while (len < zero) {
        resultArray.unshift("0");
        len++;
    }
    return resultArray.join("");
}

const secToString = (second: number) => {

    const secondRest = second % 60;
    const minutes = Math.floor(second / 60);
    if (minutes >= 60) {
        throw new Error("暂不支持小时以上");
    }

    return `${getShowStr(minutes, 2)}:${getShowStr(secondRest, 2)}`;
}

export const useFormatLyricHook = () => {
    const lyricArr = ref<TLyricItem[]>();
    const lyricPosMapRef = ref<Map<string, number>>();
    const currentActive = ref<string>("");
    // 显示歌词
    const initLyric = () => {
        const strAllArr = LYRIC_STR.split(";");
        const map = new Map<string, string>(strAllArr.map(item => {
            const lyricText = item.match(/[\S\s]+?([\u4e00-\u9fa5]+[\S\s]*[\u4e00-\u9fa5]+)$/)?.[1] || "";
            const time = item.match(/([\S\s]+?)[\u4e00-\u9fa5]+[\S\s]*[\u4e00-\u9fa5]+$/)?.[1]?.replace(/\n/, "") || "null";
            return [time, lyricText];
        }));
        lyricArr.value = Array.from(map.entries()).map(item => ({
            time: item[0].trim(),
            lyric: item[1]
        }));
        console.log('lyricArr.value', lyricArr.value);
    }
    // 歌词位置获取和存储，便于后面歌词播放滚动歌词
    const getAllLyricAndCreateMap = () => {
        const allDomArray = document.querySelectorAll(".scroll-content li");
        const allLi: HTMLLIElement[] = Array.from(allDomArray) as HTMLLIElement[];

        const newMap = new Map();
        allLi.forEach(liItem => {
            const ofTop = liItem.offsetTop;
            const time = liItem.dataset.time;
            newMap.set(getTimeAllSecond(time ?? ""), ofTop);
        })
        console.log("arr", newMap);
        lyricPosMapRef.value = newMap;
    }

    const scrollToTime = (time: number) => {
        const lyricMapAll = lyricPosMapRef.value;
        const allTimeArray = Array.from(lyricMapAll?.keys() || []);

        let index = allTimeArray.findIndex((item) => Number(item) > time);
        const activeIndex = index - 1 > -1 ? index - 1 : 0;
        currentActive.value = secToString(Number(allTimeArray[activeIndex]));
        const relativeTop = lyricMapAll?.get?.(allTimeArray[activeIndex]);
        return relativeTop || 0;
    }

    return {
        initLyric,
        lyricArr,
        getAllLyricAndCreateMap,
        lyricPosMapRef,
        scrollToTime,
        currentActive
    }
}