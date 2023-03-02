function personTitle(array) {
    let [age, sex] = array
    age = Number(age)
    let output = ''

    if (sex === 'm') {

        output = 'Master'
        if (age >= 16 ) {
            output = 'Mr.'
        }
    } else if (sex === 'f') {
        output = 'Miss'
        if (age >= 16 ) {
            output = 'Ms.'
        }
    }
    console.log(output)
}

personTitle(["12",
"f"])
