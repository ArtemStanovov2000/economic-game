export class GameBlock {
    private colorHex
    private content: {
        tree: null,
        infrastructureFacility: null,
        resources: {
            oil: 0,
            iron: 0,
            gas: 0
        }
    }

    constructor() {
        this.colorHex = ""
    }

    setColorHex(value: string) {
        this.colorHex = value
    }

    getColorHex() {
        return this.colorHex
    }
}