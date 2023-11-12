function race(raceList) {
    raceList.pop()
    const racers = raceList.shift().split(', ').map(name => ({name, distance: 0}));
    const regex = /[a-zA-Z]+|\d+/g
    const placePos = {
        0: '1st', 1: '2nd', 2: '3rd',
    }

    while (raceList.length > 0) {
        let [letters, numbers] = ['', 0]
        raceList.shift().match(regex).forEach(x => isNaN(x) ? letters += x : numbers += x)
        const foundRacer = racers.find(x => x.name === letters)
        if (foundRacer) foundRacer.distance += eval(numbers.split('').join('+'))
    }
    racers.sort((a, b) => b.distance - a.distance).forEach((x, i) => i < 3 ? console.log(`${placePos[i]} place: ${x.name}`) : null)
}

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race'])