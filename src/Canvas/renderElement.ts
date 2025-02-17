import { GameData } from "../gameData/gameInitialData/initialData"
import { Viewport } from "./Viewport"
import { configData } from "../gameData/gameInitialData/configData"
import { control } from "./rerender/control/control"

export const renderElement = (ctx: CanvasRenderingContext2D | null, gameData: GameData, viewport: Viewport, key: string, frameIndex: number, coords: { x: number, y: number }) => {
    control(key, gameData)

    const arrayMap = viewport.getMap(gameData.control.getCurrentLocation())
    for (let i = 0; i < arrayMap.length; i++) {
        for (let j = 0; j < arrayMap[i].length; j++) {
            if (ctx !== null) {
                ctx.fillStyle = arrayMap[i][j].getColorHex();
                ctx.fillRect(
                    configData.gameMap.blockSize * i - configData.gameMap.blockSize,
                    configData.gameMap.blockSize * j - configData.gameMap.blockSize,
                    configData.gameMap.blockSize,
                    configData.gameMap.blockSize
                )
            }
        }
    }

    const determineBlockCoordinates = (coords: { x: number, y: number }) => {
        const letfTopIndex = viewport.getLeftTopBlockIndex()
        const xOffset = Math.floor(coords.x / configData.gameMap.blockSize)
        const yOffset = Math.floor(coords.y / configData.gameMap.blockSize)
        return { xIndex: letfTopIndex.x + xOffset, yIndex: letfTopIndex.y + yOffset }
    }

    for (let i = 0; i < arrayMap.length; i++) {
        for (let j = 0; j < arrayMap[i].length; j++) {
            arrayMap[i][j].tree.drawTree(ctx, i, j, frameIndex)
        }
    }
}