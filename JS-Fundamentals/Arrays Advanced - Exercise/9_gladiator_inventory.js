function gladiatorInventory(initialInput) {
    const array = initialInput.shift().split(' ')
    const commands = {
        Buy: (equipment) => array.includes(equipment)? null: array.push(equipment),
        Trash: (equipment) => !array.includes(equipment)? null: array.splice(array.indexOf(equipment), 1),
        Repair: (equipment) => !array.includes(equipment)? null: array.push(array.splice(array.indexOf(equipment), 1)[0]),
        Upgrade: (data) => {
            const [equipment, upgrade] = data.split('-')
            !array.includes(equipment) ? null : array.splice(array.indexOf(equipment) + 1, 0, `${equipment}:${upgrade}`)
        },
    }
    initialInput.forEach(x => {
        const [command, ...args] = x.split(' ')
        commands[command](...args)
    })
    console.log(array.join(' '))
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])



// function manageInventory(commands) {
//     let inventory = commands.shift().split(' ');
//
//     for (const command of commands) {
//         const [action, ...args] = command.split(' ');
//
//         switch (action) {
//             case 'Buy':
//                 {
//                     const equipment = args[0];
//                     if (!inventory.includes(equipment)) {
//                         inventory.push(equipment);
//                     }
//                 }
//                 break;
//             case 'Trash':
//                 {
//                     const equipment = args[0];
//                     const index = inventory.indexOf(equipment);
//                     if (index !== -1) {
//                         inventory.splice(index, 1);
//                     }
//                 }
//                 break;
//             case 'Repair':
//                 {
//                     const equipment = args[0];
//                     const index = inventory.indexOf(equipment);
//                     if (index !== -1) {
//                         inventory.splice(index, 1);
//                         inventory.push(equipment);
//                     }
//                 }
//                 break;
//             case 'Upgrade':
//                 {
//                     const [equipment, upgrade] = args[0].split('-');
//                     const index = inventory.indexOf(equipment);
//                     if (index !== -1) {
//                         inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
//                     }
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
//
//     console.log(inventory.join(' '));
// }



// function gladiatorInventory(initialInput) {
//     const inventory = new Set(initialInput.shift().split(' '));
//     const commands = {
//         Buy: equipment => inventory.add(equipment),
//         Trash: equipment => inventory.delete(equipment),
//         Repair: equipment => {
//             if (inventory.delete(equipment)) {
//                 inventory.add(equipment);
//             }
//         },
//         Upgrade: data => {
//             const [equipment, upgrade] = data.split('-');
//             if (inventory.delete(equipment)) {
//                 inventory.add(`${equipment}:${upgrade}`);
//             }
//         },
//     };
//
//     initialInput.forEach(x => {
//         const [command, ...args] = x.split(' ');
//         commands[command](...args);
//     });
//
//     console.log([...inventory].join(' '));
// }