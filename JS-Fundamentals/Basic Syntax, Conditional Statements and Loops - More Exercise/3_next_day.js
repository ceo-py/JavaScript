function nextDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day + 1)
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
}

nextDay(2016, 9, 30)