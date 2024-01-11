function aluminiumJoinery(param) {
    const [numJoinery, typeJoinery, typeDelivery] = param.map(x => isNaN(x) ? x : Number(x));
    let price = 0;

    if (typeJoinery === "90X130") {
        price = 110;
        if (30 < numJoinery && numJoinery <= 60) {
            price *= (1 - 0.05);
        } else if (numJoinery > 60) {
            price *= (1 - 0.08);
        }
    } else if (typeJoinery === "100X150") {
        price = 140;
        if (40 < numJoinery && numJoinery <= 80) {
            price *= (1 - 0.06);
        } else if (numJoinery > 80) {
            price *= (1 - 0.10);
        }
    } else if (typeJoinery === "130X180") {
        price = 190;
        if (20 < numJoinery && numJoinery <= 50) {
            price *= (1 - 0.07);
        } else if (numJoinery > 50) {
            price *= (1 - 0.12);
        }
    } else if (typeJoinery === "200X300") {
        price = 250;
        if (25 < numJoinery && numJoinery <= 50) {
            price *= (1 - 0.09);
        } else if (numJoinery > 50) {
            price *= (1 - 0.14);
        }
    }

    if (numJoinery < 10) {
        console.log("Invalid order");
    } else {
        let totalPrice = price * numJoinery;
        if (typeDelivery === "With delivery") {
            totalPrice += 60;
        }
        if (numJoinery > 99) {
            totalPrice *= (1 - 0.04);
        }
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }

}

aluminiumJoinery([])