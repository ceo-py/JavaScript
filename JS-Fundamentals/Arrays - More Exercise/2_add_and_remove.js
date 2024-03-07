function addAndRemove(list) {
    const empty = []
    list.forEach((x, i) => x === 'add'? empty.push(i + 1): empty.pop())
    console.log(empty.length > 0? empty.join(' '): 'Empty')
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']  )


// function addAndRemove(list) {
//     const result = [];
//     list.forEach((x) => {
//         if (x === 'add') {
//             result.push(result.length + 1);
//         } else {
//             result.pop();
//         }
//     });
//     console.log(result.length > 0 ? result.join(' ') : 'Empty');
// }
