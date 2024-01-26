function bombNumbers(sequence, specialBomb) {
    const [bomb, power] = specialBomb;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bomb) {
            const startIndex = Math.max(0, i - power);
            const endIndex = Math.min(sequence.length - 1, i + power);
            sequence.splice(startIndex, endIndex - startIndex + 1);

            i = startIndex - 1;
        }
    }
    console.log(sequence.reduce((acc, num) => acc + num, 0))
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
