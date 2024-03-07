function lastKNumbersSequance(n, k) {
    const result = [1]
    for (let i = 1; i < n; i++) {
        const sum = eval(result.slice(i < k? 0: i - k, i).join('+'))
        result.push(sum)
    }
    console.log(result.join(' '))
}

lastKNumbersSequance(8, 2)


// function lastKNumbersSequance(n, k) {
//     const result = [1];
//     for (let i = 1; i < n; i++) {
//         const sum = result.slice(i < k ? 0 : i - k, i).reduce((a, b) => a + b, 0);
//         result.push(sum);
//     }
//     console.log(result.join(' '));
// }