function star(param) {
    const number = Number(param)
    for (let row = 1; row <= number; row++) {
        if (row === 1) {
            console.log(" ".repeat(number - row) + "*".repeat(row));
        } else {
            console.log(" ".repeat(number - row) + "* ".repeat(row));
        }
    }

    for (let rows = 0; rows < number - 1; rows++) {
        if (rows === 0) {
            console.log(" ".repeat(number - (number - 1)) + "* ".repeat(number - 1));
        } else {
            console.log(" ".repeat(rows + 1) + "* ".repeat(number - rows - 1));
        }
    }
}