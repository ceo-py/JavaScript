function magicSum(list, targetSUm) {
    list.forEach((x, i) => {
        for (let y = i + 1; y < list.length ; y += 1) {
            if (x + list[y] === targetSUm) {
                console.log(`${x} ${list[y]}`)
            }
        }
    })
}

magicSum([14, 20, 60, 13, 7, 19, 8],
27
)

// function magicSum(list, targetSum) {
//   list.filter((x, i) => {
//     let y = list.slice(i + 1).find(y => x + y === targetSum);
//     if (y) console.log(`${x} ${y}`);
//   });
// }