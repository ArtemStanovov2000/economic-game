import { configData } from "../../../gameInitialData/configData";
import { asphaltContour } from "./asphaltContour";

export class Asphalt {
    type: string

    constructor() {
        this.type = "asphalt"
    }

    drawElement(ctx: CanvasRenderingContext2D | null | undefined, xIndex: number, yIndex: number) {
        const blockSize = configData.gameMap.blockSize
        const asphaltContourSlice = asphaltContour.contour
        const asphaltPointsSlice = asphaltContour.points
        if (ctx) {
            for (let i = 0; i < asphaltContourSlice.length; i++) {
                if (i === 0) {
                    ctx.beginPath();
                    ctx.moveTo(
                        Math.floor(asphaltContourSlice[i].xStart * 4 + (xIndex - 0.5) * blockSize.width),
                        Math.floor(asphaltContourSlice[i].yStart * 2.83 + (yIndex - 0.5) * blockSize.height)
                    );
                }
                ctx.lineTo(
                    Math.floor(asphaltContourSlice[i].xStart * 4 + (xIndex - 0.5) * blockSize.width),
                    Math.floor(asphaltContourSlice[i].yStart * 2.83 + (yIndex - 0.5) * blockSize.height)
                );
                if (i === asphaltContourSlice.length - 1) {
                    ctx.strokeStyle = asphaltContour.contourFill;
                    ctx.closePath();
                    ctx.fillStyle = asphaltContour.contourFill;
                    ctx.fill();
                    ctx.stroke();
                }
            }
            for (let i = 0; i < asphaltPointsSlice.length; i++) {
                for (let k = 0; k < asphaltPointsSlice[i].length; k++) {
                    if (k === 0) {
                        ctx.beginPath();
                        ctx.moveTo(
                            Math.floor(asphaltPointsSlice[i][k].xStart * 4 + (xIndex - 0.5) * blockSize.width),
                            Math.floor(asphaltPointsSlice[i][k].yStart * 2.83 + (yIndex - 0.5) * blockSize.height)
                        );
                    }
                    ctx.lineTo(
                        Math.floor(asphaltPointsSlice[i][k].xStart * 4 + (xIndex - 0.5) * blockSize.width),
                        Math.floor(asphaltPointsSlice[i][k].yStart * 2.83 + (yIndex - 0.5) * blockSize.height)
                    );
                    if (k === asphaltPointsSlice[i].length - 1) {
                        ctx.strokeStyle = asphaltContour.color;
                        ctx.closePath();
                        ctx.fillStyle = asphaltContour.fill;
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }
        }
    }
}

