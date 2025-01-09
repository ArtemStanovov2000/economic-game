const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

export const createHexColor = (numberColor: number) => {
    if(numberColor > 255) {
        numberColor = 255
    }
    const firstChar = Math.floor(Math.floor(numberColor) / 16)
    const secondChar = Math.floor(numberColor) % 16

    return `${hexCode[firstChar]}${hexCode[secondChar]}`
}