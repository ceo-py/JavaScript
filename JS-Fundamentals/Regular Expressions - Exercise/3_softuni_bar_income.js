function softUniBarIncome(peopleList) {
    peopleList.pop()
    const regex = /(%)(?<customer>[A-Z][a-z]+)\1([^\|\$\%\.]*)<(?<product>[\w]+)>([^\|\$\%\.]*)\|(?<count>[\d]+)\|([^\|\$\%\.]*)(?<price>[1-9]+[.0-9]*)\$/
    let totalIncome = 0
    while (peopleList.length> 0) {
        const personData = peopleList.shift()
        const foundPerson = regex.exec(personData)
        let a = (personData.match(regex))
        if (!foundPerson) continue
        const [name, product, count, price] = Object.values(foundPerson.groups)
        const currentPrice = count * price
        totalIncome += currentPrice
        console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`)
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])