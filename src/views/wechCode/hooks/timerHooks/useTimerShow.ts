
import { computed } from "vue";

const useTimerShow = () => {
    const timerDescShow = () => {
        const currentDate = new Date();
        const timerDesc = computed(() => {
            const originTimerStr = currentDate.toLocaleTimeString();
            return originTimerStr.match(/^([\s\S]+:\d+):.*$/)?.[1];
        })

        return {
            timerDesc
        }
    }

    return {
        timerDescShow
    }
}
export default useTimerShow;