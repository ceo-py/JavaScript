function computerStore(input) {
    let [totalSum, data] = [0, input.map(x => isNaN(x) ? x : Number(x))]

    for (const price of data) {
        if ('special, regular'.includes(price)) break
        price > 0 ? totalSum += price : console.log('Invalid price!')
    }
    let taxes = totalSum * 0.2
    let discount = data.pop() === 'special' ? 0.9 : 1
    if (totalSum === 0) {
        console.log('Invalid order!')
    } else {
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log("-----------")
        console.log(`Total price: ${((totalSum + taxes) * discount).toFixed(2)}$`)
    }
}


computerStore(['regular'])