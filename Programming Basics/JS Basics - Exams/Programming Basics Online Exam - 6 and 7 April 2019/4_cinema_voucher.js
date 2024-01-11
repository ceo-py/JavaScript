function cinemaVoucher(param) {
    let [vouchers, movieTicketsCounter, itemsCounter, item] = [Number(param.shift()), 0, 0, param.shift()]

    while (item !== 'End' && vouchers > 0) {

        const itemLength = item.length

        if (itemLength > 8) {
            vouchers -= item.charCodeAt(0) + item.charCodeAt(1)

            if (vouchers >= 0) {
                movieTicketsCounter++
            }
        } else if (itemLength <= 8) {
            vouchers -= item.charCodeAt(0)

            if (vouchers >= 0) {
                itemsCounter++
            }
        }
        item = param.shift()
    }
    console.log(`${movieTicketsCounter}\n${itemsCounter}`)
}









// function cinemaVoucher(param) {
//     let [vouchers, movieTicketsCounter, itemsCounter, output] = [Number(param.shift()), 0, 0, null]
//
//     while (true) {
//         const item = param.shift()
//
//         if (item === 'End' || vouchers < 0) {
//             output = `${movieTicketsCounter}\n${itemsCounter}`
//             break
//         }
//         const itemLength = item.length
//
//         if (itemLength > 8) {
//             vouchers -= item.charCodeAt(0) + item.charCodeAt(1)
//
//             if (vouchers >= 0) {
//                 movieTicketsCounter++
//             }
//         } else if (itemLength <= 8) {
//             vouchers -= item.charCodeAt(0)
//             if (vouchers >= 0) {
//                 itemsCounter++
//             }
//         }
//         if (item === 'End' || vouchers < 0) {
//             output = `${movieTicketsCounter}\n${itemsCounter}`
//             break
//         }
//     }
//     console.log(output)
// }

cinemaVoucher(['300','Captain Marvel', 'popcorn', 'Pepsi'])