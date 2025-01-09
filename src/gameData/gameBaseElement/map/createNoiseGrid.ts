import { configData } from "../../gameInitialData/configData"
import { GameBlock } from "../gameBlock/gameBlock"

export const createMap = (map: GameBlock[][], width: number, height: number) => {
    for (let i = 0; i < width; i++) {
        const column = []
        for (let k = 0; k < height; k++) {
            column.push(new GameBlock(0))
        }
        map.push(column)
    }
    return map
}

const createNoiseGrid = (width: number, height: number, rate: number) => {
    const newWidth = Math.round(width / rate)
    const newHeight = Math.round(height / rate)

    const smallGrid = []
    for (let i = 0; i < newWidth; i++) {
        const column = []
        for (let k = 0; k < newHeight; k++) {
            column.push(Math.random() * configData.gameMap.colorDiscretizationCount)
        }
        smallGrid.push(column)
    }

    const grid = []
    for (let i = 0; i < width; i++) {
        const column = []
        for (let k = 0; k < height; k++) {
            column.push(smallGrid[Math.floor(i / rate)][Math.floor(k / rate)])
        }
        grid.push(column)
    }
    return grid
}

export const createPerlinNoise = (map: GameBlock[][], rates: number[], width: number, height: number) => {
    const allGrid: number[][][] = []
    for (let i = 0; i < rates.length; i++) {
        allGrid.push(createNoiseGrid(width, height, rates[i]))
    }

    for (let i = 0; i < width; i++) {
        for (let k = 0; k < height; k++) {
            let sum = 0
            for (let d = 0; d < allGrid.length; d++) {
                sum += allGrid[d][i][k]
            }
            map[i][k].setColor = sum / allGrid.length
        }
    }
    return map
}

export const averagingGrid = (map: GameBlock[][], divider: number, dimmer: number, count: number) => {
    for (let i = 0; i < count; i++) {
        for (let i = 1; i < map.length - 1; i++) {
            for (let k = 1; k < map[i].length - 1; k++) {
                if (
                    map[i - 1][k - 1].getColor !== undefined &&
                    map[i - 1][k].getColor !== undefined &&
                    map[i - 1][k + 1].getColor !== undefined &&
                    map[i][k - 1].getColor !== undefined &&
                    map[i][k + 1].getColor !== undefined &&
                    map[i + 1][k - 1].getColor !== undefined &&
                    map[i + 1][k].getColor !== undefined &&
                    map[i + 1][k + 1].getColor !== undefined
                ) {
                    map[i][k].setColor = (
                        map[i][k].getColor +
                        (
                            map[i - 1][k - 1].getColor
                            + map[i - 1][k].getColor
                            + map[i - 1][k + 1].getColor
                            + map[i][k - 1].getColor
                            + map[i][k + 1].getColor
                            + map[i + 1][k - 1].getColor
                            + map[i + 1][k].getColor
                            + map[i + 1][k + 1].getColor
                        ) / divider) / dimmer
                }
            }
        }
    }
    return map
}