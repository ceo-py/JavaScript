function partyTime(strings) {
    const [regularList, vipList] = [[], []]
    strings.slice(0, strings.indexOf('PARTY')).forEach(x => isNaN(x[0])? regularList.push(x): vipList.push(x))
    strings.slice(strings.indexOf('PARTY') + 1).forEach(x => {
        regularList.splice(regularList.indexOf(x), 1)
        vipList.splice(vipList.indexOf(x), 1)
    })
    console.log(`${regularList.length + vipList.length}\n${vipList.concat(regularList).join('\n')}`)
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'

])