function legendaryFarming(input) {
    const inputList = input.split(' ')
    const farmingItems = {
        legendary: {
            shards: 0, fragments: 0, motes: 0,
        }, stuff: {}, winner: {
            shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath', found: null
        }
    }
    for (let i = 0; i < inputList.length; i += 2) {
        const [value, item] = [Number(inputList[i]), (inputList[i + 1]).toLowerCase()]
        if (farmingItems.legendary.hasOwnProperty(item)) {
            farmingItems.legendary[item] += value
            if (farmingItems.legendary[item] >= 250) {
                farmingItems.legendary[item] -= 250
                farmingItems.winner.found = item
                break
            }
        } else farmingItems.stuff[item] = farmingItems.stuff[item] ? farmingItems.stuff[item] + value : value
    }
    if (farmingItems.winner.found) console.log(`${farmingItems.winner[farmingItems.winner.found]} obtained!`)
    const sortedLegItems = Object.entries(farmingItems.legendary).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .reduce((acc, [name, quantity]) => {acc[name] = quantity; return acc}, {})
    Object.entries(sortedLegItems).forEach(([k, v]) => console.log(`${k}: ${v}`))
    Object.keys(farmingItems.stuff).sort().forEach(x => console.log(`${x}: ${farmingItems.stuff[x]}`))
}

// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
)