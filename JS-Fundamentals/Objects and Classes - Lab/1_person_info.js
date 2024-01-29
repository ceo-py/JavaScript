function personInfo(firstName, lastName, age) {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName
            this.lastName = lastName;
            this.age = age;
        }
    }

    return new Person(firstName, lastName, age)
}
