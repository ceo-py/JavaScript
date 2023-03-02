function addNumbersFromString(string) {
    string = string[0]
    let sum = 0
    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i])
    }

    console.log(`The sum of the digits is:${sum}`)
}

addNumbersFromString(["1234"])
