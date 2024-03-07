function sortAnArrayBy2Criteria(arr) {
    const compare = (a, b) => {
        const lengthComparison = a.length - b.length;

        if (lengthComparison === 0) {
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();
            return lowerA.localeCompare(lowerB);
        }

        return lengthComparison;
    };

    arr.sort(compare);

    console.log(arr.join('\n'))
}

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])



// function mainFunction(arr) {
//     function compareLength(a, b) {
//         return a.length - b.length;
//     }
//
//     function compareLexicographically(a, b) {
//         const lowerA = a.toLowerCase();
//         const lowerB = b.toLowerCase();
//         return lowerA.localeCompare(lowerB);
//     }
//
//     function sortAnArrayBy2Criteria(arr) {
//         const compare = (a, b) => {
//             const lengthComparison = compareLength(a, b);
//             if (lengthComparison === 0) {
//                 return compareLexicographically(a, b);
//             }
//             return lengthComparison;
//         };
//         arr.sort(compare);
//         console.log(arr.join('\n'));
//     }
//
//     sortAnArrayBy2Criteria(arr);
// }