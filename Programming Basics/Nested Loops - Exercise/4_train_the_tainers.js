function scoreInformation(array) {

    let counter = 0
    let i = 0
    let counter_all = 0
    let number_jury = Number(array.shift())
    let presentation_name = array[i]

    while (presentation_name !== "Finish") {
        let average = 0
        let counter_medium = 0;
        for (let number = 0; number < number_jury; number++) {
            counter += 1
            i += 1
            let degree_mark = Number(array[i])
            counter_all += degree_mark
            counter_medium += degree_mark
            average = counter_medium / number_jury
        }
        console.log(`${presentation_name} - ${average.toFixed(2)}.`)
        i += 1
        presentation_name = array[i]
    }
    let average = counter_all / counter
    console.log(`Student's final assessment is ${average.toFixed(2)}.`)
}

scoreInformation(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
