function meetings(list) {
    const output = {}

    for (const item of list) {
        const [day, name] = item.split(' ')
        if (day in output) {
            console.log(`Conflict on ${day}!`)
        } else {
            output[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const [key, value] of Object.entries(output)) {
        console.log(`${key} -> ${value}`)
    }
}

meetings()