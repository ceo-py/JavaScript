function tennisEquipment(param) {
    const [tennisRacketPrice, totalTennisRacket, numberTennisSneakers] = param.map(Number)
    const racketsTotalPrice = tennisRacketPrice * totalTennisRacket
    const oneSneakerPrice = tennisRacketPrice / 6
    const allSneakersPrice = oneSneakerPrice * numberTennisSneakers
    const totalPriceEquipment = racketsTotalPrice + allSneakersPrice + (racketsTotalPrice + allSneakersPrice) * 0.20
    const djokovicPrice = totalPriceEquipment / 8
    const sponsorsPrice = totalPriceEquipment * (7 / 8)
    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPrice)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`)
}

tennisEquipment(['850', '4', '2'])