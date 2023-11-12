function serializeString(input) {
    const result = []
    const findLetter = (letter) => result.find(x => x.name === letter)
    for (let i = 0; i < input[0].length; i += 1) {
        const foundLetter = findLetter(input[0][i])
        if (!foundLetter) result.push({name: input[0][i], indexes: [i]})
        else foundLetter.indexes.push(i)
    }
    result.find(x => console.log(`${x.name}:${x.indexes.join('/')}`))
}

serializeString(["abababa"])