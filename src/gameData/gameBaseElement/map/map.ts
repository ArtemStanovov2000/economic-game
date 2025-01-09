import { configData } from "../../gameInitialData/configData"
import { GameBlock } from "../gameBlock/gameBlock"
import { createPerlinNoise, createMap, averagingGrid } from "./createNoiseGrid"

export const map: GameBlock[][] = []

createMap(map, configData.gameMap.widht, configData.gameMap.height)
createPerlinNoise(map, [100, 50, 20, 10, 5, 2], configData.gameMap.widht, configData.gameMap.height)
averagingGrid(map, 9, 1.89, 20)

