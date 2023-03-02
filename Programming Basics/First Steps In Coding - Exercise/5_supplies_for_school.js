function schoolItems(array) {
    let [packagePens, packageMarkers, litersCleaner, discount] = array.map(x => Number(x))
    let pensPrice = 5.80
    let markersPrice = 7.20
    let cleaningPrice = 1.20

    let pensTotalSum = packagePens * pensPrice
    let markersTotalSum = packageMarkers * markersPrice
    let cleaningTotalSum = litersCleaner * cleaningPrice
    discount /= 100

    let totalSum = (pensTotalSum + markersTotalSum + cleaningTotalSum) * (1 - discount)

    console.log(totalSum)
}

schoolItems(["2 ",
"3 ",
"4 ",
"25 "])
