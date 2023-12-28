function logistic(list) {
    Number(list.shift())
    const [vanPrice, truckPrice, trainPrice] = [200, 175, 120]
    let [vanLoads, truckLoads, trainLoads] = [0, 0, 0]
    for (let ton of list) {
        ton = Number(ton)
        if (ton <= 3) {
            vanLoads += ton
        } else if (ton <= 11) {
            truckLoads += ton
        } else if (ton >= 12) {
            trainLoads += ton
        }
    }
    const totalTons = vanLoads + truckLoads + trainLoads
    const average = (vanLoads * vanPrice + truckLoads * truckPrice + trainLoads * trainPrice) / totalTons
    console.log(`${average.toFixed(2)}`)
    console.log(`${(vanLoads/totalTons*100).toFixed(2)}%`)
    console.log(`${(truckLoads/totalTons*100).toFixed(2)}%`)
    console.log(`${(trainLoads/totalTons*100).toFixed(2)}%`)
}

logistic(['4', '1', '5', '16', '3'])