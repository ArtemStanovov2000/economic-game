import { GameBlock } from "../../gameBlock/gameBlock"
import { PerlinNoise } from "./PerlinNoise"
import { configData } from "../../../gameInitialData/configData"
import { Fir } from "../../Tree/Fir/fir"
import { Asphalt } from "../../Road/Asphalt/Asphalt"

export class Map {
    private width: number
    private height: number
    private area: GameBlock[][]
    private treeChance = new PerlinNoise()
    private oilChance = new PerlinNoise()
    private colorMap = new PerlinNoise()
    private gasChance = new PerlinNoise()
    private ironChance = new PerlinNoise()

    constructor(width: number, height: number) {
        this.area = []
        this.width = width
        this.height = height
    }

    createArea() {
        for (let i = 0; i < this.width; i++) {
            const column = []
            for (let k = 0; k < this.height; k++) {
                const gameBlock = new GameBlock()
                column.push(gameBlock)
            }
            this.area.push(column)
        }
    }

    fillingOil(average: number, contrast: number, discretization: number, rates: number[], separationThreshold: number) {
        const oilArea: number[][] = this.oilChance.createNoise(this.width, this.height, average, contrast, discretization, rates, separationThreshold)
        for (let i = 0; i < oilArea.length; i++) {
            for (let k = 0; k < oilArea[i].length; k++) {
                this.area[i][k].fillOil(oilArea[i][k])
            }
        }
    }

    fillingColor(average: number, contrast: number, discretization: number, rates: number[], separationThreshold: number) {
        const colorArea: number[][] = this.colorMap.createNoise(this.width, this.height, average, contrast, discretization, rates, separationThreshold)
        for (let i = 0; i < colorArea.length; i++) {
            for (let k = 0; k < colorArea[i].length; k++) {
                if (colorArea[i][k] < 33) {
                    this.area[i][k].setColorHex("#3db51f")
                } else if (colorArea[i][k] >= 33 && colorArea[i][k] < 66) {
                    this.area[i][k].setColorHex("#3aad1d")
                } else {
                    this.area[i][k].setColorHex("#36a61b")
                }
            }
        }
    }

    fillingGas(average: number, contrast: number, discretization: number, rates: number[], separationThreshold: number) {
        const gasArea: number[][] = this.gasChance.createNoise(this.width, this.height, average, contrast, discretization, rates, separationThreshold)
        for (let i = 0; i < gasArea.length; i++) {
            for (let k = 0; k < gasArea[i].length; k++) {
                this.area[i][k].fillGas(gasArea[i][k])
            }
        }
    }

    fillingIron(average: number, contrast: number, discretization: number, rates: number[], separationThreshold: number) {
        const IronArea: number[][] = this.ironChance.createNoise(this.width, this.height, average, contrast, discretization, rates, separationThreshold)
        for (let i = 0; i < IronArea.length; i++) {
            for (let k = 0; k < IronArea[i].length; k++) {
                this.area[i][k].fillIron(IronArea[i][k])
            }
        }
    }

    fillingTree(average: number, contrast: number, discretization: number, rates: number[], separationThreshold: number) {
        const treeArea: number[][] = this.treeChance.createNoise(this.width, this.height, average, contrast, discretization, rates, separationThreshold)
        for (let i = 0; i < treeArea.length; i++) {
            for (let k = 0; k < treeArea[i].length; k++) {
                const randomNumber = Math.random() * 100
                if (randomNumber < treeArea[i][k]) {
                    const randomX = Math.random() / 10
                    const randomY = Math.random() / 10
                    const size = Math.random() * 5
                    this.area[i][k].content = new Fir()
                    if(this.area[i][k].content?.type === "fir") {
                        this.area[i][k].content?.setTree(size, randomX, randomY)
                    }
                }
            }
        }
    }

    fillingId() {
        for (let i = 0; i < this.width; i++) {
            for (let k = 0; k < this.height; k++) {
                this.area[i][k].setId(`${i}&${k}`)
            }
        }
    }

    setContentGameBlock(i: number, k: number, type: Fir | Asphalt) {
        this.area[i][k].content = type
    }

    getMap() {
        return this.area
    }
}

export const map = new Map(configData.gameMap.width, configData.gameMap.height)
map.createArea()

const oilChanceMap = configData.gameMap.resources.oilChance
map.fillingOil(oilChanceMap.averageNumber, oilChanceMap.contrast, oilChanceMap.discretization, oilChanceMap.ratesNumber, oilChanceMap.separationThreshold)

const gasChanceMap = configData.gameMap.resources.gasChance
map.fillingGas(gasChanceMap.averageNumber, gasChanceMap.contrast, gasChanceMap.discretization, gasChanceMap.ratesNumber, gasChanceMap.separationThreshold)

const ironChanceMap = configData.gameMap.resources.ironChance
map.fillingIron(ironChanceMap.averageNumber, ironChanceMap.contrast, ironChanceMap.discretization, ironChanceMap.ratesNumber, ironChanceMap.separationThreshold)

const treeChanceMap = configData.gameMap.resources.treeChance
map.fillingTree(treeChanceMap.averageNumber, treeChanceMap.contrast, treeChanceMap.discretization, treeChanceMap.ratesNumber, treeChanceMap.separationThreshold)

const colorMap = configData.gameMap.mapColor
map.fillingColor(colorMap.averageNumber, colorMap.contrast, colorMap.discretization, colorMap.ratesNumber, colorMap.separationThreshold)

map.fillingId()

for (let i = 0; i < 70; i++) {
    map.setContentGameBlock(170 + i, 150, new Asphalt())
}





