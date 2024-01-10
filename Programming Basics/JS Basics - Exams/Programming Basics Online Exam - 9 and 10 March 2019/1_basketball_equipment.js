function basketballEquipment(taxYear) {
    const sneakersPrice = Number(taxYear) * 0.60
    const gear = sneakersPrice * 0.80
    const ball = gear / 4
    const accessories = ball / 5
    const total = Number(taxYear) + sneakersPrice + gear + ball + accessories
    console.log(`${total.toFixed(2)}`)
}


basketballEquipment('320')