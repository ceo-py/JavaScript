function pcStore(input) {
    let [priceCPU, priceVideoCard, priceRAM, countRAM, discount] = input.map(Number)
    let total = (priceCPU + priceVideoCard) * (1 - discount) + priceRAM * countRAM
    let finalPrice = total * 1.57
    console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`)
}