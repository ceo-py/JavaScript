function workingOrRestingDay(day) {
    day = day[0]
    let output = 'Error'
    if ('MondayTuesdayWednesdayThursdayFriday'.includes(day)) {
        output = 'Working day'
    } else if ('SaturdaySunday'.includes(day)) {
        output = 'Weekend'
    }
    console.log(output)
}

workingOrRestingDay(["Monday"])
