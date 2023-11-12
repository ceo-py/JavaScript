function treasureFinder(input) {
    const secretKey = input.shift().split(' ').map(Number)
    let currentMessage = input.shift()
    const secretKeyLength = secretKey.length

    while (currentMessage !== 'find') {
        const secretText = currentMessage.split('').map((x, i) => String.fromCharCode(x.charCodeAt(0) - secretKey[i % secretKeyLength])).join('')
        const [item, location] = [secretText.split('&')[1], secretText.split('<')[1].replace('>', '')]
        console.log(`Found ${item} at ${location}`)
        currentMessage = input.shift()
    }

}

treasureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"])