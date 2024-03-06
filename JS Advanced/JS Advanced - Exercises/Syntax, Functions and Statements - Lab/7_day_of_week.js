function dayOfWeek(input) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const correctDay = days.indexOf(input)
    console.log(`${correctDay !== -1? correctDay + 1: 'error'}`)
}