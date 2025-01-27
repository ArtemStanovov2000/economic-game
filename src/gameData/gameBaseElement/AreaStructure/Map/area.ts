import { PerlinNoise } from "./PerlinNoise"

export class Area {
    private area: number[][] = []
    private perlinNoise: PerlinNoise


    constructor() {
        this.perlinNoise = new PerlinNoise()
    }

    createArea(width: number, height: number, average: number, contrast: number, startColor: string, endColor: string, discretization: number, rates: number[], separationThreshold: number) {

        const createArea = () => {
            for (let i = 0; i < width; i++) {
                const column = []
                const stringColor = []
                for (let k = 0; k < height; k++) {
                    column.push(0)
                    stringColor.push("")
                }
                this.area.push(column)
            }
        }
        createArea()

        console.log(this.perlinNoise.createNoise(width, height, average, contrast, discretization, rates, separationThreshold), "fdf")

        return this.area
    }
}