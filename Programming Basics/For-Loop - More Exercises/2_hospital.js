function hospital(list) {
    const period = Number(list.shift())
    let [totalDoctors, treatedPatients, untreatedPatients, day] = [7, 0, 0, 1]

    for (let i = 0; i < period; i++) {
        if (day % 3 === 0 && treatedPatients < untreatedPatients) {
            totalDoctors++
        }
        let difference = totalDoctors - Number(list[i])
        // treatedPatients += difference >= 0? Number(list[i]): totalDoctors

        if (difference >= 0) {
            treatedPatients += Number(list[i])
        } else {
            treatedPatients += totalDoctors
            untreatedPatients += Math.abs(difference)
        }
        day++
    }
    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}

hospital(['4',
    '7',
    '27',
    '9',
    "1"])