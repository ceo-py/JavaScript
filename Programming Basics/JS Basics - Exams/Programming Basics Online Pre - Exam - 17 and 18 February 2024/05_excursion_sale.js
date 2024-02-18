function excursionSale(input) {
    let [countSea, countMountain, total, package, index] = [Number(input[0]), Number(input[1]), 0, input[2], 3]
    while (package !== "Stop" && (countSea > 0 || countMountain > 0)) {
        if (package === "sea" && countSea > 0) {
            total += 680
            countSea--
        } else if (package === "mountain" && countMountain > 0) {
            total += 499
            countMountain--
        }
        package = input[index]
        index++
    }
    if (countSea + countMountain === 0) {
        console.log(`Good job! Everything is sold.`)
    }
    console.log(`Profit: ${total} leva.`)
}