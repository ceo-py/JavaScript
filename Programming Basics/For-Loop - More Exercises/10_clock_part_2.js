function clockPart2() {
    const [hours, minutes, seconds] = [23, 59, 59]
    for (let hour = 0; hour <= hours; hour++) {
        for (let minute = 0; minute <= minutes; minute++) {
            for (let second = 0; second <= seconds; second++) {
                console.log(`${hour} : ${minute} : ${second}`)
            }
        }
    }
}

clockPart2()