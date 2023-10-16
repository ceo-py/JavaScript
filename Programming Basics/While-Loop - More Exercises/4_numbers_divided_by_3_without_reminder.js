function dividedBy3NoReminder() {
    let number = 1
    while (number < 100) {
        if (number % 3 === 0) console.log(number)
        number += 1
    }
}

dividedBy3NoReminder()