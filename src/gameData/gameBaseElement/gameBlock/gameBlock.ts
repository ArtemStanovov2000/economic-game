export class GameBlock {
    private color: number;

    constructor(color: number) {
        this.color = color;
    }

    set setColor(value: number) {
        this.color = value
    }

    get getColor() {
        return this.color
    }
}