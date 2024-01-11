function house(param) {
    const n = Number(param)
    let stars, lines;
    for (let roof = 0; roof < Math.ceil(n / 2); roof++) {

        if (roof === 0) {
            stars = n % 2 === 0 ? 2 : 1;
            lines = Math.floor((n - stars) / 2);
        } else {
            stars += 2;
            lines -= 1;
        }

        console.log("-".repeat(lines) + "*".repeat(stars) + "-".repeat(lines));
    }

    for (let base = 0; base < Math.floor(n / 2); base++) {
        const stars = n - 2;
        console.log("|" + "*".repeat(stars) + "|");
    }
}

house(3)