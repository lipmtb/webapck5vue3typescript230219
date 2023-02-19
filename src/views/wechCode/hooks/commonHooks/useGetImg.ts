

const useGetImg = () => {

    const getImg: (canvas: HTMLCanvasElement) => Promise<string> = (canvas: HTMLCanvasElement) => {
        return new Promise(resolve => {
            try {
                const img = new Image();
                img.onload = () => {
                    resolve(canvasImg)
                }
                img.onabort = () => {
                    resolve("")
                }
                const canvasImg = canvas.toDataURL("image/png");
                img.src = canvasImg;
            } catch (e) {
                resolve("")
            }


        })

    }
    return {
        getImg
    }
}

export default useGetImg;