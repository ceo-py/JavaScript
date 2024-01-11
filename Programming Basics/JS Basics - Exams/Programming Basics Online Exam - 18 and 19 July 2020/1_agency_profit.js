function agencyProfit(param) {
    const [airLine, adultsTicketNumber, kidsTicketNumber, adultsTicketPrice, tax] = param.map(x => isNaN(x) ? x : Number(x));

    const adultsSum = adultsTicketNumber * (adultsTicketPrice + tax);
    const kidsSum = kidsTicketNumber * (adultsTicketPrice * 0.30 + tax);
    const totalSum = (kidsSum + adultsSum) * 0.20;

    console.log(`The profit of your agency from ${airLine} tickets is ${totalSum.toFixed(2)} lv.`);

}

agencyProfit([])