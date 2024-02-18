function grandpaStavri(params) {
    let [total, totalRakya] = [0, 0]
    for (let index = 1; index < params.length; index += 2) {
        const rakyaQuantity = Number(params[index])
        totalRakya += rakyaQuantity

        const rakyaDegrees = Number(params[index + 1])
        total += rakyaQuantity * rakyaDegrees
    }
    const degrees = total / totalRakya
    console.log(`Liter: ${totalRakya.toFixed(2)}`)
    console.log(`Degrees: ${degrees.toFixed(2)}`)
    console.log(degrees < 38 ? 'Not good, you should baking!' : degrees < 42 ? 'Super!' : 'Dilution with distilled water!')
}