function dayOfWeek(number) {
    const days = ['Invalid day!', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    console.log(`${days.length > number? days[number]: 'Invalid day!'}`)
}

dayOfWeek(0)


// function dayOfWeek(number) {
//     const days = ['Invalid day!', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     return days[number] || 'Invalid day!';
// }