function findEqualSums(arr) {
    let output = arr.length <= 1? '0' : 'no'
    for (let i = 1; i < arr.length; i ++){

        if (eval(arr.slice(0, i).join('+')) === eval(arr.slice(i + 1, arr.length).join('+'))) {
                        output = i
            break
        }

        // if (arr.slice(0, i).reduce((total, num) => total + num, 0) ===
        //     arr.slice(i + 1, arr.length).reduce((total, num) => total + num, 0)) {
        //     output = i
        //     break
        // }
    }
    console.log(output)
}

// function findEqualSums(arr) {
//     if (arr.length <= 1) return '0';
//     for (let i = 1; i < arr.length; i++) {
//         let leftSum = arr.slice(0, i).reduce((total, num) => total + num, 0);
//         let rightSum = arr.slice(i + 1).reduce((total, num) => total + num, 0);
//         if (leftSum === rightSum) return i;
//     }
//     return 'no';
// }