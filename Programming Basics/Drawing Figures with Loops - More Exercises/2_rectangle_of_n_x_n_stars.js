function star(input) {
    let number = Number(input)
    const toPrint = "*".repeat(number);

    for (let row = 0; row < number; row++) {
        console.log(toPrint);
    }
}


