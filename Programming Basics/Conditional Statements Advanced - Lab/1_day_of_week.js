function dayOfTheWeek(day) {
    day = day[0]
    let output = 'Error'

    if (day === '1') {
        output = 'Monday'
    } else if (day === '2') {
        output = 'Tuesday'
    } else if (day === '3') {
        output = 'Wednesday'
    } else if (day === '4') {
        output = 'Thursday'
    } else if (day === '5') {
        output = 'Friday'
    } else if (day === '6') {
        output = 'Saturday'
    } else if (day === '7') {
        output = 'Sunday'
    }
    console.log(output)
}

dayOfTheWeek(["1"])
