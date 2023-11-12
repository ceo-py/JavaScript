function replaceRepeatingChars(string) {
    let newString = ''
    for (let i = 0; i < string.length; i += 1) {
        const currentLetter = string[i]
        const currentNextLetter = string[i + 1]
        if (currentLetter !== currentNextLetter) newString += currentLetter
    }
    console.log(newString)
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')