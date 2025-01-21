import { GameData } from "../gameData/gameInitialData/initialData"
import { Viewport } from "./Viewport"
import { configData } from "../gameData/gameInitialData/configData"

export const renderElement = (ctx: CanvasRenderingContext2D | null, gameData: GameData, viewport: Viewport, key: string) => {
    switch (key) {
        case configData.controls.moveCenter:
            gameData.control.moveIntoCenter()
            break

        case configData.controls.moveTop:
            gameData.control.moveTop()
            break

        case configData.controls.moveBottom:
            gameData.control.moveBottom()
            break

        case configData.controls.moveLeft:
            gameData.control.moveLeft()
            break

        case configData.controls.moveRight:
            gameData.control.moveRight()
            break
    }

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
}