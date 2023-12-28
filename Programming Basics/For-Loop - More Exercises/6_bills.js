function bills(input) {
    const [months, list] = [Number(input.shift()), input.map(Number)]
    let electricityBill = 0

        // const electricityBill = eval(input.join('+'))

    for (const bill of list) {
        electricityBill += bill
    }
    const waterBill = months * 20
    const internetBill = months * 15
    const otherBill = (electricityBill + waterBill + internetBill) * 1.20

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`)
    console.log(`Water: ${waterBill.toFixed(2)} lv`)
    console.log(`Internet: ${internetBill.toFixed(2)} lv`)
    console.log(`Other: ${otherBill.toFixed(2)} lv`)
    console.log(`Average: ${((electricityBill + waterBill + internetBill + otherBill)/months).toFixed(2)} lv`)
}

bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22,])