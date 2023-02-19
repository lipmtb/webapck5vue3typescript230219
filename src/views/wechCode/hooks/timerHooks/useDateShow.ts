import { reactive } from "vue";

const useDateShow = () => {
 
    const getDateAndTime = () => {
        const da = new Date();
        const dateLong = da.toLocaleString();
        const daRes = dateLong.match(/^([\d|\/]+)[^\d]+([\w|:]+)$/)
        return {
            date: daRes?.[1],
            time: daRes?.[2]
        }
    }
    const daShow = reactive(getDateAndTime() ?? {});
    return {
        daShow,
        getDateAndTime
    }
}


export default useDateShow;