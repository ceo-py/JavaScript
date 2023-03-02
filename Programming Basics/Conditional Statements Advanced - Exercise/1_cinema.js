function cinemaReturn(array) {
    const [typeView, rows, cols] = array.map(x => isNaN(x) ? x : Number(x))
    let priceTicket = 0

    if (typeView === 'Premiere') {
        priceTicket = 12
    } else if (typeView === 'Normal') {
        priceTicket = 7.50
    } else if (typeView === 'Discount') {
        priceTicket = 5
    }

    const totalSum = rows * cols * priceTicket
    console.log(`${totalSum.toFixed(2)}\nleva`)
}

cinemaReturn(["Premiere", "10", "12"])

