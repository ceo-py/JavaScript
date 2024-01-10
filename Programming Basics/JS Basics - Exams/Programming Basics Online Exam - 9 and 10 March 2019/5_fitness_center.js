function fitnessCenter(param) {
    const jymVisitors = Number(param.shift())
    let [trainingPeople, products, back, chest, legs, abs, shake, bar] = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let person = 0; person < jymVisitors; person++) {
        const activity = param.shift()

        if ('Protein shake, Protein bar'.includes(activity)) products++
        else trainingPeople++

        if (activity === 'Back') back++
        else if (activity === 'Chest') chest++
        else if (activity === 'Legs') legs++
        else if (activity === 'Abs') abs++
        else if (activity === 'Protein shake') shake++
        else if (activity === 'Protein bar') bar++
    }
    console.log(`${back} - back`)
    console.log(`${chest} - chest`)
    console.log(`${legs} - legs`)
    console.log(`${abs} - abs`)
    console.log(`${shake} - protein shake`)
    console.log(`${bar} - protein bar`)
    console.log(`${((trainingPeople / jymVisitors) * 100).toFixed(2)}% - work out`)
    console.log(`${((products / jymVisitors) * 100).toFixed(2)}% - protein`)
}

fitnessCenter([10,
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs'
])