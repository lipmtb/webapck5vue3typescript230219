

export type CanvasConfig = {
    width: number;
    height: number;
}

const useCreateBase = () => {
    const getCanvas = (config: CanvasConfig) => {
        const canvas = document.createElement("canvas");
        canvas.width = config.width;
        canvas.height = config.height;
        return {
            canvas
        };
    }
    return {
        getCanvas
    }
}

export default useCreateBase;