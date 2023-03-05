function percentClaimersPerMountain(groups) {
    let [mountains, totalPeople] = [[0, 0, 0, 0, 0], 0]
    groups.shift()

    groups.forEach(x => {
        x = Number(x)
        totalPeople += x

        if (x <= 5) {
            mountains[0] += x
        } else if (x <= 12) {
            mountains[1] += x
        } else if (x <= 25) {
            mountains[2] += x
        } else if (x <= 40) {
            mountains[3] += x
        } else {
            mountains[4] += x
        }
    })

    mountains.forEach(x => {
        console.log(`${((x / totalPeople) * 100).toFixed(2)}%`)
    })

}

percentClaimersPerMountain(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
