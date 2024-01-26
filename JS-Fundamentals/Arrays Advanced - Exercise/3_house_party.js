function houseParty(array) {
    let listNames = []

    array.forEach(x => {
        const [name, ...rest] = x.split(' ')
        if (!rest.includes('not') && !listNames.includes(name)) {
            listNames.push(name)
        } else if (rest.includes('not') && !listNames.includes(name)) {
            console.log(`${name} is not in the list!`)
        } else if (rest.includes('not') && listNames.includes(name)) {
            listNames = listNames.filter(x => x !== name)
        } else if (listNames.includes(name)) {
            console.log(`${name} is already in the list!`)
        }
    })
    console.log(listNames.join('\n'))
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])