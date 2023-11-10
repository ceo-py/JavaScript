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