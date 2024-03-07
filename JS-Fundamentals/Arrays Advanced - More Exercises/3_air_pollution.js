function calcPollution(arr, forces) {
    const map = arr.map(row => row.split(' ').map(Number));

    for (const force of forces) {
        const [currentForce, index] = force.split(' ');
        const numIndex = Number(index);

        switch (currentForce) {
            case 'breeze':
                map[numIndex] = map[numIndex].map(val => Math.max(0, val - 15));
                break;
            case 'smog':
                const value = numIndex;
                map.forEach(row => row.forEach((val, col) => row[col] += value));
                break;
            case 'gale':
                map.forEach(row => row[numIndex] = Math.max(0, row[numIndex] - 20));
                break;
        }
    }

    const pollutedAreas = [];
    map.forEach((row, i) => row.forEach((val, j) => {
        if (val >= 50) pollutedAreas.push(`[${i}-${j}]`);
    }));

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}


// function calcPollution(arr, forces) {
//     const map = arr.map(row => row.split(' ').map(Number));
//     const actions = {
//         'breeze': index => map[index] = map[index].map(val => Math.max(0, val - 15)),
//         'smog': value => map.forEach(row => row.forEach((val, col) => row[col] += value)),
//         'gale': index => map.forEach(row => row[index] = Math.max(0, row[index] - 20))
//     };
//
//     forces.forEach(force => {
//         const [currentForce, index] = force.split(' ');
//         actions[currentForce](Number(index));
//     });
//
//     const pollutedAreas = [];
//     map.forEach((row, i) => row.forEach((val, j) => {
//         if (val >= 50) pollutedAreas.push(`[${i}-${j}]`);
//     }));
//
//     console.log(pollutedAreas.length > 0 ? `Polluted areas: ${pollutedAreas.join(', ')}` : 'No polluted areas');
// }