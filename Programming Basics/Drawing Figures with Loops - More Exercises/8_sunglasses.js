function solve(param) {
    const number = Number(param)
    const connection = Math.ceil(number / 2);

    for (let row = 0; row < number; row++) {
        if (connection === row + 1) {
            console.log("*" + "/".repeat(number * 2 - 2) + "*" + "|".repeat(number) + "*" + "/".repeat(number * 2 - 2) + "*");
        } else if (row === 0 || number - 1 === row) {
            console.log("*".repeat(number * 2) + " ".repeat(number) + "*".repeat(number * 2));
        } else {
            console.log("*" + "/".repeat(number * 2 - 2) + "*" + " ".repeat(number) + "*" + "/".repeat(number * 2 - 2) + "*");
        }
    }
}

solve(5)