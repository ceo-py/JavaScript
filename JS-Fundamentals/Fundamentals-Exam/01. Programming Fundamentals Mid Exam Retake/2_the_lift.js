function theLift(input) {
    let [people, wagons] = [Number(input[0]), input[1].split(' ').map(Number)]
    for (let i = 0; i < wagons.length; i++) {
        const maxPeople = Math.min(4 - wagons[i], people)
        wagons[i] += maxPeople
        people -= maxPeople
    }
    if (people > 0) {
        console.log(`There isn\'t enough space! ${people} people in a queue!`)
    } else if (wagons.some(w => w < 4)) {
        console.log('The lift has empty spots!')
    }
    console.log(wagons.join(' '))
}

theLift([
 "20",
 "0 2 0"
])