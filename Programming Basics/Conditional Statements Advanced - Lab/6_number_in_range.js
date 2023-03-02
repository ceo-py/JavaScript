function checkNumberRange(number) {
    number = Number(number)
    let output = 'No'
    if (number !== 0 && number >= -100 && number <= 100) {
        output = 'Yes'
    }
    console.log(output)
}

checkNumberRange(["0"])