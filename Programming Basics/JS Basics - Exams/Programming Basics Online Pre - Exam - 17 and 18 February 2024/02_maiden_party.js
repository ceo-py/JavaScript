function MaidenParty(input) {
    let [priceParty, countLoveSms, countRoses, countKeyHolder, countCaricature, countSurprise,] = input.map(Number);
    let discount = 1;
    let total = 0;
    if (countLoveSms + countRoses + countKeyHolder + countCaricature + countSurprise >= 25) {
        discount = 0.65;
    }
    total = (countLoveSms * 0.6 + countRoses * 7.2 + countKeyHolder * 3.6 + countCaricature * 18.2 + countSurprise * 22) * discount;

    total *= 0.9;
    if (priceParty <= total) {
        console.log(`Yes! ${(total - priceParty).toFixed(2)} lv left.`);
    } else console.log(`Not enough money! ${(priceParty - total).toFixed(2)} lv needed.`);
}