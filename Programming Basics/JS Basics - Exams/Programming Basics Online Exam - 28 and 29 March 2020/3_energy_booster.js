function energyBooster(param) {
    const [fruit, sizeSet, numberOrderSets] = param.map(x => isNaN(x)? x: Number(x));

    let price = 0;
    let numberInSet = 0;

    if (sizeSet === "small") {
        numberInSet = 2;
        if (fruit === "Watermelon") {
            price = 56;
        } else if (fruit === "Mango") {
            price = 36.66;
        } else if (fruit === "Pineapple") {
            price = 42.10;
        } else if (fruit === "Raspberry") {
            price = 20;
        }
    } else if (sizeSet === "big") {
        numberInSet = 5;
        if (fruit === "Watermelon") {
            price = 28.70;
        } else if (fruit === "Mango") {
            price = 19.60;
        } else if (fruit === "Pineapple") {
            price = 24.80;
        } else if (fruit === "Raspberry") {
            price = 15.20;
        }
    }

    let totalPrice = numberInSet * price * numberOrderSets;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.50;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}

energyBooster([])