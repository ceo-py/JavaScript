function solve(list) {
    const [massPercent, proteinPercent, vuglehidrati, totalCalories, waterPercent] = list.map(Number)

    const totalMass = ((massPercent / 100) * totalCalories) / 9
    const totalProtein = ((proteinPercent / 100) * totalCalories) / 4
    const totalVuglehidrati = ((vuglehidrati / 100) * totalCalories) / 4
    const footTotal = totalMass + totalProtein + totalVuglehidrati
    const caloriesPerGram = totalCalories / footTotal
    console.log(`${(caloriesPerGram * (1 - (waterPercent / 100))).toFixed(4)}`)
}
