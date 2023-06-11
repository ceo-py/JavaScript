function solve(list) {
    const [numberDays, foodLeft, deerOne, deerTwo, deerThree] = list.map(Number)

    const totalFoodNeeded = foodLeft - (numberDays * (deerOne + deerTwo + deerThree))

    console.log(totalFoodNeeded >= 0 ? `${Math.floor(totalFoodNeeded)} kilos of food left.` : `${Math.abs(Math.floor(totalFoodNeeded))} more kilos of food are needed.`)
}
