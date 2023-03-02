function checkValidNumber(number) {
    number = Number(number[0])
    let output = 'invalid'

    if (number === 0 || number >= 100 && number <= 200) {
        output = ''
    }
    console.log(output)
}

checkValidNumber(["150"])
