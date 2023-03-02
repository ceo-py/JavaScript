function checkWorkingTime(array) {
    const [hour, day] = array.map(x => isNaN(x) ? x : Number(x))
    let output = 'closed'

    if ('MondayTuesdayWednesdayThursdayFridaySaturday'.includes(day) && (hour >= 10 && hour <= 18)) {
        output = 'open'
    }

    console.log(output)
}

checkWorkingTime(["9",
"Monday"])
