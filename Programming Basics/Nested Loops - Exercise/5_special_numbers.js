function specialNumberCheck(number) {
    number = Number(number)

    for (let n1 = 1; n1 < 9; n1++) {
        if (number % n1 === 0) {
            for (let n2 = 1; n2 < 9; n2++) {
                if (number % n2 === 0) {
                    for (let n3 = 1; n3 < 9; n3++) {
                        if (number % n3 === 0) {
                            for (let n4 = 1; n4 < 9; n4++) {
                                if (number % n4 === 0) {
                                    process.stdout.write(`${n1}${n2}${n3}${n4} `)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

specialNumberCheck(["3"])