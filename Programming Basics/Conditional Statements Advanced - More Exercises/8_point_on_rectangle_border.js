function border(param) {
    const [x1, y1, x2, y2, x, y] = param.map(Number)
    let output = 'Inside / Outside'
    if (((x === x1 || x === x2) && y >= y1 && y <= y2) || ((y === y1 || y === y2) && x >= x1 && x <= x2)) output = 'Border'
    console.log(output)
}

border([2, -3, 12, 3, 1.43, -3])