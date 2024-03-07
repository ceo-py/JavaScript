function travelTime(input) {
    const destinations = {}
    input.forEach(x => {
        const [country, town, value] = x.split(' > ').map(x => isNaN(x) ? x : Number(x))
        if (!destinations.hasOwnProperty(country)) destinations[country] = {[town]: value}
        else destinations[country][town] = Math.min(destinations[country][town]? destinations[country][town]: value, value)
    })
    Object.keys(destinations).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach(x => {
        const towns = Object.entries(destinations[x]).sort((a, b) => a[1] - b[1]).map(t => `${t[0]} -> ${t[1]}`)
        console.log(`${x} -> ${towns.join(' ')}`)
    })
}

travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"])


// function travelTime(input) {
//     const destinations = {};
//
//     input.forEach(x => {
//         const [country, town, value] = x.split(' > ').map(x => isNaN(x) ? x : Number(x));
//         destinations[country] = destinations[country] || {};
//         destinations[country][town] = Math.min(destinations[country][town] || value, value);
//     });
//
//     const sortedDestinations = Object.keys(destinations).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
//
//     sortedDestinations.forEach(x => {
//         const towns = Object.entries(destinations[x])
//             .sort((a, b) => a[1] - b[1])
//             .map(t => `${t[0]} -> ${t[1]}`);
//         console.log(`${x} -> ${towns.join(' ')}`);
//     });
// }