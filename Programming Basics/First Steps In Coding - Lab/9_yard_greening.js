function calculateNeededSumGreening(greeningMeters) {
    greeningMeters = Number(greeningMeters)
    let totalSumNeeded = greeningMeters * 7.61
    let discount = totalSumNeeded * 0.18

    console.log(`The final price is: ${totalSumNeeded - discount} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}

calculateNeededSumGreening(["550"])
