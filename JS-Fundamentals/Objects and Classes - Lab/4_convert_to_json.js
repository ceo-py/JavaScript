function convertToJSON(name, lastName, hairColor) {
        class Person {
        constructor(name, lastName, hairColor) {
            this.name = name
            this.lastName = lastName;
            this.hairColor = hairColor;
        }
    }
    console.log(JSON.stringify(new Person(name, lastName, hairColor)))
}

convertToJSON('George', 'Jones', 'Brown')