function storage(list) {
    const items = []
    list.forEach(x => {
        const [item, value] = x.split(' ').map(x => isNaN(x)? x: Number(x))
        const foundItem = items.filter(x => x.item === item )[0]
        if (!foundItem) items.push({item, value})
        else foundItem.value += value
    })
    items.forEach(x => console.log(`${x.item} -> ${x.value}`))
}



// function storage(list) {
//   const itemsMap = new Map()
//
//   list.forEach(entry => {
//     const [item, value] = entry.split(' ').map(x => (isNaN(x) ? x : Number(x)))
//     itemsMap.set(item, (itemsMap.get(item) || 0) + value)
//   })
//
//   itemsMap.forEach((value, item) => {
//     console.log(`${item} -> ${value}`)
//   })
// }


// function storage(list) {
//   const items = [];
//   list.forEach(x => {
//     const [item, value] = x.split(' ').map(x => isNaN(x) ? x : Number(x));
//     const foundItem = items.find(x => x.item === item);
//     if (!foundItem) items.push({item, value});
//     else foundItem.value += value;
//   });
//   items.forEach(x => console.log(`${x.item} -> ${x.value}`));
// }

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)