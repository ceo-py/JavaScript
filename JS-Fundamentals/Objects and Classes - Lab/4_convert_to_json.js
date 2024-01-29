function convertToJSON(firstName, lastName, hairColor) {
        class Person {
        constructor(firstName, lastName, hairColor) {
            this.firstName = firstName
            this.lastName = lastName;
            this.hairColor = hairColor;
        }
    }
    console.log(JSON.stringify(new Person(firstName, lastName, hairColor)))
}

convertToJSON('George', 'Jones', 'Brown')