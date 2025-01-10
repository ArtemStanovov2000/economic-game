type ConfigData = {
    gameMap: {
        blockSize: number,
        widht: number,
        height: number,
        color: {
            discretization: number,
            startColor: string,
            endColor: string,
            separationThreshold: number
        }
    }
}

export const configData: ConfigData = {
    gameMap: {
        blockSize: 2,
        widht: 400,
        height: 300,
        color: {
            discretization: 255,
            startColor: "#d4c433",
            endColor: "#136116",
            separationThreshold: 130
        }
    }
}