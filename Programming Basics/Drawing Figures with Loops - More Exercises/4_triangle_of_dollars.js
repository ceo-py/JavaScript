function dollars(input) {
    let number = Number(input)

    for (let row = 1; row <= number; row++) {
        console.log("$ ".repeat(row));
    }
}


