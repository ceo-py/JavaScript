function primeNumberChecker(number) {
    let output = true
    if (number <= 1) return output

    for (let i = 2; i < Math.floor(number / 2); i++) {
        if (number % i === 0) {
            output = false
            break
        }
    }
    return output
}

primeNumberChecker(7)