function calculatingProjectPreparation(array) {
    let [name, projects] = array
    let neededHours = Number(projects) * 3
    console.log(`The architect ${name} will need ${neededHours} hours to complete ${projects} project/s.`)
}

calculatingProjectPreparation(["George ",
"4 "])