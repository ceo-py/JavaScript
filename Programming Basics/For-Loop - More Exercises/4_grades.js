function grades(list) {
    let [totalStudents, fivePlus, fourPlus, threePlus, fails, totalScore] = [Number(list.shift()), 0, 0, 0, 0, 0]
    for (let score of list) {
        score = Number(score)
        totalScore += score
        if (score < 3) {
            fails++
        } else if (score < 4) {
            threePlus++
        } else if (score < 5) {
            fourPlus++
        } else if (score >= 5) {
            fivePlus++
        }
    }
    console.log(`Top students: ${(fivePlus / totalStudents * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(fourPlus / totalStudents * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(threePlus / totalStudents * 100).toFixed(2)}%`)
    console.log(`Fail: ${((totalStudents - (fivePlus + fourPlus + threePlus)) / totalStudents * 100).toFixed(2)}%`)
    console.log(`Average: ${(totalScore / totalStudents).toFixed(2)}`)
}

// grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5'])
grades([10,
3,
2.99,
5.68,
3.01,
4,
4,
6,
4.5,
2.44,
5])