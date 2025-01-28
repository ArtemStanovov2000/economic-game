import { GameBlock } from "../../gameBlock/gameBlock"
import { Area } from "./area"
import { configData } from "../../../gameInitialData/configData"

export class Map {
    private area: GameBlock[][]

    constructor() {
        this.area = []
    }

    createArea(width: number, height: number) {
        for (let i = 0; i < width; i++) {
            const column = []
            for (let k = 0; k < height; k++) {
                const gameBlock = new GameBlock()
                column.push(gameBlock)
            }
            this.area.push(column)
        }
    }

    getMap() {
        return this.area
    }
}

export const map = new Map()
const rr = map.getMap()
map.createArea(
    configData.gameMap.width, 
    configData.gameMap.height, 
)
console.log(rr[45][23])


