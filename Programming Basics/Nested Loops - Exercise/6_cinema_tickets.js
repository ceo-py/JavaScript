function cinemaTickets(input) {
    let index = 0;
    let movieTitle = input[index];
    index++;
    let freeSpaces = Number(input[index]);
    let command = input[index];
    index++;
    let tickets = input[index];
    let standartSum = 0;
    let kidSum = 0;
    let studentSum = 0;
    let ticketsForTheMovie = 0;
    let percentageFull = 0;
    let isWatched = false;
    let totalTickets = 0;
    let standartPercentage = 0;
    let kidPercentage = 0;
    let studentPercentage = 0;
    let spaceSum = 0;

    while (movieTitle !== 'Finish') {
        isWatched = true;

        while (spaceSum < freeSpaces) {
            if (command === 'End' || command === 'Finish') {
                break;
            }
            switch (tickets) {
                case 'standard':
                    standartSum++;
                    break;
                case 'kid':
                    kidSum++;
                    break;
                case 'student':
                    studentSum++;
                    break;
            }
            spaceSum++;
            ticketsForTheMovie++;
            totalTickets++;
            index++;
            command = input[index];
            tickets = input[index];
            percentageFull = (ticketsForTheMovie / freeSpaces) * 100;
        }
        if (isWatched) {
            console.log(`${movieTitle} - ${percentageFull.toFixed(2)}% full.`);
            percentageFull = 0;
            ticketsForTheMovie = 0;
        }
        if (spaceSum < freeSpaces) {
            index++;
        }
        movieTitle = input[index];
        index++;
        freeSpaces = Number(input[index]);
        command = input[index];
        index++;
        spaceSum = 0;
        tickets = input[index];
    }
    studentPercentage = (studentSum / totalTickets) * 100;
    standartPercentage = (standartSum / totalTickets) * 100;
    kidPercentage = (kidSum / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standartPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercentage.toFixed(2)}% kids tickets.`);
}








//
//
//
//
// function cinemaCapacity(array) {
//     let [i, movie, capacity, ticket, studentTicket, standardTicket, kidTicket] = [0, array[0], 0, 0, 0, 0, 0]
//
//     while (movie !== 'Finish') {
//         i += 1
//         capacity = Number(array[i])
//         let [currentCapacity] = [0]
//         i += 1
//
//         while (capacity !== currentCapacity) {
//
//             ticket = array[i]
//             if (ticket === 'End') {
//                 break
//             }
//
//             currentCapacity += 1
//             i += 1
//
//             if (ticket === 'student') {
//                 studentTicket += 1
//             } else if (ticket === 'standard') {
//                 standardTicket += 1
//             } else if (ticket === 'kid') {
//                 kidTicket += 1
//             }
//         }
//         console.log(`${movie} - ${((currentCapacity / capacity) * 100).toFixed(2)}% full.`)
//         movie = array[i]
//
//         if (movie === 'Finish') {
//             break
//         }
//         i += 1
//         movie = array[i]
//     }
//     let totalTickets = studentTicket + standardTicket + kidTicket
//     console.log(`Total tickets: ${totalTickets + kidTicket}`)
//     console.log(`${((studentTicket / totalTickets) * 100).toFixed(2)}% student tickets.`)
//     console.log(`${((standardTicket / totalTickets) * 100).toFixed(2)}% standard tickets.`)
//     console.log(`${((kidTicket / totalTickets) * 100).toFixed(2)}% kids tickets.`)
// }
//
//
// cinemaCapacity(["The Matrix",
// "20",
// "student",
// "standard",
// "kid",
// "kid",
// "student",
// "student",
// "standard",
// "student",
// "End",
// "The Green Mile",
// "17",
// "student",
// "standard",
// "standard",
// "student",
// "standard",
// "student",
// "End",
// "Amadeus",
// "3",
// "standard",
// "standard",
// "standard",
// "Finish"])
//
//
