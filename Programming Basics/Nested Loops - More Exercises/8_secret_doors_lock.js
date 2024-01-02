function secretDoor(param) {
    const [numberOne, numberTwo, numberThree] = param.map(Number)
    for (let hundreds = 1; hundreds <= numberOne; hundreds++) {
        for (let tens = 1; tens <= numberTwo; tens++) {
            for (let units = 1; units <= numberThree; units++) {
                if (hundreds % 2 ===0 && units % 2 ===0 && [2, 3, 5, 7].includes(tens)) {
                    console.log(`${hundreds} ${tens} ${units}`)
                }
            }
        }
    }
}

secretDoor([3, 5, 5])