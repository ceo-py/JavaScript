function passwordGenerator(params) {
    const [n, l, start] = [...params.map(Number), 97]
    let result = ''
    for (let s1 = 1; s1 < n; s1++) {
        for (let s2 = 1; s2 < n + 2; s2++) {
            for (let s3 = start; s3 < start + l; s3++) {
                for (let s4 = start; s4 < start + l; s4++) {
                    for (let s5 = 1; s5 < n + 3; s5++) {
                        if (s1 < s5 && s5 <= n && s5 > s2) {
                            result += `${s1}${s2}${String.fromCharCode(s3)}${String.fromCharCode(s4)}${s5} `
                        }
                    }
                }
            }
        }
    }
    console.log(result)
}

passwordGenerator([3, 1])