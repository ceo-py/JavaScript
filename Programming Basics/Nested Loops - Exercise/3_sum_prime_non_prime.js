function sumPrimeNonePrime(array) {

    let [prime_sum, non_prime_sum, i, number] = [0, 0, 0, 0]
    number = array[i]

    while (number !== "stop") {

        let divider = true;
        number = Number(number)
        if (number < 0) {
            console.log("Number is negative.")
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    divider = false
                    non_prime_sum += number
                    break;
                }
            }
            if (divider) {
                prime_sum += number
            }
        }
        i += 1
        number = array[i]
    }
    console.log(`Sum of all prime numbers is: ${prime_sum}`)
    console.log(`Sum of all non prime numbers is: ${non_prime_sum}`)
}

sumPrimeNonePrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])