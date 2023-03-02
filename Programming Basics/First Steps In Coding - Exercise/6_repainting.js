function repaintingLivingRoom(array) {
    let [neededNylonKvm, neededPaintLitters, thinnerLitters, hoursOfWork] = array.map(x => Number(x))
    let protectingNylonPricePerKvm = 1.50
    let paintPricePerLitter = 14.50
    let thinnerPricePerLitter = 5.00


    let addedNylonKvm = 2
    let addedPaint = 1.10
    let addedBags = 0.40

    let naylonSum = (neededNylonKvm + addedNylonKvm) * protectingNylonPricePerKvm
    let paintSum = (neededPaintLitters * addedPaint) * paintPricePerLitter
    let thinnerSum = thinnerLitters * thinnerPricePerLitter

    let totalSumItems = naylonSum + paintSum + thinnerSum + addedBags
    let pricePerHourForWorkers = totalSumItems * 0.30
    let totalSumToPay = pricePerHourForWorkers * hoursOfWork + totalSumItems

    console.log(totalSumToPay)

}

repaintingLivingRoom(["10 ",
"11 ",
"4 ",
"8 "])
