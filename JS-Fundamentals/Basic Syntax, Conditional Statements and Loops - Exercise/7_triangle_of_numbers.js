function solve(number) {
    for (let x = 1; x <= Number(number); x += 1) {
        for (let y = 1; y <= x; y += 1) {
            process.stdout.write(`${x} `)
        }
        console.log()
    }
}

solve('20')