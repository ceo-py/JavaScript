function solve(list) {
    let [numberPC, madeSales, totalRating] = [list.shift(), 0, 0]


    list.forEach(x => {
        const sales = parseInt(x.slice(0, -1))
        const currentRating = parseInt(x.slice(-1))
        totalRating += currentRating

        if (currentRating === 3) {
            madeSales += sales * 0.5
        } else if (currentRating === 4) {
            madeSales += sales * 0.7
        } else if (currentRating === 5) {
            madeSales += sales * 0.85
        } else if (currentRating === 6) {
            madeSales += sales
        }
    })

    console.log(`${madeSales.toFixed(2)}`)
    console.log(`${(totalRating / numberPC).toFixed(2)}`)
}
