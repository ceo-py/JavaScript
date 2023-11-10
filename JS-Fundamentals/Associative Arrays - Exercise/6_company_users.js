function companyUsers(list) {
    const company = []
    list.forEach(x => {
        const [companyName, employeeId] = x.split(' -> ')
        const foundCompany = company.filter(x => x.companyName === companyName)[0]
        if (!foundCompany) company.push({companyName, employees: [employeeId]})
        else if (!foundCompany.employees.includes(employeeId))  foundCompany.employees.push(employeeId)
    })
    Object.values(company).sort((a, b) => a.companyName.localeCompare(b.companyName, undefined, { sensitivity: 'base' }))
        .forEach(x => {
            console.log(x.companyName)
            x.employees.forEach(e => console.log(`-- ${e}`))
        })
}

companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345']
)