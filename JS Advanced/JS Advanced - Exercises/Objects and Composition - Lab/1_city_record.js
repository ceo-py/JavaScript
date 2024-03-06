function cityRecord(...params) {
    const [name, population, treasury] = params

    return  {
        name: name,
        population: parseInt(population),
        treasury: parseInt(treasury)

    }

}