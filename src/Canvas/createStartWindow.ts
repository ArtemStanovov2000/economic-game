export const createStartWindow = (ctx: CanvasRenderingContext2D | null, width: number, height: number) => {
    if (ctx !== null) {
        ctx.fillStyle = "#000005";
        ctx.fillRect(0, 0, width, height);
        ctx.stroke();

        const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

        const createHexColor = (numberColor: number) => {
            const firstChar = Math.floor(numberColor / 16)
            const secondChar = numberColor % 16

            return `${hexCode[firstChar]}${hexCode[secondChar]}`
        }

        const widhtFigure = 800
        const heightFigure = 600
        const rate = 100


        const createGridVectors = (width: number, height: number, rate: number) => {
            const grid = []
            const columnCount = Math.floor(width / rate)
            const rowCount = Math.floor(height / rate)
            for (let i = 0; i < columnCount; i++) {
                const row = []
                for (let i = 0; i < rowCount; i++) {
                    row.push(Math.random() - 0.5)
                }
                grid.push(row)
            }
            return grid
        }

        console.log(createGridVectors(widhtFigure, heightFigure, rate))

        for (let i = 0; i < widhtFigure; i++) {
            for (let k = 0; k < heightFigure; k++) {
                ctx.fillStyle = `#ff54ff`;
                ctx.fillRect((80 + i), (80 + k), 1, 1);
            }
        }
    }
}