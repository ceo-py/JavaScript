function footballLeague(input) {
    const [capacityStadium, totalFans] = [input.shift(), input.shift()]
    let [aBlock, bBlock, vBlock, gBlock] = [0, 0, 0, 0]
    for (const block of input) {
        if (block === 'A') {
            aBlock++
        } else if (block === 'B') {
            bBlock++
        } else if (block === 'V') {
            vBlock++
        } else if (block === 'G') {
            gBlock++
        }
    }
    console.log(`${(aBlock/totalFans*100).toFixed(2)}%`)
    console.log(`${(bBlock/totalFans*100).toFixed(2)}%`)
    console.log(`${(vBlock/totalFans*100).toFixed(2)}%`)
    console.log(`${(gBlock/totalFans*100).toFixed(2)}%`)
    console.log(`${(totalFans/capacityStadium*100).toFixed(2)}%`)
}

footballLeague(['76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B',])