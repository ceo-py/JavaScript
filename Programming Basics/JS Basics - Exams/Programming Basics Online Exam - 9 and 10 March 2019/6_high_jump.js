function highJump(param) {
    const targetHighJump = Number(param.shift())
    let [currentHighJump, unsuccessfulJumps, jumpsCounter, winner] = [targetHighJump - 30, 0, 0, false]

    while (unsuccessfulJumps < 3) {
        const jump = Number(param.shift())
        jumpsCounter++

        if (jump <= currentHighJump) {
            unsuccessfulJumps++
            continue
        }
        unsuccessfulJumps = 0

        if (currentHighJump >= targetHighJump) {
            winner = !winner
            break
        }
        currentHighJump += 5
    }

    if (winner) console.log(`Tihomir succeeded, he jumped over ${targetHighJump}cm after ${jumpsCounter} jumps.`)
    else console.log(`Tihomir failed at ${currentHighJump}cm after ${jumpsCounter} jumps.`)
}

highJump([250,
225,
    224,225,228,231,235,234,235
])