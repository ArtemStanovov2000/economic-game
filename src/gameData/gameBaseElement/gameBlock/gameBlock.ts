import { Fir } from "../Tree/Fir/fir"

export class GameBlock {
    id: string
    color: string
    resources: {
        oil: number,
        iron: number,
        gas: number
    }
    content: null | Fir

    constructor() {
        this.id = ""
        this.color = ""
        this.resources = {
            oil: 0,
            iron: 0,
            gas: 0
        }
        this.content = null
    }

    fillOil(value: number) {
        this.resources.oil = value
    }

    fillGas(value: number) {
        this.resources.gas = value
    }

    fillIron(value: number) {
        this.resources.iron = value
    }

    setColorHex(value: string) {
        this.color = value
    }

    setId(value: string) {
        this.id = value
    }

    getColorHex() {
        return this.color
    }
}