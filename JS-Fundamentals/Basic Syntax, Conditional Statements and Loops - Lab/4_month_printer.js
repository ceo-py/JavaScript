function monthPrinter(month) {
    const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December']
    console.log(months.length < month? 'Error!': months[month])
}

monthPrinter(12)


// function solve(day) {
//         const calendar = {
//         1: 'January',
//         2: 'February',
//         3: 'March',
//         4: 'April',
//         5: 'May',
//         6: 'June',
//         7: 'July',
//         8: 'August',
//         9: 'September',
//         10: 'October',
//         11: 'November',
//         12: 'December',
//     }
//     console.log(calendar.hasOwnProperty(day) ? calendar[day]: 'Error!')
// }


// function solve(day) {
//     let calendar = {
//         1: 'January',
//         2: 'February',
//         3: 'March',
//         4: 'April',
//         5: 'May',
//         6: 'June',
//         7: 'July',
//         8: 'August',
//         9: 'September',
//         10: 'October',
//         11: 'November',
//         12: 'December',
//     }
//     if (day < 1 || day > 12) {
//         console.log('Error!')
//     }else {
//         console.log(calendar[day])
//     }
//
// }

// solve(12)