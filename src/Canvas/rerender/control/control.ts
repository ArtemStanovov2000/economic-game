import { configData } from "../../../gameData/gameInitialData/configData"
import { GameData } from "../../../gameData/gameInitialData/initialData"

export const control = (key: string, gameData: GameData) => {
    switch (key) {
            case configData.controls.moveCenter:
                gameData.control.moveIntoCenter()
                break
    
            case configData.controls.moveTop:
                gameData.control.moveTop()
                break
    
            case configData.controls.moveBottom:
                gameData.control.moveBottom()
                break
    
            case configData.controls.moveLeft:
                gameData.control.moveLeft()
                break
    
            case configData.controls.moveRight:
                gameData.control.moveRight()
                break
        }
}