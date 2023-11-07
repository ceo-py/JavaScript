function ages(age) {
    age = Number(age)
    let output = 'out of bounds'
    if (age < 0 ) output = 'out of bounds'
    else if (age >= 0 && age <= 2) output = 'baby'
    else if (age <= 13) output = 'child'
    else if (age <= 19) output = 'teenager'
    else if (age <= 65) output = 'adult'
    else if (age > 65) output = 'elder'
    console.log(output)
}

ages(['20'])