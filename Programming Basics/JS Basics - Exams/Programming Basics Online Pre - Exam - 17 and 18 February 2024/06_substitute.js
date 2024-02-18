function substitute(input) {
  const [k, l, m, n] = input.map(Number)
  let counter = 0

  outerLoop:
  for (let kNumber = k; kNumber < 9; kNumber++) {
    if (kNumber % 2 !== 0) continue
    for (let lNumber = 9; l <= lNumber; lNumber--) {
      if (lNumber % 2 === 0) continue
      for (let mNumber = m; mNumber < 9; mNumber++) {
        if (mNumber % 2 !== 0) continue
        for (let nNumber = 9; n <= nNumber; nNumber--) {
          if (nNumber % 2 === 0) continue
          const firstNumber = `${kNumber}${lNumber}`
          const secondNumber = `${mNumber}${nNumber}`
          if (firstNumber !== secondNumber) {
            counter++
            console.log(`${firstNumber} - ${secondNumber}`);
            if (counter === 6) break outerLoop;
          } else {
            console.log(`Cannot change the same player.`);
          }
        }
      }
    }
  }
}