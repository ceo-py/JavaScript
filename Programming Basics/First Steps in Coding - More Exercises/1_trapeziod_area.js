function Solve(numbers) {
    let [b1, b2, h] = numbers.map(x => Number(x))
    console.log(`${(((b1 + b2) * h) / 2).toFixed(2)}`)
}

Solve(['8', '13', '7'])