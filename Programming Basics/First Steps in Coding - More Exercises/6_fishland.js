function fishLandCalculate(numbers) {
    const [mackerelPricePerKg, spratsPricePerKg, bonitoKg, horseMackerelKg, musselsKg] = numbers.map(x => Number(x))

    const musselsKgPrice = 7.50;
    const totalMussels = musselsKg * musselsKgPrice;

    const bonitoKgPrice = (((mackerelPricePerKg * 0.60) + mackerelPricePerKg) * bonitoKg);
    const horseMackerelPrice = (((spratsPricePerKg * 0.80) + spratsPricePerKg) * horseMackerelKg);

    const totalBill = totalMussels + bonitoKgPrice + horseMackerelPrice;

    console.log(totalBill.toFixed(2));

}

fishLandCalculate(['6.90', '4.20', '1.5', '2.5', '1'])