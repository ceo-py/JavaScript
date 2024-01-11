function movieTickets(param) {
    const [number_one, number_two, number] = param.map(Number);

    const n = Math.floor(number / 2);

    for (let i = number_one; i < number_two; i++) {
        const n_one = String.fromCharCode(i);

        for (let o = 1; o < number; o++) {
            for (let p = 1; p < n; p++) {
                if (i % 2 !== 0 && (i + o + p) % 2 !== 0) {
                    console.log(`${n_one}-${o}${p}${i}`);
                }
            }
        }
    }

}

movieTickets([])