function heroicInventory(heroInput) {
    const output = []
    heroInput.forEach(hero => {
        const [name, level, items] = hero.split(' / ').map(x => isNaN(x) ? x : Number(x))
        output.push({
            name, level,
            items: items? items.split(', '): []
        })
    })
    console.log(JSON.stringify(output))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])