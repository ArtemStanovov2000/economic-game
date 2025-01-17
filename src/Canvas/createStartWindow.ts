import { gameData } from "../gameData/gameInitialData/initialData";
import { configData } from "../gameData/gameInitialData/configData";

export const createStartWindow = (ctx: CanvasRenderingContext2D | null, width: number, height: number) => {
    if (ctx !== null) {
        ctx.fillStyle = "#000005";
        ctx.fillRect(0, 0, width, height);
        ctx.stroke();

        const map = gameData.map

        for (let i = 0; i < map.length; i++) {
            for (let k = 0; k < map[i].length; k++) {
                ctx.fillStyle = map[i][k].getColorHex()
                ctx.fillRect(i*configData.gameMap.blockSize, k*configData.gameMap.blockSize, configData.gameMap.blockSize, configData.gameMap.blockSize);
            }
        }
    }
}