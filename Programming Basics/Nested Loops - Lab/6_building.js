function buildFloors(array) {
    let [floors, roomsPerFloor] = array.map(x => Number(x))

    for (let f = floors; f > 0; f--) {
        for (let r = 0; r < roomsPerFloor; r++) {
            if (f === floors) {
                process.stdout.write(`L${f}${r} `);
            } else {
                if (f % 2 !== 0) {
                    process.stdout.write(`A${f}${r} `)
                } else {
                    process.stdout.write(`O${f}${r} `)
                }
            }
        }
        console.log()
    }
}

buildFloors(["6", "4"])
