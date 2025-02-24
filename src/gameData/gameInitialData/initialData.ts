import { Map, map } from "../gameBaseElement/AreaStructure/Map/Map"
import { Control } from "../gameBaseElement/AreaStructure/Map/Control"
import { Coordinates } from "../../Canvas/rerender/coordinates/coordinates"

export type GameData = {
    map: Map,
    control: Control,
    coordinates: Coordinates
}

export const gameData: GameData = {
    map: map,
    control: new Control(),
    coordinates: new Coordinates()
}

export const workers = {
    viewportWorker: new Worker(new URL("../../Canvas/counter.ts", import.meta.url))
}