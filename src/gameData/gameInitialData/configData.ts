type ConfigData = {
    gameMap: {
        blockSize: number,
        width: number,
        height: number,
        color: {
            discretization: number,
            separationThreshold: number,
            averageNumber: number,
            contrast: number,
            ratesNumber:  number[]
        }
    },
    controls: {
        moveLeft: "a"
        moveRight: string,
        moveTop: string,
        moveBottom: string,
        moveCenter: string
    }
}

export const configData: ConfigData = {
    gameMap: {
        blockSize: 40,
        width: 400, //Только кратные 100 значение
        height: 300, //Только кратные 100 значение
        color: {
            discretization: 100,
            separationThreshold: 50, // Максимум 100
            averageNumber: 15,
            contrast: 100,
            ratesNumber: [25, 10, 5, 2]
        }
    },
    controls: {
        moveLeft: "a",
        moveRight: "d",
        moveTop: "w",
        moveBottom: "s",
        moveCenter: "x"
    }
}