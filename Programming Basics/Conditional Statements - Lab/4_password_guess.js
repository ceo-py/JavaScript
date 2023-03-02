function guessThePassword(string) {
    const correctPhrase = 's3cr3t!P@ssw0rd'

    let result = 'Wrong password!'

    if (string[0] === correctPhrase) {
        result = 'Welcome'
    }

    console.log(result)
}

guessThePassword(["s3cr3t!P@ssw0rd"])
