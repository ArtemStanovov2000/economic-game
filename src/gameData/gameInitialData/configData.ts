type ConfigData = {
    gameMap: {
        blockSize: number,
        widht: number,
        height: number,
        color: {
            discretization: number,
            startColor: string,
            endColor: string,
            separationThreshold: number,
            averageNumber: number,
            contrast: number,
            ratesNumber:  number[]
        }
    }
}

export const configData: ConfigData = {
    gameMap: {
        blockSize: 4,
        widht: 400,
        height: 300,
        color: {
            discretization: 255,
            startColor: "#374720",
            endColor: "#152109",
            separationThreshold: 130,
            averageNumber: 10,
            contrast: 100,
            ratesNumber: [25, 10, 5, 2]
        }
    }
}