function addAndRemove(list) {
    const empty = []
    list.forEach((x, i) => x === 'add'? empty.push(i + 1): empty.pop())
    console.log(empty.length > 0? empty.join(' '): 'Empty')
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']  )