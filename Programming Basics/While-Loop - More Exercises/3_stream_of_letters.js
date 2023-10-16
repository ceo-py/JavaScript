function streamOfLetters(strings) {
    let [output, c, o, n, letter] = ['', 0, 0, 0, strings.shift()]

    while (letter !== 'End') {
        if ((letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ||
            (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {
            if (letter === 'c' && c === 0) c += 1
            else if (letter === 'o' && o === 0) o += 1
            else if (letter === 'n' && n === 0) n += 1
            else output += letter
            if (c > 0 && o > 0 && n > 0){
                c = 0
                o = 0
                n = 0
                process.stdout.write(`${output} `)
                output = ''
            }
        }
        letter = strings.shift()
    }
}

streamOfLetters([
   '%',
'!',
'c',
'^',
'B',
'`',
'o',
'%',
'o',
'o',
'M',
')',
'{',
'n',
'\\',
'A',
'D',
'End',
])