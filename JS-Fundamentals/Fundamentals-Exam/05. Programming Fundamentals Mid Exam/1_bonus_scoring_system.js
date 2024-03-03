function bonusScoringSystem(input) {
    const numberStudents = parseInt(input.shift());
    const totalLectures = parseInt(input.shift());
    const bonus = parseInt(input.shift());

    let maxNum = 0;
    for (let i = 0; i < numberStudents; i++) {
        const lecturesAttended = parseInt(input.shift());
        maxNum = Math.max(maxNum, lecturesAttended);
    }

    const totalBonus = maxNum ? Math.round((maxNum / totalLectures) * (5 + bonus)) : 0;

    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${maxNum} lectures.`);

}