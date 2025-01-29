export class PerlinNoise {
    area: number[][]

    constructor() {
        this.area = []
    }

    createNoise(width: number, height: number, average: number, contrast: number, discretization: number, rates: number[], separationThreshold: number) {

        //Создает изначальный пустой массив элементов заданых размеров
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

        //Генерирует одну гармонику шума перлина
        const createNoiseGrid = (rate: number) => {
            const newWidth = Math.round(width / rate)
            const newHeight = Math.round(height / rate)

            const smallGrid = []
            for (let i = 0; i < newWidth; i++) {
                const column = []
                for (let k = 0; k < newHeight; k++) {
                    column.push(Math.random() * discretization)
                }
                smallGrid.push(column)
            }

            const grid = []
            for (let i = 0; i < width; i++) {
                const column = []
                for (let k = 0; k < height; k++) {
                    column.push(smallGrid[Math.floor(i / rate)][Math.floor(k / rate)])
                }
                grid.push(column)
            }
            return grid
        }

        //Накладывает гармоники шума перлина
        const createAllGrid = () => {
            const allGrid: number[][][] = []
            for (let i = 0; i < rates.length; i++) {
                allGrid.push(createNoiseGrid(rates[i]))
            }

            for (let i = 0; i < width; i++) {
                for (let k = 0; k < height; k++) {
                    let sum = 0
                    for (let d = 0; d < allGrid.length; d++) {
                        sum += allGrid[d][i][k]
                    }
                    this.area[i][k] = sum / allGrid.length
                }
            }
        }
        createAllGrid()

        //Усредняет шум, беря значения соседних ячеек и усредняя с текущей
        const averagingGrid = () => {
            for (let i = 0; i < average; i++) {
                for (let i = 1; i < width - 1; i++) {
                    for (let k = 1; k < height - 1; k++) {
                        this.area[i][k] = (
                            this.area[i][k] +
                            (
                                this.area[i - 1][k - 1]
                                + this.area[i - 1][k]
                                + this.area[i - 1][k + 1]
                                + this.area[i][k - 1]
                                + this.area[i][k + 1]
                                + this.area[i + 1][k - 1]
                                + this.area[i + 1][k]
                                + this.area[i + 1][k + 1]
                            ) / 9) / 1.89
                    }
                }
            }
        }
        averagingGrid()

        //Делает светлые ячейки светлее, темные темнее
        const increaseContrast = () => {
            for (let i = 0; i < width; i++) {
                for (let k = 0; k < height; k++) {
                    const difference = Math.floor(Math.pow(1 - Math.abs(this.area[i][k] - separationThreshold) / separationThreshold, contrast) * separationThreshold);
                    this.area[i][k] = this.area[i][k] > separationThreshold ? discretization - difference : difference
                }
            }
        }
        increaseContrast()

        return this.area
    }
}