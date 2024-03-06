function daysInAMonth(month, year) {
    const givenRange = new Date(year, month -1, 1)
    console.log(new Date(givenRange.getFullYear(), givenRange.getMonth() + 1, 0).getDate())
}

daysInAMonth(1, 2012)