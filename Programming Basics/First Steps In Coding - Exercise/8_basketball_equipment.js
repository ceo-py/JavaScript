function basketballEquipment(yearTax) {
    yearTax = Number(yearTax)

    const basketballSneakers = yearTax * 0.60
    const basketballUniform = basketballSneakers * 0.80
    const basketballBall = basketballUniform / 4
    const basketballAccessories = basketballBall / 5

    const totalSumToPay = basketballSneakers + basketballUniform + basketballBall + basketballAccessories + yearTax

    console.log(totalSumToPay)
}

basketballEquipment(["365 "])
