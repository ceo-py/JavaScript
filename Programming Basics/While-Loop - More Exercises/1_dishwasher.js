function dishWasher(list) {
    let [vero, counter, vero_needed, pots, plates] = [Number(list.shift()) * 750, 0, 0, 0, 0]


    while (list.length > 0 && !(list.length === 1 && list.includes('End'))) {
        const dishes = Number(list.shift())
        counter += 1

        if (counter % 3 === 0) {
            pots += dishes
            vero_needed += dishes * 15
        } else {
            plates += dishes
            vero_needed += dishes * 5
        }

        if (vero_needed > vero) {
            break
        }
    }

    const diff = Math.abs(vero - vero_needed)

    if (vero_needed <= vero) {
        console.log('Detergent was enough!')
        console.log(`${plates} dishes and ${pots} pots were washed.`)
        console.log(`Leftover detergent ${diff} ml.`)
    } else {
        console.log(`Not enough detergent, ${diff} ml. more necessary!`)
    }
}

dishWasher(['1',
'10',
'15',
'10',
'12',
'13',
'End'])


