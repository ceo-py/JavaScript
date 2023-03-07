function findTriangleArea(numbers) {
    let [a, h] = numbers.map(x => Number(x))

    console.log(`${((a * h) / 2).toFixed(2)}`)
}

findTriangleArea(['20', '30'])