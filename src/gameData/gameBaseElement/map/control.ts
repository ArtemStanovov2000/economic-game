import { configData } from "../../gameInitialData/configData";

export class Control {
    private widhtLeftIndex: number
    private widhtRightIndex: number
    private heightTopIndex: number
    private heightBottomIndex: number

    constructor() {
        this.widhtLeftIndex = 0
        this.widhtRightIndex = 0
        this.heightTopIndex = 0
        this.heightBottomIndex = 0

    }

    getIntoCenter() {
        const widhtCount = Math.floor(window.innerWidth / configData.gameMap.blockSize) + 2
        const heightCount = Math.floor(window.innerHeight / configData.gameMap.blockSize) + 2
        this.widhtLeftIndex = Math.floor((configData.gameMap.widht / 2) - widhtCount / 2)
        this.widhtRightIndex = Math.floor((configData.gameMap.widht / 2) + widhtCount / 2)
        this.heightTopIndex = Math.floor((configData.gameMap.height / 2) - heightCount / 2)
        this.heightBottomIndex = Math.floor((configData.gameMap.height / 2) + heightCount / 2)
        return { widhtLeftIndex: this.widhtLeftIndex, widhtRightIndex: this.widhtRightIndex, heightTopIndex: this.heightTopIndex, heightBottomIndex: this.heightBottomIndex }
    }

    moveLeft() {
        if(this.widhtLeftIndex > 0) {
            this.widhtLeftIndex = this.widhtLeftIndex - 1
            this.widhtRightIndex = this.widhtRightIndex - 1
        }
        return { 
            widhtLeftIndex: this.widhtLeftIndex, 
            widhtRightIndex: this.widhtRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }

    moveRight() {
        if(this.widhtRightIndex < configData.gameMap.widht) {
            this.widhtLeftIndex = this.widhtLeftIndex + 1
            this.widhtRightIndex = this.widhtRightIndex + 1
        }
        return { 
            widhtLeftIndex: this.widhtLeftIndex, 
            widhtRightIndex: this.widhtRightIndex, 
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
            widhtLeftIndex: this.widhtLeftIndex, 
            widhtRightIndex: this.widhtRightIndex, 
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
            widhtLeftIndex: this.widhtLeftIndex, 
            widhtRightIndex: this.widhtRightIndex, 
            heightTopIndex: this.heightTopIndex, 
            heightBottomIndex: this.heightBottomIndex 
        }
    }
}