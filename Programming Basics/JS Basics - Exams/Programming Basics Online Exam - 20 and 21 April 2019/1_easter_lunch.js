function easterLunch(param) {
    const [cozunaci, numbersEggs, cookiesKg] = param.map(Number)
    const cozunaciPrice = 3.2;
    const crust12EggsPrice = 4.35;
    const cookiesKgPrice = 5.4;
    const paintEggsPrice = 0.15;

    const cozunaciTotal = cozunaci * cozunaciPrice;
    const crust12EggsTotal = crust12EggsPrice * numbersEggs;
    const cookiesKgTotal = cookiesKgPrice * cookiesKg;
    const paintEggsTotal = paintEggsPrice * numbersEggs * 12;

    const total = cozunaciTotal + crust12EggsTotal + cookiesKgTotal + paintEggsTotal;
    console.log(`${total.toFixed(2)}`);
}

easterLunch([])