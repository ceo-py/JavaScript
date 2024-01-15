function calculateHotelPrice(array) {
    let [month, nights] = array.map(x => isNaN(x) ? x : Number(x))
    let [apartmentPrice, studioPrice] = [0, 0]

    if ('May, October'.includes(month)) {
        studioPrice = 50
        apartmentPrice = 65
    } else if ('June, September'.includes(month)) {
        studioPrice = 75.20
        apartmentPrice = 68.70
    } else if ('July, August'.includes(month)) {
        studioPrice = 76
        apartmentPrice = 77
    }

    if ('May, October'.includes(month)) {
        if (nights > 14) {
            studioPrice *= 0.70
        } else if (nights > 7) {
            studioPrice *= 0.95
        }
    }

    if ('June, September'.includes(month) && nights > 14) {
        studioPrice *= 0.80
    }

    if (nights > 14) {
        apartmentPrice *= 0.90
    }

    studioPrice *= nights
    apartmentPrice *= nights

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

calculateHotelPrice(["June",
    "14"])



// function operationBetweenNumbers(array) {
//     let [numberOne, numberTwo, operator] = array.map(x => isNaN(x) ? x : Number(x))
//     let output = ''
//     const result = eval(`${numberOne}${operator}${numberTwo}`)
//     if (numberTwo !== 0 && '/%'.includes(operator)) {
//         output = `${numberOne} ${operator} ${numberTwo} = ${operator === '/' ? result.toFixed(2) : result}`
//     } else if ('+-*'.includes(operator)) {
//         output = `${numberOne} ${operator} ${numberTwo} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`
//     } else {
//         output = `Cannot divide ${numberOne} by zero`
//     }
//
//     console.log(output)
// }
