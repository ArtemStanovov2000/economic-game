import { GameData } from "../gameData/gameInitialData/initialData"
import { configData } from "../gameData/gameInitialData/configData"
import { control } from "./rerender/control/control"
import { GameBlock } from "../gameData/gameBaseElement/gameBlock/gameBlock"

export const renderElement = (ctx: CanvasRenderingContext2D | null, gameData: GameData, key: string, frameIndex: number) => {
    control(key, gameData)

    const rrr = (map: GameBlock[][], coordinates = gameData.control.getCurrentLocation()) => {
        const width = coordinates.widthRightIndex - coordinates.widthLeftIndex
        const height = coordinates.heightBottomIndex - coordinates.heightTopIndex
        const array = []
        for (let i = 0; i < width; i++) {
            const string = []
            for (let j = 0; j < height; j++) {
                string.push(map[i + coordinates.widthLeftIndex][j + coordinates.heightTopIndex])
            }
            array.push(string)
        }
        return array
    }

    const arrayMap = rrr(gameData.map.getMap(), gameData.control.getCurrentLocation())
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

    for (let i = 0; i < arrayMap.length; i++) {
        for (let j = 0; j < arrayMap[i].length; j++) {
            if(arrayMap[i][j].tree.getSize() > 0) {
                arrayMap[i][j].tree.drawTree(ctx, i, j)
            }
        }
    }
}