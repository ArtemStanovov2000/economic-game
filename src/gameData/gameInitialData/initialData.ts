import { Map, map } from "../gameBaseElement/AreaStructure/Map/Map"
import { Control } from "../gameBaseElement/AreaStructure/Map/control"

export type GameData = {
    map: Map,
    control: Control
}

export const gameData: GameData = {
    map: map,
    control: new Control()
}