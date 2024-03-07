function enoughBudget(array) {
    const [budget, videoCards, cpu, ram] = array.map(x => Number(x))

    const videoCardPrice = 250

    const videoCardSum = videoCards * videoCardPrice
    const cpuPrice = videoCardSum * 0.35
    const ramPrice = videoCardSum * 0.10

    const cpuSum = cpuPrice * cpu
    const ramSum = ramPrice * ram

    let totalSum = videoCardSum + cpuSum + ramSum


    if (videoCards > cpu) {
        totalSum *= 0.85
    }

    const moneyLeft = Math.abs(totalSum - budget).toFixed(2)


    if (totalSum <= budget) {
        console.log(`You have ${moneyLeft} leva left!`)
    } else {
        console.log(`Not enough money! You need ${moneyLeft} leva more!`)
    }
}

enoughBudget(["900", "2", "1", "3"])

// function enoughBudget([budget, videoCards, cpu, ram]) {
//     const videoCardPrice = 250;
//     const videoCardSum = videoCards * videoCardPrice;
//     const cpuPrice = videoCardSum * 0.35;
//     const ramPrice = videoCardSum * 0.10;
//     const cpuSum = cpuPrice * cpu;
//     const ramSum = ramPrice * ram;
//     let totalSum = videoCardSum + cpuSum + ramSum;
//
//     if (videoCards > cpu) {
//         totalSum *= 0.85;
//     }
//
//     const moneyLeft = Math.abs(totalSum - budget).toFixed(2);
//
//     if (totalSum <= budget) {
//         console.log(`You have ${moneyLeft} leva left!`);
//     } else {
//         console.log(`Not enough money! You need ${moneyLeft} leva more!`);
//     }
// }