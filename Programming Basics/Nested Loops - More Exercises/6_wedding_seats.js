function weddingSeats(input) {
    const [sectorEnd, sectorRow, spaceOddRow, sectorStart, placeStart] = [...input.map(x => isNaN(x) ? x : Number(x)), 65, 97]
    let [additionalRowCounter, additionalRowOdd, totalSeats] = [0, 2, 0]

    for (let sector = sectorStart; sector <= sectorEnd.charCodeAt(0); sector++) {
        additionalRowCounter++
        for (let row = 1; row < sectorRow + additionalRowCounter; row++) {
            for (let place = placeStart; place < (placeStart + spaceOddRow) + (row % 2 === 0 ? additionalRowOdd : 0); place++) {
                console.log(`${String.fromCharCode(sector)}${row}${String.fromCharCode(place)}`)
                totalSeats++
            }
        }
    }
    console.log(totalSeats)
}

weddingSeats(['B', '3', '2'])