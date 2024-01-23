function numbersInRange(array) {
    const [totalNumbers, ...allNumbers] = array.map(x => Number(x))

    function calculatePercent(targetNumber, amount) {
        return `${((amount / targetNumber) * 100).toFixed(2)}%`
    }


    let [p1, p2, p3, p4, p5] = [0, 0, 0, 0, 0]

    allNumbers.forEach(x => {
        if (x < 200) {
            p1 += 1
        } else if (x < 400) {
            p2 += 1
        } else if (x < 600) {
            p3 += 1
        } else if (x < 800) {
            p4 += 1
        } else if (x >= 800) {
            p5 += 1
        }
    })
    console.log(calculatePercent(totalNumbers, p1))
    console.log(calculatePercent(totalNumbers, p2))
    console.log(calculatePercent(totalNumbers, p3))
    console.log(calculatePercent(totalNumbers, p4))
    console.log(calculatePercent(totalNumbers, p5))
}

numbersInRange(["3",
    "1",
    "2",
    "999"])






//
// function histogram(params) {
//     const arrayLen = Number(params.shift()) // params[0]
//     // let [p1, p2, p3, p4, p5] = [0, 0, 0, 0, 0]
//     const result = [0, 0, 0, 0, 0]
//
//     for (const iterator of params) {
//
//         const element = Number(iterator)
//         element < 200 ? result[0]++ :
//             element < 400 ? result[1]++ :
//                 element < 600 ? result[2]++ :
//                     element < 800 ? result[3]++ :
//                         element >= 800 ? result[4]++ : null

        // if (element < 200) {
        //     p1++
        // } else if (element < 400) {
        //     p2++
        // } else if (element < 600) {
        //     p3++
        // } else if (element < 800) {
        //     p4++
        // } else if (element >= 800) {
        //     p5++
        // }
    // }

    // for (let index = 3; index <= arrayLen; index+=2) {
    //     const element = Number(params[index])

    //     if (element < 200) {
    //         p1++
    //     } else if (element < 400) {
    //         p2++
    //     } else if (element < 600) {
    //         p3++
    //     } else if (element < 800) {
    //         p4++
    //     } else if (element >= 800) {
    //         p5++
    //     }
    // }
    // arrayLen = p1 + p2 + p3 + p4 + p5
    // for (const number of result) {
    //     console.log(`${(number / arrayLen * 100).toFixed(2)}%`);
    // }

    // result.forEach(x => console.log(`${(x / arrayLen * 100).toFixed(2)}%`))


    //     console.log(`${(p1 / arrayLen * 100).toFixed(2)}%`);
    //     console.log(`${(p2 / arrayLen * 100).toFixed(2)}%`);
    //     console.log(`${(p3 / arrayLen * 100).toFixed(2)}%`);
    //     console.log(`${(p4 / arrayLen * 100).toFixed(2)}%`);
    //     console.log(`${(p5 / arrayLen * 100).toFixed(2)}%`);
// }

// histogram(
//     [
//         "9",
//         "367",
//         "99",
//         "200",
//         "799",
//         "999",
//         "333",
//         "555",
//         "111",
//         "9"
//     ])
