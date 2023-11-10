function phoneBook(list) {
        let output = {}

    for (const item of list){
        const [name, phoneNum] = item.split(' ')
        output[name] = phoneNum
    }
    for (const [key, value] of Object.entries(output)){
        console.log(`${key} -> ${value}`)
    }
}

phoneBook()