function neededReadingHours(array) {
    let [bookTotalPages, pagesPerHour, days] = array
    let totalTimeNeeded = Number(bookTotalPages) / Number(pagesPerHour)
    let hoursPerDayNeeded = totalTimeNeeded / Number(days)
    console.log(hoursPerDayNeeded)

}

neededReadingHours(["212 ",
"20 ",
"2 "])