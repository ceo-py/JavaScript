function solve(list) {
    output = {}

    list.forEach(item => {
        if (item.includes('defeated')) {
            item = item.replace(' defeated', '')
            delete output[item]

        } else if (item.includes('arrives') && !output.hasOwnProperty(item.replace(' arrives', ''))) {
            item = item.replace(' arrives', '')
            output[item] = {}
            output[item].armys = []
            output[item].totalArmy = 0

        } else if (item.includes('+')) {
            [armyName, count] = item.split(' + ')
            for (key in output) {
                output[key].armys.forEach(item => {

                    if (item.name === armyName) {
                        count = parseInt(count)
                        item.count += count
                        output[key].totalArmy += count
                    }
                })
            }

        } else {
            [leader, ...armyInfo] = item.split(': ')
            let [armyName, armyCount] = armyInfo[0].split(', ')

            if (output.hasOwnProperty(leader)) {
                armyCount = parseInt(armyCount)
                output[leader].armys.push({name: armyName, count: armyCount})
                output[leader].totalArmy += armyCount
            }
        }
    })

    for (const [name, army] of Object.entries(output)
        .sort(([, a], [, b]) => b.totalArmy - a.totalArmy)) {
        console.log(`${name}: ${army.totalArmy}`)

        for (const {name, count} of army.armys.sort((a, b) => b.count - a.count)) {
            console.log(`>>> ${name} - ${count}`)
        }
    }
}


// function solve(list) {
//     let output = {};
//
//     list.forEach(item => {
//         if (item.includes('defeated')) {
//             let name = item.replace(' defeated', '');
//             delete output[name];
//         } else if (item.includes('arrives')) {
//             let name = item.replace(' arrives', '');
//             if (!output.hasOwnProperty(name)) {
//                 output[name] = { armys: [], totalArmy: 0 };
//             }
//         } else if (item.includes('+')) {
//             let [armyName, count] = item.split(' + ');
//             count = parseInt(count);
//             for (let key in output) {
//                 output[key].armys.forEach(army => {
//                     if (army.name === armyName) {
//                         army.count += count;
//                         output[key].totalArmy += count;
//                     }
//                 });
//             }
//         } else {
//             let [leader, armyInfo] = item.split(': ');
//             let [armyName, armyCount] = armyInfo.split(', ');
//             if (output.hasOwnProperty(leader)) {
//                 armyCount = parseInt(armyCount);
//                 output[leader].armys.push({name: armyName, count: armyCount});
//                 output[leader].totalArmy += armyCount;
//             }
//         }
//     });
//
//     Object.entries(output)
//         .sort(([, a], [, b]) => b.totalArmy - a.totalArmy)
//         .forEach(([name, army]) => {
//             console.log(`${name}: ${army.totalArmy}`);
//             army.armys
//                 .sort((a, b) => b.count - a.count)
//                 .forEach(({name, count}) => console.log(`>>> ${name} - ${count}`));
//         });
// }