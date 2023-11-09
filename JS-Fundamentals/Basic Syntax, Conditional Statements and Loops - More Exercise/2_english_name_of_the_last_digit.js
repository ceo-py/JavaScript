function englishNameOfTheLastDigit(number) {
    const stringNumber = number.toString()
    const numberName = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    }
    console.log(numberName[stringNumber[stringNumber.length - 1]])
}

englishNameOfTheLastDigit(1)