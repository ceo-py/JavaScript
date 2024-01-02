function savePassword(param) {
    let [a, b, maxCount, result] = [...param.map(Number), '']
    outerLoop:
    for (let A = 35; A < 55; A++) {
        for (let B = 64; B < 96; B++) {
            for (let x = 1; x <= a; x++) {
                for (let y = 1; y <= b; y++) {
                    maxCount--
                    result += `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`
                    if (maxCount === 0 || (x === a && y === b)) {
                        break outerLoop;
                    }
                    A++
                    if (A > 55) A = 35
                    B++
                    if (B > 96) B = 64
                }
            }
        }
    }
    console.log(result)
}

savePassword([2, 3, 10])