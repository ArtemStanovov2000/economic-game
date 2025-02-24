export class Coordinates {
    private coordinates: {
        xCoordinates: number
        yCoordinates: number
    }

    constructor() {
        this.coordinates = {
            xCoordinates: 0,
            yCoordinates: 0
        }
    }

    setCoordinates(x: number, y: number) {
        this.coordinates = {
            xCoordinates: x,
            yCoordinates: y
        }
    }

    getCoordinates() {
        return this.coordinates
    }
}