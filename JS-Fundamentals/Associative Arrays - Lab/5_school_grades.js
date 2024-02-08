function schoolGrades(list) {
    const students = []

    list.forEach(x => {
        const [name, ...grades] = x.split(' ')
        const foundStudent = students.find(x => x.name === name)
        // const foundStudent = students.filter(x => x.name === name)[0]

        if (!foundStudent) students.push({name, grades: [...grades]})
        else foundStudent.grades.push(...grades)
    })
    students.sort((a, b) => a.name.localeCompare(b.name)).forEach(x =>
        console.log(`${x.name}: ${(eval(x.grades.join('+'))/x.grades.length).toFixed(2)}`))
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])