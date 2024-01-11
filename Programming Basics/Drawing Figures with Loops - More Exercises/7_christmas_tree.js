function tree(param) {
    const number = Number(param)
    for (let row = 0; row < number; row++) {
        if (row === 0) {
            console.log(" ".repeat(number) + " |");
            console.log(" ".repeat(number - 1) + "* | *");
        } else {
            console.log(" ".repeat(number - (row + 1)) + "*".repeat(row + 1) + " | " + "*".repeat(row + 1));
        }
    }
}