function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    array.forEach(x => new Cat(...x.split(' ')).meow())
}

cats(['Mellow 2', 'Tom 5'])