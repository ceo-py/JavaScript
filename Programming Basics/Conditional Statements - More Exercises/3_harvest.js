function calculateHarvest(input) {
    const [vineyardSquareSize, grapesPerSquare, vineLtForSale, workers] = input.map(x => Number(x))

    const allGrapeHarvest = vineyardSquareSize * grapesPerSquare
    const totalVine = (allGrapeHarvest * 0.40) / 2.5
    const differenceVine = Math.abs(vineLtForSale - totalVine)

    if (totalVine >= vineLtForSale) {
        const vinePerWorker = differenceVine / workers

        console.log(`Good harvest this year! Total wine: ${parseInt(totalVine)} liters.`)
        console.log(`${Math.ceil(differenceVine)} liters left -> ${Math.ceil(vinePerWorker)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${parseInt(differenceVine)} liters wine needed.`)
    }
}

calculateHarvest(['650', '2', '175', '3'])