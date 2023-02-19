import { ref } from "vue";
import useCreateBase from "@/views/wechCode/hooks/commonHooks/useCreateBase";
import useGetImg from "@/views/wechCode/hooks/commonHooks/useGetImg";
const useGetQrcodeImgHook = () => {
    const qrcodeImg = ref();
    const fillRectWhite = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.rect(0, 0, width, height);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    const drawImgCode = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // 绘制矩形
        fillRectWhite(ctx, width, height);
        // 获取二维码数据
        const dataSource = Array.from({ length: 100 }, (_item, idx) => Math.random() > 0.5 ? -idx : idx);
        // 绘制内部二维码
        const dataLevel = Math.floor(Math.sqrt(dataSource.length));
        const rectWeight = 10;
        const rectWidth = 10;
        const canvasPadding = 2;

        dataSource.forEach((item, idx) => {
            ctx.save();
            const posX = idx % dataLevel;
            const posY = Math.floor(idx / dataLevel);
            ctx.translate(canvasPadding + width * posX / dataLevel, canvasPadding + height * posY / dataLevel);

            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.rect(0, 0, rectWidth, rectWeight);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 8px 宋体";
            ctx.fillStyle = '#fff';
            ctx.fillText(String(item), 0, 6);
            ctx.closePath();
            ctx.restore();
        })
    }
    const createQrcodeImg = async (width: number = 140, height: number = 140) => {
        const { getCanvas } = useCreateBase();
        const { getImg } = useGetImg();
        const { canvas } = getCanvas({ width, height });
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx) {
            drawImgCode(ctx, width, height);
        }
        const imgCodeUrl = await getImg(canvas);
        qrcodeImg.value = imgCodeUrl;
    }

    return {
        qrcodeImg,
        createQrcodeImg
    }
}


export default useGetQrcodeImgHook;