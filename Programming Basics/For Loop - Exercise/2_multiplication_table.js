function multiplicationTableWithNumber(number) {
    number = Number(number)

    for (let i = 1; i < 11; i++) {
        console.log(`${i} * ${number} = ${i * number}`)
    }
}

multiplicationTableWithNumber(["5"])