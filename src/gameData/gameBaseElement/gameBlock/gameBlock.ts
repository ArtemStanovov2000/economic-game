export class GameBlock {
    private colorHex
    private content: {
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
        this.colorHex = ""
        this.content = {
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

    fillTree(size: number, x: number, y: number) {
        this.content.tree.size = size
        this.content.tree.x = x / 10 + 0.5
        this.content.tree.y = y / 10 + 0.5
    }

    setColorHex(value: string) {
        this.colorHex = value
    }

    getColorHex() {
        return this.colorHex
    }
}