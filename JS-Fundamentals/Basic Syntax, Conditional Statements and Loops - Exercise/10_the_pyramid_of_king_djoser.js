function Pyramid(base, increment) {
    let [totalStone, totalMarble, totalLapis, row, currentBase] = [0, 0, 0, 0, base]

    while (currentBase > 2) {
        const marbel = currentBase * 4 - 4;
        const stone = currentBase * currentBase - marbel
        totalStone += stone

        row += 1;
        if (row % 5 === 0) {
            totalLapis += marbel
        } else {
            totalMarble += marbel
        }
        currentBase -= 2;
    }
    row += 1
    const gold = currentBase * currentBase

    console.log(`Stone required: ${Math.ceil(totalStone * increment)}`)
    console.log(`Marble required: ${Math.ceil(totalMarble * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis * increment)}`)
    console.log(`Gold required: ${Math.ceil(gold * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(row * increment)}`)
}

Pyramid(11, 0.75)