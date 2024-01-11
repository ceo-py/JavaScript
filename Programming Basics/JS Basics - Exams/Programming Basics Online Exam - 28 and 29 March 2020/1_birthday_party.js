function birthdayParty(param) {
    const rentHall = Number(param);

    const cakePrice = rentHall * 0.20;
    const drinkPrice = cakePrice * 0.55;
    const animatorPrice = rentHall / 3;

    const totalPrice = rentHall + cakePrice + drinkPrice + animatorPrice;

    console.log(`${totalPrice.toFixed(1)}`);

}

birthdayParty([])