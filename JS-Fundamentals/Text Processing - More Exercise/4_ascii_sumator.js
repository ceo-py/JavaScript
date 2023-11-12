function asciiSumator(input) {
    let [char1, char2, string, asciiSum] = [input[0], input[1], input[2], 0]
    const startCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))
    const endCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))

    for (let i = 0; i < string.length; i++) {
        const currentCode = string.charCodeAt(i);
        if (currentCode > startCode && currentCode < endCode) asciiSum += currentCode
    }

    console.log(asciiSum);
}

asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
)