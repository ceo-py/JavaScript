function charactersInRange(startChar, ednChar) {
    const result = []
    let [start, end] = [Math.min(startChar.charCodeAt(0) , ednChar.charCodeAt(0)), Math.max(startChar.charCodeAt(0), ednChar.charCodeAt(0))]
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i))
    }
    console.log(result.join(' '))
}

charactersInRange('a', 'd')