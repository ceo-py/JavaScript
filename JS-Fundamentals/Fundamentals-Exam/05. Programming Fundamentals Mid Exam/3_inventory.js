function inventory(arr) {
    let [collectedItems, input] = [arr.shift().split(', '), arr.shift()]

    while (input !== 'Craft!') {
        const [command, item] = input.split(' - ')
        const itemInCollection = collectedItems.includes(item.split(':')[0])

        if (command === 'Collect' && !itemInCollection) collectedItems.push(item)
        else if (command === 'Drop' && itemInCollection) collectedItems.splice(collectedItems.indexOf(item), 1)
        else if (command === 'Combine Items' && itemInCollection) {
            const [oldItem, newItem] = item.split(':')
            collectedItems.splice(collectedItems.indexOf(oldItem) + 1, 0, newItem)
        } else if (command === 'Renew' && itemInCollection) collectedItems.push(collectedItems.splice(collectedItems.indexOf(item), 1))
        input = arr.shift()
    }
    console.log(collectedItems.join(', '))
}