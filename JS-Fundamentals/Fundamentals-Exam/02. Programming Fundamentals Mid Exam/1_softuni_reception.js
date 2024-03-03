function softUniReception(employeeInfo) {
    employeeInfo = employeeInfo.map(Number);
    let [studentsInQueue, totalAnswersPerHour, , timeNeeded] = [employeeInfo.pop(), eval(employeeInfo.join('+')), employeeInfo[3], 0];
    // let [totalAnswersPerHour, studentsInQueue, timeNeeded] = [employeeInfo.slice(0, 3).reduce((a, b) => a + b, 0), employeeInfo[3], 0];
    while (studentsInQueue > 0) {
        timeNeeded++;
        if (timeNeeded % 4 !== 0) {
            studentsInQueue -= totalAnswersPerHour;
        }
    }
    console.log(`Time needed: ${timeNeeded}h.`);
}

softUniReception(['1','2','3','45']);
