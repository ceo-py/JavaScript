function enoughTime(array) {
    const [movieName, duration, lunchBreak] = array

    const timeForLunch = Number(lunchBreak) * (1 / 8)
    const breakTime = Number(lunchBreak) * (1 / 4)

    const timeLeft = Number(lunchBreak) - timeForLunch - breakTime
    const timeDifference = Math.abs(timeLeft - Number(duration))

    if (timeLeft >= duration) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeDifference)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeDifference)} more minutes.`)
    }
}

enoughTime(["Game of Thrones",
    "60",
    "96"])