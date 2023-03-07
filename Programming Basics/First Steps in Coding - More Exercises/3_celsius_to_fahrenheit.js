function convertTemp(number) {
    number = Number(number)

    console.log(`${(number * 1.8 + 32).toFixed(2)}`)

}

convertTemp(['25'])