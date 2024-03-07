function wordOccurrences(list) {
    const words = {}
    list.forEach(x => {
        if (!words.hasOwnProperty(x)) words[x] = 1
        else words[x] += 1
    })
    Object.entries(words).sort((a,b)=> b[1]-a[1])
        .forEach(([k, v]) => console.log(`${k} -> ${v} times`))
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])


// function wordOccurrences(list) {
//     const words = {};
//     list.forEach(word => words[word] = (words[word] || 0) + 1);
//     for (let word in words) {
//         console.log(`${word} -> ${words[word]} times`);
//     }
// }