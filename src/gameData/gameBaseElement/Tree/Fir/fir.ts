import { firContour } from "./firContour";
import { configData } from "../../../gameInitialData/configData";

export class Fir {
    private size: number
    private x: number
    private y: number

    constructor() {
        this.size = 0
        this.x = 0
        this.y = 0
    }

    setTree(size: number, x: number, y: number) {
        this.size = size
        this.x = x
        this.y = y
    }

    drawTree(ctx: CanvasRenderingContext2D | null, xIndex: number, yIndex: number) {
        const blockSize = configData.gameMap.blockSize
        const firContourSlice = firContour.contour.points.slice()
        const firLineSlice = firContour.lines.slice()


        if (ctx !== null) {
            for (let i = 0; i < firContourSlice.length; i++) {
                if (i === 0) {
                    ctx.beginPath();
                    ctx.moveTo(
                        firContourSlice[0].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize,
                        firContourSlice[0].yStart * this.size * -1 + (yIndex - 0.5 + this.y) * blockSize
                    );
                }
                ctx.lineTo(
                    firContourSlice[i].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize,
                    firContourSlice[i].yStart * this.size * -1 + (yIndex - 0.5 + this.y) * blockSize
                );
                if (i === firContourSlice.length - 1) {
                    ctx.strokeStyle = firContour.contour.color;
                    ctx.closePath();
                    ctx.fillStyle = firContour.contour.fill;
                    ctx.fill();
                    ctx.stroke();
                }
            }

            for (let i = 0; i < firLineSlice.length; i++) {
                for (let j = 0; j < firLineSlice[i].length; j++) {
                    if (j === 0) {
                        ctx.beginPath();
                        ctx.moveTo(
                            firLineSlice[i][0].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize,
                            firLineSlice[i][0].yStart * this.size * -1 + (yIndex - 0.5 + this.y) * blockSize
                        );
                    }
                    ctx.lineTo(
                        firLineSlice[i][j].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize,
                        firLineSlice[i][j].yStart * this.size * -1 + (yIndex - 0.5 + this.y) * blockSize
                    );
                    if (j === firLineSlice[i].length - 1) {
                        ctx.strokeStyle = firContour.contour.color;
                        ctx.stroke();
                    }
                }
            }
        }
        return firContour
    }
}