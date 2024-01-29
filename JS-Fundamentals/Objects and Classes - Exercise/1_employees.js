function employees(array) {
    class Employee {
        constructor(fullName) {
            this.fullName = fullName
            this.personalNumber = fullName.length
        }
        details () {
            console.log(`Name: ${this.fullName} -- Personal Number: ${this.personalNumber}`)
        }
    }
    array.forEach(x => new Employee(x).details())
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])