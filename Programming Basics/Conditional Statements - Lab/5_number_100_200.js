function numberBetween100And200(number) {
    number = Number(number)

    let result = 'Greater than 200'

    if (number < 100) {
        result = 'Less than 100'
    } else if (number <= 200) {
        result = 'Between 100 and 200'
    }

    console.log(result)
}

numberBetween100And200(["201"])
