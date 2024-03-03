function memoryGame(input) {
    let elements = input.shift().split(' ').map(x => isNaN(x) ? x : Number(x))
    let [numberOfMoves, indexes] = [0, input.shift()]
    while (indexes !== 'end') {
        const currentElements = indexes.split(' ').map(Number)
        numberOfMoves += 1
        if (currentElements.some(x => x < 0 || x >= elements.length) || new Set(currentElements).size === 1) {
            const cutInHalf = Math.floor(elements.length / 2)
            const element_to_insert = `-${numberOfMoves}a`
            elements = [...elements.slice(0, cutInHalf), element_to_insert, element_to_insert, ...elements.slice(cutInHalf)]
            console.log("Invalid input! Adding additional elements to the board")
        } else if (elements[currentElements[0]] === elements[currentElements[1]]) {
            console.log(`Congrats! You have found matching elements - ${elements[currentElements[0]]}!`)
            if (currentElements[0] < currentElements[1]) currentElements[1] -= 1
            elements.splice(currentElements[0], 1)
            elements.splice(currentElements[1], 1)
        } else console.log("Try again!")
        if (elements.length === 0) break
        indexes = input.shift()
    }
    console.log(elements.length > 0 ? `Sorry you lose :(\n${elements.join(' ')}` : `You have won in ${numberOfMoves} turns!`)
}

memoryGame([
        "a 2 4 a 2 4",
        "0 3",
        "0 2",
        "0 1",
        "0 1",
        "end"
    ]
)