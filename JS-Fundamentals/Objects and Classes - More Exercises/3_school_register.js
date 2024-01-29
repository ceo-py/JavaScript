function schoolRegister(array) {
    const schoolStudents = {}
    for (const x of array) {
        const [name, grade, score] = x
            .replace('Student name: ', '')
            .replace(' Grade: ', '')
            .replace(' Graduated with an average score: ', '')
            .split(',').map(x => isNaN(x) ? x : Number(x))
        if (score < 3) continue
        const nextGrade = grade + 1
        if (!schoolStudents[nextGrade]) schoolStudents[nextGrade] = {}
        schoolStudents[nextGrade] = {...schoolStudents[nextGrade], [name]: score}
    }
    const sortedGrades = Object.fromEntries(
        Object.entries(schoolStudents).sort(([a], [b]) => parseInt(a) - parseInt(b))
    )
    Object.keys(sortedGrades).forEach(grade => {
        console.log(`${grade} Grade`)
        console.log(`List of students: ${Object.keys(sortedGrades[grade]).join(', ')}`)
        const totalGrades = Object.values(sortedGrades[grade])
        console.log(`Average annual score from last year: ${(eval(totalGrades.join('+'))/totalGrades.length).toFixed(2)}`)
        console.log()
    })
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])