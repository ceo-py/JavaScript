function changeBureau(param) {
    const [numberBitcoin, numberChinaYan, commission] = param.map(Number);

    const oneBitcoinPrice = 1168;
    const oneChinaYanPrice = 0.15;
    const usdFixing = 1.76;
    const eurFixing = 1.95;
    const fee = commission / 100;

    const totalBitcoin = numberBitcoin * oneBitcoinPrice;
    const totalChinaYan = (numberChinaYan * oneChinaYanPrice) * usdFixing;
    let result = (totalBitcoin + totalChinaYan) / eurFixing;
    const feeAmount = result * fee;
    result -= feeAmount;

    console.log(`${result.toFixed(2)}`);

}

changeBureau([])