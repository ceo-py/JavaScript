function inventory(arr) {
    let [collectedItems, input] = [arr.shift().split(', '), arr.shift()]

    while (input !== 'Craft!') {
        const [command, item] = input.split(' - ')
        const itemInCollection = collectedItems.includes(item.split(':')[0])

        if (command === 'Collect' && !itemInCollection) collectedItems.push(item)
        else if (command === 'Drop' && itemInCollection) collectedItems.splice(collectedItems.indexOf(item), 1)
        else if (command === 'Combine Items' && itemInCollection) {
            const [oldItem, newItem] = item.split(':')
            collectedItems.splice(collectedItems.indexOf(oldItem) + 1, 0, newItem)
        } else if (command === 'Renew' && itemInCollection) collectedItems.push(collectedItems.splice(collectedItems.indexOf(item), 1))
        input = arr.shift()
    }
    console.log(collectedItems.join(', '))
}



//
//
// function main(sourceArr) {
//     let inventory = sourceArr[0].split(", ");
//     for (let i = 1; sourceArr[i] !== "Craft!"; i++) {
//         let com = sourceArr[i].split(" - ")[0];
//         let item = sourceArr[i].split(" - ")[1];
//         switch (com) {
//             case "Collect":
//                 if (!inventory.includes(item)) {
//                     inventory.push(item);
//                 }
//                 break;
//             case "Drop":
//                 if (inventory.indexOf(item) === -1) {
//                     continue;
//                 } else {
//                     function removeItem() {
//                         inventory.splice((inventory.indexOf(item)), 1);
//                         if (inventory.indexOf(item) !== -1) {
//                             removeItem();
//                         }
//                     }
//
//                     removeItem();
//                 }
//                 break;
//             case "Combine Items":
//                 let oldItem = item.split(":")[0];
//                 let newItem = item.split(":")[1];
//                 if (inventory.indexOf(oldItem) === -1) {
//                     continue;
//                 } else {
//                     inventory.splice((inventory.indexOf(oldItem)) + 1, 0, newItem);
//                 }
//                 break;
//             case "Renew":
//                 if (inventory.indexOf(item) === -1) {
//                     continue;
//                 } else {
//                     let deletedItem = inventory.splice((inventory.indexOf(item)), 1);
//                     inventory.push(deletedItem[0]);
//                 }
//                 break;
//         }
//     }
//     console.log(inventory.join(", "));
// }