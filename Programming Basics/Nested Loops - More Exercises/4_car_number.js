function carNumber(param) {
    const [start, end] = param.map(Number)
    let result = ''
    for (let f = start; f <= end; f++) {
        for (let s = start; s <= end; s++) {
            for (let t = start; t <= end; t++) {
                for (let l = start; l <= end; l++) {
                    if (
                        ((f % 2 === 0 && l % 2 !== 0) || (f % 2 !== 0 && l % 2 === 0)) &&
                        f > l &&
                        (s + t) % 2 === 0
                    ) {
                        result += `${f}${s}${t}${l} `;
                    }

                }
            }
        }
    }
    console.log(result)
}

carNumber([2, 3])