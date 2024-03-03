function heroesOfCodeAndLogicVII(input) {
    const [numberHeroes, heroesInfo] = [parseInt(input.shift()), {}];

    const commands = {
        CastSpell: (heroName, mpNeeded, spellName) => {
            if (mpNeeded > heroesInfo[heroName][1]) {
                return `${heroName} does not have enough MP to cast ${spellName}!`;
            }
            heroesInfo[heroName][1] -= mpNeeded;
            return `${heroName} has successfully cast ${spellName} and now has ${heroesInfo[heroName][1]} MP!`;
        },
        TakeDamage: (heroName, damage, attacker) => {
            heroesInfo[heroName][0] -= damage;
            if (heroesInfo[heroName][0] > 0) {
                return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesInfo[heroName][0]} HP left!`;
            }
            delete heroesInfo[heroName];
            return `${heroName} has been killed by ${attacker}!`;
        },
        Recharge: (heroName, amount) => {
            if (heroesInfo[heroName][1] + amount > 200) amount = 200 - heroesInfo[heroName][1];
            heroesInfo[heroName][1] += amount;
            return `${heroName} recharged for ${amount} MP!`;
        },
        Heal: (heroName, amount) => {
            if (heroesInfo[heroName][0] + amount > 100) {
                amount = 100 - heroesInfo[heroName][0];
            }
            heroesInfo[heroName][0] += amount;
            return `${heroName} healed for ${amount} HP!`;
        }
    }

    for (let i = 0; i < numberHeroes; i++) {
        const [heroName, ...info] = input.shift().split(' ');
        heroesInfo[heroName] = info.map(x => isNaN(x) ? x : parseInt(x));
    }


    let command = input.shift();
    while (command !== "End") {
        const [commandType, ...info] = command.split(" - ").map(x => isNaN(x) ? x : Number(x));
        console.log(commands[commandType](...info));
        command = input.shift();
    }

    for (let hero in heroesInfo) {
        console.log(`${hero}\n  HP: ${heroesInfo[hero][0]}\n  MP: ${heroesInfo[hero][1]}`);
    }

}