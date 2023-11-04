function threeLetters(numberInput) {
  const number = Number(numberInput)
  function asciLetter(number){
    return String.fromCharCode(number + 97)
  }

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      for (let k = 0; k < number; k++) {
        console.log(`${asciLetter(i)}${asciLetter(j)}${asciLetter(k)}`)
      }
    }
  }
}