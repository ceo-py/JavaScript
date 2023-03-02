function foodDeliveryPrice(array) {
    const [numberChickenMenus, numberFishMenus, numberVegetarianMenus] = array.map(x => Number(x))

    const chickenMenuPrice = 10.35
    const fishMenuPrice = 12.40
    const vegetarianMenuPrice = 8.15
    const desertPrice = 0.20
    const delivery = 2.50

    const chickenMenuSum = numberChickenMenus * chickenMenuPrice
    const fishMenuSum = numberFishMenus * fishMenuPrice
    const vegetarianMenuSum = numberVegetarianMenus * vegetarianMenuPrice

    const totalMenuSum = chickenMenuSum + fishMenuSum + vegetarianMenuSum
    const desertSum = totalMenuSum * desertPrice

    const totalSumToPay = totalMenuSum + desertSum + delivery

    console.log(totalSumToPay)

}

foodDeliveryPrice(["2 ", "4 ", "3 "])
