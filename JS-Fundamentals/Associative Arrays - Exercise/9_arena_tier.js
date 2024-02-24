function arenaTier(list) {
    const gladiatorsList = {}

    list.forEach(x => {
        if (x.includes('->')) {
            const [name, skill, amount] = x.split(' -> ').map(x => isNaN(x) ? x : Number(x))
            if (!gladiatorsList[name]) gladiatorsList[name] = {[skill]: amount}
            if (gladiatorsList[name][skill] < amount) {
                gladiatorsList[name][skill] = amount
            } else if (!gladiatorsList[name][skill]) gladiatorsList[name][skill] = amount
        } else if (x.includes(' vs ')) {
            const [gladiatorOneName, gladiatorTwoName] = x.split(' vs ')
            if (gladiatorsList[gladiatorOneName] && gladiatorsList[gladiatorTwoName]) {
                const foundSkills = Object.keys(gladiatorsList[gladiatorOneName]).filter(x => Object.keys(gladiatorsList[gladiatorTwoName]).includes(x))
                if (foundSkills.length !== 0) {
                    const gladiatorOnePower = eval(Object.values(gladiatorsList[gladiatorOneName]).join('+'))
                    const gladiatorTwoPower = eval(Object.values(gladiatorsList[gladiatorTwoName]).join('+'))
                    if (gladiatorOnePower > gladiatorTwoPower) {
                        delete gladiatorsList[gladiatorTwoName]
                    } else delete gladiatorsList[gladiatorOneName]
                }
            }
        }
    })

    const test = Object.entries(gladiatorsList).sort(([aKey, aValue], [bKey, bValue]) => {
        const aSum = eval(Object.values(aValue).join('+'))
        const bSum = eval(Object.values(bValue).join('+'))
        return bSum - aSum
    })

    test.forEach(([gladiator, skills]) => {
        console.log(`${gladiator}: ${Object.values(skills).reduce((acc, skill) => acc + skill, 0)} skill`);
        const sortedSkills = Object.entries(skills)
            .sort(([aSkill, aPoints], [bSkill, bPoints]) => bPoints - aPoints || aSkill.localeCompare(bSkill));
        sortedSkills.forEach(([skill, points]) => {
            console.log(`- ${skill} <!> ${points}`)
        })
    })
}




// function arenaTier(list) {
//     let gladiatorsList = {};
//
//     list.forEach(x => {
//         if (x.includes('->')) {
//             const [name, skill, amount] = x.split(' -> ').map(x => isNaN(x) ? x : Number(x));
//             gladiatorsList[name] = gladiatorsList[name] || {};
//             gladiatorsList[name][skill] = Math.max(amount, gladiatorsList[name][skill] || 0);
//         } else if (x.includes(' vs ')) {
//             const [gladiatorOneName, gladiatorTwoName] = x.split(' vs ');
//             if (gladiatorsList[gladiatorOneName] && gladiatorsList[gladiatorTwoName]) {
//                 const foundSkills = Object.keys(gladiatorsList[gladiatorOneName])
//                     .filter(skill => gladiatorsList[gladiatorTwoName].hasOwnProperty(skill));
//                 if (foundSkills.length !== 0) {
//                     const gladiatorOnePower = Object.values(gladiatorsList[gladiatorOneName]).reduce((acc, val) => acc + val, 0);
//                     const gladiatorTwoPower = Object.values(gladiatorsList[gladiatorTwoName]).reduce((acc, val) => acc + val, 0);
//                     if (gladiatorOnePower > gladiatorTwoPower) {
//                         delete gladiatorsList[gladiatorTwoName];
//                     } else {
//                         delete gladiatorsList[gladiatorOneName];
//                     }
//                 }
//             }
//         }
//     });
//
//     const sortedGladiators = Object.entries(gladiatorsList).sort(([aKey, aValue], [bKey, bValue]) => {
//         const aSum = Object.values(aValue).reduce((acc, val) => acc + val, 0);
//         const bSum = Object.values(bValue).reduce((acc, val) => acc + val, 0);
//         return bSum - aSum;
//     });
//
//     sortedGladiators.forEach(([gladiator, skills]) => {
//         console.log(`${gladiator}: ${Object.values(skills).reduce((acc, skill) => acc + skill, 0)} skill`);
//         const sortedSkills = Object.entries(skills)
//             .sort(([aSkill, aPoints], [bSkill, bPoints]) => bPoints - aPoints || aSkill.localeCompare(bSkill));
//         sortedSkills.forEach(([skill, points]) => {
//             console.log(`- ${skill} <!> ${points}`);
//         });
//     });
// }
