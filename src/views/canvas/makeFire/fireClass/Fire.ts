
export type TFireConfig = {
    /**
     * 位置x
     */
    fireX: number;
    /**
     * 位置y
     */
    fireY: number;
    // 烟花背景参数
    fireBackground: {
        width: number;
        height: number;
    }
}
class Fire {

    fireConfig: TFireConfig;
    ctx: CanvasRenderingContext2D | null;
    constructor(canvasElement: HTMLCanvasElement) {
        this.ctx = canvasElement.getContext("2d");
        const cwidth = canvasElement.width || 100;
        const cheight = canvasElement.height || 100;
        this.fireConfig = {
            fireX: -60 + Math.floor(Math.random() * 61) + 0.5 * cwidth,
            fireY: 0,
            fireBackground: {
                width: cwidth,
                height: cheight
            }
        }
    }
    /**
     * 爆炸
     */
    boomFire() {

    }
    /**
     * 绘制某一帧烟花
     */
    fillOneStep(positionX: number, positionY: number) {
        const canvasCtx=this.ctx;
        canvasCtx?.save();
        canvasCtx?.translate(positionX,positionY);
        
        canvasCtx?.restore();
    }
    randomStart() {
        if (!this.ctx) {
            return;
        }
        this.fillOneStep(this.fireConfig.fireX, this.fireConfig.fireY)

    }

}

export {
    Fire
}