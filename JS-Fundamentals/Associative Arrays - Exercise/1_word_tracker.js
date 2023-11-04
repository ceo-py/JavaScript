function wordTracker(input) {
    const [wordsToCheck, words] = [input.shift().split(' '), {}]
    wordsToCheck.forEach(x => words[x] = input.filter(y => x === y).length)
    Object.entries(words).sort((a, b) => b[1] - a[1]).forEach(([word, count]) => console.log(`${word} - ${count}`))
}