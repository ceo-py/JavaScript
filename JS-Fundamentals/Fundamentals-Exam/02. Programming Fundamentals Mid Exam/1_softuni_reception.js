function softUniReception(employee_info) {
    employee_info = employee_info.map(Number)
    let [total_answers_per_hour, students_in_q, time_needed] = [eval(employee_info.slice(0, 3).join('+')), employee_info[3], 0];
    // let [total_answers_per_hour, students_in_q, time_needed] = [employee_info.slice(0, 3).reduce((a, b) => a + b, 0), employee_info[3], 0];
    while (students_in_q > 0) {
        time_needed++;
        if (time_needed % 4 !== 0) {
            students_in_q -= total_answers_per_hour;
        }
    }

    console.log(`Time needed: ${time_needed}h.`);
}

softUniReception(['1','2','3','45'])