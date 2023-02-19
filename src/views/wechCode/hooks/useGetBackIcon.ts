import { ref } from "vue";
import useCreateBase from "./commonHooks/useCreateBase";
import useGetImg from "./commonHooks/useGetImg";


const useGetBackIcon = () => {
    const backIconRef = ref();
    const getIconByStroke = () => {
        const { getCanvas } = useCreateBase();
        const { getImg } = useGetImg();
        const { canvas } = getCanvas({ width: 8, height: 16 });
        const ctx = canvas.getContext("2d");
        if (ctx) {

            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.lineCap="butt";

            ctx.beginPath();
            ctx.moveTo(8, 0);
            ctx.lineTo(0, 8);
         
            ctx.moveTo(0, 7.4);
            ctx.lineTo(8, 15.4);
            ctx.stroke();
            ctx.closePath();


            return getImg(canvas);

        }else{
            return Promise.reject("")
        }

    }
    return {
        backIconRef,
        getIconByStroke
    }
}

export default useGetBackIcon;