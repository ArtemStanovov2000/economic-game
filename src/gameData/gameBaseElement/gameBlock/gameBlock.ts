export class GameBlock {
    private colorHex

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