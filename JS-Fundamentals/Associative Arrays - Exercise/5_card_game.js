function cardGame(list) {
    const values = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1,
    }
    const players = []
    list.forEach(x => {
        const [name, cards] = x.split(': ')
        const foundPlayer = players.filter((x => x.name === name))[0]
        const currentDrawCards = new Set(cards.split(', '))
        if (foundPlayer) {
            foundPlayer.cards = new Set([...foundPlayer.cards, ...currentDrawCards])
        } else players.push({name, cards: currentDrawCards})
    })
    players.forEach(x => {
        let sum = 0
        x.cards.forEach(x => sum += values[x.substring(0, x.length - 1)] * values[x[x.length - 1]])
        console.log(`${x.name}: ${sum}`)
    })
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD'])