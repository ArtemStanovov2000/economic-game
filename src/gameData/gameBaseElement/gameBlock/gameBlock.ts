export class GameBlock {
    private content: {
        color: string,
        tree: {
            size: number,
            x: number,
            y: number
        },
        infrastructureFacility: null,
        resources: {
            oil: number,
            iron: number,
            gas: number
        }
    }

    constructor() {
        this.content = {
            color: "",
            tree: {
                size: 0,
                x: 0,
                y: 0
            },
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

    fillTree(size: number, x: number, y: number) {
        this.content.tree.size = size
        this.content.tree.x = x / 10 + 0.5
        this.content.tree.y = y / 10 + 0.5
    }

    setColorHex(value: string) {
        this.content.color = value
    }

    getColorHex() {
        return this.content.color
    }
}