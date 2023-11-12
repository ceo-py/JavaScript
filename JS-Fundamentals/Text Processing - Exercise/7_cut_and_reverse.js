function cutAndReverse(string) {
    const stringSize = Number(string.length / 2)
    const [lSide, rSide] = [string.slice(0, stringSize).split('').reverse(), string.slice(stringSize, stringSize *2).split('').reverse()]
    console.log(`${lSide.join('')}\n${rSide.join('')}`)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')