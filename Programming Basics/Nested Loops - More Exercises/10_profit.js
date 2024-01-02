function profit(param) {
    const [coinsOne, coinsTwo, notesFive, lookingForSum] = param.map(Number)
    for (let c1 = 0; c1 <= coinsOne; c1++) {
        for (let c2 = 0; c2 <= coinsTwo; c2++) {
            const totalC2 = c2 * 2
            for (let notes = 0; notes <= notesFive; notes++) {
                const totalNotes = notes * 5
                if (c1 + totalC2 + totalNotes === lookingForSum) {
                    console.log(`${c1} * 1 lv. + ${c2} * 2 lv. + ${notes} * 5 lv. = ${lookingForSum} lv.$`)
                }
            }
        }
    }
}

profit([3, 2, 3, 10])