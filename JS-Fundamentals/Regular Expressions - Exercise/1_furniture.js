function furniture(furnitureList) {
    const regex = />>(?<furniture_name>[A-Za-z]+)<<(?<price>[0-9]+[\.0-9]*)!(?<quantity>[0-9]+)/g
    let totalSum = 0
    console.log('Bought furniture:')
    while (furnitureList.length > 0) {
        const data = furnitureList.shift()
        const foundFurniture = regex.exec(data)
        let a = (data.match(regex))
        if (!foundFurniture) continue
        console.log(foundFurniture.groups.furniture_name)
        totalSum += foundFurniture.groups.quantity * foundFurniture.groups.price
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])