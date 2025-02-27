import { firContour } from "./firContour";
import { configData } from "../../../gameInitialData/configData";
import { firContourLite } from "./firContourLite";

export class Fir {
    private size: number
    private x: number
    private y: number
    public type: string

    constructor() {
        this.size = 0
        this.x = 0
        this.y = 0
        this.type = "fir"
    }

    setTree(size: number, x: number, y: number) {
        this.size = size
        this.x = x
        this.y = y
    }

    getSize() {
        return this.size
    }

    drawElement(ctx: CanvasRenderingContext2D | null | undefined, xIndex: number, yIndex: number) {
        const blockSize = configData.gameMap.blockSize
        const firContourSlice = firContour.contour.points
        const firContourLiteSlice = firContourLite.contour.points

        if (this.size > 4 && ctx) {
            for (let i = 0; i < firContourSlice.length; i++) {
                if (i === 0) {
                    ctx.beginPath();
                    ctx.moveTo(
                        Math.floor(firContourSlice[0].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                        Math.floor(firContourSlice[0].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                    );
                }
                ctx.lineTo(
                    Math.floor(firContourSlice[i].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                    Math.floor(firContourSlice[i].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                );
                if (i === firContourSlice.length - 1) {
                    ctx.strokeStyle = firContour.contour.color;
                    ctx.closePath();
                    ctx.fillStyle = firContour.contour.fill;
                    ctx.fill();
                    ctx.stroke();
                }
            }

            for (let i = 0; i < firContour.lines.length; i++) {
                for (let j = 0; j < firContour.lines[i].length; j++) {
                    if (j === 0) {
                        ctx.beginPath();
                        ctx.moveTo(
                            Math.floor(firContour.lines[i][0].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                            Math.floor(firContour.lines[i][0].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                        );
                    }
                    ctx.lineTo(
                        Math.floor(firContour.lines[i][j].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                        Math.floor(firContour.lines[i][j].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                    );
                    if (j === firContour.lines[i].length - 1) {
                        ctx.strokeStyle = firContour.contour.color;
                        ctx.stroke();
                    }
                }
            }
        } else if (this.size < 2 && ctx) {
            for (let i = 0; i < firContourLiteSlice.length; i++) {
                if (i === 0) {
                    ctx.beginPath();
                    ctx.moveTo(
                        Math.floor(firContourLiteSlice[0].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                        Math.floor(firContourLiteSlice[0].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                    );
                }
                ctx.lineTo(
                    Math.floor(firContourLiteSlice[i].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                    Math.floor(firContourLiteSlice[i].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                );
                if (i === firContourLiteSlice.length - 1) {
                    ctx.strokeStyle = firContourLite.contour.color;
                    ctx.closePath();
                    ctx.fillStyle = firContourLite.contour.fill;
                    ctx.fill();
                    ctx.stroke();
                }
            }
        } else if(ctx) {
            for (let i = 0; i < firContourSlice.length; i++) {
                if (i === 0) {
                    ctx.beginPath();
                    ctx.moveTo(
                        Math.floor(firContourSlice[0].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                        Math.floor(firContourSlice[0].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                    );
                }
                ctx.lineTo(
                    Math.floor(firContourSlice[i].xStart * this.size + (xIndex - 0.5 + this.x) * blockSize.width),
                    Math.floor(firContourSlice[i].yStart * this.size * -1 + (yIndex - 0.3 + this.y) * blockSize.height)
                );
                if (i === firContourSlice.length - 1) {
                    ctx.strokeStyle = firContour.contour.color;
                    ctx.closePath();
                    ctx.fillStyle = firContour.contour.fill;
                    ctx.fill();
                    ctx.stroke();
                }
            }
        }
    }

}
