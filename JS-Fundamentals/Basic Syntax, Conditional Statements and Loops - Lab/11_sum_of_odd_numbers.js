function summOddNumbers(number) {
    let [total, oddNumber] = [0, 1]

    for (let x = 0; x < number; x ++) {
        console.log(oddNumber)
        total += oddNumber
        oddNumber += 2
    }
    console.log(`Sum: ${total}`)
}