function footballKit(input) {
    let [priceTshirt, targetSum] = input.map(Number);
    let short = 0.75 * priceTshirt
    let socks = 0.20 * short
    let shoes = (priceTshirt + short) * 2
    let total = (priceTshirt + short + socks + shoes) * 0.85
    if (total >= targetSum) {
        console.log(`Yes, he will earn the world-cup replica ball!`)
        console.log(`His sum is ${total.toFixed(2)} lv.`)
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`)
        console.log(`He needs ${(targetSum - total).toFixed(2)} lv. more.`)
    }
}