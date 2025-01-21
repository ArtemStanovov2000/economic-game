import { Map, map } from "../gameBaseElement/map/map"
import { Control } from "../gameBaseElement/map/control"

export type GameData = {
    map: Map,
    control: Control
}

export const gameData: GameData = {
    map: map,
    control: new Control()
}