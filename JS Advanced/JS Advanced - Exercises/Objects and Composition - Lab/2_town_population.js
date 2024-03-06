function townPopulation(input) {
    const towns = {};

    for (const data of input) {
        const [town, population] = data.split(' <-> ').map(x => isNaN(x) ? x : Number(x))
        if (!towns.hasOwnProperty(town)) towns[town] = 0
        towns[town] += population
    }
    for (let [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])