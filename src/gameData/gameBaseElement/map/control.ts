import { configData } from "../../gameInitialData/configData";

export class Control {
    private widthLeftIndex: number
    private widthRightIndex: number
    private heightTopIndex: number
    private heightBottomIndex: number

    constructor() {
        this.widthLeftIndex = 0
        this.widthRightIndex = 0
        this.heightTopIndex = 0
        this.heightBottomIndex = 0

    }

    moveIntoCenter() {
        const widhtCount = Math.floor(window.innerWidth / configData.gameMap.blockSize) + 2
        const heightCount = Math.floor(window.innerHeight / configData.gameMap.blockSize) + 2
        this.widthLeftIndex = Math.floor((configData.gameMap.width / 2) - widhtCount / 2)
        this.widthRightIndex = Math.floor((configData.gameMap.width / 2) + widhtCount / 2)
        this.heightTopIndex = Math.floor((configData.gameMap.height / 2) - heightCount / 2)
        this.heightBottomIndex = Math.floor((configData.gameMap.height / 2) + heightCount / 2)
        return { widthLeftIndex: this.widthLeftIndex, widthRightIndex: this.widthRightIndex, heightTopIndex: this.heightTopIndex, heightBottomIndex: this.heightBottomIndex }
    }

    moveLeft() {
        if(this.widthLeftIndex > 0) {
            this.widthLeftIndex = this.widthLeftIndex - 1
            this.widthRightIndex = this.widthRightIndex - 1
        }
        return { 
            widthLeftIndex: this.widthLeftIndex, 
            widthRightIndex: this.widthRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }

    moveRight() {
        if(this.widthRightIndex < configData.gameMap.width) {
            this.widthLeftIndex = this.widthLeftIndex + 1
            this.widthRightIndex = this.widthRightIndex + 1
        }
        return { 
            widthLeftIndex: this.widthLeftIndex, 
            widthRightIndex: this.widthRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }

    moveTop() {
        if(this.heightTopIndex > 0) {
            this.heightTopIndex = this.heightTopIndex - 1
            this.heightBottomIndex = this.heightBottomIndex - 1
        }
        return { 
            widthLeftIndex: this.widthLeftIndex, 
            widthRightIndex: this.widthRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }

    moveBottom() {
        if(this.heightBottomIndex < configData.gameMap.height) {
            this.heightTopIndex = this.heightTopIndex + 1
            this.heightBottomIndex = this.heightBottomIndex + 1
        }
        return { 
            widhtLeftIndex: this.widthLeftIndex, 
            widhtRightIndex: this.widthRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }

    getCurrentLocation () {
        return { 
            widthLeftIndex: this.widthLeftIndex, 
            widthRightIndex: this.widthRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }
}