import { gameData } from "../gameData/gameInitialData/initialData"
import { GameBlock } from "../gameData/gameBaseElement/gameBlock/gameBlock"

export class Viewport {
    private map: GameBlock[][]

    constructor() {
        this.map = gameData.map.getMap()
    }

    getMap(coordinates = gameData.control.moveIntoCenter()) {
        const width = coordinates.widthRightIndex - coordinates.widthLeftIndex
        const height = coordinates.heightBottomIndex - coordinates.heightTopIndex
        const array = []
        for (let i = 0; i < width; i++) {
            const string = []
            for (let j = 0; j < height; j++) {
                string.push(this.map[i + coordinates.widthLeftIndex][j + coordinates.heightTopIndex])
            }
            array.push(string)
        }
        return array
    }
}