function matchDates(datesString) {
    const datesStringList = datesString[0].split(' ')
    const regex = /(?<Day>[0-9]{2})([.\-/])(?<Month>[A-Za-z]{3})(\2)(?<Year>[0-9]{4})\b/g
    while (datesStringList.length > 0) {
        const date = datesStringList.shift()
        const foundDate = regex.exec(date)
        let a = (date.match(regex))
        if (foundDate) console.log(`Day: ${foundDate.groups.Day}, Month: ${foundDate.groups.Month}, Year: ${foundDate.groups.Year}`)

    }
}

matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']

)