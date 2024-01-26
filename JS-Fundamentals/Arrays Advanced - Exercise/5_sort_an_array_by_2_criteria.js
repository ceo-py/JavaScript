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