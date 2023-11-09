function login(input) {
    let [userName, blockCounter] = [input.shift(), 0]
    for (const x of input) {
        if (userName === x.split("").reverse().join("")) {
            console.log(`User ${userName} logged in.`)
            break
        }
        blockCounter += 1
        if (blockCounter === 4 ) {
            console.log(`User ${userName} blocked!`)
            break
        }
        console.log('Incorrect password. Try again.')
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])