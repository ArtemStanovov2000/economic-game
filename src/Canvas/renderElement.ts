import { GameData } from "../gameData/gameInitialData/initialData"
import { configData } from "../gameData/gameInitialData/configData"
import { control } from "./rerender/control/control"
import { GameBlock } from "../gameData/gameBaseElement/gameBlock/gameBlock"
//import { workers } from "../gameData/gameInitialData/initialData"

export const renderElement = (ctx: CanvasRenderingContext2D | null | undefined, gameData: GameData, key: string) => {
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

    console.log(gameData.coordinates.getCoordinates())

    /*workers.viewportWorker.postMessage({ message: gameData.number })

    workers.viewportWorker.onmessage = function (e) {
        console.log(e.data)
    }*/

    const arrayMap = rrr(gameData.map.getMap(), gameData.control.getCurrentLocation())
    for (let i = 0; i < arrayMap.length; i++) {
        for (let j = 0; j < arrayMap[i].length; j++) {
            if (ctx) {
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
            switch (arrayMap[i][j].content?.type) {
                case null:
                    break;
                case "fir":
                    arrayMap[i][j].content.drawTree(ctx, i, j);
            }
        }
    }
}