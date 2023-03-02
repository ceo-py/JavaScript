function concatenateData(array) {
    let [firstName, lastName, age, town] = array
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}

concatenateData (['Maria', 'Ivanova', 20, 'Sofia'])