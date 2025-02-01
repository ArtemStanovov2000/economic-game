import { GameData } from "../gameData/gameInitialData/initialData"
import { Viewport } from "./Viewport"
import { configData } from "../gameData/gameInitialData/configData"
import { control } from "./rerender/control/control"
import { firContour } from "../gameData/gameBaseElement/Tree/Fir/firContour"

console.log(firContour)

export const renderElement = (ctx: CanvasRenderingContext2D | null, gameData: GameData, viewport: Viewport, key: string) => {
    control(key, gameData)

    const arrayMap = viewport.getMap(gameData.control.getCurrentLocation())
    for (let i = 0; i < arrayMap.length; i++) {
        for (let j = 0; j < arrayMap[i].length; j++) {
            ctx.fillStyle = arrayMap[i][j].getColorHex();
            ctx.fillRect(
                configData.gameMap.blockSize * i - configData.gameMap.blockSize,
                configData.gameMap.blockSize * j - configData.gameMap.blockSize,
                configData.gameMap.blockSize,
                configData.gameMap.blockSize
            )
        }
    }

    for (let i = 0; i < arrayMap.length; i++) {
        for (let j = 0; j < arrayMap[i].length; j++) {
            arrayMap[i][j].tree.drawTree(ctx, i, j)
        }
    }
}