import { configData } from "../../gameInitialData/configData"
import { GameBlock } from "../gameBlock/gameBlock"
import { createPerlinNoise, createMap, averagingGrid, increaseContrast } from "./createNoiseGrid"

export const map: GameBlock[][] = []

createMap(map, configData.gameMap.widht, configData.gameMap.height)
createPerlinNoise(map, [25, 10, 5, 2], configData.gameMap.widht, configData.gameMap.height)
averagingGrid(map, 9, 1.89, 20)
increaseContrast(map, 70)

