function equalOddEven(array) {
    const [six_num_s, six_num_e] = array.map(x => Number(x))

    for (let num = six_num_s; num <= six_num_e; num++) {
        let num_l = num.toString().split('').map(Number)
        let odd_sum = num_l[0] + num_l[2] + num_l[4]
        let even_sum = num_l[1] + num_l[3] + num_l[5]
        if (odd_sum === even_sum) {
            process.stdout.write(`${num} `)
        }
    }
}

equalOddEven(["100000",
    "100050"])