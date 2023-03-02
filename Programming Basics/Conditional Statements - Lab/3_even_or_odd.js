function evenOrOddNumber(number) {
    number = Number(number)
    let result = ''


    if (number % 2 ===0) {
        result = 'even'
    } else {
        result = 'odd'
    }

    console.log(result)
}

evenOrOddNumber((["2"]))
