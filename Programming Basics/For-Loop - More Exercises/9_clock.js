function clock() {
    const [hours, minutes] = [23, 59]
    for (let hour =0; hour <= hours; hour++) {
        for (let minute =0; minute <= minutes; minute++) {
            console.log(`${hour} : ${minute}`)
        }
    }
}

clock()