function whatsTheAnimal(animal) {
    animal = animal[0]
    let output = 'unknown'

    if (animal === 'dog') {
        output = 'mammal'
    } else if ('crocodile, tortoise, snake'.includes(animal)) {
        output = 'reptile'
    }
    console.log(output)
}

whatsTheAnimal(["dog"])