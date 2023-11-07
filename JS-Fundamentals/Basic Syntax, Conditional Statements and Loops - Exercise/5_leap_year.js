function leapYear(input) {
    const year = Number(input)
    console.log((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0) ? 'yes': 'no')
}

leapYear(4)