function oscarsWeekInCinema(param) {
    const [movieName, hallType, numberTickets] = param.map(x => isNaN(x) ? x : Number(x))
    let price = 0
    if (movieName === 'A Star Is Born') {
        if (hallType === 'normal') {
            price = 7.50
        } else if (hallType === 'luxury') {
            price = 10.50
        } else if (hallType === 'ultra luxury') {
            price = 13.50
        }
    } else if (movieName === 'Bohemian Rhapsody') {
        if (hallType === 'normal') {
            price = 7.35
        } else if (hallType === 'luxury') {
            price = 9.45
        } else if (hallType === 'ultra luxury') {
            price = 12.75
        }
    } else if (movieName === 'Green Book') {
        if (hallType === 'normal') {
            price = 8.15
        } else if (hallType === 'luxury') {
            price = 10.25
        } else if (hallType === 'ultra luxury') {
            price = 13.25
        }
    } else if (movieName === 'The Favourite') {
        if (hallType === 'normal') {
            price = 8.75
        } else if (hallType === 'luxury') {
            price = 11.55
        } else if (hallType === 'ultra luxury') {
            price = 13.95
        }
    }
    const totalPrice = price * numberTickets

    console.log(`${movieName} -> ${totalPrice.toFixed(2)} lv.`)
}




// function oscarsWeekInCinema(param) {
//     const [movieName, hallType, numberTickets] = param.map(x => isNaN(x) ? x : Number(x))
//     const movie_Info = {
//         "A Star Is Born": {
//             "normal": 7.50,
//             "luxury": 10.50,
//             "ultra luxury": 13.50
//         },
//         "Bohemian Rhapsody": {
//             "normal": 7.35,
//             "luxury": 9.45,
//             "ultra luxury": 12.75
//         },
//         "Green Book": {
//             "normal": 8.15,
//             "luxury": 10.25,
//             "ultra luxury": 13.25
//         },
//         "The Favourite": {
//             "normal": 8.75,
//             "luxury": 11.55,
//             "ultra luxury": 13.95
//         },
//
//     }
//     const totalPrice = movie_Info[movieName][hallType] * numberTickets
//
//     console.log(`${movieName} -> ${totalPrice.toFixed(2)} lv.`)
// }