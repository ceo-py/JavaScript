function checkFruitPrice(array) {
    // let [fruit, day, quantity] = array.map(x => isNaN(x) ? x : Number(x))
    let [fruit, day, quantity, output] = [array[0], array[1], Number(array[2]), 'error']
    // let output = 'error'

    // if ('Monday, Tuesday, Wednesday, Thursday, Friday'.includes(day)) {
    if ('Monday' === day || 'Tuesday' === day || 'Wednesday' === day || 'Thursday' === day || 'Friday' === day) {
        if (fruit === 'banana') {
            output = quantity * 2.50
        } else if (fruit === 'apple') {
            output = quantity * 1.20
        } else if (fruit === 'orange') {
            output = quantity * 0.85
        } else if (fruit === 'grapefruit') {
            output = quantity * 1.45
        } else if (fruit === 'kiwi') {
            output = quantity * 2.70
        } else if (fruit === 'pineapple') {
            output = quantity * 5.50
        } else if (fruit === 'grapes') {
            output = quantity * 3.85
        }
        // } else if ('Saturday, Sunday'.includes(day)) {
    } else if ('Saturday' === day || 'Sunday' === day) {
        if (fruit === 'banana') {
            output = quantity * 2.70
        } else if (fruit === 'apple') {
            output = quantity * 1.25
        } else if (fruit === 'orange') {
            output = quantity * 0.90
        } else if (fruit === 'grapefruit') {
            output = quantity * 1.60
        } else if (fruit === 'kiwi') {
            output = quantity * 3
        } else if (fruit === 'pineapple') {
            output = quantity * 5.60
        } else if (fruit === 'grapes') {
            output = quantity * 4.20
        }
    }
    if (output === 'error') {
        console.log(output)
    } else {
        console.log(output.toFixed(2))
    }
}

checkFruitPrice(["orange", "Sunday", "3"])
