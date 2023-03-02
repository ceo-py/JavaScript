function calculatingLetters(string) {
    string = string[0]
    let output = 0
    let letters = ' aeiou'

    for (let i = 0; i < string.length; i++) {
        let symbol = string[i]

        if (letters.includes(symbol)) {
            output += letters.indexOf(symbol)
        }
    }

    console.log(output)
}

calculatingLetters(["hello"])
