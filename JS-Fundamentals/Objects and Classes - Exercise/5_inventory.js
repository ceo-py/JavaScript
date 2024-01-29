function inventory(array) {
    const allHeroes = []
    class Hero {
        constructor(hero, level, items) {
            this.name = hero
            this.level = Number(level)
            this.items = items.split(', ')
        }
        details () {
            console.log(`Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items.join(', ')}`)
        }
    }
    array.forEach(x => {
        allHeroes.push(new Hero(...x.split(' / ')))
    })
    allHeroes.sort((a, b) => a.level - b.level).forEach(x => x.details())
}

inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])