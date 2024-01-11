function addBgs(param) {
    let [luggagePrice, luggageKg, daysTillTravel, luggageNumber] = param.map(Number);

    let additionalFee = 0;

    if (luggageKg < 10) {
        luggagePrice *= 0.20;
    } else if (luggageKg <= 20) {
        luggagePrice *= 0.50;
    }

    if (daysTillTravel < 7) {
        additionalFee = 1.40;
    } else if (daysTillTravel <= 30) {
        additionalFee = 1.15;
    } else if (daysTillTravel > 30) {
        additionalFee = 1.10;
    }

    const totalSum = (luggagePrice * additionalFee) * luggageNumber;
    console.log(`The total price of bags is: ${totalSum.toFixed(2)} lv.`);

}

addBgs([])