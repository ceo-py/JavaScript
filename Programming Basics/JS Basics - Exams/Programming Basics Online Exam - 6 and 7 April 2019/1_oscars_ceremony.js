function oscarsCeremony(param) {
    const hallRent = Number(param)
    const figurines = hallRent * 0.70
    const catering = figurines * 0.85
    const sound = catering / 2
    const totalPrice = figurines + catering + sound + hallRent
    console.log(`${totalPrice.toFixed(2)}`)
}

oscarsCeremony()