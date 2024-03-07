function oddOccurrences(string) {
    const listOfStings = string.toLowerCase().split(' ')
    const result = {}
    listOfStings.forEach(x => result.hasOwnProperty(x)? result[x] += 1: result[x] = 1)
    listOfStings.forEach(x => {
        if (result.hasOwnProperty(x) && result[x] % 2 !==0) {
            process.stdout.write(`${x} `)
            delete result[x]
        }
    })
}


// function oddOccurrences(string) {
//     const listOfStings = string.toLowerCase().split(' ')
//     const result = listOfStings.reduce((acc, x) => {
//         acc[x.toLowerCase()] = (acc[x.toLowerCase()] || 0) + 1;
//         return acc
//     }, {})
//
//     listOfStings.forEach(x => {
//         if (result.hasOwnProperty(x) && result[x] % 2 !== 0) {
//             process.stdout.write(`${x} `)
//             delete result[x]
//         }
//     })
// }

// function oddOccurrences(string) {
//     const listOfStrings = string.toLowerCase().split(' ');
//     const result = {};
//
//     listOfStrings.forEach(x => result[x] = (result[x] || 0) + 1);
//
//     const oddOccurrences = listOfStrings.filter(x => result[x] % 2 !== 0);
//     process.stdout.write(oddOccurrences.join(' '));
// }

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')