import { GameBlock } from "../../gameBlock/gameBlock"
import { PerlinNoise } from "./PerlinNoise"
import { configData } from "../../../gameInitialData/configData"

export class Map {
    private width: number
    private height: number
    private area: GameBlock[][]
    private treeChance = new PerlinNoise
    private oilChance = new PerlinNoise
    private gasChance = new PerlinNoise
    private ironChance = new PerlinNoise

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

    getMap() {
        return this.area
    }
}

export const map = new Map(configData.gameMap.width, configData.gameMap.height)
const rr = map.getMap()
map.createArea()

const oilChanceMap = configData.gameMap.resources.oilChance
map.fillingOil(oilChanceMap.averageNumber, oilChanceMap.contrast, oilChanceMap.discretization, oilChanceMap.ratesNumber, oilChanceMap.separationThreshold)

const gasChanceMap = configData.gameMap.resources.gasChance
map.fillingGas(gasChanceMap.averageNumber, gasChanceMap.contrast, gasChanceMap.discretization, gasChanceMap.ratesNumber, gasChanceMap.separationThreshold)

const ironChanceMap = configData.gameMap.resources.ironChance
map.fillingIron(ironChanceMap.averageNumber, ironChanceMap.contrast, ironChanceMap.discretization, ironChanceMap.ratesNumber, ironChanceMap.separationThreshold)
console.log(rr)


