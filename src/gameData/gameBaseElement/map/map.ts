import { GameBlock } from "../gameBlock/gameBlock"
import { Area } from "./area"
import { configData } from "../../gameInitialData/configData"

export class Map {
    private fullMap: GameBlock[][]
    area

    constructor() {
        this.area = new Area()
        this.fullMap = []
    }

    createArea(width: number, height: number, average: number, contrast: number, startColor: string, endColor: string, discretization: number, rates: number[], separationThreshold: number) {
        const square = this.area.createArea(width, height, average, contrast, startColor, endColor, discretization, rates, separationThreshold)
        for (let i = 0; i < square.length; i++) {
            const string: GameBlock[] = []
            for (let j = 0; j < square[i].length; j++) {
                const gameBlock = new GameBlock()
                gameBlock.setColorHex(square[i][j])
                string.push(gameBlock)
            } 
            this.fullMap.push(string)
        }
    }

    getMap() {
        return this.fullMap
    }
}

export const map = new Map()
map.createArea(
    configData.gameMap.width, 
    configData.gameMap.height, 
    configData.gameMap.color.averageNumber, 
    configData.gameMap.color.contrast, 
    configData.gameMap.color.startColor, 
    configData.gameMap.color.endColor, 
    configData.gameMap.color.discretization, 
    configData.gameMap.color.ratesNumber, 
    configData.gameMap.color.separationThreshold
)

