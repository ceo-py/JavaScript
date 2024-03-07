function wordTracker(input) {
    const [wordsToCheck, words] = [input.shift().split(' '), {}]
    wordsToCheck.forEach(x => words[x] = input.filter(y => x === y).length)
    Object.entries(words).sort((a, b) => b[1] - a[1]).forEach(([word, count]) => console.log(`${word} - ${count}`))
}


// function wordTracker(input) {
//     const wordsToCheck = input.shift().split(' ');
//     const words = {};
//
//     for (let word of wordsToCheck) {
//         words[word] = (words[word] || 0) + 1;
//     }
//
//     const sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
//
//     for (let [word, count] of sortedWords) {
//         console.log(`${word} - ${count}`);
//     }
// }