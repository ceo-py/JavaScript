function checkForPassword(array) {
    const [name, password, ...guessPasswords] = array

    let i = 0

    while (guessPasswords[i] !== password) {
        i += 1
    }

    console.log(`Welcome ${name}!`)

}

checkForPassword(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])