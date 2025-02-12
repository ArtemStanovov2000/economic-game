type ConfigData = {
    gameMap: {
        blockSize: number,
        width: number,
        height: number,
        colorGameBlock: string,
        colorGameBlockHover: string,
        resources: {
            treeChance: {
                discretization: number,
                separationThreshold: number,
                averageNumber: number,
                contrast: number,
                ratesNumber: number[]
            },
            oilChance: {
                discretization: number,
                separationThreshold: number,
                averageNumber: number,
                contrast: number,
                ratesNumber: number[]
            },
            gasChance: {
                discretization: number,
                separationThreshold: number,
                averageNumber: number,
                contrast: number,
                ratesNumber: number[]
            },
            ironChance: {
                discretization: number,
                separationThreshold: number,
                averageNumber: number,
                contrast: number,
                ratesNumber: number[]
            }
        }
    },
    controls: {
        moveLeft: string
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
        colorGameBlock: "#3f914c",
        colorGameBlockHover: "#4bb35c",
        resources: {
            treeChance: {
                discretization: 100,
                separationThreshold: 50, // Максимум 100
                averageNumber: 15,
                contrast: 100,
                ratesNumber: [25, 10, 5, 2]
            },
            oilChance: {
                discretization: 100,
                separationThreshold: 50, // Максимум 100
                averageNumber: 15,
                contrast: 100,
                ratesNumber: [25, 10, 5, 2]
            },
            gasChance: {
                discretization: 100,
                separationThreshold: 50, // Максимум 100
                averageNumber: 15,
                contrast: 100,
                ratesNumber: [25, 10, 5, 2]
            },
            ironChance: {
                discretization: 100,
                separationThreshold: 50, // Максимум 100
                averageNumber: 15,
                contrast: 100,
                ratesNumber: [25, 10, 5, 2]
            }
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