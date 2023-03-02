function calculateExpensesAnimalFood(array) {
    let [dogPackage, catPackage] = array
    let dogExpenses = Number(dogPackage) * 2.50
    let catExpenses = Number(catPackage) * 4
    let totalExpenses = dogExpenses + catExpenses

    console.log(`${totalExpenses} lv.`)
}

calculateExpensesAnimalFood(["5 ", "4 "])
