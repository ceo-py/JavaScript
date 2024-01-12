function echoType(input) {
    const typeIs = typeof input
    console.log(`${typeIs}\n${'string, number'.includes(typeIs)? input: 'Parameter is not suitable for printing'}`)
}

echoType(null)