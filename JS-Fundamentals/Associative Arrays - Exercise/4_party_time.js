function partyTime(strings) {

    const [regularList, vipList, partyIndex] = [[], [], strings.indexOf('PARTY')]
    strings.slice(0, partyIndex).forEach(x => isNaN(x[0]) ? regularList.push(x) : vipList.push(x))

    strings.slice(partyIndex + 1).forEach(x => {
        // if (regularList.includes(x)) regularList.splice(regularList.indexOf(x), 1)
        // else if (vipList.includes(x)) vipList.splice(vipList.indexOf(x), 1)
        regularList.splice(regularList.indexOf(x), regularList.includes(x) ? 1 : 0)
        vipList.splice(vipList.indexOf(x), vipList.includes(x) ? 1 : 0)
    })
    console.log(`${regularList.length + vipList.length}\n${vipList.concat(regularList).join('\n')}`)
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'

])