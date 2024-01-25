function formatGrade(score) {
    let output = ''
    if (score < 3.50) {
        output = 'Poor'
    } else if (score < 4.50) {
        output = 'Good'
    } else if (score < 5.50) {
        output = 'Very good'
    } else if (score >= 5.50) {
        output = 'Excellent'
    }
    console.log(score < 3.00? 'Fail (2)': `${output} (${score.toFixed(2)})` )
}

formatGrade(2.99)