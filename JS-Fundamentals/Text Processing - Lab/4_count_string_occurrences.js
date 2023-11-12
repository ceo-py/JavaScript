function solve(string, word){
    const matches = string.match(RegExp('\\b' + word + '\\b', 'gi'))
    console.log(`${matches ? matches.length : 0}`)
}