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





// function footballLeague(input) {
//     const [capacityStadium, totalFans] = [input.shift(), input.shift()]
//     const blocks = {A: 0, B: 0, V: 0, G: 0}
//     input.forEach(b => blocks[b]++)
//     Object.values(blocks).forEach(b => console.log(`${(b / totalFans * 100).toFixed(2)}%`))
//     console.log(`${(totalFans / capacityStadium * 100).toFixed(2)}%`)
// }





// function footballLeague(input) {
//     const [capacityStadium, totalFans] = [input.shift(), input.shift()]
//     let blocks = [0, 0, 0, 0]
//     for (const block of input) {
//         if (block === 'A') {
//             blocks[0]++
//         } else if (block === 'B') {
//             blocks[1]++
//         } else if (block === 'V') {
//             blocks[2]++
//         } else if (block === 'G') {
//             blocks[3]++
//         }
//     }
//     blocks.forEach(b => console.log(`${(b/totalFans*100).toFixed(2)}%`) )
//     console.log(`${(totalFans/capacityStadium*100).toFixed(2)}%`)
// }

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