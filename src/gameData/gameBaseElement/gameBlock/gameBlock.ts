import { Fir } from "../Tree/Fir/fir"

export class GameBlock {
    tree: Fir
    id: string
    private content: {
        color: string,
        infrastructureFacility: null,
        resources: {
            oil: number,
            iron: number,
            gas: number
        }
    }

    constructor() {
        this.tree = new Fir()
        this.id = ""
        this.content = {
            color: "",
            infrastructureFacility: null,
            resources: {
                oil: 0,
                iron: 0,
                gas: 0
            }
        }
    }

    fillOil(value: number) {
        this.content.resources.oil = value
    }

    fillGas(value: number) {
        this.content.resources.gas = value
    }

    fillIron(value: number) {
        this.content.resources.iron = value
    }

    setColorHex(value: string) {
        this.content.color = value
    }

    setId(value: string) {
        this.id = value
    }

    getColorHex() {
        return this.content.color
    }
}