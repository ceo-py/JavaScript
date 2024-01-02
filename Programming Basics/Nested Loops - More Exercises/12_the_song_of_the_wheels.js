function theSongOfTheWheels(param) {
    const number = Number(param)
    let [passwordCounter, guessedPassword] = [0, null]
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a * b + c * d === number && a < b && c > d) {
                        passwordCounter++
                        process.stdout.write(`${a}${b}${c}${d} `)
                        if (passwordCounter === 4) {
                            guessedPassword = `\nPassword: ${a}${b}${c}${d}`
                        }
                    }
                }
            }
        }
    }
    console.log(guessedPassword ? guessedPassword : '\nNo!')
}

theSongOfTheWheels(11)