export class Area {
    private area: number[][] = []
    private colorArea: string[][] = []

    constructor() {}

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
                this.colorArea.push(stringColor)
            }
        }
        createArea()

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

        const averagingGrid = () => {
            for (let i = 0; i < average; i++) {
                for (let i = 1; i < this.area.length - 1; i++) {
                    for (let k = 1; k < this.area[i].length - 1; k++) {
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

        const increaseContrast = () => {
            for (let i = 0; i < this.area.length; i++) {
                for (let k = 0; k < this.area[i].length; k++) {
                    const difference = Math.pow(1 - Math.abs(this.area[i][k] - separationThreshold) / separationThreshold, contrast) * separationThreshold;
                    this.area[i][k] = this.area[i][k] > separationThreshold ? discretization - difference : difference
                }
            }
        }
        increaseContrast()

        const createColor = () => {
            const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    
            const convertHexToNumber = (color: string) => {
                color = color.substring(1)
                const redPart = hexCode.indexOf(color[0]) * 16 + hexCode.indexOf(color[1])
                const greenPart = hexCode.indexOf(color[2]) * 16 + hexCode.indexOf(color[3])
                const bluePart = hexCode.indexOf(color[4]) * 16 + hexCode.indexOf(color[5])
    
                return [redPart, greenPart, bluePart]
            }
    
            const converNumberToHex = (numberColor: number) => {
                const firstChar = Math.floor(Math.floor(numberColor) / 16)
                const secondChar = Math.floor(numberColor) % 16
    
                return `${hexCode[firstChar]}${hexCode[secondChar]}`
            }
    
            const createColorTexture = (rate: number) => {
                const convertionStartColor = convertHexToNumber(startColor)
                const convertionEndColor = convertHexToNumber(endColor)
    
                const newColorRGB = []
                for (let i = 0; i < convertionStartColor.length; i++) {
                    newColorRGB.push(converNumberToHex(convertionStartColor[i] - (convertionStartColor[i] - convertionEndColor[i]) * (rate / discretization)))
                }
                return `#${newColorRGB.join("")}`
            }
    
            for (let i = 0; i < this.area.length; i++) {
                for (let k = 0; k < this.area[i].length; k++) {
                    this.colorArea[i][k] = createColorTexture(this.area[i][k])
                }
            }
        }
        createColor()

        return this.colorArea
    }
}