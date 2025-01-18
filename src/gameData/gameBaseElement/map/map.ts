import { GameBlock } from "../gameBlock/gameBlock"
import { Area } from "./area"
import { Control } from "./control"
import { configData } from "../../gameInitialData/configData"

export class Map {
    private map: GameBlock[][]
    area
    control

    constructor() {
        this.area = new Area()
        this.map = []
        this.control = new Control
    }

    createArea(width: number, height: number, average: number, contrast: number, startColor: string, endColor: string, discretization: number, rates: number[], separationThreshold: number) {
        const square = this.area.createArea(width, height, average, contrast, startColor, endColor, discretization, rates, separationThreshold)
        const coordinates = this.control.getIntoCenter()
        for (let i = coordinates.widhtLeftIndex; i < coordinates.widhtRightIndex; i++) {
            const string: GameBlock[] = []
            for (let j = coordinates.heightTopIndex; j < coordinates.heightBottomIndex; j++) {
                const gameBlock = new GameBlock()
                gameBlock.setColorHex(square[i][j])
                string.push(gameBlock)
            }
            this.map.push(string)
        }
    }

    getMap() {
        return this.map
    }
}

export const map = new Map()
map.createArea(
    configData.gameMap.widht, 
    configData.gameMap.height, 
    configData.gameMap.color.averageNumber, 
    configData.gameMap.color.contrast, 
    configData.gameMap.color.startColor, 
    configData.gameMap.color.endColor, 
    configData.gameMap.color.discretization, 
    configData.gameMap.color.ratesNumber, 
    configData.gameMap.color.separationThreshold
)

